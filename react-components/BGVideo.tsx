"use client";
import React from "react";

export default function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          We deliver innovation that moves the world forward.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
