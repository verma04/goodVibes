import styled from 'styled-components'



export const Section = styled.section`

 
@media (min-width: 1025px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:50rem;
  width:100%;
  margin-top:5rem;
    
  .head {
      display:flex;
      height:7%;
      justify-content:space-between;
      h2 {
          font-weight:800;
      }
  }
 

    .ved {
        height:80%;
    
        width:70%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  .top {
      width:100%;
      height:10%;
      display:flex;
justify-content:space-between;
 align-items:center;
 #active {
   color:#47B4DE;
   font-weight:900;
 }
 li {
     list-style:none;
      font-weight:700;
 }

 li:hover {

   color:#47B4DE;
   font-weight:900;
 
 }
  

  }
  .list {
    width:100%;
      height:90%;
      background: transparent;
  
      display:flex;
      justify-content:center;
      align-items:center;
      flex-wrap:wrap;
      
      .data {
          width:33.3%;
          height:50%;
          position: relative;
          display:flex;
          justify-content:center;
          align-items:center;
    
          .cover {
            width:99.5%;
            height:99.5%;
            position: relative;
          }
          .cover:before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}
.title {
  position:absolute;
  width:100%;
  height:22%;
  display:flex;
  justify-content:center;
  bottom:0;
  z-index:999;
  h4 {
    width:90%;
    z-index:999;
    line-height:1.2;
    color:white;
  }
}
          .img {
            position:absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
   
            img {
              width:20%;
              z-index:200;
            }


          }

          .img:after {
  display:block;
  position: absolute;
  width:100%;
  z-index:990;
bottom:0%;
  content: '';
  border-bottom: solid 8px #47B4DE;  
  transform: scaleX(0);  
  transition: transform 1s ease-in-out;
}
.img:hover:after {
        transform: scaleX(1);
      }

          .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 2%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: rgba(0, 0, 0, 0.95);
background: rgba(0, 0, 0, 0.95); /* Black w/ opacity */
  .modal-content {
    position: relative;
  margin: auto;
  margin-top:5rem;
  padding: 20px;
  z-index:1000;
  width: 70%;
height:70%;
  border-radius:10px;
  min-height:10rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
      
    i {
      position:absolute;
      right:-5%;
      color:white;
      top:2%;
      font-size:2rem;
      cursor: pointer;
    }
}
}
      }

      
      
  }
    }
  

}


@media (max-width: 600px) {
  display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;

  width:100%;
  margin-top:3rem;

  .head {
      display:flex;
      height:3rem;
      justify-content:space-between;
    
      h2 {
          font-weight:800;
      }
  }
 

    .ved {
       
  overflow-x: hidden;
        width:95%;
        display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  .top {
    width:90%;
      height:25rem;
      display:flex;
justify-content:space-between;
 align-items:left;
flex-direction:column;
 #active {
   color:#47B4DE;
   font-weight:900;
 }
 li {
    height:13%;
     list-style:none;
      font-weight:700;
  
      display:flex;
      justify-content:center;
      flex-direction:column;
 }

 li:hover {

   color:#47B4DE;
   font-weight:900;
 
 }
  

  }
  .list {
    width:100%;

      background: transparent;
  
      display:flex;
      justify-content:center;
      align-items:center;
      flex-wrap:wrap;
      
      .data {
          width:50%;
          height:13rem;
          position: relative;
          display:flex;
          justify-content:center;
          align-items:center;
    
          .cover {
            width:99.5%;
            height:99.5%;
            position: relative;
          }
          .cover:before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
}
.title {
  position:absolute;
  width:90%;
  height:22%;
  display:flex;
  justify-content:center;
  bottom:10%;
  z-index:999;
  h4 {
    width:90%;
    z-index:999;
    line-height:1.2;
    color:white;
    font-size:0.9rem,;
  }
}
          .img {
            position:absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
   
            img {
              width:20%;
              z-index:200;
            }


          }

          .img:after {
  display:block;
  position: absolute;
  width:100%;
  z-index:990;
bottom:0%;
  content: '';
  border-bottom: solid 8px #47B4DE;  
  transform: scaleX(0);  
  transition: transform 1s ease-in-out;
}
.img:hover:after {
        transform: scaleX(1);
      }

          .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 2%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: rgba(0, 0, 0, 0.95);
background: rgba(0, 0, 0, 0.95); /* Black w/ opacity */
  .modal-content {
    position: relative;
  margin: auto;
  margin-top:5rem;
  padding: 20px;
  z-index:1000;
  width: 70%;
height:70%;
  border-radius:10px;
  min-height:10rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
      
    i {
      position:absolute;
      right:-5%;
      color:white;
      top:2%;
      font-size:2rem;
      cursor: pointer;
    }
}
}
      }

      
      
  }
    }
  

}
`