import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:25rem;
  padding-top:2rem;
 
  width:100%;
  margin-top:7rem;
  position: absolute;
  background-color:white;
  bottom:-17%;
  background: #FBFBFB;
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
      padding-top: 6.5rem;
    padding-bottom:2rem;
  }
  p {
    text-align:center;
    padding-bottom:8rem;
    font-size:1.4rem;
    word-spacing:0.4rem;
  }

     
    }
  
 

    
  

}
`