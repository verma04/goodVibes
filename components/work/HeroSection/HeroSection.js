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
           
          
           <div className='player-wrapper'>
    
   <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616753399/dzfbjzk3aoy9nmxkxohh.png'
           alt="Work Cover"
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
               <a  rel="noopener" target="_blank" href="https://www.facebook.com/goodvibesindia" className="icon" >
               Facebook
              </a>
              <a  rel="noopener" target="_blank" href="https://www.instagram.com/goodvibesindia/" className="icon" >
               Instargram
              </a>
              <a  rel="noopener" target="_blank" href="https://twitter.com/GoodVibesIndia" className="icon" >
               Twitter
              </a>
               </div>  

 
        </div>
        </Section>
    )
}

export default HeroSection
