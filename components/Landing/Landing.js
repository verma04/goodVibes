import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import About from './About/About';
import Production from './Production/Production';
import Exp from './exp/exp';
import Showreel from './showreel/showreel';
import  Footer from '../Footer/Footer';
import Partner from './partner/partner';
import Featured from './featured/Featured';
import Vedio from './vedio/Vedio';
import Team from './Team/Team';
import Withus from './withus/with'
import Testimonials from './testimonials/Testimonials'
import Behind from './Behind/Behind'

import { useGetHome } from '@/apollo/actions';
function Landing({data}) {

  
  

    return (
        <div>
          <HeroSection/>
        <About data={data} />
          <Production/> 
         
          <Exp  data={data}/>
          <Showreel/>
           <Vedio/>
         <Team/>
         <Behind data={data}/>
         <Testimonials/>
           <Featured/>
           <Partner data={data} />
           <Withus/>
           <Footer/>
          
        </div>
    )
}

export default Landing
