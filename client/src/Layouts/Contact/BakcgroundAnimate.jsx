import React, { useState, useEffect } from 'react';
import './BackgroundAnimate.css';// Create this CSS file for styling

function StaticBackground() {
  return (
    <div style={{width:"100%",height:"100%"}}>
    <div className="static-background" >
     <h1>Contact Us</h1> 
     </div>
     <div className='white-background'>White Background</div>
     <div className='static-background2'>
     <div className='form-div'>
     <div className='form-form-div'>
     <div className='label-input-div'>
     <label>Enter Your Name</label>
     <input/>
     </div>
     <div className='label-input-div'>
     <label>Enter Your Email</label>
     <input/>
     </div>
     <div className='label-input-div'>
     <label>Enter Your Message</label>
     <textarea/>
     </div>
     <div className='label-input-div'>
     <button>Submit</button>
     </div>
 </div>
 </div>
 </div>
 </div>
  );
}

export default StaticBackground;
