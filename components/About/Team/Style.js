import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:3rem;
 
@media (min-width: 1025px) {
  
    

 

    .team {
        height:80%;
    
        width:70%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  
  .list {
    width:100%;
      height:90%;

    
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      
      .data {
          width:100%;
          height:25rem;
          
     
          position: relative;
          display:flex;
          justify-content:space-between;
          align-items:center;
       
      
    .left {
      width:50%;
      height:100%;
      position: relative;
    }

    .right {
      width:50%;
      height:100%;
      position: relative;

      display:flex;
      justify-content:center;
      align-items:center;
      .right-1 {
        display:flex;
      justify-content:center;
      flex-direction:column;
    
      width:80%;
      height:80%;
      
      }
    }


      }

      
      
  }

  
    }

    .btn {
      margin-top:4rem;
      margin-bottom:4rem;
    }
  

}
`