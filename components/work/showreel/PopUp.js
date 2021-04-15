import React from 'react'
import ReactPlayer from 'react-player';
import { Pop } from './PopStyle'
function Popup({toggle , id}) {
    return (
  <Pop >
        <div  id="myModal" class="modal">


        <div class="modal-content">
        <ReactPlayer
                   volume={0} 
                   className='react-player'
               
                   volume={100}
          url={`https://www.youtube.com/watch?v=N1CrFoJMwEI`}
          playing={true}
          loop={true} 
          width='100%'
          height='100%'
        />
            
        <i onClick={()  => toggle()} class="fas fa-times"></i>
             
             </div> 
        
             </div>
             </Pop> 
    )
}

export default Popup
