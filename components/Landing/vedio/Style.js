import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:30rem;
  width:100%;
  margin-top:5rem;
 
@media (min-width: 1025px) {
  
    
   .flex {
       position: relative;
       width:100%;
       height:100%;
       .circle{
           position: absolute;
           width:25rem;
           height:25rem;
           border-radius:50%;
           background: #D0345A;
           left:13%;
           bottom:-15%;
           opacity: 0.95;
           
           display:flex;
           justify-content:space-evenly;
           flex-direction:column;
            align-items:center;
            .top {
                margin-top:5%;
                width:60%;
                font-size:2.2rem;
                color:white;
                font-weight:1000;
            }
            .mid {
                width:60%;
                color:white;
                font-size:0.9rem;
                 line-height: 1.3;
                
            }
            .bottom {
                display:flex;
                justify-content:space-around;
                align-items:center;
                background-color:white;
                width: 40%;
                margin-bottom:5%;
    height: 8%;
    span {
        font-size:0.9rem;
    }
    i {
        color: #D0345A;
    }
            }

       }
       img {
           position:absolute;
           left:20%;
           width:5rem;
           top:27%;
       
       }
   }

  
  

}
`