import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import EmptySpace from "@/components/EmptySpace"
import Explore from "@/components/Explore"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <EmptySpace />
    </div>
  )
}

export default Home