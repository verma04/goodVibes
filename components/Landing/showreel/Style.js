import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:50rem;
  width:100%;
  margin-top:5rem;
 
@media (min-width: 1025px) {
  
    
  .head {
      display:flex;
      height:5%;
      justify-content:space-between;
      h2 {
          font-weight:800;
      }
  }
 

    .ved {
        height:80%;
    
        width:70%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  .top {
      width:100%;
      height:10%;
      display:flex;
justify-content:space-between;
 align-items:center;
 li {
     list-style:none;
      font-weight:700;
 }
  

  }
  .list {
    width:100%;
      height:90%;
    
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      .data {
          width:100%;
          height:50%;
          position: relative;
      }
  }
    }
  

}
`