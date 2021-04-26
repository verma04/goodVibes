import React from 'react'
import  { Section ,Slider } from './Style'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
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
 
const data  = [

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426702/goodVibes/dvmu3bax079rrs9oxdsb.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426702/goodVibes/i9vcpgeexgdu0gmc2fzc.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426700/goodVibes/uuika07m1yaeqkilkfev.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426701/goodVibes/yjuvnz0xmordmzwmrc34.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426701/goodVibes/grushpgketn15mvdkh2v.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426700/goodVibes/cjqdvthsaftjwpwjlitu.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426695/goodVibes/poygyb4ccnofulygi5ow.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426700/goodVibes/olwnfdzpyfw7ymskks12.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426699/goodVibes/bx4vlvjqbnmvtfxwvexz.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426699/goodVibes/i1g6bguisequz21jlxrq.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426699/goodVibes/tcfknntchgrpammdssyk.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426698/goodVibes/lvzo1aydsxpn2nw93j7n.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426697/goodVibes/k5fmd8mu5s4ipbb7qoq8.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426693/goodVibes/qfed50eho5qfpstihx0v.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426696/goodVibes/p4u4kvl5cltganaxghfd.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426696/goodVibes/ebwe4euceeyg64mbvjcd.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426696/goodVibes/l57epuyjh4cmjscr1iou.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426695/goodVibes/a3xi7zynhde6dhn3nopz.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426695/goodVibes/huvc6mu94po1rqarxtyj.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426694/goodVibes/fjli1mbzyki1s90h9dtw.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426694/goodVibes/uumewgn0ipc88dirvf5f.jpg",

]
const data1  = [

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426694/goodVibes/vpmi7fg5lteaijczoxd9.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426693/goodVibes/elihacslv8kjlfl4h8kw.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426692/goodVibes/vo5oejf18ugk4pjdbccu.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426692/goodVibes/twia9mkwors0sbbpadge.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426692/goodVibes/gvsrnytxd6y3meqimpnk.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426691/goodVibes/ztfam0mxxra3hcw1ttzi.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426691/goodVibes/giiygqaisbbvcphhe7vq.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426690/goodVibes/bdtdpjhz4qtp2zarcxdg.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426689/goodVibes/fqsz4rs6ezhco620l57k.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426686/goodVibes/bwbnvyrtkjvrss1gahfs.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426689/goodVibes/faak3qeznsxdyewaidiz.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426688/goodVibes/csayaunx9ovtympdxuta.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426688/goodVibes/mwyqqtogommpmxiethrj.jpg",

  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426688/goodVibes/b2ty6h82jhxn7jkdxlkb.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426686/goodVibes/ivlsjhmmfatyppjdhc51.jpg",
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1619426686/goodVibes/mvtlwird1oyecxavp2j3.jpg",
 

]


function Team() {
 
    return (
    <  div id="team" data-aos="fade-up"  >
        <Section>
            <div className="head" >
                <h2>Behind the Scenes</h2>
                <div className="mid" >
   
    </div>
            </div>

            
           
        </Section>



        <Carousel
  ssr
  partialVisbile

  itemClass="image-item"
  responsive={responsive}
            >
{data.sort( () => .5 - Math.random()).map(number => 
  <a     className="set">
  <div style={{height:"20rem"}} className='wrapper'>

    <Image style={{width:"100%", height:"100%"}} layout="fill"
           objectFit="cover" src={number} ></Image>
         
            </div>
        

          

            
  </a>


)}


 
 
</Carousel>



<Carousel
  ssr
  partialVisbile

  itemClass="image-item"
  responsive={responsive}
            >

{data1.sort( () => .5 - Math.random()).map(number => 
  <a     className="set">
  <div style={{height:"20rem"}} className='wrapper'>

    <Image style={{width:"100%", height:"100%"}} layout="fill"
           objectFit="cover" src={number} ></Image>
         
            </div>
        

          

            
  </a>


)}

  
 

 
 
 
</Carousel>

<style jsx>{`
         .set {

         }
        .set:before {
          content: "";
          position: absolute;
          bottom: 0;
          height: 100%;
          width: 100%;
          z-index: 100;
        
      
       }
       .name {  
        position: absolute;
        bottom: 10%;
        z-index:999;
        width:95%;
        left:8%;
       
       }
       h2 {
        font-size:1.3rem;
        color:white;
      }
      span {
      color:white;
      }
      `}</style>
          
   </div>
   )
}

export default Team
