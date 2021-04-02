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
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617351800/wsmoijwguig0hc0nv3ix.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   

           <div className="circle" >
               <div className="top" >
               The Good Vibes
Brand Reel
               </div>
               <div className="mid" >
               We work hard to achieve best awards exposing new the ways to evolve our design language, digital literacy. Prethink talk to the slides, regroup your plate, so pivot. 
               </div>
               <div className="bottom" >
                   <button>
               <i class="fab fa-youtube-square"></i>
               <span onClick=  { () => toggleMenu()}>Watch Our Video</span>
               </button>
               </div>
                
           </div>

           <img  onClick=  { () => toggleMenu()}  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616142706/goodVibes/rhriz3nb9nqoxzgcfp7c.png'} /> 
      
      
      
      </div>
      {visible &&
     <Popup toggle={toggleMenu} />
   }
        </Section>
    )
}

export default Vedio
