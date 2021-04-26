import React from 'react';
import { Foot } from './Style'
import Image from 'next/image';
import { useRouter } from 'next/router'
function Footer() {
    const router = useRouter()
    return (
        <Foot>
            <div className='flex' >
  
  <div className="left" >
   <div  className="top" >
       <div className="footer-logo" >
       <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616129279/goodVibes/vbesqeqpcbryfpenmfkj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           />   

       </div>

       <div className="footer-logo-text">
       Hello, let's talk about the details.
            </div>

       </div>

       <div  className="bottom" >
   <li onClick={()=> router.push('/about')} >About</li>
   <li onClick={()=> router.push('/work')}>Work</li>
   <li>Career</li>
       </div>

  </div>
  <div className="right" >

  <div  className="top" >
       <div className="top-1" >
           <p>“There are no secrets to success. It is the result of preparation, hard work, and ongoing learning.”</p>
       </div>
       <div className="top-2" >
   <ul>
       <li>Visit us</li>
       <li>GoodVibes </li>
       <li>Delhi</li>
 <li>Mumbai, India</li>

       
   </ul>
   <ul>
       <li>Contact us</li>
       <li> dennis@thegoodvibes.co.in
</li>

       <li>+91 988-719-0102</li>
   </ul>
      
       </div>
       </div>

       <div  className="bottom" >
   <div className="bottom-1" >
       <a target="_blank" href="https://www.facebook.com/goodvibesindia">
       <i  class="fab fa-facebook-f"></i>
       </a>
    <a target="_blank" href="https://www.instagram.com/goodvibesindia/">
    <i  class="fab fa-instagram"></i>
    </a>
  
   <a target="_blank" href="https://twitter.com/GoodVibesIndia">
   <i   class="fab fa-twitter"></i>
   </a>
   
   {/* <a target="_blank" href="http://www.facebook.com/AirJaldi">
   <i    class="fab fa-dribbble"></i>
   </a>
    */}
   </div>
   <div className="bottom-2" >
   © 2016-2021 Good Vibes Entertainment LLP, All Rights Reserved.
   </div>
       </div>


  </div>
            </div>
        </Foot>
    )
}

export default Footer
