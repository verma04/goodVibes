import React from 'react'
import Image from 'next/image';
import { Section } from './Style';
import Navbar from '../../Navbar/Navbar'
function HeroSection() {

    return (
        <Section>
  
        <div className="flex" >
           
           <Navbar/>
       

        <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616127747/goodVibes/bz4cmr45ybh0mljplawe.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />    

           <div className="text" >
              <div className="data" >
              Creative process assures desired result
              </div>
               </div>         
               <div className="social" >
              <div className="icon" >
               Facebook
              </div>
              <div className="icon" >
               Instargram
              </div>
              <div className="icon" >
               Twitter
              </div>
               </div>  


        </div>
        </Section>
    )
}

export default HeroSection
