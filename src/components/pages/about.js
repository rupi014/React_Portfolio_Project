import React, { Component } from 'react';  
import profilePicture from "../../../static/assets/images/bio/image_bio.jpg"    

export default function() {
    return (
        <div  className='content-page-wrapper'>

            <div 
            className='left-column'
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",    
                backgroundPosition: "center"
            }}
            >
                
            </div>

            <div className='right-column'>
            So I want you to imagine that you are working for a development company or you are just building out your own application. You've been handed this task, you've been told exactly what you are supposed to go build, and then I want you to pause the video right now, and I want you to go do it. You have already learned each one of the skills needed in order to implement this.

            So, in review, I want you to have an image that takes up exactly 50% of the width and 100% of the height on the left-hand side here, and then I want you to have content that is centered on the right-hand side. Feel free to pause the video now and I'm going to start showing my own personal solution for implementing this.
            </div>
        </div>
    );  
}   