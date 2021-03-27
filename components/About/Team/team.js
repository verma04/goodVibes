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
  


  <div className="list" >
    

        <div  className="data" >
        <div className="left" >
        <Image
                  className="myImage"
                 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/qglfcdcpvwushkk2dj2e.png"
                 alt="Picture of the author"
                 layout="fill"
                 objectFit="contain"
                 /> 
      
            </div>
           <div className="right" >
      
               <div className="right-1" >
                   <span>Executive Producer & Founder</span>
                   <h2>"Dennis Nagpal"</h2>
                   <p>Executive Producer & Founder</p>
                   </div>
       
      </div>      
        </div>
    

   
         
   
  </div>


  <div className="list" >
    

        <div   className="data" >
        <div className="right" >
      
      <div className="right-1" >
          <span>Associate Creative Director'</span>
          <h2>Sonakshi Khanna</h2>
          <p>A keen observer with a great work experience in various media fields and companies.</p>
          </div>

</div>      

        <div className="left" >
        <Image
                  className="myImage"
                 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/dyul9di8gcqq4wizwbu5.png"
                 alt="Picture of the author"
                 layout="fill"
                 objectFit="contain"
                 /> 
      
            </div>
        
        </div>
    

   
         
   
  </div>

  <div className="list" >
    

        <div  className="data" >
        <div className="left" >
        <Image
                  className="myImage"
                 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/gs2fvccsmetpwl12maa6.png"
                 alt="Picture of the author"
                 layout="fill"
                 objectFit="contain"
                 /> 
      
            </div>
           <div className="right" >
      
               <div className="right-1" >
                   <span>
Co-founder and Casting director</span>
                   <h2>Shubam Mhatur</h2>
                   <p>A work maniac with more than 5 years of experience in casting – TV & Ads.</p>
                   </div>
       
      </div>      
        </div>
    

   
         
   
  </div>


  <div className="list" >
    

        <div   className="data" >
    
           <div className="right" >
      
               <div className="right-1" >
                   <span>Executive Producer & Founder</span>
                   <h2>Dennis Nagpal</h2>
                   <p>A perfectionist with 9 Years of experience in the TV & Digital Media Industry.</p>
                   </div>
       
      </div>      
       
      <div className="left" >
        <Image
                  className="myImage"
                 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616754768/gs2fvccsmetpwl12maa6.png"
                 alt="Picture of the author"
                 layout="fill"
                 objectFit="contain"
                 /> 
      
            </div>
        
        
        </div>
    

   
         
   
  </div>

         </div>

         <div className="btn" >
             
             <button> Load More</button>
              </div>
        </Section>
    )
}

export default showreel
