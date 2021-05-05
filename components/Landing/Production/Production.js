import React ,  {useEffect , useState} from 'react';
import { Section } from './Style'
import Image from 'next/image';
import { Pop} from './Pop'
import { useRouter } from 'next/router'
function Production() {
    const router = useRouter()
    const [state, setstate] = useState("")
    const [  visible , setvisible] = useState(false);
    const [  visible1 , setvisible1] = useState(false);
    const [  visible2 , setvisible2] = useState(false);
    const toggleMenu = async () => {
      await setvisible(!visible)
      await  setvisible1(false)
      await  setvisible2(false)
  }
  const toggleMenu1 = async () => {
    await setvisible1(!visible)
    await  setvisible(false)
    await  setvisible2(false)
}
const toggleMenu2 = async () => {
    await setvisible2(!visible)
    await  setvisible1(false)
    await  setvisible(false)
}
    
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

<i  class="fas fa-plus-circle"></i>



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
<i class="fas fa-plus-circle"></i>
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
<i class="fas fa-plus-circle"></i>
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
        
               <>
           
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
     

         <li>Commercial & Brand Films</li>
         <li>Corporate & Internal Videos</li>
         <li>Animation & Explainers</li>
         <li>Event & Conferences</li>
         



   
 </div>
 <i onClick=  { () => toggleMenu()} class="fas fa-plus-circle"></i>



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

     




     <li>Commercials</li>
  <li>Non-Fiction shows</li>
  <li>Print & Digital Media</li>
  <li>Celebrity Endorsements</li>
 </div>
 <i onClick=  { () => toggleMenu1()} class="fas fa-plus-circle"></i>
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



 <li> Location Scouting</li>
 <li> Equipment & Manpower Hiring</li>
 <li> Budgeting & Scheduling</li>
 <li> Aligning Cast & Crew</li>
 <li> Permissions</li>
 </div>
 <i  onClick=  { () => toggleMenu2()} class="fas fa-plus-circle"></i>
               </div>
              
           
             
               

           </div>
           

           <div data-aos="zoom-out" className="button" >
               <button  onClick={() => router.push("/contactus#form") } >Lets Talk</button>
           </div>
       </Section>
 
 {visible &&
    <Pop>
    <div  id="myModal" class="modal">


<div class="modal-content">
               
                 
<i onClick={() => setvisible(false) } class="fas fa-times"></i>
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

     <li>Commercial & Brand Films</li>
         <li>Corporate & Internal Videos</li>
         <li>Animation & Explainers</li>
         <li>Event & Conferences</li>
     <p>  

        
     Good Vibes aims to break the conventional mold and present the audience with freshly brewed content. We are envisioned to produce the perfect package from conceptualizing scenarios, script writing, storyboarding, to finally executing it with sound creative abilities and technical skills. Since then the company has been associated with a number of big & small production houses/channels/agencies for various projects.
   


     </p>
 </div>
 



               </div>


     </div> 
     </div>       
            
        </Pop>
           }

            
 {visible1 &&
    <Pop>
      <div  id="myModal" class="modal">


      <div class="modal-content">
               
      <i  onClick={() => setvisible1(false) } class="fas fa-times"></i>     
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

     




     <li>Commercials</li>
  <li>Non-Fiction shows</li>
  <li>Print & Digital Media</li>
  <li>Celebrity Endorsements</li>

  <p>


  Good Vibes is a full-service talent agency headquartered in New Delhi with an additional office in Mumbai. With a pool of young talent, actors, models, directors, and dancers in all areas of the entertainment industry, we have built a solid reputation as one of India's most trusted and known casting agencies.   
Our divisions include Commercials, Non-Fiction shows, Print, Digital Media, and Celebrity Endorsements.
  </p>
 </div>

               </div>
         
         </div>
            </div>
                 
            
        </Pop>
           }

{visible2 &&
    <Pop>
   
               
   <div  id="myModal" class="modal">


<div class="modal-content">      
<i   onClick={() => setvisible2(false) } class="fas fa-times"></i>
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


     <li> Location Scouting</li>
 <li> Equipment & Manpower Hiring</li>
 <li> Budgeting & Scheduling</li>
 <li> Aligning Cast & Crew</li>
 <li> Permissions</li>
<p>
We help in assisting production companies from all over the world to shoot in India. We are your one stop destination for providing locations, equipment, cast & crew for shooting across India and take the advantage of the locations we have to offer. We also help in providing assistance in acquiring any kind of permissions required for filming in India.
</p>
    
 </div>

               </div>
              
             
            </div>
            </div>
        </Pop>
           }
           </>
           )

        }
}

export default Production
