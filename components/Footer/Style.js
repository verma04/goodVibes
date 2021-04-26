import styled from 'styled-components'



export const Foot = styled.footer`
display:flex;
justify-content:flex-end;
 align-items:center;
  flex-direction:column;
  height:35rem;
  width:100%;
 

background: #47B4DE;

 
@media (min-width: 1025px) {
  

  .flex {
    display:flex;
justify-content:space-around;
 align-items:center;
  width:70%;
  height:80%;
  
  }
 
  .left {
    
    width:40%;
    height:100%;
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;
  .top {
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;
  height:30%;
  
  width:100%;
  .footer-logo {
      width:20%;
      position: relative;
      height:60%;
      align-items:left;
     
  }
  .footer-logo-text {
      width:100%;
      position: relative;
      height:20%;
      align-items:center;
      text-align:center;
      color:white;
      font-weight:700;
      font-size:1.3rem;
  }
  }
  .bottom {
      width:100%;
      display:flex;
      justify-content:space-evenly;
      height:15%;
      align-items:center;
      li {
          list-style:none;
          color:white;
           color:white;
      }
      
  }
  }
  .right {
    
    width:60%;
    height:100%;
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;

  .top {
      height:60%;
      display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  width:100%;
  .top-1 {
       height:40%;
      width:80%;
      font-weight:900;
      p {
      color:white;
      line-height:1.2;
      
      }

  }

  .top-2 {
      display:flex;
      justify-content:center;
      width:80%;
      align-items:center;
      height:40%;
      ul {
          height:100%;
          
          width:50%;
          display:flex;
          justify-content:space-around;
          
          flex-direction:column;
          li {
              color:white;
          }
      }
  }

  }

.bottom {
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:15%;
    width:100%;
 
    .bottom-1{
        width:40%;
         height:100%;
         background-color:white;
         display:flex;
         justify-content:space-around;
         align-items:center;
         i {
            
              font-size:1.3rem;
              color:#47B4DE;
         }


    }
    .bottom-2 {
        width:50%;
        text-align:center;
        font-weight:400%;
        color:white;

    }

}
 
  }

  
 

    
  

}

@media (min-width: 768px) and (max-width: 1024px) {
    .flex {
    display:flex;
justify-content:space-around;
 align-items:center;
  width:80%;
  height:80%;
  
  }
 
  .left {
    
    width:40%;
    height:100%;
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;
  .top {
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;
  height:30%;
  
  width:100%;
  .footer-logo {
      width:20%;
      position: relative;
      height:60%;
      align-items:left;
     
  }
  .footer-logo-text {
      width:100%;
      position: relative;
      height:20%;
      align-items:center;
      text-align:center;
      color:white;
      font-weight:700;
      font-size:1.3rem;
  }
  }
  .bottom {
      width:100%;
      display:flex;
      justify-content:space-evenly;
      height:15%;
      align-items:center;
      li {
          list-style:none;
          color:white;
           color:white;
      }
      
  }
  }
  .right {
    
    width:60%;
    height:100%;
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;

  .top {
      height:60%;
      display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  width:100%;
  .top-1 {
       height:40%;
      width:80%;
      font-weight:900;
      p {
      color:white;
      line-height:1.2;
      
      }

  }

  .top-2 {
      display:flex;
      justify-content:center;
      width:80%;
      align-items:center;
      height:40%;
      ul {
          height:100%;
          
          width:50%;
          display:flex;
          justify-content:space-around;
          
          flex-direction:column;
          li {
              color:white;
          }
      }
  }

  }

.bottom {
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:15%;
    width:100%;
    .bottom-1{
        width:40%;
         height:100%;
         background-color:white;
         display:flex;
         justify-content:space-around;
         align-items:center;
         i {
              font-size:1.3rem;
              color:#47B4DE;
         }


    }
    .bottom-2 {
        font-weight:400%;
        color:white;

    }

}
 
  }

}

@media (max-width: 600px) {
    overflow-x: hidden;

  .flex {
    display:flex;
justify-content:space-around;
 align-items:center;
flex-direction:column;
  width:95%;
  height:100%;
 
  
  
 
  .left {
    
    width:100%;
    height:30%;
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  .top {
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;
  height:30%;
  
  width:100%;
  .footer-logo {
      width:100%;
      position: relative;
      height:60%;
      align-items:left;
     
  }
  .footer-logo-text {
      width:100%;
      position: relative;
      height:20%;
      align-items:center;
      text-align:center;
      color:white;
      font-weight:700;
      font-size:1.3rem;
  }
  }
  .bottom {
      width:100%;
      display:flex;
      justify-content:space-evenly;
      height:15%;
      align-items:center;
      li {
          list-style:none;
          color:white;
           color:white;
      }
      
  }
  }
  .right {
    
    width:100%;
    height:60%;
    display:flex;
justify-content:space-between;
 align-items:center;
  flex-direction:column;

  .top {
      
      height:60%;
      display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  width:100%;
  .top-1 {
       height:40%;
      width:80%;
      font-weight:900;
      p {
      color:white;
      line-height:1.2;
      
      text-align:center;
      }

  }

  .top-2 {
      display:flex;
      justify-content:center;
      width:80%;
      align-items:center;
      height:40%;
      ul {
          height:100%;
          
          width:50%;
          display:flex;
          justify-content:space-around;
          
          flex-direction:column;
          li {
              color:white;
          }
      }
  }

  }

.bottom {
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    height:40%;
    width:100%;
    
    .bottom-1{
        width:60%;
         height:50%;
         background-color:white;
         display:flex;
         justify-content:space-around;
         align-items:center;
         i {
              font-size:1.3rem;
              color:#47B4DE;
         }


    }
    .bottom-2 {
        font-weight:400%;
        color:white;

    }

}
 
  }

}
 

    
  

}
`