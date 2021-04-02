import React from 'react'
import Image from 'next/image';
import { Section } from './Style'
function Form() {
    return (
        <Section>
        <div  className="flex" >
            <div className="left" >
            
            <h2>
            We're the Best!
Message Us.
            </h2>
            <input  placeholder="Name" ></input>
            <input  placeholder="Email" ></input>
            <textarea  placeholder="Message" ></textarea>
            <div className='btn' >
            <button>Submit</button>
            </div>
            
            </div>
            <div className="right" >
            <Image
                        className="myImage"
                        src={`https://res.cloudinary.com/dzcmadjl1/image/upload/v1617358561/zpq732n61wel53j1riat.png`}
            
                       alt="Picture of the author"
                       layout="fill"
                       objectFit="cover"
                       /> 
              
    

            </div>
        </div>
        </Section>
    )
}

export default Form
