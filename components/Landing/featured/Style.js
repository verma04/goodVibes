import styled from 'styled-components'



export const Section = styled.section`

 
@media (min-width: 1025px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  height:30rem;
  width:100%;
  margin-top:5rem;
    .head {
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column; 
  width:30%;
  height:20%;
  h2 {
       font-weight:900;
  }
 
    }
    .data {
        width:100%;
     
        height:80%;
          display:flex;
           justify-content:center;
           align-items:center;
           flex-wrap: wrap;
         .img{
           width:33.3%;
           height:80%;
            position:relative;
            transition: transform .8s;
         }

         .data {
           position: absolute;
           bottom:0;
           width:100%;
           display:flex;
           justify-content:center;
       
           height:30%;
           h3 {
           color:white;
           z-index:1000;
           width:90%;
           }
         }
         .img:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  transform: scale(1.1); 
 z-index:1;
}

.img:before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}
    }

  
 

    
  

}

@media (max-width: 1025px) {
  display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;

  width:100%;

    .head {
      border: 1px solid;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column; 
  width:95%;
  height:4rem;
  h2 {
       font-weight:900;
  }
 
    }
    .data {
        width:100%;
     
      
          display:flex;
           justify-content:center;
           align-items:center;
           flex-wrap: wrap;
         .img{
           width:100%;
     
           height:10rem;
            position:relative;
            transition: transform .8s;
         }
         .img:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  transform: scale(1.1); 
 z-index:1;
}

.img:before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}
    }

  
 

    
  

}
`