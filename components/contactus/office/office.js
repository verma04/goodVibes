import React from 'react'
import Image from 'next/image';
import { Section } from './Style'
function Form() {
    return (
        <Section>
        <div  className="flex" >
          <div className="list" >
              <span>Our Offices</span>
              <h2>Good Vibes</h2>
          </div>
          <div className="list" >

              <ul>
                  <li>  <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617360176/cwpsxfrm8orr8n79pakl.png" /><h4>India HQ</h4></li>
                  <li><i class="fas fa-phone-alt"></i><span>+91-1234567890</span></li>
                  <li><i class="fas fa-envelope"></i><span>hello@email.com</span></li>

                  <li><i class="fas fa-map-marker-alt"></i><span>#123, dskgjkjd, dsagnjkdsa
dfahfdhdfhdafhfdh</span></li>
               
              </ul>
          </div>
         
         
         
          <div className="list" >

<ul>
    <li>  <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617360176/cwpsxfrm8orr8n79pakl.png" /><h4>India HQ</h4></li>
    <li><i class="fas fa-phone-alt"></i><span>+91-1234567890</span></li>
    <li><i class="fas fa-envelope"></i><span>hello@email.com</span></li>

    <li><i class="fas fa-map-marker-alt"></i><span>#123, dskgjkjd, dsagnjkdsa
dfahfdhdfhdafhfdh</span></li>
 
</ul>
</div>



        </div>
        </Section>
    )
}

export default Form
