import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { formData, cart } = await request.json();

    // Basic validation
    if (!formData || !cart || cart.length === 0 || !formData.location) {
      return NextResponse.json({ message: 'Invalid order data' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false, // Use 'true' if your email service uses SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const customerEmail = formData.email || 'N/A';
    const deliveryLocation = formData.location.address || `Lat: ${formData.location.latitude}, Lon: ${formData.location.longitude}`;

    // Prepare email for buyer
    const buyerMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email, // Send only if email is provided
      subject: 'Your Order Confirmation - Ranjana Achar Udhyog',
      html: `
        <h1>Thank you for your order, ${formData.fullName}!</h1>
        <p>Your order details:</p>
        <ul>
          ${cart.map((item: any) => `<li>${item.name} (x${item.quantity}) - NPR ${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
        </ul>
        <p>Total: NPR ${cart.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <p>Delivery Location: ${deliveryLocation}</p>
        <p>Phone Number: ${formData.phoneNumber}</p>
        <p>We will contact you shortly to confirm your order and delivery details.</p>
        <p>Best regards,</p>
        <p>Ranjana Achar Udhyog</p>
      `,
    };

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
        <p>Delivery Location: ${deliveryLocation}</p>
      `,
    };

    // Send emails
    if (formData.email) { // Only send to buyer if email is provided
      await transporter.sendMail(buyerMailOptions);
    }
    await transporter.sendMail(ownerMailOptions);

    return NextResponse.json({ message: 'Order placed successfully and confirmation emails sent!' }, { status: 200 });
  } catch (error) {
    console.error('Error placing order or sending email:', error);
    return NextResponse.json({ message: 'Failed to place order or send confirmation emails.' }, { status: 500 });
  }
}
