import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:20rem;
  padding-top:2rem;
 
  width:100%;
 
  

  background: ${({ theme }) => theme.background};
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
      font-size:1.8rem;
      font-family: Mono_bold;
      padding-top: 5rem;
    padding-bottom:2rem;
  }
  p {
    text-align:center;
  
 
    word-spacing:0.4rem;
  }

     
    }
  
 

    
  

}
`