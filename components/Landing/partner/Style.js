import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:80rem;
  width:100%;
  margin-top:7rem;
 
@media (min-width: 1025px) {
  
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
        width:80%;
     
        height:90%;
        
        display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
.partner {
    width:24%;

    height: 14.8rem;
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