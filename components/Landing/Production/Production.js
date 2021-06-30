import React ,  {useEffect , useState} from 'react';
import { Section } from './Style'
import Image from 'next/image';
import { Pop} from './Pop'
import { useGetServices } from '@/apollo/actions';
import { useRouter } from 'next/router'
function Production() {
    const [state, setstate] = useState("")
 
    const [  visible , setvisible] = useState(false);
    const [  visible1 , setvisible1] = useState(false);
    const [  visible2 , setvisible2] = useState(false);
    const { data , loading , error } = useGetServices();
    const cafes = data && data.cafes || [];

    const router = useRouter()
  
    const toggleMenu = async (number) => {
      await setvisible(number)
     
  }

    
    useEffect(function() {
            
              setstate(window.localStorage.theme)
        },[]);
  

    if(  loading ) {
        return (
            null
        )
    }


        if(state === "dark") {
    return (
        <Section>

        <div id="service" className="head" >
           
            <h2>Services We Provide</h2>

        </div>
        <div className="data" >

            {data.services.edges.map(number => 
<>
<div key={number.node.serviceId} data-aos="fade-up" className="pro" >
<div className="logo" >

<Image
       className="myImage"
       src={number.node.featuredImage.node.sourceUrl}
      alt="Picture of the author"
      layout="fill"
      objectFit="contain"
      />   

</div>

<div className="set" >
 <h2>{number.node.title}</h2>
 

 <ul   dangerouslySetInnerHTML={{__html: number.node.content}} >

 </ul>
     




</div>
<i onClick=  { () => toggleMenu(number.node.serviceId)} class="fas fa-plus-circle"></i>




           </div>


{visible === number.node.serviceId &&
 <Pop>
 <div  id="myModal" class="modal">


<div class="modal-content">
            
              
<i onClick={() => setvisible(false) } class="fas fa-times"></i>
<div data-aos="fade-up" className="pro" >
<div className="logo" >

<Image
       className="myImage"
       src={number.node.featuredImage.node.sourceUrl}
      alt="Services Icon"
      layout="fill"
      objectFit="contain"
      /> 

</div>

<div className="set"  dangerouslySetInnerHTML={{__html: number.node.content}} >

</div>




            </div>


  </div> 
  </div>       
         
     </Pop>
        }
        </>
         
            
            )


            }
     
          
           
   
          
            

        </div>
        

        <div data-aos="zoom-out" className="button" >
            <button  onClick={() => router.push("/contactus#form") } >Lets Talk</button>
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

               {data.services.edges.map(number => 
<>
<div key={number.node.serviceId} data-aos="fade-up" className="pro" >
<div className="logo" >

<Image
          className="myImage"
          src={number.node.featuredImage.node.sourceUrl}
         alt="Picture of the author"
         layout="fill"
         objectFit="contain"
         />   
 
</div>

<div className="set" >
    <h2>{number.node.title}</h2>
    

    <ul   dangerouslySetInnerHTML={{__html: number.node.content}} >

    </ul>
        



  
</div>
<i onClick=  { () => toggleMenu(number.node.serviceId)} class="fas fa-plus-circle"></i>




              </div>


{visible === number.node.serviceId &&
    <Pop>
    <div  id="myModal" class="modal">


<div class="modal-content">
               
                 
<i onClick={() => setvisible(false) } class="fas fa-times"></i>
   <div data-aos="fade-up" className="pro" >
 <div className="logo" >

 <Image
          className="myImage"
          src={number.node.featuredImage.node.sourceUrl}
         alt="Picture of the author"
         layout="fill"
         objectFit="contain"
         /> 
  
 </div>

 <div className="set"  dangerouslySetInnerHTML={{__html: number.node.content}} >
   
 </div>
 



               </div>


     </div> 
     </div>       
            
        </Pop>
           }
           </>
            
               
               )


               }
        
             
              
      
             
               

           </div>
           

           <div data-aos="zoom-out" className="button" >
               <button  onClick={() => router.push("/contactus#form") } >Lets Talk</button>
           </div>
       </Section>
 


            
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
