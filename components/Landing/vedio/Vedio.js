import { useEffect  , useState  } from 'react';
import { Section} from './Style'
import Image from 'next/image';
import Popup from './Popup'
function Vedio() {

    const [  visible , setvisible] = useState(false);
    const toggleMenu = () => {
      setvisible(!visible)
  }
    return (
        <Section>
      
      <div  data-aos="fade-down" className="flex" >
      
      <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617366530/pbnv29bfvx9a0sdvvook.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   

           <div className="circle" >
               <div className="top" >
               The Good Vibes Showreel
               </div>
               <div className="mid" >
               
From single-camera studio setup to multi-camera, multi-crew on-location video production services, we have the expertise and resources to deliver you a world-class video content, the way you envisioned. From script to screen, our expert team of producers, videographers and content developers is here to ensure the success of your project.

               </div>
               <div className="bottom" >
                   <button onClick=  { () => toggleMenu()}>
              
 Watch Our Video
               </button>
               </div>
                
           </div>

           <img  onClick=  { () => toggleMenu()}  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1617804084/goodVibes/ekfhbq5jiqczo6sawuzg.png'} /> 
      
      
      
      </div>
      {visible &&
     <Popup toggle={toggleMenu} />
   }
        </Section>
    )
}

export default Vedio
