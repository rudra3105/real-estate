import React from 'react'

import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className='container'>
        
        <div style={{display:'flex',flexDirection:"column" }} className='footer-conainer'> 
        <div className='footer-icon'> <img src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_address_icon.png' alt='icons'/>
        </div> <div className='footer-content'> <h1 >+965 22254080</h1>
        </div></div>
        <div style={{display:'flex',flexDirection:"column"}} className='footer-conainer'>
        <div className='footer-icon'> <img src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_phone_icon.png' alt='icon'/>
        </div> <div className='footer-content'><h1 >+965 22254080</h1>
        </div></div>
        <div style={{display:'flex',flexDirection:"column"}} className='footer-conainer'>
           <div className='footer-icon'> <img  src='https://demo.phpscriptpoint.com/acon/public/uploads/footer_working_hour_icon.png' alt='icon'/>
           </div> <div className='footer-content'><h1>+965 22254080</h1></div>
        </div></div>
    )
}