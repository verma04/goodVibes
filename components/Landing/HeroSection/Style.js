import styled from 'styled-components'



export const Section = styled.section`

@media (min-width: 1025px) {
  .flex-1-sm {
     display:none;
  }
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  margin-bottom:3rem;
  .flex-1 {
    position: relative;
      display:flex;
       justify-content:center;
       width:100%;
       height: 90vh;
       
       .player-wrapper {
  position: relative;
  padding-top: 56.25% ;
  width:100%;
   

  .react-player {
  position: absolute;
  top: 0;
  left: 0;
  
}
.react-player > div {
  background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
  position: absolute; // Scaling will occur since parent is relative now
}
}


    .text {
        position:absolute;
        width:90%;
        bottom:40%;
  
        display:flex;
        justify-content:start;
        .data {
            width:50%;
            font-size:4rem;
              line-height:1.2;
            color:white;
           
            font-family: Mono_bold;
        }
    }
  
  .social {
    position:absolute;
      
       
    top:5rem;
    right:0;

  
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        height:30rem;
        .icon {
          font-size:1.2rem;
            font-weight:400;
            color:white;
            transform: rotate(90deg);
        }
  }

    
  }

}

@media (min-width: 768px) and (max-width: 1024px) {

  .flex-1-sm {
     display:none;
  }
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  margin-bottom:3rem;
  .flex-1 {
    position: relative;
      display:flex;
       justify-content:center;
       width:100%;
      
       
       .player-wrapper {
  position: relative;
  padding-top: 56.25% ;
  width:100%;
   

  .react-player {
  position: absolute;
  top: 0;
  left: 0;
  
}
.react-player > div {
  background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
  position: absolute; // Scaling will occur since parent is relative now
}
}


    .text {
        position:absolute;
        width:90%;
        bottom:40%;
  
        display:flex;
        justify-content:start;
        .data {
            width:50%;
            font-size:4rem;
              line-height:1.2;
            color:white;
           
            font-family: Mono_bold;
        }
    }
  
    .social {
    position:absolute;
      
       
    top:5rem;
    right:0;

  
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        height:30rem;
        .icon {
          font-size:1.2rem;
            font-weight:400;
            color:white;
            transform: rotate(90deg);
        }
  }

    
  }
}


@media (min-width: 1026px)  and (max-width: 1400px  ) {
  .flex-1-sm {
     display:none;
  }
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  margin-bottom:3rem;
  .flex-1 {

    padding-bottom:2rem;
    position: relative;
      display:flex;
       justify-content:center;
       width: 112%;
       height: 100vh;
       
       .player-wrapper {
  position: relative;
  padding-top: 56.25% ;
  width:100%;
   

  .react-player {
  position: absolute;
  top: 0;
  left: 0;
  
}
.react-player > div {
  background: transparent;
    box-shadow: 0 0 20px 4px rgb(0 0 0 / 40%);
  position: absolute; // Scaling will occur since parent is relative now
}
}


    .text {
        position:absolute;
        width:90%;
        bottom:40%;
  
        left: 8%;

        display:flex;
        justify-content:start;
        .data {
            width:50%;
            font-size:4rem;
              line-height:1.2;
            color:white;
           
            font-family: Mono_bold;
        }
    }
  
  .social {
    position:absolute;
      
       
    top:5rem;
    right:5%;

  
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        height:26rem;
        .icon {
            font-weight:400;
            color:white;
            transform: rotate(90deg);
        }
  }

    
  }

}
@media (max-width: 767px) {
 
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  margin-bottom:3rem;
  .flex-1{
    display:none;
  }
 .flex-1-sm {
   position: relative;
     display:flex;
      justify-content:flex-start;
      flex-direction:column;
      width:100%;
     
     
    
   .player-wrapper {
    width:100%;
   }
   .text {
        position:absolute;
        width:90%;
   
        width: 90%;
      bottom: 66%;
      left:5%;
        display:flex;
        justify-content:start;
        .data {
          
            width: 83%;
            font-size:2rem;
              line-height:1.2;
            color:white;
           
            font-family: Mono_bold;
        }
    }
      .social {
        display:none;
      }

   
 }

}
`