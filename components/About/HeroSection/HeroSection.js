import React, { useState } from 'react';

import Image from 'next/image';
import { Section } from './Style';
import Navbar from '../../Navbar/Navbar'
import ReactPlayer from 'react-player';

function HeroSection() {
    const [play, setPlay] = useState(false);
  const   handleOnReady = () => setTimeout(() => setPlay(true) , 100);
    return (
        <Section>
  
        <div className="flex-1" >
           
           <Navbar/>
           <div className='player-wrapper'>
    
   <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754306/ye7pgmy5ysmo6ktffbi3.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
  </div>

        {/* <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616127747/goodVibes/bz4cmr45ybh0mljplawe.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />     */}

           <div className="text" >
              <div className="data" >
               Work
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
