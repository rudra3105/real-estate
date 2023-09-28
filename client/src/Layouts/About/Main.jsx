import React from "react";
import "./Main.css"; // Import your CSS file

const cards = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 3",
  },
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/959325/pexels-photo-959325.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with your image URL
    description: "Description 3",
  },
];


const About = () => {
  return (
    <div className="container-portfolio">
      <div className="background-image-portfolio"></div>
      <div className="heading-aboutus">
      <h1>About Us</h1>
      </div>
      <div className="about-page">
        <img src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>


      <div className="about-page-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga, molestiae. Corporis enim iusto, in magnam, commodi minus officiis maxime neque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga, molestiae.</p>

        <p>Corporis enim iusto, in magnam, commodi minus officiis maxime neque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga, molestiae. 
        Corporis enim iusto, in magnam, commodi minus officiis maxime neque.</p>
        
        <p>Eu semper imperdiet duo, eos ut exerci sanctus impedit, sit ne legere maiorum gubergren.
         Putent accusamus te qui, vero forensibus ei ius.
          His nostrud singulis forensibus te, in possim gubergren his. Habemus officiis qui te, vix te meliore rationibus.
           No augue zril reformidans est. Pro ex unum vidit, no est noster discere neglegentur, et dictas tamquam his.</p>
      </div>

      <div className="about-page-icons">
            <div className="about-page-icons-div">
                <img src="https://th.bing.com/th/id/OIP.LmueXuCfKUCJMmW8_1nP5gHaHk?w=195&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga, molestiae.
                 Corporis enim iusto, in magnam, commodi minus officiis maxime neque.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga,
                  molestiae. Corporis enim iusto, in magnam, commodi minus officiis maxime neque.
                </p>
            </div>
            <div className="about-page-icons-div">
            <img src="https://th.bing.com/th?q=Product+Vision+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defdefault"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga, molestiae.
                 Corporis enim iusto, in magnam, commodi minus officiis maxime neque.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Beatae laudantium dignissimos doloremque tempore fugiat error blanditiis voluptas aliquam fuga,
                  molestiae. Corporis enim iusto, in magnam, commodi minus officiis maxime neque.
                </p>
            </div>
      </div>
    </div>
  );
};

export default About;