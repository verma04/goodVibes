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
justify-content:center;
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
    justify-content:flex-start;
       h2 {
         margin-top:1rem;
         margin-bottom:0.5rem;
          font-family: Arial, Helvetica, sans-serif;
           font-weight:900;
             font-size:1.3rem;
             text-align:center;
             text-transform:uppercase;
       }
       p {
         display:none;
       }
        p {
          text-align:center;
        
        }
        li {
          list-style:none;
          text-align:center;
          line-height:1.4;
          font-size:1.2rem;
        }
    }
    i {
      margin-top:1rem;
      color:white;
      font-size:2rem;
    }
}
    }
    button {
      margin-top:3rem;
    }

  
 
    
  
}

@media (min-width: 768px) and (max-width: 1024px) {
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
  h2 {
    font-weight:1000;
    font-size:1.6rem;
  }
 
    }
    .data {
        width:95%;
     
        height:85%;
      
        display:flex;
justify-content:center;
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
    height:70%;
    
    position: relative;
    }
    .set {
    width:90%;
    height:50%;
    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
       h2 {
         margin-top:1rem;
         margin-bottom:0.5rem;
          font-family: Arial, Helvetica, sans-serif;
           font-weight:900;
             font-size:1.3rem;
             text-align:center;
             text-transform:uppercase;
       }
        p {
          text-align:center;
        
        }
        li {
          list-style:none;
          text-align:center;
          line-height:1.4;
          font-size:1.2rem;
        }
    }
}
    }
    button {
      margin-top:3rem;
    }
  
 
    
  
}


@media (min-width: 1026px)  and (max-width: 1400px  ) {

  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:39rem;
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
    width:31%;
   
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
    height:55%;
     
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
       h2 {
         margin-top:1rem;
         margin-bottom:0.5rem;
          font-family: Arial, Helvetica, sans-serif;
           font-weight:900;
             font-size:1.3rem;
             text-align:center;
             text-transform:uppercase;
       }
       li {
          list-style:none;
          text-align:center;
          line-height:1.1;
          font-size:1.2rem;
        }
        ul {
      p{      
         display:none;
         
      }
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

height:5rem;
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
  
  height: 45rem;
  width:100%;
  
  display:flex;
  justify-content:space-around;
align-items:center;
flex-direction:column;
i {
  color:white;
  font-size: 1.5rem;
}
  .logo {
  width:100%;
  height:20%;
  
  position: relative;
  }
  .set {
    
  width:90%;
  height:50%;
  
  display:flex;
  flex-direction:column;
  justify-content:space-between;
     h2 {
      
        font-family: Arial, Helvetica, sans-serif;
         font-weight:900;
           font-size:1.3rem;
           text-align:center;
           text-transform:uppercase;
     }
      p {
        
        text-align:center;
      
      }

      li {
          list-style:none;
          text-align:center;
          line-height:1.4;
          font-size:1.2rem;
        }
  }
}
  }
  button {
    
    margin-top:3rem;
  }


  

}
`