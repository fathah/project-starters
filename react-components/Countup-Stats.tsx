"use client";
import React from "react";
import CountUp from "react-countup";
import { Icon } from "@iconify/react";

const statsData = [
  { icon: "mdi:calendar-star", label: "Years of Experience", value: 20 },
  { icon: "mdi:package-variant-closed", label: "Brands Offered", value: 30 },
  { icon: "mdi:account-group", label: "Clients Served", value: 250 },
  { icon: "mdi:check-decagram", label: "Certified Products", value: 50 },
];

export default function StatsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {statsData.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center space-y-2">
            <Icon icon={stat.icon} className="text-4xl sm:text-5xl mb-2 text-green-400" />
            <h3 className="text-3xl sm:text-4xl font-bold">
              <CountUp start={0} end={stat.value} duration={2.5} separator="+" />
            </h3>
            <p className="text-sm sm:text-base font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
