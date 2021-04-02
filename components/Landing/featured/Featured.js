import React from 'react';
import  { Section } from './Style'
import Image from 'next/image';
import { useRouter } from 'next/router'
function Featured() {

    const router = useRouter()
    return (
        <Section>
           <div className="head" >
               <h2>The Featured Articles</h2>
           </div>
           <div data-aos="fade-down" className="data" >
           <div  onClick={()=> router.push('/') } className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617352158/bzh7xvawkbudrkdeplib.webp'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    <div className="data" >
               <h3>Women's Day 2021: 7 Powerful Ads On Women Empowerment</h3>
           </div>
           </div>

           <div  className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617352158/xlh2yel0p9udxovsl2pg.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           <div className="data" >
               <h3>AMAZON ALEXA’S 3RD ANNIVERSARY CAMPAIGN BRINGS STORIES FROM USERS ACROSS INDIA</h3>
           </div>
           </div>
           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617352159/swggb8bahsefxvown9co.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    <div className="data" >
               <h3>Amazon Alexa ’s anniversary campaign brings stories from users across India</h3>
           </div>
           </div>
       
     
           </div>
        </Section>
    )
}

export default Featured
