import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus odit reprehenderit, cumque amet nam recusandae atque? Hic cum, esse voluptates deserunt molestias explicabo, voluptatum quidem laborum, non laboriosam placeat! Quia?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Aamuel",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus odit reprehenderit, cumque amet nam recusandae atque? Hic cum, esse voluptates deserunt molestias explicabo, voluptatum quidem laborum, non laboriosam placeat! Quia?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 3,
    name: "Manual",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus odit reprehenderit, cumque amet nam recusandae atque? Hic cum, esse voluptates deserunt molestias explicabo, voluptatum quidem laborum, non laboriosam placeat! Quia?",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-14">
        <div
         data-aos="fade-up"
         data-aos-duration= "400"
         
        
        className="container">
          {/* Header Section  */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What Our Client Say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor hic sed, provident, sint minima dolorum recusandae,
              perferendis tempore!
            </p>
          </div>
          {/*testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 p-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <p className="font-serif text-gray-500 text-[10px]">
                        {text}
                      </p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                      <h1 className="text-xl font-bold">{name}</h1>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
