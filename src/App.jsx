import AppStore from "./components/appstore/AppStore";
import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";


function App() {
 

  return (
    <>
    <div className="bg-white  dark:bg-gray-900 dark:text-white duration-200">
   <Navbar/>
   <Hero/>
   <Services/>
   <Banner/>
   <AppStore/>
   <Testimonial/>
   </div>
     </>
  )
}

export default App
