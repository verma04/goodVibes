import React from 'react'
import  {Section } from './Style'
import Image from 'next/image';
function exp() {
    return (
        <Section>
            <div  className="grid" >
             <div className="left" >

             <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616132695/goodVibes/l7gxqws1zfbnnvye7ptj.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
             </div>
             <div className="right" >
    
    <div className="top" >
    We’re an experienced and very creative branding agency
    </div>
    <div className="mid" >
    Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects.
    </div>
    <div className="bottom" >
       <ul>
           <li id="bold" >60+</li>
           <li>Clients</li>
       </ul>
       <ul>
           <li id="bold">2050</li>
           <li>Films</li>
       </ul>

       <ul>
           <li id="bold">2007</li>
           <li>Days Strong</li>
       </ul>

    </div>

             </div>
             </div>
   </Section>
    )
}

export default exp
