import React from 'react'
import  { Section ,Slider } from './Style'
import Image from 'next/image';
import { useGetGallery } from '@/apollo/actions';
import Carousel from 'react-multi-carousel';
import withApollo from '@/hoc/withApollo';
import { useGetTests } from '@/apollo/actions';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
 
// const data  = [

// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607310/goodVibes/chjyiuqo1vpbrqz3zzfe.jpg",
// 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607309/goodVibes/eutah6sewz11gxcmsepw.jpg',
// 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607309/goodVibes/wvnbb5k2i0jlit8kwurf.jpg',
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607310/goodVibes/gvcxaw4uzgkziru3p52k.jpg",
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607309/goodVibes/olnxf9muioajijk4ilsy.jpg",
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607308/goodVibes/ujvz565i8wevjiqrc2dg.jpg",
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607309/goodVibes/nkqoglv4vuyqwmwq4xpf.jpg",
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607308/goodVibes/tbgmttx9rnunydkxxvtd.jpg",
// "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607308/goodVibes/szxgpnu8owaa7kq5flli.jpg",

// ]
// const data1  = [

//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607307/goodVibes/qyn228celxirb3k3rjmu.jpg",
//   'https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607308/goodVibes/b8dvqvukwshs2fm4nczn.jpg',
//   'https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607306/goodVibes/cy3h2d86mxxxy3xfgwmn.jpg',
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607306/goodVibes/dnzsjdqnhyhmr70pmhff.jpg",
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607306/goodVibes/vhrye0dqpshr1h4xjqk1.jpg",
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607306/goodVibes/gwhu3jij6psuqnm9emfu.jpg",
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607306/goodVibes/dn3a9azlynl5z1vtully.jpg",
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607305/goodVibes/l4qv4oo7rqzimgozgnti.jpg",
//   "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619607305/goodVibes/bsvxqdjnhqjkb1ad0tb5.jpg",
// ]



function Team({data}) {

 
 
    return (
    <div id="team" data-aos="fade-up"  >
        <Section>
            <div dangerouslySetInnerHTML={{__html: data.page.homegalleyheading}} className="head" >

      
            </div>

            
           
        </Section>



         <Carousel
  ssr
  partialVisbile

  itemClass="image-item"
  responsive={responsive}
            >
{data.page.homegalleyone.sort( () => .5 - Math.random()).map(number => 
  <div    className="set">
  <div style={{height:"20rem"}} className='wrapper'>

    <Image style={{width:"100%", height:"100%"}} layout="fill"
           objectFit="cover" src={number} ></Image>
         
            </div>
        

          

            
  </div>


)}


 
 
</Carousel>



<Carousel
  ssr
  partialVisbile

  itemClass="image-item"
  responsive={responsive}
            >

{data.page.homegalleytwo.sort( () => .5 - Math.random()).map(number => 
  <div     className="set">
  <div style={{height:"20rem"}} className='wrapper'>

    <Image style={{width:"100%", height:"100%"}} layout="fill"
           objectFit="cover" src={number} ></Image>
         
            </div>
        

          

            
  </div>


)}

  
 

 
 
 
</Carousel> 

<style jsx>{`
.wrapper { 
  transition: transform 5s;
  
}

.wrapper:hover {
  transform: scale(1.5); 
}

      
      `}</style>
          
   </div>
   )
}

export default   Team
