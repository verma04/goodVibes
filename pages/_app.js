import '../styles/globals.css'
import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
 import theme from '../theme/colors';

 import GlobalFonts from '../theme/theme';


 import 'nprogress/nprogress.css';
 import NProgress from 'nprogress';
 import Head from 'next/head';
 import Router from 'next/router'
 Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done());
 Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  
  
  

     

    
  
  return (
<div>
<Head>
<link rel="shortcut icon" href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1616129279/goodVibes/vbesqeqpcbryfpenmfkj.png" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "/> 
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
  
  

    </Head>

 
  <ThemeProvider theme={theme}>
    
    <GlobalFonts/>
 <Component {...pageProps} />
  </ThemeProvider>
  
  </div>
  )
}

export default MyApp