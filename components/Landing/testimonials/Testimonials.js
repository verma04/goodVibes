import React from 'react';
import { Section} from './Style'
import Image from 'next/image';
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
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>   
      </div>

      <div className="set" >
          <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
          <h3>Client Name</h3>
          <span>Designation</span>
      </div>
         
 
               
                </div>
                
                <div className="img-1">
         
              
                 
         <div className="midd" > 
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
 <h3>Client Name</h3>
 <span>Designation</span>
</div>


      
       </div>
     

       <div className="img-1">
         
              
                 
         <div className="midd" > 
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>   
</div>

<div className="set" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png" ></img>
 <h3>Client Name</h3>
 <span>Designation</span>
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
