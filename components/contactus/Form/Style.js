import styled from 'styled-components'



export const Section = styled.section`


 
 

@media (min-width: 1025px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:30rem;
 
 
  width:100%;
 
  background: ${({ theme }) => theme.background};  
  .flex {
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  
    background: #1C1C1C;
  
    .right{
      width:40%;
      height:100%;
      position: relative;
      iframe {
        width:100%;
        height:100%;
      }
    }
    .left {
      width:60%;
      height:80%;
      
      display:flex;
      justify-content:space-around;
      align-items:center;
       flex-direction:column;
      


       h2 {
         width:42%;
         color:white;
        
       }
       input {
        width:40%;
        border: 1px solid white;
        background: #1C1C1C;
        height:2em;
        padding-left:1rem;
       }
       textarea {
        width:40%;
        border: 1px solid white;
        background: #1C1C1C;
        height:4em;
        padding-left:1rem;
        padding-top:1rem;
        font-size:1.3rem;
        font-family: Montserrat;
       }
      .btn  {
        display:flex;
      justify-content:flex-start;
      align-items:center;
      width:42%;
        button {
          border: none;
          background: #D0345A;
color:white;
        }
       }

    }
  }
  
 

    
  

}


@media (max-width: 1025px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  overflow-x: hidden;
 
  width:100%;
 
  background: ${({ theme }) => theme.background}; 
  .flex {
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
     flex-direction:column;
    background: #1C1C1C;
    overflow-x: hidden;
    .right{
      width:100%;
      height:20rem;
      position: relative;
      iframe {
        width:100%;
        height:100%;
      }
    }
    .left {
      width:100%;
      height:30rem;
      
      display:flex;
      justify-content:space-around;
      align-items:center;
       flex-direction:column;
      


       h2 {
         width:70%;
         color:white;
        
       }
       input {
        width:70%;
        border: 1px solid white;
        background: #1C1C1C;
        height:2em;
        padding-left:1rem;
       }
       textarea {
        width:70%;
        border: 1px solid white;
        background: #1C1C1C;
        height:4em;
        padding-left:1rem;
        padding-top:1rem;
        font-size:1.3rem;
        font-family: Montserrat;
       }
      .btn  {
        display:flex;
      justify-content:flex-start;
      align-items:center;
      width:70%;
        button {
          border: none;
          background: #D0345A;
color:white;
        }
       }

    }
  }
  
 

    
  

}
`