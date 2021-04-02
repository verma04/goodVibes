import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;
 
 
  width:100%;
 
  background: ${({ theme }) => theme.background};

  background: #1C1C1C;
 

@media (min-width: 1025px) {
  
    
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
`