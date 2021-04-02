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
           <div  onClick={()=> router.push('https://www.ndtv.com/offbeat/womens-day-2021-5-powerful-ads-on-women-empowerment-2386143?pfrom=home-ndtv_lateststories') } className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617363322/pmwtew0azvorqk7it1rk.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    <div className="data" >
               <h3>Women's Day 2021: 7 Powerful Ads On Women Empowerment</h3>
           </div>
           </div>

           <div  onClick={()=> router.push('http://www.pitchonnet.com/blog/2021/02/16/amazon-alexas-3rd-anniversary-campaign-brings-stories-from-users-across-india/') } className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617363320/hfmgndgeowfihdrrvsr2.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           <div className="data" >
               <h3>AMAZON ALEXA’S 3RD ANNIVERSARY CAMPAIGN BRINGS STORIES FROM USERS ACROSS INDIA</h3>
           </div>
           </div>
           <div onClick={()=> router.push('https://www.socialsamosa.com/2021/02/amazon-alexa-anniversary-campaign/') } className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617363319/lod1saghk2uqk1npne1h.jpg'
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
