import { Navbar } from "@/components/Navbar";
import{ Hero } from "@/components/Hero";
import { Stack } from "@/components/Stuck";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import  { Contact } from "@/components/Contact"
import  Footer  from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Stack/>
    <LogoAnimation/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}
