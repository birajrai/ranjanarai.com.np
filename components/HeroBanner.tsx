import React from "react";
import Image from "next/image";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  altText: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  title,
  altText,
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
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-[#FFFFFF] text-5xl font-bold text-center">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;
