import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;
  width:100%;
  margin-top:5rem;
  
@media (min-width: 1025px) {
  
    
  .flex-1 {
      width:60%;
      display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:100%;
  h2 {
      text-align:center;
      font-weight:600;
  }
  p {
    text-align:center;
  }

     
    }
  
 

    
  

}
`