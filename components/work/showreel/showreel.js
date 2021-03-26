import React from 'react'
import { Section } from './Style'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect  , useState  } from 'react';
const data = [
     
    {
        _id:"1",
 titile:"dssd",
link:'cNoFX4mWCgA',


    },
    {
        _id:"2",
        titile:"dssd",
       link:"MIX2893GWDw",
    },
    {
        _id:"3",
        titile:"dssd",
       link:"W9Nh-WxW3A0",
    },

    {
        _id:"4",
        titile:"dssd",
       link:"pPWyijx4Z_A",
    },
    {
        _id:"5",
        titile:"dssd",
       link:"kUU55unfvyQ",
    },
    {
        _id:"6",
        titile:"dssd",
       link:"cNoFX4mWCgA",
    },

    


]

function showreel() {
     
    const [  visible , setvisible] = useState(false);
    const toggleMenu = id => {
      setvisible(id)
  }
  


    return (
        <Section>
       

         <div className="ved" >
  
  <div className="top" >
  
      <li>Digital Films</li>
      <li>Corporate Videos</li>
      <li>Documentaries</li>
      <li>Event Videos</li>
      <li>TV/Web Shows</li>
      <li>Casting</li>
 

  </div>

  <div className="list" >
    {data.map((number) => 
        <div  key={number._id} className="data" >
     <img  className="cover"  src={`https://img.youtube.com/vi/${number.link}/0.jpg`} ></img>
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
  width='150%'
  height='150%'
/>
    
<i onClick={()  => setvisible(false)} class="fas fa-times"></i>
     
     </div> 

     </div>

   }
  </div>
    )}
   
 
  </div>

         </div>

         <div className="btn" >
             
             <button> Load More</button>
              </div>
        </Section>
    )
}

export default showreel
