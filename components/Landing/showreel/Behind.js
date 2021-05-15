
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
 img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644138/b7ks3fnqkju7maudhkud.jpg",
link:'x8udPtViAw4',
title:`Independence Day Film (2019) Royal Enfield - Behind The Scenes`


    },
    {
     
        _id:"2",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644138/ia7mdiofe1ln9pvbrcka.jpg",
       link:"lgk9J_6EgNI",
       title:`Behind The Scenes // Blackberrys AW' 19 Collection`
    },
  

    {
     
     
        _id:"3",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644138/cab95jutrskze2bhimx6.jpg",
       link:"N7bHgiOidX4",
       title:`Behind The Scenes // SS' 20 shoot Gatsbylady London`
    },
  
    {
     
        _id:"4",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644139/ahzfh7arp8ittcaiiza1.jpg",
       link:"39HiEJL79Vw",
       title:`Now United - Beautiful Life (Behind the Scenes 360)`
    },
  

    {
     
      _id:"5",
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644139/ahzfh7arp8ittcaiiza1.jpg",
     link:"gGxDlnMNMAc",
     title:`Amazon Dastak - BTS 1 // Good Vibes`
  },

  {
     
    _id:"6",
    img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618644139/ahzfh7arp8ittcaiiza1.jpg",
   link:"PFipR6RMftM",
   title:`Amazon Dastak BTS 2 // Good Vibes`
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
