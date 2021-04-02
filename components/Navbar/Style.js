import styled from 'styled-components'



export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
z-index: 1000;
margin-top:0.5rem;
@media (min-width: 1025px) {
    position:absolute;
height:5rem;
  
width:100%;
top:0;

 
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



@media (mAX-width: 600px) {
  position:absolute;
height:5rem;
  
width:100%;
top:0;
.flex {
  display:none;
}
}




`

