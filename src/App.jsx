import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";


function App() {
 

  return (
    <>
    <div className="bg-white  dark:bg-gray-900 dark:text-white duration-200">
   <Navbar/>
   <Hero/>
   <Services/>
   </div>
     </>
  )
}

export default App
