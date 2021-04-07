import React from 'react'
import Image from 'next/image';
import { Section } from './Style'
function Form() {
    return (
        <Section>
        <div  data-aos="fade-left" className="flex" >
          <div className="list" >
              <span>Our Offices</span>
              <h2>Good Vibes</h2>
          </div>
          <div className="list" >

              <ul>
                  <li>  <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617360176/cwpsxfrm8orr8n79pakl.png" /><h4>Good Vibes Delhi </h4></li>

   

                  <li><i class="fas fa-phone-alt"></i><span> Good Vibes Delhi </span></li>
                  <li><i class="fas fa-envelope"></i><span>E-914, Lower Ground Floor,</span></li>

                  <li><i class="fas fa-map-marker-alt"></i><span> Chittaranjan Park
                   New Delhi 110019</span></li>
               
              </ul>
          </div>
         
         
         
          <div className="list" >
         

<ul>
    <li>  <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617360176/cwpsxfrm8orr8n79pakl.png" /><h4> Good Vibes Mumbai</h4></li>
    <li><i class="fas fa-phone-alt"></i><span>503, Lashkariya Tower, 3, New Link Rd,</span></li>
    <li><i class="fas fa-envelope"></i><span> Shakti nagar, Veera Desai Industrial Estate, Andheri West</span></li>

    <li><i class="fas fa-map-marker-alt"></i><span>Mumbai, Maharashtra 400102
</span></li>
 
</ul>
</div>



        </div>
        </Section>
    )
}

export default Form
