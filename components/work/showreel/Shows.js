
import { Section } from './Style'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect  , useState  } from 'react';
import Casting from './Casting';
import Event from './Event';
import Corporate from './Corporate';
import  Digital from './Digital';
import Shows from './Shows'
import AOS from 'aos';
import "aos/dist/aos.css";
import Documentaries from './Documentaries'

const data = [
     
    {
        _id:"1",
 img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642023/roipoluperlvbnhmrw4i.jpg",
link:'3fqFnfNoAKY',
title:`Delhi Rules - Pitch Promo`


    },
    {
        _id:"2",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642023/zv5gnzv3itvczzsigp4x.jpg",
       link:"kldITYyGShM",
       title:`Starting On December 9th, Detective Didi! (ZEE TV Caribbean)`
    },
    {
        _id:"3",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642023/d0pxfmjrlead3vf4bf3q.jpg",
       link:"nW04LI4Jj6E",
       title:`GPL Promo - Episode 9`
    },

    {
        _id:"4",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642023/c7lr6qyhe1jkvdu12f5q.jpg",
       link:"73PqJN3V6j4",
       title:`Detective Didi - Coming Soon`
    },
    {
        _id:"5",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642023/axbn3qw0knpamkxx1i9k.jpg",
       link:"CQH4-rit3ng",
       title:`GPL Promo - Episode 10`
    },
  
    


]

function showreel() {
    const [active, setactive] = useState("Brands");
    const [  visible , setvisible] = useState(false);
    const [  ani , setani] = useState("fade-up");
    const toggleMenu = id => {
      setvisible(id)
  }
  


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

export default showreel
