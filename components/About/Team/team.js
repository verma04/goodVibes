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
   

    <h2>We are storytellers</h2>

            </div>
            <div className="bottom" >
   <div className="list" >
  
   <p>
   Good Vibes is a New Delhi based video production company & a talent agency, with a team of young and passionate professionals who aim to break the conventional mould and present the audience with freshly brewed content.  Our team of creative storytellers know how to directly write for your audience, design within your brand guidelines, and communicate through a clear process, ensuring your workload gets lighter and a lot more fun. We offer creative development, video production, photography, and post-production services worldwide. Our clients include global brands, ad agencies, small businesses, nonprofits, government, and many more.


</p>

   </div>
  
            </div>
      
            </div>
           <div  data-aos="fade-left" className="right" >
           <Image
                        className="myImage"
                        src={`https://res.cloudinary.com/dzcmadjl1/image/upload/v1617356888/m3miomaffoepe77q88dl.png`}
            
                       alt="Storytellers Picture"
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
