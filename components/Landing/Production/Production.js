import React ,  {useEffect , useState} from 'react';
import { Section } from './Style'
import Image from 'next/image';
function Production() {
    const [state, setstate] = useState("")
    useEffect(function() {
            
              setstate(window.localStorage.theme)
        },[]);
        if(state === "dark") {
    return (
        <Section>
        
        <div id="service" className="head" >
           
            <h2>Services We Provide</h2>

        </div>
        <div className="data" >
        <div data-aos="fade-up" className="pro" >
<div className="logo" >
<Image
        className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608573/sxaulxzlfooszyossmh7.png'
       alt="Picture of the author"
       layout="fill"
       objectFit="contain"
       />  
 
</div>

<div className="set" >
  <h2>TV & Film Production</h2>
  <li>Commercial & Brand Films</li>
         <li>Corporate & Internal Videos</li>
         <li>Animation & Explainers</li>
         <li>Event & Conferences</li>
</div>

            </div>
            <div data-aos="fade-up" className="pro" >
<div className="logo" >

<Image
        className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608574/tlgpqf25hb3vqomfmnhh.png'

       alt="Picture of the author"
       layout="fill"
       objectFit="contain"
       />   
</div>

<div  className="set" >
  <h2>Casting</h2>
  <li>Our divisions include Commercials</li>
  <li>Non-Fiction shows</li>
  <li>Print, Digital Media</li>
  <li>and Celebrity Endorsements</li>

</div>

            </div>
         
           
            <div data-aos="fade-up" className="pro" >
<div className="logo" >

 
       <Image
        className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608574/ndia0abizmpgujq4nfm0.png'

       alt="Picture of the author"
       layout="fill"
       objectFit="contain"
       />  
</div>

<div className="set" >


  <h2>Line Production</h2>
  <p>We are creatively involved in a project starting from ideation, conceptualization, storyboarding, production, post production to the final delivery of the product.</p>
</div>

            </div>
           
        
          
            

        </div>
        

        <div data-aos="zoom-out" className="button" >
            <button  >Let’s Collaborate</button>
        </div>
    </Section>


      
  )
        }
        else  {
            return (
        
               
           
           <Section>

           <div id="service" className="head" >
              
               <h2>Services We Provide</h2>

           </div>
           <div className="data" >
           <div data-aos="fade-up" className="pro" >
 <div className="logo" >

 <Image
           className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608574/qxicr1fhgxs6lgv0y93q.png'
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          />   
  
 </div>

 <div className="set" >
     <h2>TV & Film Production</h2>
     <p>

         <li>Commercial & Brand Films</li>
         <li>Corporate & Internal Videos</li>
         <li>Animation & Explainers</li>
         <li>Event & Conferences</li>
         



     </p>
 </div>

               </div>
               <div data-aos="fade-up" className="pro" >
 <div className="logo" >

 <Image
           className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608574/xxu5xfi9fke0lqve7vyo.png'

          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          />   
 </div>

 <div  className="set" >
     <h2>Casting</h2>
     <li>Our divisions include Commercials</li>
  <li>Non-Fiction shows</li>
  <li>Print, Digital Media</li>
  <li>and Celebrity Endorsements</li>
 </div>

               </div>
            
              
               <div data-aos="fade-up" className="pro" >
 <div className="logo" >


<Image
           className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619608574/ekhbeujxxboa8crnrqt3.png'

          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          /> 
 </div>

 <div className="set" >
 

     <h2>Line Production</h2>
     <p>We are creatively involved in a project starting from ideation, conceptualization, storyboarding, production, post production to the final delivery of the product.</p>
 </div>

               </div>
              
           
             
               

           </div>
           

           <div data-aos="zoom-out" className="button" >
               <button  >Let’s Collaborate</button>
           </div>
       </Section>
 
 
           )

        }
}

export default Production
