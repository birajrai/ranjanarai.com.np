import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

export async function POST(request: Request) {
  try {
    const { formData, cart } = await request.json();

    // Basic validation for incoming data
    if (!formData || !cart || cart.length === 0) {
      return NextResponse.json({ message: 'Invalid order data' }, { status: 400 });
    }

    // Detailed server-side validation for formData
    const errors: { [key: string]: string } = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.fullName = 'Full Name is required and must be at least 2 characters.';
    }
    if (formData.email && !isEmail(formData.email)) {
      errors.email = 'Email address is invalid.';
    }
    if (!formData.phoneNumber || !isMobilePhone(formData.phoneNumber, 'any')) { // 'any' locale for broad international numbers
      errors.phoneNumber = 'Phone Number is required and must be a valid mobile number.';
    }
    if (!formData.location || formData.location.latitude === null || formData.location.longitude === null) {
      errors.location = 'Location is required.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: 'Validation failed', errors }, { status: 400 });
    }

    // Generate transaction ID
    const transactionId = `ID-${Math.floor(1000 + Math.random() * 9000)}`; // ID-XXXX format

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.OWNER_EMAIL || !process.env.EMAIL_PRIMARY) {
      return NextResponse.json({ message: 'Email service environment variables are not configured.' }, { status: 500 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const customerEmail = formData.email || 'N/A';
    const deliveryLocation = formData.location.address || `Lat: ${formData.location.latitude}, Lon: ${formData.location.longitude}`;

    // Prepare email for buyer
    const buyerMailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: undefined, // Initialize to undefined
      bcc: process.env.EMAIL_PRIMARY, // Send a copy to the primary email address
      subject: 'Your Order Confirmation - Ranjana Achar Udhyog',
      html: `
        <h1>Thank you for your order, ${formData.fullName}!</h1>
        <p>Your order details:</p>
        <ul>
          ${cart.map((item: any) => `<li>${item.name} (x${item.quantity}) - NPR ${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
        </ul>
        <p>Total: NPR ${cart.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <p>Transaction ID: ${transactionId}</p>
        <p>Delivery Location: ${deliveryLocation}</p>
        <p>Phone Number: ${formData.phoneNumber}</p>
        <p>We will contact you shortly to confirm your order and delivery details.</p>
        <p>Best regards,</p>
        <p>Ranjana Achar Udhyog</p>
      `,
    };

    if (formData.email) {
      buyerMailOptions.to = formData.email;
    }

    // Prepare email for owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Owner's email address
      subject: `New Order from ${formData.fullName} - Ranjana Achar Udhyog`,
      html: `
        <h1>New Order Received!</h1>
        <p>Customer Name: ${formData.fullName}</p>
        <p>Customer Email: ${customerEmail}</p>
        <p>Customer Phone: ${formData.phoneNumber}</p>
        <p>Order details:</p>
        <ul>
          ${cart.map((item: any) => `<li>${item.name} (x${item.quantity}) - NPR ${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
        </ul>
        <p>Total: NPR ${cart.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <p>Transaction ID: ${transactionId}</p>
        <p>Delivery Location: ${deliveryLocation}</p>
      `,
    };

    // Send emails
    if (formData.email) { // Only send to buyer if email is provided
      await transporter.sendMail(buyerMailOptions);
    }
    await transporter.sendMail(ownerMailOptions);

    return NextResponse.json({ message: 'Order placed successfully and confirmation emails sent!', transactionId }, { status: 200 });
  } catch (error: any) {
    console.error('Error placing order or sending email:', error);

    let errorMessage = 'Failed to place order or send confirmation emails.';
    if (error.code === 'EENVELOPE') {
      errorMessage = 'Email sending failed: No recipients defined. Please check email configuration.';
    } else if (error.responseCode && error.response) {
      // Nodemailer specific error with response from SMTP server
      errorMessage = `Email service error: ${error.response}`;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
