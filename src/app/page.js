import Collaborate from "./components/Collaborate";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Who from "./components/Who";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-28">
      <Navbar/>
      <div className="w-full "> 
        <Hero/>
        <Who/>
        <Services/>
        <Collaborate/>
        <ContactForm />
      </div>
      <Footer/>
    </main>
  )
}
