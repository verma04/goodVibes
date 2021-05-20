import React from 'react'
import { Section } from './Style'
import { useGetHome } from '@/apollo/actions';
function About() {

    const { data , loading , error } = useGetHome();
  const cafes = data && data.cafes || [];



  if(  loading ) {
      return (
          null
      )
  }
    return (
        <Section>
            <div dangerouslySetInnerHTML={{__html: data.page.content}} className="flex-1"  >
  
         
            </div>


            <div dangerouslySetInnerHTML={{__html: data.page.content}} className="flex-1-sm"  >
    
            </div>
        </Section>
    )
}

export default About
