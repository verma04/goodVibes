import React from 'react'
import  { Section } from './Style'
import Image from 'next/image';
function Team() {
    return (
        <Section>
            <div className="head" >
                <h2>The Team Behind Good Vibes</h2>
            </div>

            <div  className="grid" >
             <div className="left" >

             <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616152475/goodVibes/qviehmkmvnkvi0mh6dli.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
             </div>
             <div className="right" >
    
    <div className="top" >
    We’re an experienced and very creative production agency
    </div>
    <div className="mid" >
    Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects is like putting socks on an octopus, yet circle back. We need to make the new version clean and sexy critical mass.
    </div>
   
             </div>
             
             
             
             
             </div>
        </Section>
   
   )
}

export default Team
