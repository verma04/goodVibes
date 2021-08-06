
import { Section } from './Style'

import { useEffect  , useState  } from 'react';

import "aos/dist/aos.css";
import List from './List'
import { useRouter } from 'next/router'


import { useGetCategory } from '@/apollo/actions';

function showreel({data1}) {
  console.log(data1)
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
