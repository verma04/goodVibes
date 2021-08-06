import React , {useEffect , useState} from 'react'
import { Section } from './Style'
import Image from 'next/image';
function partner({data}) {
        
        const [state, setstate] = useState("")
        useEffect(function() {
                
                  setstate(window.localStorage.theme)
            },[]);
  if(state === "dark") {
  return (
  <Section>
  <div className="head" >
<div  className="left" > 
<h5>  </h5>
<p>Our Clients - we become your partners for the long run</p>
</div>
<div  className="right" >
<p>We are creatively involved in a project starting from ideation, conceptualization, storyboarding, production, post-production to the final delivery of the product. </p>
</div>
  </div>
  
  <div data-aos="fade-down" className="data" >
      <div className="partner" >
      <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619503291/pccqrnbtedh5eybzklr3.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
      </div>

      <div className="partner" >
      <Image
  className="myImage"
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619503998/bc97dsfymuqbpkarphn3.png"
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>

          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619513707/uwmtce4nf2olpf2bxfcf.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619513707/vrdxgq2fdggpldeqras1.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
       
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619513708/lgr7j7bqbdr1wlfqt0gh.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>

          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619514010/qjwuhdj6irwggc3vvviq.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522285/apykpnv5dwr7sux599us.png"
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522285/zfdnfjyuj6dhleiorapa.png"
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>

          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522286/njwnninczig1gsa7m0fs.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522286/gocsatgqzrlh3dekegz4.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 />   
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522672/ea0v2fwzru9efx4lcugu.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>
         
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619523030/ios6xhrd2xsqm2r4zsc5.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>

       
   

 <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619523571/ipb5nzuqpvhykcwntxe5.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>

 <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524087/llkbuis6h5gfvcm2bo4h.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>
 <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524087/rz6v4suvu8nhtsbdgkx6.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>

 <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524388/s7ah99qfbjkegs92cyh4.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>

 <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524388/yj3uej3gmgra3cszs4ky.png'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>
       
      
       
       
 
  </div>

  <div data-aos="zoom-out" className="button" >
      <button  >View More</button>
  </div>
</Section>
  )
  }

  else {
    return (
 

        <Section>
            <div className="head" >
   <div  className="left" > 
    <h5>  </h5>
    <p>Our Clients - We become your partners for the long run</p>
   </div>
   <div  className="right" >
   <p>We are creatively involved in a project starting from ideation, conceptualization, storyboarding, production, post-production to the final delivery of the product. </p>
        </div>
            </div>
            
            <div data-aos="fade-down" className="data" >
            {data.clientsgalley.map(number => 

    
   
<div className="partner" >
<Image
className="myImage"
src={number}
alt="Partner Logo"
layout="fill"
objectFit="cover"
/> 
</div>

)}
                   
              
            
           
            
            </div>

            <div data-aos="zoom-out" className="button" >
                <button  >View More</button>
            </div>
        </Section>
    
    
    )
  }
}

export default partner
