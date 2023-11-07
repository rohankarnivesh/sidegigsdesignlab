import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Product from "./Product"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-28">
      <Navbar/>   
      <div className="w-full "> 
        <Product/>
      </div>
      <Footer />
    </main>
  )
}
