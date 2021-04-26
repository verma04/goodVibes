import React from 'react'
import  {Section } from './Style'
import Image from 'next/image';

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
function exp() {
    return (
        <Section>
            <div  className="grid" >
             <div data-aos="fade-right" className="left" >

             <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616132695/goodVibes/l7gxqws1zfbnnvye7ptj.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   

           <div  className="btn" >
               <li>15 years</li>
               <li id="bt" >creativity for you</li>
           </div>
             </div>
             <div data-aos="fade-left" className="right" >
    
    <div className="top" >
    We’re an experienced and very creative branding agency
    </div>
    <div className="mid" >
    <p>Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects.</p>
    </div>
    <div className="bottom" >
       <ul>
           <li id="bold" >
            
           <CountUp end={60} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>+
           </li>
           <li>Clients</li>
       </ul>
       <ul>
           <li id="bold">
           <CountUp end={2050} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
           
           
           </li>
           <li>Films</li>
       </ul>

       <ul>
           <li id="bold">
           <CountUp end={2007} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
              </li>
           <li>Days Strong</li>
       </ul>

    </div>

             </div>
             
             
             
             
             </div>
  
  
             <div  className="grid-sm" >
             <div data-aos="fade-right" className="left" >

             <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616132695/goodVibes/l7gxqws1zfbnnvye7ptj.jpg'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           />   

           {/* <div  className="btn" >
               <li>15 years</li>
               <li id="bt" >creativity for you</li>
           </div> */}
             </div>
             <div data-aos="fade-left" className="right" >
    
    <div className="top" >
    We’re an experienced and very creative branding agency
    </div>
    <div className="mid" >
    <p>Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects.</p>
    </div>
    <div className="bottom" >
       <ul>
           <li id="bold" >
            
           <CountUp end={60} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>+
           </li>
           <li>Clients</li>
       </ul>
       <ul>
           <li id="bold">
           <CountUp end={2050} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
           
           
           </li>
           <li>Films</li>
       </ul>

       <ul>
           <li id="bold">
           <CountUp end={2007} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
              </li>
           <li>Days Strong</li>
       </ul>

    </div>

             </div>
             
             
             
             
             </div>
  
  
  
  
   </Section>
    )
}

export default exp
