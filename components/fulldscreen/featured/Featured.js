import React from 'react';
import  { Section } from './Style'
import Image from 'next/image';

function Featured() {
    return (
        <Section>
           <div className="head" >
               <h2>The Featured Articles</h2>
           </div>
           <div className="data" >
           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581753/b33yk7mo162fytnrpmnd.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>

           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581753/b33yk7mo162fytnrpmnd.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581681/oylft1d7obdslrxrvbri.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581680/fsuev5rm6t4kaa4krunt.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
           
           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581680/cl9gt8daa8e7ykuh9lcj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>

           <div className="img">
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616581680/c0ss2sxb39rcrx9trxjt.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="cover"
           /> 
           </div>
           </div>
        </Section>
    )
}

export default Featured
