import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:50rem;
  width:100%;
  margin-top:7rem;
 
@media (min-width: 1025px) {
  
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;

 
  width:80%;
  height:15%;
  .left {
      width:30%;
      p {
          font-size:1.8rem;
         font-weight:900;
         font-family: Mono_bold;
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
        width:90%;
     
        height:85%;
        
        display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
.partner {
    width:22%;
    
    height:15%;
    position: relative;
}
  

    }

    .button {
        margin-top:5rem;
    }

  
 

    
  

}
`