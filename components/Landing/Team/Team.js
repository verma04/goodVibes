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
transitionTime={1000}

             swipeable={false}
             draggable={false}
             showDots={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
            
             autoPlaySpeed={1000}
             keyBoardControl={true}
             customTransition="all 0.5"
             transitionDuration={1000}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile"]}
            
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
            
            >
            <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
            </div>
            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>

          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617261874/goodVibes/dfnxtr808ghwwa5kbz1x.jpg" ></img>
         
            </div>

            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>
          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617261874/goodVibes/lhifx4kaocsqzm5lhnfz.jpg" ></img>
         
            </div>


            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617261874/goodVibes/pz1euouykowdjozxkmsh.jpg" ></img>
         
            </div>

            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>
          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617261874/goodVibes/ur1nzhmfmrcn7awpnci9.jpg" ></img>
         
            </div>

            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>
          

            
  </div>
  <div  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617261875/goodVibes/gw5muoodu2grvv79xtcl.jpg" ></img>
         
            </div>
            <div   className='name' >
  

  <h2> Dennis Nagpal</h2>
  <span>Executive Producer & Founder</span>
    </div>

          

            
  </div>

  <div  className="set">
  <div style={{position:"relative"}} className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617172522/icuoz5qgnilfbyqkrsll.jpg" ></img>
         
   <div   className='name' >
  

     <h2> Dennis Nagpal</h2>
     <span>Executive Producer & Founder</span>
       </div>

            </div>


          

            
  </div>

 
</Carousel>

<style jsx>{`
       
        .set:before {
          content: "";
          position: absolute;
          bottom: 0;
          height: 100%;
          width: 100%;
          z-index: 100;
          background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
      
       }
       .name {
        position: absolute;
        bottom: 10%;
        z-index:999;
        width:95%;
        left:8%;
       
       }
       h2 {
        font-size:1.3rem;
        color:white;
      }
      span {
      color:white;
      }
      `}</style>
          
   </div>
   )
}

export default Team
