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
  
 
    word-spacing:0.4rem;
  }

     
    }
  
 

    
  

}

@media (min-width: 768px) and (max-width: 1024px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:18rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
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
  
 
    word-spacing:0.4rem;
  }

     
    }
  

}

@media (max-width: 767px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:25rem;
 margin-bottom:2rem;

  width:100%;
  overflow-x: hidden;
  background: ${({ theme }) => theme.background};
  .flex-1 {
      width:95%;
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
  
 
    word-spacing:0.4rem;
  }

     
    }
  
 

    
  

}
`