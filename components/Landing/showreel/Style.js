import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:center;
 align-items:center;
  flex-direction:column;
  height:50rem;
  width:100%;
  margin-top:5rem;
 
@media (min-width: 1025px) {
  
    
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
 li {
     list-style:none;
      font-weight:700;
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
            }


          }

          .img:after {
  display:block;
  position: absolute;
  width:100%;

bottom:0%;
  content: '';
  border-bottom: solid 8px #D0345A;  
  transform: scaleX(0);  
  transition: transform 1s ease-in-out;
}
.img:hover:after {
        transform: scaleX(1);
      }

          .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
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