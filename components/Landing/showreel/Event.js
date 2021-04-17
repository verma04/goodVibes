
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
        _id:1,
 titile:"dssd",
 img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641607/vf6lhjxanijozufmah2b.jpg",
link:'lqYDXAZ_G0A',
title:`Renault Kiger : Launch`


    },
    {
      img:'',
        _id:2,
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641718/k8knzjups3sapvc4qij6.jpg",
       link:"PGTMAdO3MCI",
       title:`Good Vibes//BMW - X1`
    },
    {
        _id:3,
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641757/pyslfl63njcveqq5guyj.jpg",
       link:"rN3Xwia_Zvs",
       title:`Freedom Drive | The All-New Thar | Independence Day 2020`
    },

    {
        _id:4,
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641758/umbcgxelqrdo1ln04hkt.jpg",
       link:"nDn463aZpX8",
       title:`KIA Seltos Global Preview - Event Film`
    },
    {
        _id:5,
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641757/q3fffhvdgyd1rvmrksxw.jpg",
       link:"7E9pj86uIik",
       title:`BMW 360 Financial Services`
    },
   
    {
      _id:6,
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618641757/pcbnlzm0zjzs3jnqs5yj.jpg",
     link:"totaAD19bUA",
     title:`Good Vibes//BMW - X1 Q&A `
  },
  

    


]

function showreel() {
    const [active, setactive] = useState("Digital");
    const [  visible , setvisible] = useState(false);
    const [  ani , setani] = useState("fade-up");
    const toggleMenu = id => {
      setvisible(id)
  }
  


    return (
      
    

        
  

  <div data-aos={ani} className="list" >
    {data.map((number) => 
        <div  key={number._id} className="data" >
       <div className="cover" >
     <Image
            className="myImage"
            src={number.img}

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
