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
         position: relative;

    }

  
 

    
  

}
`