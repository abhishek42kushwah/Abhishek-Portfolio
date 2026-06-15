import { Navbar } from "@/components/Navbar";
import{ Hero } from "@/components/Hero";
import { Stack } from "@/components/Stuck";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import  { Contact } from "@/components/Contact"
import  Footer  from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
    <Preloader/>
    <ScrollProgress/>
    <Navbar />
    <Hero/>
    <Stack/>
    <LogoAnimation/>
    <Portfolio/>
    <Services/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  );
}
