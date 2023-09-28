import React from 'react'

import "./HomeSlider.css";
import { Carousel } from 'react-responsive-carousel';

const testimonials = [
    [
      {
        avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
        name: "Building"
     },
    ],
    [
        {
            avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
            name: "Building"
         },
    ],
    [
       {
        avatar: "https://images.hdqwalls.com/download/city-buildings-1400x900.jpg",
        name: "Building"
     },
    ]
  ];



const HomeSlider = () => {

  return (
    <div className='' style={{width:"90%",height:"60%"}}>
        <div className='container-home'>
            <div className='box-home'>
                <img src='https://images.hdqwalls.com/download/tokyo-skycrapper-building-sunset-cityscape-b7-1400x900.jpg'/>
            </div>
                <div className='box-home'>
                <img src='https://images.hdqwalls.com/download/building-photography-1400x900.jpg'/>
            </div>
                <div className='box-home'>
                <img src='https://images.hdqwalls.com/download/hdr-buliding-to-1400x900.jpg'/>
            </div>
            <div className='box-home'>
                <img src='https://images.hdqwalls.com/download/city-buildings-1400x900.jpg'/>
            </div>
        </div>
        <div className='alt-container-home'>
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
        {testimonials.map((testimonialSet, idx) => (
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
                  <p className="text-gray-800 text-lg font-medium">{item.name}</p>
                  <p
                    className="text-gray-800 text-sm mt-1"
                    style={{ fontFamily: "Abhaya Libre" }}
                  >
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      
        </div>
    </div>
  )
}

export default HomeSlider