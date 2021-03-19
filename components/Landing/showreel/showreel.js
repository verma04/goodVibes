import React from 'react'
import { Section } from './Style'
import Image from 'next/image';
function showreel() {
    return (
        <Section>
         <div className="head" >
    
<h2>The Good Vibes Showreel</h2>

         </div>

         <div className="ved" >
  
  <div className="top" >
  <li>Casting</li>
      <li>Digital Films</li>
      <li>Corporate Videos</li>
      <li>Documentaries</li>
      <li>Event Videos</li>
      <li>TV/Web Shows</li>
 

  </div>

  <div className="list" >
   <div className="data" >
   <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616134163/goodVibes/rcj9q0rcbqbqtenv2kdh.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
   </div>
   <div className="data" >
   <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616134141/goodVibes/yp8powk5zcxsjfrsokla.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
   </div>

  </div>

         </div>
        </Section>
    )
}

export default showreel
