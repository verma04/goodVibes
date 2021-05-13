
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
link:'0Ro_X0JY5Tw',
title:`What The Love! with Karan Johar | Official Trailer | Netflix India`


    },
    {
        _id:"2",
        img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/qpvlkpghxltpzd15ltez.jpg",
       link:"MLdh2ZCyjpE",
       title:`Hear Me Love Me | Official Teaser | Shilpa Shetty | Prime Original | Amazon Prime Video`
    },
    {
      _id:"3",
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643799/geavqqojwxwzkavbastf.jpg",
     link:"nmK64X3skYU",
     title:`Dating Aaj Kal | Karan Kundrra | Flipkart Video | Official Promo`
  },
  {
      _id:"4",
      img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/izy8bbkmmru0okoa6bcu.jpg",
     link:"jvZvIjqUCUo",
     title:`Tanya Purohit In 2nd Match Featuring.Sanjana Ganesan`
  },
  {
    _id:"5",
img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/ju5ddyff7bdo3filkg4d.jpg",
link:'3dRlYm6VXMI',
title:`Splitsvilla X3 I Watch for FREE only on Voot`


},
{
    _id:"6",
    img:"https://res.cloudinary.com/dzcmadjl1/image/upload/v1618643800/owvus3irie1mq2fqmrwa.jpg",
   link:"A0XjcConzYU",
   title:`Splitsvilla Season 13 | The Greek Gods On The Beach | Ep. 01 | Highlights`
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
