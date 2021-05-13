import React from 'react';
import { Section} from './Style'
import Image from 'next/image';
import { useGetTests } from '@/apollo/actions';
import VisibilitySensor from 'react-visibility-sensor';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Testimonials() {


    const { data , loading , error } = useGetTests();
    const cafes = data && data.cafes || [];
  
    console.log(error)
  
    console.log(data)

    return (

        
     
        <Section>
        <div className="head" >
            <p>See What Our Clients Have to Say</p>
            <h2>Testimonials</h2>
        </div>

        <div    className="center" >
        <div className="left" > 
                  <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617272022/t3tzcotqnoohrl5ypuf1.png" ></img>
                  </div>
              <Carousel stye={{width:"100%"}}   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                
                <div className="img-1">
         
              
                 
                  <div className="midd" > 
               <p>I have worked with Maxwel and would highly recommend him. He is extremely dedicated and goes out of his way to help the production get on its feet and sprint.</p>   
      </div>

      <div className="set" >
          <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620026503/q8prwfaksowrpugksldz.jpg" ></img>
          <h3> Aditia Thayi</h3>
         

         
          <span>ENDO PRODUCTIONS, SINGAPORE</span>
      </div>
         
 
               
                </div>
                
                <div className="img-1">
         
              
             


         <div className="midd" > 
      <p>  Post our first project on VIVO where we developed a couple of Vox Pop videos, Goodvibes has been our go to production team from Delhi; because of their attitude and dedication towards delivering the right product. It’s been a pleasure working with Dennis, Max and the amazing team that they have built. As 22feet, we have always enjoyed working with the Goodvibes team and will continue to collaborate with them and create some exciting projects. 
</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620026503/ltlwtcio8p0jqnkvg4dp.png" ></img>
 <h3>Vivian Albert Nicholas</h3>
 <span>Client Solutions Director  ,
 22feet Tribal Worldwide, DDM Mudra Group
</span>
</div>


      
       </div>
     

       <div className="img-1">
      


              
                 
         <div className="midd" > 
      <p> Whoever believes that you can’t put a timeline on creativity, should definitely work with the folks at Good Vibes once! Their team had the patience and ability to not only understand our requirement but also go above and beyond to shape it into something better. A delightful working experience, nothing less.</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620188047/wvndzi2n7tpgwi3dxt34.png" ></img>
 <h3>Ekant Babani</h3>
 <span>Fiction Head - Youth & Lifestyle,  Endemol Shine India</span>
</div>


      
       </div>


       <div className="img-1">
      


      


                 
      <div className="midd" > 
   <p>  It's been great working with GoodVibes, they get the brief, read between the lines and add great value to a campaign with their creativity. Working with them is easy, they are open to feedback and retentive about adhering to standards. What really sets GoodVibes apart is definitely the team! Each one of them works tirelessly and with great passion even in the most challenging situations. We thank them for being a part of some of our memorable campaigns and look forward to navigate new initiatives with their support.</p>   
</div>

<div className="set" >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620026503/x1nf37paxas3zbxluhti.jpg" ></img>
<h3>Michelle Kumar</h3>
<span> India PR lead, Amazon Devices ,  Amazon</span>
</div>


   
    </div>

    <div className="img-1">
      
    



              
                 
      <div className="midd" > 
   <p>We developed a great partnership with the team from Goodvibes and their dedication to our project in all aspects was commendable. It was such a great and fascinating experience. All I can say is WOW!</p>   
</div>

<div className="set" >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620026896/v831xmkwfmemkqopurkr.png" ></img>
<h3>Vineet Garude</h3>
<span> Group Head Client Servicing , Wizcraft International Entertainment Pvt. Ltd. </span>
</div>


   
    </div>
  

    <div className="img-1">
      
    



              
                 
      <div className="midd" > 
   <p>I share a great professional relationship with Good Vibes. They have catered to all requests and promptly helped us in identifying talent that are the right fit to our broadcast.</p>   
</div>

<div className="set" >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1620188299/ipzddri5jvxaqtetm3v4.png" ></img>
<h3>Rekha Navani </h3>
<span> Lead, National Broadcast Talent  ,  Star Sports India</span>
</div>


   
    </div>
  
            </Carousel>
           
            <div className="right" > 
                   <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617272022/iyildhx4gr0kzcz8znou.png" ></img>
      </div>
            </div>
        

    
 
    </Section>

    )
}

export default Testimonials
