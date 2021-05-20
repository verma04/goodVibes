import React, {useState} from 'react'
import { useGetTeam } from '@/apollo/actions';
import  { Section ,Slider } from './Style'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Team1 from './Team1'
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

  const [  row , setData ] = useState('')

  const { data , loading , error } = useGetTeam();
  const cafes = data && data.cafes || [];
  
  const data1 = data;

  if(  loading  ) {
      return (
          null
      )
  }
 
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

  {data.teams.edges.reverse().slice(0, 6).map(number =>
    <a     target="_blank" href={number.node.teamMemberProfileUrl} className="set">
  
  <i className="fab fa-linkedin"></i>
    <i className="fab fa-linkedin"></i>
    <div className='wrapper'>
  
      <img style={{width:"100%", height:"100%"}} src={number.node.featuredImage.node.sourceUrl} ></img>
           
              </div>
              <div   className='name' >
              
               
    <h2>{number.node.title} </h2>
    <span> {number.node.teamMemberDesignation}</span>
      </div>
  
            
  
              
    </a>

)

}
            

  

 
 
</Carousel>



<Team1  data={data}/>

<style jsx>{`
         .set {
          
         }

         i {
          position: absolute;
          display:none;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #0072b1;
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


            .set:hover i {
              transform: scaleX(1);
          display:flex;
             
             
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

    

      @media screen and (max-width: 600px) {
     .set .wrapper   img {
           height:10rem;
        }
}

      `}</style>
          
   </div>
   )
}

export default Team
