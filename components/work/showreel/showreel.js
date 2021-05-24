
import { Section } from './Style'

import { useEffect  , useState  } from 'react';

import "aos/dist/aos.css";
import List from './List'
import { useRouter } from 'next/router'
const data1 = [
     
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573364/AirJaldi/safmqqbnjhgzuos3tpbl.jpg',
        _id:"1",
 titile:"dssd",
link:'bHjKxgjvuR4',
title:`Customers in India enjoy interacting with Alexa`


    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573409/AirJaldi/fk5xhovvhfzq7em7wf7o.jpg',
        _id:"2",
        titile:"dssd",
       link:"5TvG2RmUD7k",
       title:`#CelebrationTohBantaHai ft. #ShankarMahadevan || Rajkummar Rao & Patralekhaa`
    },
    { img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573703/AirJaldi/htjw8q2qmq9r5gvf9xw9.jpg',
        _id:"3",
        titile:"dssd",
       link:"n7B_LhzZoBg",
       title:`Celebrate Diwali with Grofers- Iss Diwali, bhar ke khushiyaan layein !`
    },

    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618572875/AirJaldi/oz7vfpa0enstbrqjqhrw.jpg',
        _id:"4",
        titile:"dssd",
       link:"aULnvrUWaMQ",
       title:`Dastak Khushiyon Ki - Amazon India Great Indian Festival 2020`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573476/AirJaldi/zen5fkckhdjymmm5or6d.jpg',
        _id:"5",
        titile:"dssd",
       link:"4LeJdDsv0Vc",
       title:`Ford Ecosport 2018 Unboxing`
    },
    {
      img:'https://res.cloudinary.com/dzcmadjl1/image/upload/v1618573476/AirJaldi/modadlg7n17c54xwkffx.jpg',
        _id:"6",
        titile:"dssd",
       link:"rrgYJ_M2GTM",
       title:`International Women’s Day | #ChallengeChampionChange`
    },

    
    
  //   {
  //     _id:"6",
  //     titile:"dssd",
  //    link:"7E9pj86uIik",
  //    title:`BMW 360 Financial Services`
  // },

//   {
//     _id:"6",
//     titile:"dss",
//    link:"EFaC7XVPYDQ",
//    title:`The story of sibling love`
// },


// {
//   _id:"6",
//   titile:"dss",
//  link:"H5m25dif7bc",
//  title:`A story of hardwork and conviction`
// },


// {
//   _id:"6",
//   titile:"dss",
//  link:"Tq_5-PRzMMc",
//  title:`No lockdown for learning`
// },

// {
//   _id:"6",
//   titile:"dss",
//  link:"c9pGBidPDT0",
//  title:`The story of sibling love`
// },

// {
//   _id:"6",
//   titile:"dss",
//  link:"gEdz4-c9FN4",
//  title:`A remarkable story from the lanes of Indore`
// },


    


]

import { useGetCategory } from '@/apollo/actions';

function showreel() {
  const router = useRouter()

  const [active, setactive] = useState("Brands");
  const [  visible , setvisible] = useState(false);
  const [  ani , setani] = useState("fade-up");
  const toggleMenu = id => {
    setvisible(id)
}


  const { data , loading , error } = useGetCategory();
const cafess = data && data.cafess || [];



if(  loading ) {
    return (
        null
    )
}
 


    return (
        <Section>
         <div className="head" >
    
<h2>Portfolio</h2>

         </div>

         <div className="ved" >
  
  <div className="top" >
   
  
  {data.portfolioTypes.edges.sort((a, b) => a.node.termTaxonomyId - b.node.termTaxonomyId).map(number => 
  <>
 
      <li onClick={() =>  setactive(number.node.name) } id={active === number.node.name ? "active" : ""}  >{number.node.name}</li>
     
     </>
      )

   }
    
     
  </div>

   
  <div className="top-1" >
   
  <i className="fas fa-sort-down"></i>
  {data.portfolioTypes.edges.sort((a, b) => a.node.termTaxonomyId - b.node.termTaxonomyId).map(number => 
   
      
      <li className="shwo-cat"  onClick={() =>  setactive(number.node.name) } id={active === number.node.name ? "active" : ""}  >{number.node.name}</li>

   )

   }
    
     
  </div>


            <List  id={active}/>
     


     

         </div>
        </Section>
    )
}

export default showreel
