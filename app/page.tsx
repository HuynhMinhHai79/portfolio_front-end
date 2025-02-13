import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import { LogoAnimaiton } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio"
import { KeyMetrics } from "@/components/KeyMetrics";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import pool from "@/ultils/db";



const Home = () => {


  return (
    <>
      <Navbar />
      <Hero />
      <LogoAnimaiton />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Services />
      <Contact />
    </>
  );
}
export default Home;