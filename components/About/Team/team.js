import React from 'react'
import { Section } from './Style'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect  , useState  } from 'react';
const data = [
     
    {
        _id:1,
 title:"Dennis Nagpal",
des:'A perfectionist with 9 Years of experience in the TV & Digital Media Industry.',
set:"Executive Producer & Founder",
img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/qglfcdcpvwushkk2dj2e.png'
    },
    {
        _id:2,
        title:"Sonakshi Khanna",
       des:"A keen observer with a great work experience in various media fields and companies.",
       set:'Associate Creative Director',
       img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/dyul9di8gcqq4wizwbu5.png'
    },
    {
        _id:"3",
        title:"Maxwel Nagpal",
       des:"10 years of experience in location scouting, permits, budgeting, hiring the local crew in India along with logistics and production services.",
      set:'Producer',
     
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/gs2fvccsmetpwl12maa6.png'
    },

    {
        _id:"4",
        title:"Atul Sharma",
       des:"A keen observer with a great work experience in various media fields and companies.",
      set:"Assistant Director ",
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/qglfcdcpvwushkk2dj2e.png'
    },
  
    


]

function showreel() {
     
    const [  visible , setvisible] = useState(false);
    const toggleMenu = id => {
      setvisible(id)
  }
  


    return (
        <Section>
       

         <div className="team" >
  


  <div data-aos="fade-left" className="list" >
    

        <div   className="data" >
        <div  data-aos="fade-left" className="left" >

            <div className="top" >
    <span>— Our Bio</span>

    <h2>WE ARE A CREATIVE VIDEO PRODUCTION COMPANY</h2>

            </div>
            <div className="bottom" >
   <div className="list" >
   <h3>WHO WE ARE</h3>

   <p>
Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production.


</p>

   </div>
   <div className="list" >
       <h3>WHO WE WORK</h3>
       <p>Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production.</p>
   </div>

            </div>
      
            </div>
           <div  data-aos="fade-left" className="right" >
           <Image
                        className="myImage"
                        src={`https://res.cloudinary.com/dzcmadjl1/image/upload/v1617356888/m3miomaffoepe77q88dl.png`}
            
                       alt="Picture of the author"
                       layout="fill"
                       objectFit="cover"
                       /> 
              
      </div>      
        </div>
    

   
         
   
  </div>


         </div>

       
        </Section>
    )
}

export default showreel
