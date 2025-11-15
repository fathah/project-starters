import Image from "next/image";
import { ReactNode } from "react";

interface BGImageProps {
  imageSrc: string;
  imageAlt?: string;
  children: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function BGImage({
  imageSrc,
  imageAlt = "Hero background",
  children,
  overlay = false,
  overlayOpacity = 0.4,
}: BGImageProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        quality={100}
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="-z-10"
      />

      {/* Optional Dark Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black -z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content Container - Add your elements here */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
