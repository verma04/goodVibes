import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:15rem;
 
 
  width:100%;
 
  background: ${({ theme }) => theme.background};


 

@media (min-width: 1025px) {
  
    
  .flex {
    width:80%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .list {
      width:33%;
      height:70%;

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
ul {
  li {
    display:flex;
    justify-content:flex-start;
    
    text-align:left;
    line-height:1.4rem;
    align-items:center;
    img {
      width:1rem;
      height:1rem;
      padding-right:0.5rem;
    }
    i {
      padding-right:0.5rem;
      color: #D0345A;

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