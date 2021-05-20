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
  
 
  
    if(  loading ) {
        return (
            null
        )
    }

   
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
                  

                  {data.testimonials.edges.map(number =>
                    <div className="img-1">
         
              
                 
                    <div className="midd" dangerouslySetInnerHTML={{__html: number.node.content}}   > 
                
        </div>
  
        <div className="set" >
            <img src={number.node.featuredImg} ></img>
            <h3> {number.node.title}</h3>
           
  {console.log(number.node.featuredImage)}
           
            <span>ENDO PRODUCTIONS, SINGAPORE</span>
        </div>
           
   
                 
                  </div>
        
                  )

                  }
              
            </Carousel>
           
            <div className="right" > 
                   <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617272022/iyildhx4gr0kzcz8znou.png" ></img>
      </div>
            </div>
        

    
 
    </Section>

    )
}

export default Testimonials
