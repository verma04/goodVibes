import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:40rem;
  width:100%;
  margin-top:7rem;
 
@media (min-width: 1025px) {
  
    .head {
        display:flex;
justify-content:space-between;
 align-items:center;

 
h2 {
    font-weight: 900;
}
 
  
 
    }
    .grid {
      width:100%;
      
      height:75%;
      display:flex;
justify-content:space-between;
 align-items:center;
 
      .left {
          width:55%;
          height:100%;
          background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
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
            font-family: Mono_bold ;
           
             }
             #bt {
              font-family: Montserrat ;
               font-size:0.8rem;
               text-transform:uppercase;
             }
          }
          .btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
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
     font-size:1.4rem;
  font-weight:800;
  width:70%;
  font-family: Mono_bold;
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