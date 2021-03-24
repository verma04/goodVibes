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
             <div className="btn" >
               <li>View Team</li>
               <li id='bt' >passion drives us</li>
           </div>
             </div>
             <div className="right" >
    
    <div className="top" >
    We’re an experienced and very creative production agency
    </div>
    <div className="mid" >
    The strength of a company lies in its people. Meet the team responsible for the growth of Good Vibes.
    </div>
   
             </div>
             
             
             
             
             </div>
        </Section>
   
   )
}

export default Team
