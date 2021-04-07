import styled from 'styled-components'



export const Section = styled.section`



 

@media (min-width: 1025px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:15rem;
 
 
  width:100%;
 
  background: ${({ theme }) => theme.background};
    
  .flex {
    width:80%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .list {
      width:33%;
      height:80%;

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
ul {
  li {
    display:flex;
    justify-content:flex-start;
    
    text-align:left;
    line-height:1.4;
    align-items:center;
    margin-top:0.5rem;
    img {
      width:1rem;
      height:1rem;
      padding-right:0.5rem;
    }
    i {
      padding-right:0.5rem;
      color: #47B4DE;

    }
    h4 {
      font-weight:900;
    }
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
    width:80%;
    height:100%;
    display:flex;
    overflow-x: hidden;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;

    .list {
      width:95;
      height:10rem;

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
ul {
  li {
    display:flex;
    justify-content:flex-start;
    
    text-align:left;
    line-height:1.4;
    align-items:center;
    margin-top:0.5rem;
    img {
      width:1rem;
      height:1rem;
      padding-right:0.5rem;
    }
    i {
      padding-right:0.5rem;
      color: #47B4DE;

    }
    h4 {
      font-weight:900;
    }
  }
}
    }
  
   

  }
  
 

    
  

}
`