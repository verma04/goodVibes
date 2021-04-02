import React from 'react'
import ReactPlayer from 'react-player';
import { Pop } from './PopStyle'
function Popup({toggle}) {
    return (
  <Pop >
        <div data-aos="fade-up" id="myModal" class="modal">


        <div class="modal-content">
        <ReactPlayer
                   volume={0} 
                   className='react-player'
               
                   volume={100}
          url={`https://www.youtube.com/watch?v=N1CrFoJMwEI`}
          playing={true}
          loop={true} 
          width='150%'
          height='150%'
        />
            
        <i onClick={()  => toggle()} class="fas fa-times"></i>
             
             </div> 
        
             </div>
             </Pop> 
    )
}

export default Popup
