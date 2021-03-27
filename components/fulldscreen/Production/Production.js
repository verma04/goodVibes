import React from 'react';
import { Section } from './Style'
import Image from 'next/image';
function Production() {
    return (
        <Section>

            <div className="head" >
                <h3>Our Production</h3>
                <h2>Services We Provide</h2>

            </div>
            <div className="data" >
            <div className="pro" >
  <div className="logo" >

  <Image
            className="myImage"
            src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616415131/gjmfqrjfsa32whhp5uvu.png'

           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           />   
  </div>

  <div className="set" >
      <h2>LINE PRODUCTION</h2>
      <p>We are equipped to carry out line production activities PAN India. We provide line production services for TV shows, TVC’s, Digital Films, Corporate videos, Web shows and documentaries.</p>
  </div>

                </div>
                <div className="pro" >
  <div className="logo" >

  <Image
            className="myImage"
            src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616415131/xsbg2fjpftkwrkjqkqgn.png'

           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           />   
  </div>

  <div className="set" >
      <h2>Casting</h2>
      <p>We have a pool of fresh talent and provide casting services for Reality shows, Fiction TV Shows, Print Ads, Digital Films, Corporate Videos, Web shows & documentaries.</p>
  </div>

                </div>
             
               
                <div className="pro" >
  <div className="logo" >

  <Image
            className="myImage"
            src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616415130/kgnuto8zfc4dwthgyfso.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           />   
  </div>

  <div className="set" >
  

      <h2>Creatives:</h2>
      <p>We are creatively involved in a project starting from ideation, conceptualization, storyboarding, production, post production to the final delivery of the product.</p>
  </div>

                </div>
               
            
              
                

            </div>
            

            <div className="button" >
                <button>Let’s Collaborate</button>
            </div>
        </Section>
    )
}

export default Production