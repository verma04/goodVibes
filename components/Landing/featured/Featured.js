import React from 'react';
import  { Section } from './Style'
import Image from 'next/image';

function Featured() {
    return (
        <Section>
           <div className="head" >
               <h2>The Featured Case Studies</h2>
           </div>
           <div className="data" >

           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616138628/goodVibes/pukqvfukzvxmeuhfrpro.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           /> 
           </div>
        </Section>
    )
}

export default Featured
