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
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function Team() {
 
    return (
    <  div id="team" data-aos="fade-up"  >
        <Section>
            <div className="head" >
                <h2>The Team Behind Good Vibes</h2>
                <div className="mid" >
    The strength of a company lies in its people. Meet the team responsible for the growth of Good Vibes.
    </div>
            </div>

            
           
        </Section>



        <Carousel
  ssr
  partialVisbile
 id="team"
  itemClass="image-item"
  responsive={responsive}
            >
<a     target="_blank" href="https://www.linkedin.com/in/dennisnagpal" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618486433/goodVibes/sudxjey4tzhvt8rznjgl.jpg" ></img>
         
            </div>
            <div   className='name' >
            
             
  <h2>Dennis Nagpal </h2>
  <span> Producer/Founder</span>
    </div>

          

            
  </a>
  <a  target="_blank" href="https://www.linkedin.com/in/sonakshi-khanna-520b40141" className="set">
  <div className='wrapper'>
   
    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618486524/goodVibes/bczbqpsl6va27bhnsb2f.jpg" ></img>
         
            </div>

            <div   className='name' >
  
             
  <h2> Sonakshi Khanna</h2>
  <span> Creative Director</span>
    </div>
          

            
  </a>
  <a   target="_blank" href="https://www.linkedin.com/in/maxwel-nagpal-80144118" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618486524/goodVibes/ca6yvdbi3uxyhwabzkav.jpg" ></img>
         
            </div>


            <div   className='name' >
           

  <h2> Maxwel Nagpal</h2>
  <span> Producer</span>
    </div>

            
  </a>
  <a   target="_blank" href="https://www.linkedin.com/in/atul-sharma-68235617b" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618486631/goodVibes/pyebdekbtb4bxlketmqf.jpg" ></img>
         
            </div>

            <div   className='name' >
  
             

  <h2>Atul Sharma</h2>
  <span> Associate Director</span>
    </div>
          

            
  </a>
  <a   target="_blank" href="https://www.linkedin.com/company/goodvibesindia"  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617769689/goodVibes/jl7brijsonjgi77awgkw.jpg" ></img>
         
            </div>

            <div   className='name' >
  
            

  <h2>Pooja Verma</h2>
  <span>Finance & Accounts Head</span>
    </div>
          

            
  </a>
  <div  target="_blank" href="https://www.linkedin.com/in/rhea-banerjee-84961524" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617769690/goodVibes/ywkpwgo3fqufbikzd9ex.jpg" ></img>
         
            </div>
            <div   className='name' >
  
         
  <h2> Rhea Banerjee</h2>
  <span> Associate Producer</span>
    </div>

          

            
  </div>
           
 
  

 
 
</Carousel>



<Carousel
  ssr
  partialVisbile

  itemClass="image-item"
  responsive={responsive}
            >

  <a  target="_blank" href="https://www.linkedin.com/company/goodvibesindia" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617769689/goodVibes/mju3aaw2iwibl59vlyr6.jpg" ></img>
         
            </div>


            <div   className='name' >
          

  <h2> Rasleen Kaur</h2>
  <span> Assistant Producer</span>
    </div>

            
  </a>
 
  <a  target="_blank" href="https://www.linkedin.com/in/ishitaa-sengupta-b9076b7a" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618486999/cnm7oqfornynx54jfbae.jpg" ></img>
         
            </div>

            <div   className='name' >
  
            
  <h2>    Ishitaa Sengupta</h2>
  <span>Assistant Producer </span>
    </div>
          

 
  </a>
  <a target="_blank" href="https://www.linkedin.com/in/shivam-kinra-8279741bb"  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617769689/goodVibes/jocjhep9517rpmuxlj3w.jpg" ></img>
         
            </div>

            <div   className='name' >
  
             
  <h2> Shivam Kinra</h2>
  <span>Assistant Director</span>
    </div>
          

            
  </a>

 

  
  
  
 

  <a  target="_blank" href="https://www.linkedin.com/in/jayant-arora-b98232183/" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617769689/goodVibes/utjkpe0lk7xsajzptshj.jpg" ></img>
         
            </div>
            <div   className='name' >
            

  <h2>Jayant Arora </h2>
  <span>Production Manager</span>
    </div>

          

            
  </a>
  

 


  <a  target="_blank" href="https://www.linkedin.com/in/laxman-bhamboriya-124b79102/" className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618487201/ztkj7mahhwly7pd2qsrr.jpg" ></img>
         
            </div>

            <div   className='name' >
  
            
  <h2> Laxman Bhamboriya</h2>
  <span>Post Head</span>
    </div>
          

            
  </a>

 

  
  
  
 

  <a target="_blank" href="https://www.linkedin.com/company/goodvibesindia"  className="set">
  <div className='wrapper'>

    <img style={{width:"100%", height:"100%"}} src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1618487160/dgxf9ygr37adwwf62uds.jpg" ></img>
         
            </div>
            <div   className='name' >
           


  <h2>Ankit</h2>
  <span>Facility Boy</span>
    </div>

          

            
  </a>
  

 
 
</Carousel>

<style jsx>{`
         .set {
          
         }
        .set:before {
          content: "";
          position: absolute;
          bottom: 0;
          height: 100%;
          width: 100%;
          z-index: 100;
          background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
      
       }
       .set:after {
        display:block;
        position: absolute;
        width:100%;
        z-index:990;
      bottom:0%;
        content: '';
        border-bottom: solid 8px #47B4DE;  
        transform: scaleX(0);  
        transition: transform 1s ease-in-out;
      }
     
      .set:hover:after {
              transform: scaleX(1);
             
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
