import React from 'react';
import { Section} from './Style'
import Image from 'next/image';

function Vedio() {
    return (
        <Section>
      
      <div className="flex" >
      
      <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616142364/goodVibes/zugzmcjxqb8481nzyx7h.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   

           <div className="circle" >
               <div className="top" >
               The Good Vibes
Brand Reel
               </div>
               <div className="mid" >
               We work hard to achieve best awards exposing new the ways to evolve our design language, digital literacy. Prethink talk to the slides, regroup your plate, so pivot. 
               </div>
               <div className="bottom" >
               <i class="fab fa-youtube-square"></i>
               <span>Watch Our Video</span>
               </div>
                
           </div>

           <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616142706/goodVibes/rhriz3nb9nqoxzgcfp7c.png'} /> 
      </div>
           
        </Section>
    )
}

export default Vedio
