import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`
a { 
  text-decoration: none; 
  color: white;

    font-family: Arial, Helvetica, sans-serif;
} 

div {
      font-family: Arial, Helvetica, sans-serif;
  
}
.fa-bars {
  color: ${({ theme }) => theme.text1};
}

  body {
    transition: all 01s linear;
    font-family: Arial, Helvetica, sans-serif;
   background: ${({ theme }) => theme.background};
      overflow-x: hidden;
  
      ::-webkit-scrollbar {
  width: 10px;
  #nprogress .bar {
  background: #FFBB00 !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}
#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}


}

button {




}
/* Track */
 
/* Handle */
::-webkit-scrollbar-thumb {
  
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {

}
      
  }
  ul {
    list-style: none;
    li {
      
    cursor: pointer;
  
    color: ${({ theme }) => theme.text1};
  }
  }
  img {
  cursor: pointer;
}
button {
  cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
}

 
  h1 {
    font-weight:1000;
   color: ${({ theme }) => theme.text};
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
  font-family: Mono_bold ;
  
  word-spacing:0.2rem;
  }
  h2 {
    font-size: 2.2rem;
    line-height: var(--line-height-lg);
    color: ${({ theme }) => theme.text};
      font-family: Arial, Helvetica, sans-serif;
  
  word-spacing:0.2rem;
  line-height:1.2;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .top {
    color: ${({ theme }) => theme.text};
  }
  .mid {
    color: ${({ theme }) => theme.para};
  }
  li {
    color: ${({ theme }) => theme.text};
  }
  h3 {
    font-weight:1000;
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${({ theme }) => theme.text};
      font-family: Arial, Helvetica, sans-serif;
    
    word-spacing:0.2rem;
    /* family=FiesoleTextW00-Italic */
  }
  p {
      font-family: Arial, Helvetica, sans-serif;
    word-spacing:0.3rem;
    line-height: 1.2;
    
  }
  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  p {
    font-size:1.1rem;
line-height:1.2;

color: ${({ theme }) => theme.para};

      font-family: Arial, Helvetica, sans-serif;
    word-spacing:0.2rem;

  }
  span {
    color: ${({ theme }) => theme.para};
  }
  select {
    font-family: Arial, Helvetica, sans-serif;
  
  }
  
  .date {
    font-family: Arial, Helvetica, sans-serif;
  }
  .card {
    border-radius:10px;
    
  }
  button:hover {
 
  transform: scale(1.1); 
 
}
i:hover {
 
 
}
code {
        background-color:LightGray;
    }
  button {
padding-left:2rem;
padding-right:2rem;
padding-top:0.5rem;
padding-bottom:0.5rem;
background-color:white;
border: 2px solid;
font-size:1.3rem;
font-family: Mono_bold ;
transition: transform .8s;


  }
  input {
    font-family: Arial, Helvetica, sans-serif;
    border:1px solid #EFEAE4;
  
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
  }
  i {
   
  }
  .react-multi-carousel-dot button {

    display: none;
 
}
.react-multiple-carousel__arrow::before {
  
    font-size: 2.5rem;
}
.react-multiple-carousel__arrow {
 
    background: transparent;
   
}
@media (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-weight:1000;
   color: ${({ theme }) => theme.text};
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
  font-family: Mono_bold ;
  
  word-spacing:0.2rem;
  }
  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${({ theme }) => theme.text};
      font-family: Arial, Helvetica, sans-serif;
  
  word-spacing:0.2rem;
  line-height:1.2;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .top {
    color: ${({ theme }) => theme.text};
  }
  .mid {
    color: ${({ theme }) => theme.para};
  }
  li {
    color: ${({ theme }) => theme.text};
  }
  h3 {
    font-weight:1000;
    font-size: 1.1rem;
    line-height: var(--line-height-lg);
    color: ${({ theme }) => theme.text};
      font-family: Arial, Helvetica, sans-serif;
    
    word-spacing:0.2rem;
    /* family=FiesoleTextW00-Italic */
  }
  p {
      font-family: Arial, Helvetica, sans-serif;
    word-spacing:0.3rem;
    line-height: 1.2;
    
  }
  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    
    word-spacing:0.2rem;
    color: ${({ theme }) => theme.text};
  }
  p {
    font-size:1rem;
line-height:1.2;

color: ${({ theme }) => theme.para};

      font-family: Arial, Helvetica, sans-serif;
    word-spacing:0.2rem;

  }
}
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }
  @media only screen and (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    
    font-family: Arial, Helvetica, sans-serif;
} 
button {
  font-family: Mono_bold ;
}
li {
  cursor: pointer;
}
img {
  cursor: pointer;
}
 `;

