import styled from 'styled-components'



export const Section = styled.section`


 
@media (min-width: 1025px) {


  display:flex;
justify-content:space-around;
 align-items:center;
 
  height:28rem;
  width:100%;
  margin-top:5rem;

  .grid-sm {
    display:none;
  }
  .grid {
      width:100%;
      
      height:100%;
      display:flex;
justify-content:space-between;
 align-items:center;
 
      .left {
          width:55%;
          height:100%;
          background: transparent;
 
          position: relative;
          .btn {
            position: absolute;
             bottom:-7%;
             right:2%;
             transition: transform .8s;
             li {
                list-style:none;
                color:white;
                background: #47B4DE;
            display:flex;
            justify-content:space-around;
            align-items:center;
            width:11rem;
            height:2.3rem;
              font-family: Arial, Helvetica, sans-serif;
           
             }
             #bt {
                font-family: Arial, Helvetica, sans-serif;
               font-size:0.8rem;
               text-transform:uppercase;
             }
          }
          .btn:hover {
 
  transform: scale(1.1); 
 
}
      }
      .right {
          width:42%;
          display:flex;
          justify-content:space-around;
          flex-direction:column;
        align-items:center;
          height:60%;
   .top {
     font-size:1.8rem;
  font-weight:800;
  width:70%;
  font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
   }
   .mid {
    font-size:1.3rem;
 
  width:70%;
   }
   .bottom {
    display:flex;
          justify-content:space-around;
          width:72%;
          align-items:center;
          ul {
             
              width:30%;
              #bold{
                  font-size:2.5rem;
                   font-weight:1000;
                   font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
               padding-bottom:0.5rem; 
                  }
          }  
   }
      }
  }
  
 

    
  

}

@media (min-width: 768px) and (max-width: 1024px) {


display:flex;
justify-content:space-around;
align-items:center;

height:28rem;
width:100%;
margin-top:5rem;

.grid-sm {
  display:none;
}
.grid {
    width:100%;
    
    height:100%;
    display:flex;
justify-content:space-between;
align-items:center;

    .left {
        width:55%;
        height:100%;
        background: transparent;

        position: relative;
        .btn {
          position: absolute;
           bottom:-7%;
           right:2%;
           transition: transform .8s;
           li {
              list-style:none;
              color:white;
              background: #47B4DE;
          display:flex;
          justify-content:space-around;
          align-items:center;
          width:11rem;
          height:2.3rem;
            font-family: Arial, Helvetica, sans-serif;
         
           }
           #bt {
              font-family: Arial, Helvetica, sans-serif;
             font-size:0.8rem;
             text-transform:uppercase;
           }
        }
        .btn:hover {

transform: scale(1.1); 

}
    }
    .right {
        width:42%;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
      align-items:center;
        height:60%;
 .top {
   font-size:1.8rem;
font-weight:800;
width:70%;
font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
 }
 .mid {
  font-size:1.3rem;

width:70%;
 }
 .bottom {
  display:flex;
        justify-content:space-around;
        width:72%;
        align-items:center;
        ul {
           
            width:33%;
            #bold{
                font-size:1.5rem;
                 font-weight:1000;
                 font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
             padding-bottom:0.5rem; 
                }
        }  
 }
    }
}



  


}

@media (max-width: 600px) {
  display:flex;
justify-content:space-around;
 align-items:center;
 overflow-x: hidden;
  height:50rem;
  width:100%;
  margin-top:5rem;
  .grid {
    display:none;
  }
  .grid-sm {
      width:100%;
      
      height:100%;
      display:flex;
justify-content:space-between;
 align-items:center;
 flex-direction:column;
 
      .left {
          width:100%;
          height:50%;
          background: transparent;
 
          position: relative;
          .btn {
            position: absolute;
             bottom:-7%;
             right:2%;
             transition: transform .8s;
             li {
                list-style:none;
                color:white;
                background: #D0345A;
            display:flex;
            justify-content:space-around;
            align-items:center;
            width:10rem;
            height:2rem;
              font-family: Arial, Helvetica, sans-serif;
           
             }
             #bt {
                font-family: Arial, Helvetica, sans-serif;
               font-size:0.8rem;
               text-transform:uppercase;
             }
          }
          .btn:hover {
 
  transform: scale(1.1); 
 
}
      }
      .right {
          width:95%;
          display:flex;
          justify-content:space-around;
          flex-direction:column;
        align-items:center;
          height:43%;
   .top {
     font-size:1.8rem;
  font-weight:800;
  width:100%;
  font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
  text-align:center;
   }
   .mid {
    font-size:1.3rem;
    text-align:center;
  width:100%;
   }
   .bottom {
    display:flex;
          justify-content:space-around;
          width:100%;
          align-items:center;
          ul {
             
              width:30%;
              #bold{
                  font-size:2.5rem;
                   font-weight:1000;
                   font-family: Arial, Helvetica, sans-serif;font-family: Arial, Helvetica, sans-serif;
              }
          }
   }
      }
  }
  
 

    
  

}
`