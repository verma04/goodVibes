import styled from 'styled-components'



export const Nav = styled.nav`

@media (min-width: 1025px) {
    position:absolute;
height:5rem;
  z-index:1000;
width:100%;
top:0;
.flex-sm {
  display:none;
}
 
 .flex {
     display:flex;
     justify-content:space-between;
  
      align-items:center;
    height:100%;
    width:95%;
  
  .left {
      width:10%;
      height:100%;
     
       position: relative;
  }

  .right {
    width:50%;
      height:100%;
      
       display:flex;
    justify-content:space-between;
    align-items:center;
    .nav-item {
      height:50%;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor: pointer;
    a {
      color:white;
    font-weight:600;
    font-size:1.2rem;
    font-family: Mono_bold;
     cursor: pointer;
    }
    }
    #active {
      border-bottom: 4px solid red;
    }
    i  {
        color:white;
    font-weight:600;
    font-size:1.2rem;
    }
    
  }

   
}

}



@media (max-width: 600px) {
 

 

.flex {
  display:none;
}


.flex-sm {
 
  
  .left {
      width:100%;
     z-index:999;
     top:0;
     left:3%;
       position: fixed;
       display:flex;
       justify-content:flex-end;
        align-items:center;
        .data {
          position: relative;
          width:3rem;
          margin-right:2rem;
          margin-top:1rem;
         img {
           width:100%;
         }
        }
  }

  i {
 
    margin:2rem;
      z-index:100%;
      font-size:2.7rem;
  }
     

  #hide {
    display:none;

  }
  .right {
    overflow-x: hidden;
    width:100%;
      height:100%;
      top:0%;
      z-index:1000;
        position: fixed;
        background: ${({ theme }) => theme.background};
  
    justify-content:space-between;
    align-items:right;
    flex-direction:column;
    .data {
      display:flex;
      justify-content:flex-end;
      align-items:center;
      width:100%;

      img {
        width:20%;
        margin:1rem;
      }
    }
    .nav-item {
      height:5%;
      display:flex;
      justify-content:flex-end;
 width:100%;
 
      cursor: pointer;
    a {
      margin-right:1rem;
    font-weight:600;
    font-size:1.2rem;
    font-family: Mono_bold;
     cursor: pointer;
    }
    .mode {
      margin-right:1rem;
    }
    }
    #active {
      border-bottom: 4px solid red;
    }
    i  {
        color:white;
    font-weight:600;
    font-size:1.2rem;
    }
    
  }


  .social {
  display:flex;
  justify-content:space-around;
 
  margin-top:2rem;
  i {
    font-size:2rem;
    color: ${({ theme }) => theme.text};
  }
  }

   
}
}




`

