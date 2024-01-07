import { useEffect } from "react";
import AppStore from "./components/appstore/AppStore";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    Aos.init({
      offset:100,
      duration:500,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
 

  return (
    <>
    <div className="bg-white  dark:bg-gray-900 dark:text-white duration-200">
   <Navbar/>
   <Hero/>
   <Services/>
   <Banner/>
   <AppStore/>
   <Testimonial/>
   <Footer/>
   </div>
     </>
  )
}

export default App
