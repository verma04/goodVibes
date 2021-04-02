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
       We do care about details
and stuff.
            </div>

       </div>

       <div  className="bottom" >
   <li onClick={()=> router.push('/about')} >About</li>
   <li onClick={()=> router.push('/work')}>Work</li>
   <li>Carrer</li>
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
       <li>info@goodvibes.com
</li>

       <li>+91 988-719-0102</li>
   </ul>
      
       </div>
       </div>

       <div  className="bottom" >
   <div className="bottom-1" >
   <i class="fab fa-facebook-f"></i>
   <i class="fab fa-instagram"></i>
   <i class="fab fa-twitter"></i>
   <i class="fab fa-dribbble"></i>
   </div>
   <div className="bottom-2" >
   © 2020. Copyright GoodVibes
   </div>
       </div>


  </div>
            </div>
        </Foot>
    )
}

export default Footer
