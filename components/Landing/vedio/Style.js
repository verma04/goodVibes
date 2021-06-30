import styled from 'styled-components'



export const Section = styled.section`

 
@media (min-width: 1025px) {
    display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:40rem;
  width:100%;
  margin-top:5rem;

    
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
           background: #47B4DE;
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
                font-size:2.2rem;
                color:white;
                font-weight:1000;
            }
            .mid {
                width:55%;
                color:white;
                font-size:1.1rem;
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

@media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:40rem;
  width:100%;
  margin-top:5rem;

    
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
           background: #47B4DE;
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
                font-size:3.2rem;
                color:white;
                font-weight:1000;
            }
            .mid {
                width:55%;
                color:white;
                font-size:1.1rem;
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
        color:black;

    
    

    }
    i {
   
        color: #47B4DE;
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

@media (max-width: 767px) {
    display:none;
/*   
    display:flex; */
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:20rem;
  width:100%;
  margin-top:5rem;

  
  .flex {

      position: relative;
      width:100%;
      height:100%;
      background: transparent;
   box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
      .circle{
     
          position: absolute;
          width:22rem;
          height:22rem;
          border-radius:50%;
          background: #47B4DE;
        
    top: 7%;

          bottom:-10%;
          opacity: 0.95;
          
          display:flex;
        
          justify-content:space-around;
          flex-direction:column;
           align-items:center;
           .top {
            margin-top: 13%;
               width:55%;
               font-size:1.3rem;
               color:white;
               font-weight:1000;
           }
           .mid {
               width:55%;
               color:white;
               font-size:0.9rem;
               
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
    height: 155%;
       display:flex;
       justify-content:center;
          justify-content:space-between;
        text-align:left;
        border: 1px solid white;
       span {
       font-size:0.9rem;
       font-weight:900;
       color:black;
       padding-top:0.2rem;

   
   

   }
   i {
  
       color: #47B4DE;
   display:none;
       
   }

   }
  
           }

      }
      img {
          
        position: absolute;
    left: 27%;
    width: 4rem;
    top: 0%;

      
      }
  }

 
 

}
`