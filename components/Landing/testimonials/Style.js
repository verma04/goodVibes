import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:7rem;
  background: ${({ theme }) => theme.textBlac};
@media (min-width: 1025px) {

    .head {
        display:flex;
justify-content:space-evenly;
 align-items:center;
 flex-direction:column;
height:10%;
margin-top:3rem;
margin-bottom:2.5rem;
h2 {
    font-weight: 900;
    color:${({ theme }) => theme.test};
}

 p {
     font-size:1.5rem;
     color:${({ theme }) => theme.test};
 }


    }
    .center {
        margin-bottom:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:20rem;
    width:60rem;

     .img-1 {

        width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:20rem;

    flex-direction:column;
    .midd {


        height:50%;

        display:flex;
    justify-content:center;
    align-items:center;
     p {

     }
    }

    .set {
        display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   img {
       width:4rem;
       margin-top:10%;
   }

    }




     }
     .left {


    }

    .right {

    }
 .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
    background: #D0345A;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
} 


.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100);
}


  }







}
`