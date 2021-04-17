
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
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573873/AirJaldi/rucbxtijjdn767eglfql.jpg',
        _id:"1",
 titile:"dssd",
link:'Jl-q41-Yac0',
title:`vivo Retail Network | Love India, Love vivo`


    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573872/AirJaldi/sxlfp3c8xxrgpox9gkmf.jpg',
        _id:"2",
        titile:"dssd",
       link:"x363W5TwlKw",
       title:`VBA Family | Love India, Love vivo`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573972/AirJaldi/eofwhth6v75xiisoaz8e.jpg',
        _id:"3",
        titile:"dssd",
       link:"4zhE-SYpEw8",
       title:`OP Jindal GUniversity - Student Film`
    },

    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573972/AirJaldi/gshev49aviuzorykvgo1.jpg',
        _id:"4",
      
       link:"tSPMUvz8p34",
       title:"Sourav Ganguly urges India to 'Deliver Smiles' this festive season",
    },

    {
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618574189/AirJaldi/qocytl9frirjabo8e9nz.jpg",
      _id:"4",
    
     link:"cZp0DVIfO_Q",
     title:"Amazon Global Selling is helping take local, global",
  },
 

  {
    _id:"4",
    img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618574189/AirJaldi/s5netfmefnlmj48nfkyz.jpg',
   link:"4LeJdDsv0Vc",
   title:"Ford Ecosport 2018 Unboxing",
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
