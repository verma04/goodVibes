import styled from 'styled-components'



export const Section = styled.section`

@media only screen and (min-width: 1366px) {
  margin-top:10rem;
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:18rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
  
 

  .flex-1-sm {
    display:none;
  }

    
  .flex-1 {
      width:60%;
      display:flex;
      z-index:1000;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.8rem;
      font-family: Poppins-Bold ;
  

  }
  p {
    text-align:center;
  
 

  }

     
    }
  
 
}


@media (min-width: 1281px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:18rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
  
 

  .flex-1-sm {
    display:none;
  }

    
  .flex-1 {
      width:60%;
      display:flex;
      z-index:1000;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.8rem;
      font-family: Poppins-Light ;
  

  }
  p {
    text-align:center;
  
 

  }

     
    }
  
 

    
  

}
@media (min-width: 1025px) and (max-width: 1280px)  {

  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:18rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
  
 

  .flex-1-sm {
    display:none;
  }

    
  .flex-1 {
      width:60%;
      display:flex;
      z-index:1000;
justify-content:center;;
 align-items:center;
  flex-direction:column;
  height:100%;
  h3 {
    margin-bottom:5%;
      text-align:center;
      font-weight:600;
      font-size:1.8rem;
      font-family: Poppins-Bold ;
  

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
      font-family: Poppins-Light ;
  

  }
  p {
    text-align:center;
  
 

  }

     
    }
  
 

    
  

}
@media (max-width: 767px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:22rem;
  margin-top:2rem;
 

  width:100%;
 
  background: ${({ theme }) => theme.background};
 

    
  .flex-1-sm {
    
      width:95%;
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
      font-size:1.2rem;
      font-family: Poppins-Light ;
  

  }
  p {
    text-align:center;
  
 
   
  }

     
    }
  
    .flex-1{
      display:none
    }

    
  

}
`