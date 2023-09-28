import React from "react";
import "./Portfolio.css"; // Import your CSS file

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


const Portfolio = () => {
  return (
    <div className="container-portfolio">
      <div className="background-image-portfolio"></div>
      <div className="h1-heading-container"><h1 className="card-h1" >Portfolio</h1></div>
      <div className="card-container-portfolio">
        {cards.map((card) => (
          <div className="card-portfolio" key={card.id}>
            <img src={card.imageSrc} alt={`Image ${card.id}`} />
            <p className="card-description-portfolio" style={{color:"white"}}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
