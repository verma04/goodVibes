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
   }`