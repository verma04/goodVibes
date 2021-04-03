import styled from 'styled-components'



export const Section = styled.section`

 
@media (min-width: 1025px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:15rem;
  width:100%;
  margin-top:7rem;
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;
 flex-direction:column;

 
h2 {
    font-weight: 900;
    font-size:2.2rem;
    color: ${({ theme }) => theme.text};
  
}
.mid {
  margin-top:1rem;
    font-size:1.3rem;
  width:100%;
  text-align:center;
   }
 
  
 
    }
    .right {
          width:80%;
          display:flex;
          justify-content:space-between;
  
        align-items:center;
          height:60%;
  
 
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

@media (max-width: 600px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:12rem;
  width:100%;
  margin-top:3rem;

  .head {
      display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;


h2 {
  width:95%;
  color: ${({ theme }) => theme.text};
  font-weight: 900;
  font-size:2.2rem;
  text-align:center;
}

.mid {
  margin-top:1rem;
    font-size:1.3rem;
  width:90%;
  text-align:center;
   }



  }
 
 
  


}
`


