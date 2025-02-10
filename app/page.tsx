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
  const fectchDatafromDB = async () => {
    try {
      const client = await pool.connect();
      console.log('Connected to DB');
      const result = await client.query('SELECT * FROM public.users');
      const data = result.rows;
      console.log('Data fetched from DB:', data);
      client.release();
      return data;
    } catch (error) {
      console.error('Error fetching data from DB:', error);
      throw error;
    }
  }
 fectchDatafromDB()
 .then((data)=>{  
  console.log('Data fetched from DB:', data);
 })
 .catch((error)=>{
  console.error('Error fetching data from DB:', error);
 })
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