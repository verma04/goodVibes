import React from 'react';
import { Section} from './Style'
import Image from 'next/image';
function Testimonials() {
    return (
        <Section>
        <div className="head" >
            <p>See What Our Clients Have to Say</p>
            <h2>Testimonials</h2>
        </div>

        <div  className="grid" >
          
          <div className='test' > 
           
           <div className="data" >
           <i class="fas fa-quote-left"></i>
        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145797/goodVibes/vku0bbpkvicowiapi0xz.png'} ></img>
              </div>
              <h5>Client Name</h5>
              <p>Designation</p>
               </div>
           </div>
          </div>
         
        
          <div className='test' > 
          
          <div className="data" >
           <i class="fas fa-quote-left"></i>
        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145322/goodVibes/ukbumrnhlcgljqbkymtd.png'} ></img>
              </div>
              <h5>Client Name</h5>
              <p>Designation</p>
               </div>
           </div>
          
           </div>
          <div className="active" >
   <div className="data" >
   <i class="fas fa-quote-left"></i>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png'} ></img>
              </div>
              <h5>Client Name</h5>
              <p>Designation</p>
               </div>
   
   </div>
  

          </div>
         </div>
    </Section>

    )
}

export default Testimonials
