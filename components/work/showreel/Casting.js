
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
 img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/hga8wid20bewg9jhd3h7.jpg",
link:'2g9oUXWoeaw',
title:`Love School - Season 02 - Episode 1`


    },
    {
        _id:"2",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/qpvlkpghxltpzd15ltez.jpg",
       link:"8OH63JIBoWw",
       title:`Arre Ho Ja Re-Gender | First Look | An Arre Original Social Experiment`
    },
    {
      _id:"3",
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643799/geavqqojwxwzkavbastf.jpg",
     link:"uemWawWN0Kg",
     title:`Pan Villas Raag TVC`
  },
  {
      _id:"4",
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/izy8bbkmmru0okoa6bcu.jpg",
     link:"VNiXxwgdU4g",
     title:`Lakme Fashion Week 2018 - 4`
  },
  {
    _id:"5",
img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/ju5ddyff7bdo3filkg4d.jpg",
link:'KddOxyWJO4Q',
title:`Lake Fashion Week 2018 - 1`


},
{
    _id:"6",
    img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/owvus3irie1mq2fqmrwa.jpg",
   link:"6u7VsoPSkt8",
   title:`Lakme Fashion Week 2018 - 3`
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
