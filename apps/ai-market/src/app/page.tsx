import Image from "next/image";

import HeroSection from "@/components/hero-lan";
import Products from "@/components/products-lan";
import Subscriptions from "@/components/subscriptions-lan";
import Testimonials from "@/components/testimonials-lan";
import About from "@/components/about-lan";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Products />
      <Subscriptions />
      <Testimonials />
    </div>
  );
}
