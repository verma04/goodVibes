import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import About from './About/About'
import Footer from '../Footer/Footer'
import Form from './Form/Form'
import Wing from './wing/wing'
import Office from './office/office'

function work() {
    return (
        <div>
            <HeroSection/>
       
<About/>
<Form/>
<Office/>
<Wing/>

            <Footer/>
        </div>
    )
}

export default work
