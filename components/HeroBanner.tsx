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
      className="relative w-full h-96 bg-[#FFFFFF]"
    >
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="contain"
        className="z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-[#EF4141] text-5xl font-bold text-center">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;
