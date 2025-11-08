import React from "react";
import Image from "next/image";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  altText: string;
  description: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  title,
  altText,
  description,
}) => {
  return (
    <section
      className="relative w-full h-screen"
    >
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-[#FFFFFF] text-5xl font-bold">{title}</h1>
        <p className="text-[#FFFFFF] text-xl mt-4 max-w-2xl">{description}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
