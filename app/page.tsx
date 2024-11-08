import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  w-full  container mx-auto p-4  bg-[#DBC0A4]">
    <Navbar />
    <Hero />
  </div>
  );
}
