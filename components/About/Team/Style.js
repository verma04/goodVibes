import styled from 'styled-components'



export const Section = styled.section`

@media (min-width: 1025px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:3rem;
 
    

 

    .team {
        height:80%;
    
        width:70%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  
  .list {
    width:100%;
      height:90%;

    
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      
      .data {
          width:100%;
          height:30rem;
          
     
          position: relative;
          display:flex;
          justify-content:space-between;
          align-items:center;
       
      
    .left {
      width:50%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      
      .top {
        width:100%;
        height:30%;
        display:flex;
      justify-content:center;
      align-items:left;
      flex-direction:column;
      
        
      }
      .bottom {
        width:90%;
        height:70%;
        display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      
      h3 {
    position: relative;
      }
      h3:after {
        position: absolute;
    content: '';
    left: -15%;
    top: 47%;
    border-bottom: 2px solid;
    width: 15%;
      }
      }
    }

    .right {
      width:50%;
      height:100%;
      position: relative;
      

     
     
    }


      }

      
      
  }

  
    }

    .btn {
      margin-top:4rem;
      margin-bottom:4rem;
    }
  

}
@media (min-width: 768px) and (max-width: 1024px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:3rem;
 
    

 

    .team {
        height:80%;
    
        width:80%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  
  .list {
    width:100%;
      height:90%;

    
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-wrap:wrap;
      
      .data {
          width:100%;
          height:30rem;
          
     
          position: relative;
          display:flex;
          justify-content:space-between;
          align-items:center;
       
      
    .left {
      width:50%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      
      .top {
        width:100%;
        height:30%;
        display:flex;
      justify-content:center;
      align-items:left;
      flex-direction:column;
      
        
      }
      .bottom {
        width:90%;
        height:70%;
        display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      
      h3 {
    position: relative;
      }
      h3:after {
        position: absolute;
    content: '';
    left: -15%;
    top: 47%;
    border-bottom: 2px solid;
    width: 15%;
      }
      }
    }

    .right {
      width:50%;
      height:100%;
      position: relative;
      

     
     
    }


      }

      
      
  }

  
    }

    .btn {
      margin-top:4rem;
      margin-bottom:4rem;
    }
  

}

@media (max-width: 600px) {
  
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:3rem;
 

  overflow-x: hidden;

  .team {
      height:80%;
  
      width:100%;
      display:flex;
justify-content:center;
align-items:center;


.list {
  width:100%;
    height:90%;

  
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    
    .data {
        width:100%;
      
        flex-direction:column;
   
        position: relative;
        display:flex;
       
        align-items:center;
     
    
  .left {
    height:35rem;
    width:90%;
    overflow-x: hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    .top {
      width:100%;
      height:30%;
      display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
    
      
    }
    .bottom {
      width:100%;
      height:70%;
      display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    h3 {
  position: relative;
    }
    h3:after {
      position: absolute;
  content: '';
  left: -15%;
  top: 47%;
  border-bottom: 2px solid;
  width: 15%;
    }
    }
  }

  .right {
    width:100%;
    height:20rem;
    position: relative;
    overflow-x: hidden;

   
   
  }


    }

    
    
}


  }

  .btn {
    margin-top:4rem;
    margin-bottom:4rem;
  }


}
`