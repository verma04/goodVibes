import React from 'react'
import  { Section ,Slider } from './Style'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function Team() {
 
    return (
    <  div data-aos="fade-up"  >
        <Section>
            <div className="head" >
                <h2>The Team Behind Good Vibes</h2>
            </div>

            <div className="right" >
    
    <div className="top" >
    We’re an experienced and very creative production agency
    </div>
    <div className="mid" >
    The strength of a company lies in its people. Meet the team responsible for the growth of Good Vibes.
    </div>
   
             </div>
           
        </Section>



        <Carousel


             swipeable={false}
             draggable={false}
             showDots={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
            
             autoPlaySpeed={1000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile"]}
            
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            
            >
            <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>

  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>


          

            
  </div>

 
</Carousel>

       
          
   </div>
   )
}

export default Team
