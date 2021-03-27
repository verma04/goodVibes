import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:40rem;
  width:100%;
  margin-top:5rem;
  
 
@media (min-width: 1025px) {
  
    
   .flex {
       position: relative;
       width:100%;
       height:100%;
       background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
       .circle{
           position: absolute;
           width:42rem;
           height:42rem;
           border-radius:50%;
           background: #D0345A;
           left:13%;
           bottom:-10%;
           opacity: 0.95;
           
           display:flex;
           justify-content:space-around;
           flex-direction:column;
            align-items:center;
            .top {
                margin-top:22%;
                width:55%;
                font-size:4rem;
                color:white;
                font-weight:1000;
            }
            .mid {
                width:55%;
                color:white;
                font-size:1.2rem;
                 line-height: 1.3;
                
            }
            .bottom {
                display:flex;
                justify-content:flex-right;
                align-items:center;
            
                width: 55%;
                margin-bottom:10%;
    height: 8%;
    button {
        width:70%;
        display:flex;
        justify-content:center;
           justify-content:space-between;
         text-align:left;
         border: 1px solid white;
        span {
        font-size:1rem;
        font-weight:900;

    
    

    }
    i {
   
        color: #D0345A;
        font-size:1.4rem;
        
    }

    }
   
            }

       }
       img {
           
        position: absolute;
    left: 20%;
    width: 9rem;
    top: 5%;
       
       }
   }

  
  

}
`