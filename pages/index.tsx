"use client";
import Hero from "@/components/hero";
import Token from "@/components/token";
import Roadmap from "@/components/roadmap";
import Powered from "@/components/powered";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Token></Token>
      <Roadmap></Roadmap>
      <Powered></Powered>
      <Footer></Footer>
      <Banner></Banner>
    </div>
  );
}