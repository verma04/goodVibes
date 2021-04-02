
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
 titile:"dssd",
link:'iH28tgQn5bQ',
title:`Alexa in Hindi, a year long journey: “Alexa, हमारी दोस्ती पर poem सुनाओ".`


    },
    {
        _id:"2",
        titile:"dssd",
       link:"ZpdLgcwdex4",
       title:`Of stories, poetry and tiny tales: For Rafaa Dalvi, small is big`
    },
  

    {
        _id:"2",
        titile:"dssd",
       link:"D_UWMJ48_88",
       title:`How Anubhav Agrawal became #1 bestselling author on Kindle`
    },
  
    {
        _id:"2",
        titile:"dssd",
       link:"kP-JfEufypQ",
       title:`From a routine job to full-time writing: The journey of KDP author MV Kasi`
    },
  
    {
        _id:"2",
        titile:"dssd",
       link:"aV7O7q8Qp5w",
       title:`NEW YEAR KA SECRET GIFT | Happy New Year 2021 | Moral Story for kids | Aayu and Pihu Show`
    },
    {
        _id:"2",
        titile:"dssd",
       link:"CP5K66K5ZRQ",
       title:`How 'online' emerged as a lifeline of sorts in 2020`
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
            src={`https://img.youtube.com/vi/${number.link}/maxresdefault.jpg`}

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
