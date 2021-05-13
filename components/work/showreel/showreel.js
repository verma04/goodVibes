
import { Section } from './Style'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect  , useState  } from 'react';
import Casting from './Casting';
import Event from './Event';
import Corporate from './Corporate';
import  Digital from './Digital';
import Shows from './Shows'
import Music from './Music'
import AOS from 'aos';
import "aos/dist/aos.css";
import Documentaries from './Documentaries'
import Animation from './Animation';
import Pop from './Popup'
import Behind from './Behind'
import { useRouter } from 'next/router'
const data = [
     
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573364/AirJaldi/safmqqbnjhgzuos3tpbl.jpg',
        _id:"1",
 titile:"dssd",
link:'bHjKxgjvuR4',
title:`Customers in India enjoy interacting with Alexa`


    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573409/AirJaldi/fk5xhovvhfzq7em7wf7o.jpg',
        _id:"2",
        titile:"dssd",
       link:"5TvG2RmUD7k",
       title:`#CelebrationTohBantaHai ft. #ShankarMahadevan || Rajkummar Rao & Patralekhaa`
    },
    { img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573703/AirJaldi/htjw8q2qmq9r5gvf9xw9.jpg',
        _id:"3",
        titile:"dssd",
       link:"n7B_LhzZoBg",
       title:`Celebrate Diwali with Grofers- Iss Diwali, bhar ke khushiyaan layein !`
    },

    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618572875/AirJaldi/oz7vfpa0enstbrqjqhrw.jpg',
        _id:"4",
        titile:"dssd",
       link:"aULnvrUWaMQ",
       title:`Dastak Khushiyon Ki - Amazon India Great Indian Festival 2020`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573476/AirJaldi/zen5fkckhdjymmm5or6d.jpg',
        _id:"5",
        titile:"dssd",
       link:"4LeJdDsv0Vc",
       title:`Ford Ecosport 2018 Unboxing`
    },
    

    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573476/AirJaldi/modadlg7n17c54xwkffx.jpg',
        _id:"7",
        titile:"dssd",
       link:"Jl-q41-Yac0",
       title:`vivo Retail Network | Love India, Love vivo`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573476/AirJaldi/modadlg7n17c54xwkffx.jpg',
        _id:"8",
        titile:"dssd",
       link:"x363W5TwlKw",
       title:`VBA Family | Love India, Love vivo`
    },

    
    
  //   {
  //     _id:"6",
  //     titile:"dssd",
  //    link:"7E9pj86uIik",
  //    title:`BMW 360 Financial Services`
  // },

//   {
//     _id:"6",
//     titile:"dss",
//    link:"EFaC7XVPYDQ",
//    title:`The story of sibling love`
// },


// {
//   _id:"6",
//   titile:"dss",
//  link:"H5m25dif7bc",
//  title:`A story of hardwork and conviction`
// },


// {
//   _id:"6",
//   titile:"dss",
//  link:"Tq_5-PRzMMc",
//  title:`No lockdown for learning`
// },

// {
//   _id:"6",
//   titile:"dss",
//  link:"c9pGBidPDT0",
//  title:`The story of sibling love`
// },

// {
//   _id:"6",
//   titile:"dss",
//  link:"gEdz4-c9FN4",
//  title:`A remarkable story from the lanes of Indore`
// },


    


]

function showreel() {
  const router = useRouter()

    const [active, setactive] = useState("Brands");
    const [  visible , setvisible] = useState(false);
    const [  ani , setani] = useState("fade-up");
    const toggleMenu = id => {
      setvisible(id)
  }
  


    return (
        <Section>
         <div className="head" >
    
<h2>Portfolio</h2>

         </div>

         <div className="ved" >
  
  <div className="top" >
  
      <li onClick={() =>  setactive("Brands") } id={active === "Brands" ? "active" : ""} >Brands</li>
      <li onClick={() => setactive("Corporate" ) } id={active === "Corporate" ? "active" : ""} >Corporate Videos</li>
      <li  onClick={() => setactive("Event") } id={active === "Event" ? "active" : ""}>Event Videos</li>
      <li onClick={() => setactive("Shows") } id={active === "Shows" ? "active" : ""}>TV/Web Shows</li>
      
      <li  onClick={() => setactive("Documentaries") } id={active === "Documentaries" ? "active" : ""}>Line Produced Films</li>
    
      <li  onClick={() => setactive("Behind") } id={active === "Behind" ? "active" : ""}>Behind The Scenes</li>
      
      <li onClick={() => setactive('Animation') } id={active === "Animation" ? "active" : ""}>Animation</li>
    
      <li onClick={() => setactive('Casting') } id={active === "Casting" ? "active" : ""}>Casting</li>
   
      <li onClick={() => setactive('Music') } id={active === "Music" ? "active" : ""}>Music</li>
  </div>

 
  {(() => {
        if (active === "Corporate") {
          return (
            <Corporate/>
          )
        } else if (active === "Documentaries") {
          return  (
            <Documentaries/>
   
          )
        }
        else if (active === "Event") {
            return  (
              <Event/>
     
            )
          }
          else if (active === "Shows") {
            return  (
              <Shows/>
     
            )
          }
          else if (active === "Behind") {
            return  (
              <Behind/>
     
            )
          }
          else if (active === "Casting") {
            return  (
              <Casting/>
     
            )
          }
          else if (active === "Animation") {
            return  (
              <Animation/>
     
            )
          }
          else if (active === "Music") {
            return  (
              <Music/>
     
            )
          }
          else {
              return (
                <div  className="list" >
                {data.map((number) => 
                    <div  key={number._id} className="data" >
                   <div className="cover" >
                 <Image
                        className="myImage"
                        src={`https://img.youtube.com/vi/${number.link}/hqdefault.jpg`}
            
                       alt="Picture of the author"
                       layout="fill"
                       objectFit="cover"
                       /> 
              <div className="title" >
                       <h4>{number.title}</h4>
                       </div>
                       </div>  
                <div className="img" >

                  
                    <img onClick={() => toggleMenu(number._id) }  src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616750466/auegoewnepob301zsbj8.svg" ></img>
                     </div>
            
                     {visible === number._id &&
                  
                  <div id="myModal" class="modal">
            
            
            <div class="modal-content">
            <ReactPlayer
                       volume={0} 
                       className='react-player'
                   
                       volume={100}
              url={`https://www.youtube.com/watch?v=${number.link}`}
              playing={true}
              loop={true} 
              width='100%'
              height='100%'
            />
                
            <i onClick={()  => setvisible(false)} class="fas fa-times"></i>
                 
                 </div> 
            
                 </div>
            
               }
              </div>
                )}
               
             
              </div>
            
              )
          }
      })()}




         </div>
        </Section>
    )
}

export default showreel
