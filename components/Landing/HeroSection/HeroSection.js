import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Section } from './Style';
import Navbar from '../../Navbar/Navbar'
import ReactPlayer from 'react-player';
import About  from '../About/About'
import AOS from 'aos';
import "aos/dist/aos.css";
function HeroSection() {
  useEffect(() => {
 
    AOS.init({
      duration : 5000
    });
  }, []);
    const [play, setPlay] = useState(false);
  const   handleOnReady = () => setTimeout(() => setPlay(true) , 100);
    return (
        <Section>
  
        <div className="flex-1" >
           
       
           <div className='player-wrapper'>
           <ReactPlayer
           volume={0} 
           className='react-player'
           onReady={handleOnReady}
            playing={play}
  url={"https://res.cloudinary.com/dzcmadjl1/video/upload/v1617778510/jzoyotwwt0qi03g2t4pf.mp4"}
  playing={true}
  loop={true} 
  width='100%'
  height='100%'
/>
 <About/> 
  </div>

        {/* <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616127747/goodVibes/bz4cmr45ybh0mljplawe.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />     */}

           {/* <div aos-duration="10000" data-aos="fade-right" className="text" >
              <div  className="data" >
              Creative process assures desired result
              </div>
               </div>          */}
               <div className="social" >
              <a className="icon" >
               Facebook
              </a>
              <a className="icon" >
               Instargram
              </a>
              <a className="icon" >
               Twitter
              </a>
               </div>  

 
        </div>
   
   
        <div className="flex-1-sm" >
           
       
           <div className='player-wrapper'>
           <ReactPlayer
           volume={0} 
           className='react-player'
           onReady={handleOnReady}
            playing={play}
  url={"https://res.cloudinary.com/dzcmadjl1/video/upload/v1617778510/jzoyotwwt0qi03g2t4pf.mp4"}
  playing={true}
  loop={true} 
  width='100%'
  height='100%'
/>
 
  </div>

        {/* <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616127747/goodVibes/bz4cmr45ybh0mljplawe.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />     */}

           <div aos-duration="10000" data-aos="fade-right" className="text" >
            
               </div>         
              

               <About/> 
 
        </div>
   
   
   
   
   
       </Section>
    )
}

export default HeroSection
