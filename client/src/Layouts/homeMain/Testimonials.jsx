import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./PropertyCard.css";
import "./Testimonial.css";
function Testimonials() {
  const testimonials = [
    [
      {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     },
     {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     },
    ],
    [
        {
            avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Building"
         },
         {
            avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Building"
         },
    ],
    [
       {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     },
     {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     },
    ]
  ];

  const testimonials2 = [
    [
      {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     }
    ],
    [
        {
            avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Building"
         }
    ],
    [
       {
        avatar: "https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Building"
     }
    ]
  ];

  return (
    <section className="relative py-14">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 " >
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h3 className="heading font-semibold tracking-tight leading-none text-black md:text-3xl lg:text-5xl " >
            Testimonials
          </h3>
          <div className="visibility-seen"><p className="mt-3 text-gray-900 text-justify" >
            Don&apos;t just take our word for it - see what our looks have to say about their experience working with us! Our real estate agency is proud to have helped countless individuals and families buy and sell homes throughout the years. Take a look at some of our recent testimonials to see how we&apos;ve helped others achieve their real estate goals.
          </p></div>
        </div>
        <div className="mt-12 main-property-container" style={{marginLeft:"8%"}}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            autoPlay={true}
            interval={2000}
            centerSlidePercentage={60}
            itemPadding = {[10,10]}
            emulateTouch={true}
            dynamicHeight={false}
            width="92%"
          >
            {testimonials.map((testimonialSet, idx) => (
              <div key={idx} className="flex justify-center">
                {testimonialSet.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-xl border shadow-md card-carousel-div"
                    class = "carousel-card-main"
                  >
                    <div className="text-center " style={{marginRight:"-1%"}}>
                      <img
                        src={item.avatar}
                        className="w-20 h-60"
                        alt={`Avatar of ${item.name}`}
                      />
                      <p className="text-gray-800 text-lg font-medium">{item.name}</p>
                      <p className="text-gray-800 text-sm mt-1" style={{fontFamily:"Abhaya Libre"}}>{item.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div className='alt-property-container'>
        <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        emulateTouch={true}
        centerSlidePercentage={"100%"}
        dynamicHeight={false}
        width="92%"
      >
        {testimonials2.map((testimonialSet, idx) => (
          <div key={idx} className="flex justify-center">
            {testimonialSet.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="bg-white rounded-xl border shadow-md card-carousel-div"
                class="carousel-card-main"
              >
                <div className="text-center" style={{ marginRight: "-1%" }}>
                  <img
                    src={item.avatar}
                    className="w-60 h-60"
                    alt={`Avatar of ${item.name}`}
                  />
                  <div className="testimonial-div"><p className="text-gray-100 text-lg font-medium">{item.name}</p>
                  <p
                    className="text-gray-100 text-sm mt-1 h-[10%]"
                    style={{ fontFamily: "Abhaya Libre" }}
                  >
                    {item.quote}
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
      </div>
      <div
        className="absolute top-0 w-full h-[390px]"
        style={{
            background:
            "linear-gradient(to bottom, silver, gray, white)",
        }}
        ></div>

    </section>
  );
}

export default Testimonials;
