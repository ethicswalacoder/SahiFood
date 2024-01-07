import React from 'react';
import Img from "../../assets/biryani2.png";

const ServiceData = [
    {
        id:1,
        img: Img,
        name: "Biryani",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor hic sed, provident, sint minima dolorum recusandae, perferendis tempore!"
    },
    {
        id:2,
        img: Img,
        name: "Chicken Kari",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor hic sed, provident, sint minima dolorum recusandae, perferendis tempore!"
    },
    {
        id:3,
        img: Img,
        name: "Cold Cofee",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor hic sed, provident, sint minima dolorum recusandae, perferendis tempore!"
    },
]

const Services = () => {
  return (
    <>
    <div className="py-10">
        <div className="container">
            {/* Header Section  */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Our Services

                </p>
                <h1 className="text-3xl font-bold">Services</h1>
                <p className='text-xs text-gray-400'>
                  
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor hic sed, provident, sint minima dolorum recusandae, perferendis tempore!
                </p>
            </div>
             {/* card Section  */}
             <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                {
                    ServiceData.map(({id, img, name, description}) => {
                        return( <div 
                            data-aos="zoom-in"
                            data-aos-duration= "300"
                            data-aos-once = "true"
                            key={id} className="max-w-[300px] group
                        rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300  shadow-xl">
                            <div className="h-[100px]">
                                <img src={img} alt="service Image" 
                                className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{description}</p>
                            </div>
                            </div>
                        );
                    })
                }
             </div>
             </div>
        </div>
      
    </div>
    </>
  )
}

export default Services
