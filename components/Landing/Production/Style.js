import styled from 'styled-components'



export const Section = styled.section`


@media (min-width: 1025px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:37rem;
  width:100%;
  margin-top:7%;
  
  z-index:1000;
    .head {
     
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column; 
 
  height:15%;
  h3 {
    font-weight:1000;
  }
 
    }
    .data {
        width:95%;
     
        height:85%;
        
        display:flex;
justify-content:space-evenly;
align-items:center;
flex-wrap: wrap;
.pro {
    height:80%;
    width:30%;
    
    display:flex;
    justify-content:space-around;
  align-items:center;
  flex-direction:column;
 
    .logo {
    width:100%;
    height:40%;
    
    position: relative;
    }
    .set {
    width:90%;
    height:50%;
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
       h2 {
        font-family: Mono_bold;
           font-weight:900;
             font-size:1.3rem;
             text-align:center;
             text-transform:uppercase;
       }
        p {
          text-align:center;
        
        }
    }
}
    }
    button {
      margin-top:3rem;
    }
  
 
    
  
}

@media (max-width: 600px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
 
  width:100%;
  margin-top:7%;
 overflow-x: hidden;
  z-index:1000;
  .head {
    
      display:flex;
justify-content:center;
align-items:center;
flex-direction:column; 

height:3rem;
h3 {
  
  font-weight:1000;
}

  }
  .data {
      width:95%;
      
      
      
      display:flex;
justify-content:space-evenly;
align-items:center;

flex-direction:column;
.pro {
  
  height:20rem;
  width:100%;
  
  display:flex;
  justify-content:space-around;
align-items:center;
flex-direction:column;

  .logo {
  width:100%;
  height:40%;
  
  position: relative;
  }
  .set {
    
  width:90%;
  height:50%;
  
  display:flex;
  flex-direction:column;
  justify-content:space-between;
     h2 {
      
      font-family: Mono_bold;
         font-weight:900;
           font-size:1.3rem;
           text-align:center;
           text-transform:uppercase;
     }
      p {
        
        text-align:center;
      
      }
  }
}
  }
  button {
    
    margin-top:3rem;
  }


  

}
`