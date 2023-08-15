import Image from "next/image";

import HeroSection from "@/components/hero-lan";
import Products from "@/components/products-lan";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Products />
    </div>
  );
}
