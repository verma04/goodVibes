import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:30rem;
  width:100%;
  margin-top:5%;
 
@media (min-width: 1025px) {
  
    .head {
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column; 
  width:30%;
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
    justify-content:space-around;
       h2 {
        font-family: Mono_bold;
           font-weight:900;
             font-size:1rem;
       }
        p {

        }
    }

}

    }

    button {
      margin-top:3rem;
    }

  
 

    
  

}
`