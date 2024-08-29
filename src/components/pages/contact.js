import React, { Component } from 'react';
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return ( 
    <div  className='content-page-wrapper'>

            <div 
              className='left-column'
              style={{
                  background: "url(" + contactPagePicture + ") no-repeat",
                  backgroundSize: "cover",    
                  backgroundPosition: "center"
              }}
              > 
            </div>

            <div className='right-column'>
              <div className='contact-bullet-points'>
                <div className='bullet-points-group'>
                  <div className='icon'>
                    <FontAwesomeIcon icon="phone"/>
                  </div>
                  <div className='text'>555-555-5555</div>
                </div>

                <div className='bullet-points-group'>
                  <div className='icon'>
                    <FontAwesomeIcon icon="envelope"/>
                  </div>
                  <div className='text'>rubens.bali@gmail.com</div>
                </div>

                <div className='bullet-points-group'>
                  <div className='icon'>
                    <FontAwesomeIcon icon="map-marked-alt"/>
                  </div>
                  <div className='text'>Portugalete, Pais Vasco, España</div>
                </div>
              </div>
            </div>
        </div>
  );
}