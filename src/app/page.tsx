'use client';
import { useState, useEffect, useRef } from "react";
import UniversityCarousel from '../components/Carousel';

export default function Home() {
  const universityData = {
    universityName: "Manipal University",
    items: [
      {
        title: "UGC | NIRF | NAAC A++",
        description: "QS World University. Trusted University for Online Education.",
      },
      {
        title: "Progress",
        description: "",
      },
      {
        title: "Star Rating",
        description: "4.3/5 based on 500+ reviews.",
      },
      {
        title: "Fee Details",
        description: "Semester Fee",
        fee: "₹73,000",
        emi: "EMI from ₹11,667/month",
      },
    ],
  };

  const [carouselCount, setCarouselCount] = useState(10);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!loader.current) return;
      const rect = loader.current.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        setCarouselCount((prev) => prev + 10);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        {Array.from({ length: carouselCount }).map((_, idx) => (
          <UniversityCarousel
            universityName={universityData.universityName}  
            items={universityData.items}                      
            key={idx}
          />
        ))}
        <div ref={loader} />
      </main>
    </div>
  );
}
