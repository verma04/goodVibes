import React , {useEffect , useState} from 'react'
import { Section } from './Style'
import Image from 'next/image';
function partner() {
        const [state, setstate] = useState("")
        useEffect(function() {
                
                  setstate(window.localStorage.theme)
            },[]);
  if(state === "dark") {
  return (
  <Section>
  <div className="head" >
<div  className="left" > 
<h5>Our Clients  </h5>
<p> We’re going to
became partners
for the long run.</p>
</div>
<div  className="right" >
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using <span> Lorem Ipsum is that it has a more-or-less normal</span> distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
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
      <button  >Viddew More</button>
  </div>
</Section>
  )
  }

  else {
    return (
 

        <Section>
            <div className="head" >
   <div  className="left" > 
    <h5>Our Clients  </h5>
    <p> We’re going to
became partners
for the long run.</p>
   </div>
   <div  className="right" >
   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using <span> Lorem Ipsum is that it has a more-or-less normal</span> distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        </div>
            </div>
            
            <div data-aos="fade-down" className="data" >
                <div className="partner" >
                <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619502519/ub7cicgqzfbh0rtcznbe.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                </div>

                <div className="partner" >
                <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619503998/zegtqmj2gh1nqwcukqpe.png"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>

                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619513707/bcgkldpqny9yjl3tiaal.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                  
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619515764/k5hbpm7bphrriazhfwbt.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619513708/uxjdnelkfeyyw6eulowi.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                   
                    
                    
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619514010/dgp9dvtwsdff0haxtjlj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>

                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522285/qz66ahnllijpomjn9ill.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522285/reyjrm5uvoueyrpcjjsq.png"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522286/qn7sclyrudok9kovaa4x.png"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>

                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522286/pf5l6rzxdxmw0u8c7xzm.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619522672/fm11cxk8uehfa5y5gk0n.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
                    </div>
                    
                   
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619523030/h3uyibgffyzhwllf5dk3.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
                 
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619523571/hke5jyptgyomdrlxphqx.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
            </div>
        
            
            <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524087/eaihh5pdetuek2b6jjrj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
            </div>
        
            
            <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524087/ry9d0rvotadctonfnqdj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
            </div>
        
            

                
            <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524388/btpmvd0plv4uhmyg53rc.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
            </div>
        
            
                
            <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1619524388/niio0fpezaniuvyayfea.png'
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
}

export default partner
