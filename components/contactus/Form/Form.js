import React from 'react'
import Image from 'next/image';
import { Section } from './Style'
import { useForm } from "react-hook-form";
import axios from 'axios'
function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
 
    const onSubmit = async  data =>  {
        const response = await axios.post('/api/formEnquiry', data);
    
    }
    
   
    return (
        <Section>
        <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-left" className="flex" >
            <div  id="form" className="left" >
            
            <h2>
            We're the Best!
Message Us.
            </h2>
            <input 
            name="name"
            placeholder="Name" {...register(  "name")} ></input>
            <input 
            name="email"
            placeholder="Email"  {...register("email" )}></input>
            <input 
             name="phone"
            placeholder="Phone Number" {...register("number" )} ></input>
            <input 
            name="company"
            placeholder="Company Name" {...register("Company" )} ></input>
            <textarea
             name="message"
            placeholder="Message"  {...register("Message" )}></textarea>
            <div className='btn' >
            <button  type="submit"  >Submit</button>
            </div>
            
            </div>
            <div className="right" >
        

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.454306882682!2d77.2567685!3d28.5363057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ff0589cbf426bd3!2sGood%20Vibes%20Entertainment!5e0!3m2!1sen!2sin!4v1617363843528!5m2!1sen!2sin"   allowfullscreen="" loading="lazy"></iframe>
    

            </div>
        </form>
        </Section>
    )
}

export default Form
