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
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260065/goodVibes/u4nf7lxjtxa6k4qzavfl.jpg"
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260065/goodVibes/jqrck9fw3nfuywrjr1qy.jpg"
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>

          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/nqpnclcb1oegcde8smgl.jpg'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/z76zdjc339jdxxy4yzsj.jpg'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 />   
          </div>
          
         
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/nwo0bam38fg0ou20npqg.jpg'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
 </div>
       
          <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/kaphn9ty9skwtg3c3yht.jpg'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
  </div>
  <div className="partner" >
          <Image
  className="myImage"
 src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/mubea31erup0ytistwdw.jpg'
 alt="Picture of the author"
 layout="fill"
 objectFit="cover"
 /> 
          </div>
  <div className="partner" >
          <Image
  className="myImage"
 src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260083/goodVibes/tctkkrjbaucuy5cuqwp1.jpg"
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
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260065/goodVibes/t0ox75fhbsd8azupxczm.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260065/goodVibes/u4nf7lxjtxa6k4qzavfl.jpg"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260065/goodVibes/jqrck9fw3nfuywrjr1qy.jpg"
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>

                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/nqpnclcb1oegcde8smgl.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/z76zdjc339jdxxy4yzsj.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   
                    </div>
                    
                   
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/nwo0bam38fg0ou20npqg.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
                 
                    <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/kaphn9ty9skwtg3c3yht.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
            </div>
            <div className="partner" >
                    <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260066/goodVibes/mubea31erup0ytistwdw.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
                    </div>
            <div className="partner" >
                    <Image
            className="myImage"
           src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617260083/goodVibes/tctkkrjbaucuy5cuqwp1.jpg"
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
