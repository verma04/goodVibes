
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
link:'OanYYNv42m0',
title:`CM「生活って宇宙だ。」60秒`


    },
    {
      img:'https://vimeo.com/540957507',
        _id:"2",
        titile:"dssd",
       link:"FbApmnoVN98",
       title:`50 Lakh SMBs now use Amazon Pay. See some of their stories.`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573972/AirJaldi/eofwhth6v75xiisoaz8e.jpg',
        _id:"3",
        titile:"dssd",
       link:"cZp0DVIfO_Q",
       title:`Amazon Global Selling is helping take local, global`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573972/AirJaldi/eofwhth6v75xiisoaz8e.jpg',
        _id:"4",
        titile:"dssd",
       link:"tSPMUvz8p34",
       title:`Sourav Ganguly urges India to 'Deliver Smiles' this festive season`
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
