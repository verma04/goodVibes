import styled from 'styled-components'



export const Section = styled.section`

  background: ${({ theme }) => theme.background};
@media (min-width: 1025px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:7rem;
    .head {
        display:flex;
justify-content:space-evenly;
 align-items:center;
 flex-direction:column;
height:10%;


h2 {
    font-weight: 900;
    color:${({ theme }) => theme.test};
}

 p {
     font-size:1.5rem;
     color:${({ theme }) => theme.test};
 }


    }
    .center {
        margin-bottom:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:30rem;
    width:60rem;

     .img-1 {

        width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:30rem;

    flex-direction:column;
    .midd {


        height:50%;

        display:flex;
    justify-content:center;
    align-items:center;
     p {
width:90%;
     }
    }

    .set {
        display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   img {
       width:4rem;
  
   }

    }




     }
     .left {


    }

    .right {

    }
 .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
    background: #47B4DE;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
} 


.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100);
}


  }







}

@media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:7rem;
    .head {
        display:flex;
justify-content:space-evenly;
 align-items:center;
 flex-direction:column;
height:10%;


h2 {
    font-weight: 900;
    color:${({ theme }) => theme.test};
}

 p {
     font-size:1.5rem;
     color:${({ theme }) => theme.test};
 }


    }
    .center {
        margin-bottom:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height:20rem;
    width:60rem;

     .img-1 {

        width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:20rem;

    flex-direction:column;
    .midd {


        height:50%;

        display:flex;
    justify-content:center;
    align-items:center;
     p {
width:90%;
     }
    }

    .set {
        display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   img {
       width:4rem;
  
   }

    }




     }
     .left {


    }

    .right {

    }
 .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
    background: #47B4DE;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
} 


.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100);
}


  }
}

@media (max-width: 600px) {
    overflow-x: hidden;
    display:flex;
justify-content:space-around;
 align-items:center;
  flex-direction:column;
  width:100%;
  margin-top:3rem;
  
.head {
    width:95%;
    
    display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
height:10%;
margin-top:3rem;
margin-bottom:2.5rem;
h2 {
   text-align:center;
   
font-weight: 900;
color:${({ theme }) => theme.test};
}

p {
    text-align: center;
 font-size:1.5rem;
 color:${({ theme }) => theme.test};
}


}
.center {
   
    margin-bottom:3rem;
display:flex;
justify-content:center;
align-items:center;
height:30rem;
width: 90%;
.carousel-root {
    width:100%;
    margin-bottom:10%;
}

 .img-1 {
  
    width:98%;
display:flex;
justify-content:flex-start;
align-items:center;
height:30rem;

flex-direction:column;
.midd {


    height:70%;
    
    display:flex;
justify-content:center;
align-items:center;
 p {
width:95%;
 }
}

.set {
    display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
img {
   width:2rem;
  
}

}




 }
 .left {
display:flex;
justify-content:center;
align-items:center;
height:100%;

img {
    width:2rem;
}
}

.right {
    display:flex;
justify-content:center;
align-items:center;
height:100%;

    img {
    width:2rem;
    }
}
.carousel .control-dots .dot {
transition: opacity .25s ease-in;
opacity: .3;
filter: alpha(opacity=30);
box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
background: #47B4DE;

border-radius: 50%;
width: 1rem;
height: 1rem;
cursor: pointer;
display: inline-block;
margin: 0 8px;
} 


.carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
opacity: 1;
filter: alpha(opacity=100);
}


}







}
`