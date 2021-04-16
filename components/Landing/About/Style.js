import styled from 'styled-components'



export const Section = styled.section`

@media (min-width: 1025px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:18rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
  position: absolute;
 
  bottom:-5%;
  .flex-1-sm {
    display:none;
  }

    
  .flex-1 {
      width:60%;
      display:flex;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.8rem;
      font-family: Mono_bold;
  

  }
  p {
    text-align:center;
  
 

  }

     
    }
  
 

    
  

}
@media (min-width: 768px) and (max-width: 1024px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:12rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
  position: absolute;
 
  bottom:-5%;
  .flex-1-sm {
    display:none;
  }

    
  .flex-1 {
      width:70%;
      display:flex;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.4rem;
      font-family: Mono_bold;
  

  }
  p {
    text-align:center;
  
 

  }

     
    }
  
 

    
  

}
@media (max-width: 600px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:22rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
 

    
  .flex-1-sm {
    
      width:90%;
      display:flex;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  border:none;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.3rem;
      font-family: Mono_bold;
  

  }
  p {
    text-align:center;
  
 
    word-spacing:0.4rem;
  }

     
    }
  
    .flex-1{
      display:none
    }

    
  

}
`