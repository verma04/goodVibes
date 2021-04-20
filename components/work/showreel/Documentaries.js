
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
 img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618633151/AirJaldi/t2myhsejz9olr9ys6wgr.jpg',
link:'mgSq6jbS8MY',
title:`Road Trippin with RnM and OYO | OYO Rooms India`


    },
    {
        _id:2,
        titile:"dssd",
        img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618633639/AirJaldi/y39flzirxawjbee7uh8o.jpg',
       link:"xUHrxetGW_c",
       title:`Jonaki - trailer | IFFR 2018 `
    },
    {
      _id:3,
titile:"dssd",
link:'x8udPtViAw4',
img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618637215/ksnqeodrsz9ffbsdsytf.jpg",
title:`Independence Day Film (2019) Royal Enfield - Behind The Scenes`


  },
  {
      _id:4,
      titile:"dssd",
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618636835/vofsbdq7aaszdmkcmeb2.jpg',
     link:"N7bHgiOidX4",
     title:`Behind The Scenes SS' 20 shoot Gatsbylady London`
  },
  {
    _id:5,
    img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618636913/cb7kcovzqiupmo4nasaa.jpg',

link:'39HiEJL79Vw',
title:`Now United - Beautiful Life (Behind the Scenes 360)`


},
{
    _id:6,
    titile:"dssd",
   link:"lgk9J_6EgNI",
   img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618637084/vtu45fetnnoujj69usnf.jpg',
   title:`Behind The Scenes // Blackberrys AW' 19 Collection`
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
