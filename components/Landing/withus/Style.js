import styled from 'styled-components'



export const Section = styled.section`

  background: ${({ theme }) => theme.textBlac};
@media (min-width: 1025px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:7rem;
    .head {
        display:flex;
justify-content:center;
 align-items:center;
 flex-direction:column;
height:10%;
margin-top:3rem;
margin-bottom:2.5rem;
h2 {
    font-weight: 900;
    color:#D0345A;
cursor: pointer;
}








    }
}

@media (max-width: 600px) {

   
.head {
   
    display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:10%;
margin-top:3rem;
margin-bottom:2.5rem;
h2 {
font-weight: 900;
color:#D0345A;
cursor: pointer;
}


}
}
`