import React from 'react'
import { Nav } from './Style'
import Image from 'next/image';
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter()
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

                    <div onClick={()=> router.push('/') } className="nav-item" >
                        <a> Home</a>
                        
                       </div>
                    <div className="nav-item" >
                        <a> Service</a>
                       </div>
                    <div   onClick={()=> router.push('/about') } id={router.pathname == "/about" ? "active" : ""} className="nav-item" >
                        <a> About</a>
                        </div>

                    <div onClick={()=> router.push('/work') } id={router.pathname == "/work" ? "active" : ""} className="nav-item" >
                        
                        <a>Work</a>
                    </div>
                    <div className="nav-item" >
                        <a>Contact Us</a>
                        </div>
                    <i className="fas fa-search"></i>
                </div>

           </div>
        </Nav>
    )
}

export default Navbar
