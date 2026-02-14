import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Explore from "@/components/Explore"
import About from "@/components/About"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <About />
      <Footer />
    </div>
  )
}

export default Home