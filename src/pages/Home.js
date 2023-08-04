import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Partners from "../components/Partners";
import Feedback from '../components/Feedback'
import Pricing from "../components/Pricing";

export default function Home() {
    return <div><Navbar/>
        <Hero/>
        <Partners/>
        <Feedback/>
        <Pricing/>
    </div>
}