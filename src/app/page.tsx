import Image from "next/image";
import UniversityCarousel from '../components/Carousel';

export default function Home() {
  const items = [
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
  ];

  const carousels = Array.from({ length: 10 });

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        {carousels.map((_, idx) => (
          <UniversityCarousel items={items} key={idx} />
        ))}
      </main>
    </div>
  );
}
