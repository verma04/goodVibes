import styled from 'styled-components'
export const Pop = styled.section`
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
    /* margin-top: 5rem; */
    /* padding: 20px; */
    z-index: 1000;
    width: 87%;
    height: 100%;
    border-radius: 10px;
    min-height: 10rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -webkit-justify-content: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
         .react-player {
           width:100%;
           height:100%;

         }
       i {
         position:absolute;
         right:-5%;
         color:white;
         top:2%;
         font-size:2rem;
         cursor: pointer;
       }
   }
   }`