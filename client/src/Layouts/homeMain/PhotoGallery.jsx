import React from "react";
import "./PhotoGallery.css"; // Import your CSS file

const cards = [
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
];

const cardsTwo =  [
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 2",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Description 3",
  },
   
  ];

const PhotoGallery = () => {
  return (
    <div className="containerPhoto">
      <h1 style={{color:"lightgray"}}>Gallery</h1>
      <div className="cardWrapperMain">
            <div className="cardWrapper">
                {cards.map((card) => (
                <div className="cardPhoto" key={card.id}>
                
                    <img src={card.imageSrc} alt={`Image ${card.id}`} />
                    <div className="card-overlay"></div>
                    <p className="card-description">{card.description}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="cardWrapperMainSmall">
            <div className="cardWrapper">
            {cardsTwo.map((card) => (
                <div className="cardPhoto" key={card.id}>
                
                <img src={card.imageSrc} alt={`Image ${card.id}`} />
                <div className="card-overlay"></div>
                <p className="card-description">{card.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default PhotoGallery;

