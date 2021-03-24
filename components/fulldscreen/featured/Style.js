import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:30rem;
  width:100%;
  margin-top:5rem;
 
@media (min-width: 1025px) {
  
    .head {
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column; 
  width:30%;
  height:15%;
  h2 {
       font-weight:900;
  }
 
    }
    .data {
        width:95%;
     
        height:85%;
          display:flex;
           justify-content:center;
           align-items:center;
           flex-wrap: wrap;
         .img{
           width:30%;
           height:50%;
            position:relative;
            transition: transform .8s;
         }
         .img:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  transform: scale(1.1); 
 z-index:1;
}
    }

  
 

    
  

}
`