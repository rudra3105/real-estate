import React from 'react'

import "./FlipCard.css";
import {FaBuilding} from 'react-icons/fa'
import {BsAwardFill} from 'react-icons/bs';
import {AiFillInsurance} from 'react-icons/ai';
import {IoIosCloud} from 'react-icons/io';
import {MdConstruction} from 'react-icons/md';

import {MdOutlineRealEstateAgent} from 'react-icons/md';

const servicesData = [{
    title :"Building/Planning",
    description:"We work with architects and designers to produce beautiful, functional structures. Call us today and bring our project management skills and extensive construction experience to your next project.",
    icon : <FaBuilding style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
},
{
    title :"LawFirm",
    description:"We know that legal action can sometimes be overwhelming. We are dedicated to providing you help in language that you can understand.",
    icon : <BsAwardFill style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
},
{
    title :"Insurance",
    description:"We deal in various insurance covers (Such as Life, Medical, Workmen's, Compensation, Third Party, Motor Comprehensive ETC.) with qualified experience staff providing a wide protection covers at lowest rates possible.",
    icon : <AiFillInsurance style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
}
,{
    title :"Real Estate",
    description:"Talal Al-Ghanim Real Estate bases on the highest levels of integrity to make its decisions. We record communication with our clients and respect their decisions even as we make recommendations.",
    icon : <MdConstruction style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
},
{
    title :"Restaurant/Cafes",
    description:"We pride ourselves on wide range of beverages, freshly made salads, sandwiches, hot dishes & desserts. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.",
    icon : <IoIosCloud style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
},
{
    title :"Construction",
    description:"We are seeking a hard-working and reliable construction worker to join our team. You will participate in a variety of construction projects and follow construction plans and instructions from the site supervisor. Although experience isn't essential, you will have to be physically fit and a fast learner.",
    icon : <MdOutlineRealEstateAgent style={{ width : "50%"  , height:"50%",marginTop:"36%",marginLeft:"30%"}}/>
}]

const FlipCard = () => {
  return (
    <div className="main-div" style={{display:"flex",flexDirection:"column",marginTop:"10%",
    backgroundColor:"rgba(240, 248, 255, 0.841)",marginLeft:"10%",width:"80%",
    marginBottom:"10%",borderRadius:"12px"
    }}>
    <h2 style={{marginLeft:"46%",marginTop:"6%",marginRight:"4%",marginBottom:"2%",fontSize:"38px",color:"black",fontFamily:"Abhaya Libre"}}>Services</h2>
    <div style={{marginLeft:"42%",marginRight:"4%",marginBottom:"4%",fontSize:"22px",color:"darkgray",fontFamily:"Abhaya Libre"}}><p >Lets look for the main firms </p></div>
    <div class="div-flip-cards" style={{width:"100%"}}>
    {servicesData.map((service,idx)=>{
      return <div class="card">
      <div class="front">{service.icon}</div>
      <div class="back">
      <div style={{fontSize:"24px",color:"black",fontFamily:"Abhaya Libre",marginTop:"10%"}}><h1>{service.title}</h1></div>
        <div style={{marginLeft:"4%",marginRight:"4%",marginTop:"-10%",fontSize:"18px",color:"black",fontFamily:"Abhaya Libre"}}><p >{service.description}</p></div>
      </div>
    </div>
    })}
  </div>
  </div>
  )
}

export default FlipCard