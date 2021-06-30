
import { Section } from './Style'
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect  , useState  } from 'react';
import { useGetVedios } from '@/apollo/actions';
import "aos/dist/aos.css";





function showreel({id}) {
    const [active, setactive] = useState("Digital");
    const [  visible , setvisible] = useState(false);
    const [  ani , setani] = useState("fade-up");
    const toggleMenu = id => {
      setvisible(id)
  }
  const { data , loading , error } = useGetVedios();
const cafes = data && data.cafes || [];

console.log(data , id)

if(  loading ) {
    return (
        null
    )
}


    return (
      
    

        
  

  <div  className="list" >
    {data.portfolios.edges.filter(element =>  element.node.portfolioTypes.edges[0].node.name === id).reverse().map((number) => 
    
   
    <div  key={number.node.portfolioId} className="data" >
       <div className="cover" >
      
     <Image
            className="myImage"
            src={`https://img.youtube.com/vi/${number.node.portfolioVideoUrl.slice(17)}/hqdefault.jpg`}

           alt="Picture of the  ThumbNail"
           layout="fill"
           objectFit="cover"
           /> 
      
  <div className="title" >
           <h4>{number.node.title}</h4>
           </div>
           </div>  
    <div className="img" >
        <img alt="Play Button" onClick={() => toggleMenu(number.node.portfolioId) }  src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616750466/auegoewnepob301zsbj8.svg" ></img>
         </div>

         {visible === number.node.portfolioId &&
      
      <div id="myModal" class="modal">


<div class="modal-content">
<ReactPlayer
           volume={0} 
           className='react-player'
       
           volume={100}
  url={number.node.portfolioVideoUrl}
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
