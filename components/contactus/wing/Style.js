import styled from 'styled-components'



export const Section = styled.section`

 

@media (min-width: 1025px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;

  overflow-x: hidden;
  width:100%;
 
  background: ${({ theme }) => theme.background};

  background: #1C1C1C;
    
  .flex {
    overflow-x: hidden;
    width:90%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
   

      h2 {
        color:white;
      }

      button {
        background:#47B4DE;
color:white;
border:none;
      }
  }
  
 

    
  

}

@media (min-width: 768px) and (max-width: 1024px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:10rem;

  overflow-x: hidden;
  width:100%;
 
  background: ${({ theme }) => theme.background};

  background: #1C1C1C;
    
  .flex {
    overflow-x: hidden;
    width:90%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
   

      h2 {
        color:white;
      }

      button {
        background:#47B4DE;
color:white;
border:none;
      }
  }
  
 

    
  

}


@media (max-width:600px) {
  overflow-x: hidden;
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
        background:#47B4DE;
color:white;
border:none;
      }
  }
  
 

    
  

}
`