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
justify-content:space-evenly;
 align-items:center;
 flex-direction:column;
height:10%;
 
h2 {
    font-weight: 900;
}
 
  
 
    }
    .grid {
      width:80%;
      
      height:85%;
      display:flex;
justify-content:space-between;
 align-items:center;
position: relative;
 .test {
     width:35%;
     height:45%;
     background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
     background: #EFEFEF;
     border-radius: 10px;
     .data {
         position: relative;
         display:flex;
         justify-content:center;
         flex-direction:column;
         align-items:center;
         width:100%;
         height:100%;
         p {
             width:90%;
             font-size:0.9rem;
            color: #1C1C1C 70%;

              text-align:center;

         }
         i {
             font-size:1.5rem;
            color: #1C1C1C 70%;

             padding-bottom:1rem;
         }

         .profile {
         
            position: absolute;
            bottom: -33%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   img {
    width: 5rem;
   }
   h5 {
       font-weight:900;
   }
         }

     }

 }
 .active {
    background: #D0345A;
    border-radius: 10px;

    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
    top: 0;
    left: 32%;
    width: 35%;
    height: 45%;

   
     position: absolute;
     .data {
         display:flex;
         justify-content:center;
         flex-direction:column;
         align-items:center;
         width:100%;
         height:100%;
         p {
             width:90%;
             font-size:0.9rem;
              color:white;
              text-align:center;

         }
         i {
             font-size:1.5rem;
             color:white;
             padding-bottom:1rem;
         }

         .profile {
         
         position: absolute;
         bottom: -33%;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
img {
 width: 5rem;
}
h5 {
    font-weight:900;
}
      }

    

     }
 }
 
  }

  
 

    
  

}
`