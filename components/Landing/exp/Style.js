import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
 
  height:28rem;
  width:100%;
  margin-top:5rem;

 
@media (min-width: 1025px) {
  
  .grid {
      width:100%;
      
      height:100%;
      display:flex;
justify-content:space-between;
 align-items:center;
 
      .left {
          width:55%;
          height:100%;
          
          position: relative;
      }
      .right {
          width:42%;
          display:flex;
          justify-content:space-around;
          flex-direction:column;
        align-items:center;
          height:60%;
   .top {
     font-size:1.4rem;
  font-weight:800;
  width:70%;
   }
   .mid {
    font-size:1.3rem;
 
  width:70%;
   }
   .bottom {
    display:flex;
          justify-content:space-around;
          width:70%;
          align-items:center;
          ul {
             
              width:30%;
              #bold{
                  font-size:2rem;
                   font-weight:800;
              }
          }
   }
      }
  }
  
 

    
  

}
`