import styled from 'styled-components'



export const Section = styled.section`
 
@media (min-width: 1025px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  width:100%;
  margin-top:7rem;
  margin-bottom:3rem;
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;
 
  width:80%;
  height:10%;
  .left {
      width:30%;
      p {
          font-size:1.8rem;
         font-weight:900;
            
      }
  }
  .right {
      width:60%;
      span {
        font-weight:900; 
      }
  }
  
 
    }
    .data {
        margin-top:3rem;
        width:80%;
     
        height:90%;
        
        display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
.partner {
    width:18%;
  
  margin-top:1rem;
    height: 10rem;
    position: relative;
    img {
        border: 1px solid red;
    }
}
  
    }
    .button {
        margin-top:5rem;
    }
  
 
    
  
}
@media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:60rem;
  width:100%;
  margin-top:7rem;
  margin-bottom:3rem;
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;
 
  width:80%;
  height:10%;
  .left {
      width:30%;
      p {
          font-size:1.8rem;
         font-weight:900;
            
      }
  }
  .right {
      width:60%;
      span {
        font-weight:900; 
      }
  }
  
 
    }
    .data {
        margin-top:3rem;
        width:80%;
     
        height:90%;
        
        display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
.partner {
    width:18%;
  
    height: 10rem;
    position: relative;
    img {
        border: 1px solid red;
    }
}
  
    }
    .button {
        margin-top:5rem;
    }
  
}
@media (max-width: 767px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
margin-top:3rem;
margin-bottom:3rem;
  width:100%;
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;
 flex-direction:column;
 
  width:90%;
 
  .left {
      width:100%;
      p {
          font-size:1.8rem;
         font-weight:900;
            
      }
  }
  .right {
      width:100%;
      span {
        font-weight:900; 
      }
  }
  
 
    }
    .data {
        overflow-x: hidden;
        margin-top:3rem;
        width:90%;
     
        height:90%;
        
        display:flex;
justify-content:space-between;
align-items:center;
flex-wrap: wrap;
.partner {
    width:30%;
  margin-top:1rem;
    height: 5rem;
    position: relative;
    img {
        border: 1px solid red;
    }
}
  
    }
    .button {
        margin-top:5rem;
    }
  
 
    
  
}
`