import React from 'react';
import { Section} from './Style'
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Testimonials() {
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
              <Carousel   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                
                <div className="img-1">
         
              
                 
                  <div className="midd" > 
               <p>I have worked with Maxwel and would highly recommend him. He is extremely dedicated and goes out of his way to help the production get on its feet and sprint.</p>   
      </div>

      <div className="set" >
          <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
          <h3> ADITYA THAYIe</h3>
         

         
          <span>ENDO PRODUCTIONS, SINGAPORE</span>
      </div>
         
 
               
                </div>
                
                <div className="img-1">
         
              
             


         <div className="midd" > 
      <p>   It's good to see a promising budding company with such raging creative hormones. Keep rocking.</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
 <h3>RANJEET PATHAK</h3>
 <span>NATIONAL PROGRAMMING HEAD, RED FM</span>
</div>


      
       </div>
     

       <div className="img-1">
      


              
                 
         <div className="midd" > 
      <p> Whoever believes that you can’t put a timeline on creativity, should definitely work with the folks at Good Vibes once! Their team had the patience and ability to not only understand our requirement but also go above and beyond to shape it into something better. A delightful working experience, nothing less.</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
 <h3>VIVIAN ALBERT NICHOLAS</h3>
 <span>NEW BUSINESS DEVELOPMENT, 22FEET TRIBAL WW</span>
</div>


      
       </div>


       <div className="img-1">
      


      


                 
      <div className="midd" > 
   <p> I would very highly recommend Maxwel, I worked with him on two projects in India last year and he was reliable, efficient and organized in all aspects of pre production and on shoot. He's also a good problem solver and will always do his best to get what is needed/required.</p>   
</div>

<div className="set" >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
<h3>INDRA NIENHAUS</h3>
<span>CHANNEL NEWS ASIA, SINGAPORE</span>
</div>


   
    </div>

    <div className="img-1">
      
    



              
                 
      <div className="midd" > 
   <p> The one thing standing out at Good Vibes is their 'Never say No' attitude. Have never had a service or requirement not done by them. Other than actually sending out "good vibes", they are super professional and one of the best in the industry. Kudos to the team.</p>   
</div>

<div className="set" >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
<h3>EKANT BABANI</h3>
<span>PARTNER, ALLIGATOR MEDIA</span>
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
