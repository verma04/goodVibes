import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:12rem;
  padding-top:2rem;
  width:100%;
  margin-top:5rem;
  position: absolute;
  background-color:white;
  bottom:0;
@media (min-width: 1025px) {
  
    
  .flex-1 {
      width:60%;
      display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
      text-align:center;
      font-weight:600;
      font-family: Mono_bold;
      padding-top: 10rem;
    padding-bottom:2rem;
  }
  p {
    text-align:center;
    padding-bottom:8rem;
  }

     
    }
  
 

    
  

}
`