import React from 'react'
import { Nav } from './Style'
import Image from 'next/image';

function Navbar() {
    return (
        <Nav>
           <div className='flex' >

           <div className='left' >
            
           <Image
            className="myImage"
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616129279/goodVibes/vbesqeqpcbryfpenmfkj.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
           />   

                </div>

                <div className='right' >

                    <div className="nav-item" >Home</div>
                    <div className="nav-item" >Service</div>
                    <div className="nav-item" >About </div>

                    <div className="nav-item" >Work</div>
                    <div className="nav-item" >Contact Us</div>
                    <i className="fas fa-search"></i>
                </div>

           </div>
        </Nav>
    )
}

export default Navbar
