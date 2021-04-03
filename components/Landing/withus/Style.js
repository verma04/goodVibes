import styled from 'styled-components'



export const Section = styled.section`

 

@media (min-width: 1025px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;
 
 
  width:100%;
 
  background: ${({ theme }) => theme.background};

  background: #1C1C1C;
  .flex {
    width:90%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
   

      h2 {
        color:white;
      }

      button {
        background: #D0345A;
color:white;
border:none;
      }
  }
  
 

    
  

}


@media (max-width: 600px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;
 margin-top:3rem;
 overflow-x: hidden;
  width:100%;
 
  background: ${({ theme }) => theme.background};

  background: #1C1C1C;
    
  .flex {
    width:90%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
     flex-direction:column;
  
   

      h2 {
        text-align:center;
        color:white;
      }

      button {
        background: #D0345A;
color:white;
border:none;
      }
  }
  
 

    
  

}
`