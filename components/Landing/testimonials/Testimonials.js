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
        <p> I have worked with Maxwel and would highly recommend him. He is extremely dedicated and goes out of his way to help the production get on its feet and sprint.
         </p>
         <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145797/goodVibes/vku0bbpkvicowiapi0xz.png'} ></img>
              </div>
              <h5>ADITYA THAYI
</h5>
              <p>ENDO PRODUCTIONS, SINGAPORE
</p>
               </div>
           </div>
          </div>
         
        
          <div className='test' > 
          
          <div className="data" >
           <i class="fas fa-quote-left"></i>
        <p>   
Whoever believes that you can’t put a timeline on creativity, should definitely work with the folks at Good Vibes once! Their team had the patience and ability to not only understand our 

         </p>
         <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145322/goodVibes/ukbumrnhlcgljqbkymtd.png'} ></img>
              </div>
              <h5>VIVIAN ALBERT NICHOLAS</h5>
              <p>NEW BUSINESS DEVELOPMENT, 22FEET TRIBAL WW</p>
               </div>
           </div>
          
           </div>
          <div className="active" >
   <div className="data" >
   <i class="fas fa-quote-left"></i>
       <p>The one thing standing out at Good Vibes is their 'Never say No' attitude. Have never had a service or requirement not done by them. </p>
       <div className="profile" >
              <div className='img' >
                  <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616145728/goodVibes/vyqbqj889dqdbmpi8v0k.png'} ></img>
              </div>
              <h5>EKANT BABANI</h5>
              <p>PARTNER, ALLIGATOR MEDIA</p>
               </div>
   
   </div>
  

          </div>
         </div>
    </Section>

    )
}

export default Testimonials
