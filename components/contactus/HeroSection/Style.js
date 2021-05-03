import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  margin-bottom:3rem;
@media (min-width: 1025px) {
 
    
  .flex-1 {
    position: relative;
      display:flex;
       justify-content:center;
       width:100%;
    height:30rem;

  
       



    .text {
        position:absolute;
        width:90%;
        bottom:35%;
   z-index:1000;
        display:flex;
        justify-content:start;
        .data {
            width:50%;
            font-size:4rem;
              line-height:1.2;
            color:white;
           
             font-family: Poppins-Bold ;
        }
    }
  
  .social {
    position:absolute;
      
       
    top:5rem;
    right:0;
    z-index:1000;
  
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        height:20rem;
        .icon {
            font-weight:400;
            color:white;
            transform: rotate(90deg);
        }
  }

    
  }

  .flex-1:before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}

}

@media (max-width: 1025px) {
 
    
 .flex-1 {
   position: relative;
     display:flex;
      justify-content:center;
      width:100%;
   height:30rem;

 
      



   .text {
    overflow-x: hidden;
       position:absolute;
       width:90%;
       bottom:35%;
  z-index:1000;
       display:flex;
       justify-content:start;
       .data {
           width:50%;
           font-size:2rem;
             line-height:1.2;
           color:white;
          
            font-family: Poppins-Bold ;
       }
   }
 
 .social {
   position:absolute;
     
      
   top:5rem;
   right:0;
 z-index:900;
 
       display:flex;
       justify-content: space-around;
       flex-direction:column;
       height:20rem;
       .icon {
           font-weight:400;
           color:white;
           transform: rotate(90deg);
       }
 }

   
 }

 .flex-1:before {
   content: "";
   position: absolute;
   bottom: 0;
   height: 100%;
   width: 100%;
   z-index: 100;
   background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}

}
`