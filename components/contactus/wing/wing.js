import React from 'react'
import Image from 'next/image';
import { Section } from './Style'
import { useRouter } from 'next/router'
function Form() {
    const router = useRouter()
    return (
        <Section>
        <div data-aos="fade-left" className="flex" >
           <h2>We give wings to your imagination</h2>

           <button  onClick={() => router.push("/contactus#form") }   >Speak to us</button>
       
        </div>
        </Section>
    )
}

export default Form
