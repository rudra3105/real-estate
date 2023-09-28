import React from 'react'
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <section   className='aboutus-main-container-container'>
    <div class="lg:w-[90%] sm:mb-[4%] lg:mb-[2%]" >
        <div class="row aboutus-main-container" >
            <div class="" className='aboutus-main-container-content'>
                <strong class="section-subtitle"></strong>
                <h2 class="text-gray-900  font-Abhaya about-us-main-heading" >About Us</h2>
                <div className='about-us-main-para'><p className='text-gray-700  font-sans'>At Talal-Al-ghamin Groups, we're more than just a company –
                 we're a dedicated team of professionals on a mission to make a difference. 
                 Our journey began with a shared passion for innovation and a vision to transform industries through cutting-edge technology. </p>
                 <p className='text-gray-700  font-sans'>With a diverse blend of talents and expertise, we've forged a path of creativity and excellence. 
                 Our commitment to integrity, collaboration, and customer-centricity drives us forward. We're not just solving problems;
                 we're building solutions that empower businesses and individuals alike. 
                Join us on this exciting journey towards a brighter future.</p>
                <p className='text-gray-700  font-sans'>We guarantee an experience that will leave you content and satisfied. Our professional ethics and the caliber of our service are what make our organization unique and distinct.</p>
                <p className='text-gray-700  font-sans'>With our team, you will have access to our experience and expertise which will ensure management and completion of your project in a time and budget efficient manner.</p>
                <p className='text-gray-700  font-sans'>At XYZ Solutions, we're more than just a company –
                 we're a dedicated team of professionals on a mission to make a difference. 
                 Our journey began with a shared passion for innovation and a vision to transform industries through cutting-edge technology. </p>
                 <p className='text-gray-700  font-sans'>With a diverse blend of talents and expertise, we've forged a path of creativity and excellence. </p>
                 </div>  <div class="experience-box">
                    <div class="experience-content">
                        <div class="experience-number"></div>
                        <div class="experience-info wow fadeInDown"></div>
                    </div>
                </div>

            </div>
            <div class=" lg:ml-[8%] lg:mt-[40%] lg:w-[20%]" >
                <div class="dots-image">

                    <img alt="" className='image'  src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <div class="dots"></div>
                </div>
            </div>
        </div>
    </div>
    
</section>

  )
}

export default AboutUs