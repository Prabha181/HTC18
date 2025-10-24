// app/layout.tsx
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Solution from "@/app/components/Solution";
import Products from "@/app/components/Products";   
import TargetMarkets from "@/app/components/TargetMarkets";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import BusinessModel from "@/app/components/BusinessModel";
import Team from "@/app/components/Team";
import Footer from "@/app/components/Footer";
import "./globals.css";
// import Animation from "./animation/Animation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <About />
        <Solution />
        <Products />
        <TargetMarkets />
        <WhyChooseUs />
        <BusinessModel />
        <Team />
        <Footer />
          {/* <Animation>
          <main className="flex-grow">{children}</main>
        </Animation> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
