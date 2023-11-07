import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "./About"
import Abo from "./Abo"
import Career from "./Career"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-28">
      <Navbar/>   
      <div className="w-full "> 
        <About/>
        <Abo/>
        <Career/>
      </div>
      <Footer />
    </main>
  )
}
