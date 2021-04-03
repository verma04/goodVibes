import React from 'react'
import { Nav } from './Style'
import { useEffect  , useState  } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
function Navbar({toggleTheme , theme}) {
   
    const [nav, setnav] = useState(false);
    const [visible, setvisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      
        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('scroll');

        }
      }, [])
    const  handleScroll= () => {
        if (window.pageYOffset > 140) {
            if(!nav){
              setnav(true );
            }
        }else{
         
              setnav(false);
            
        }
    }

    const send = async (id) => {
    await router.push(`/${id}`)
    await setvisible(false)
    }
     

    
    const router = useRouter()
    return (
        <Nav>
           <div className='flex' >

           <div onClick={()=> router.push('/')} className='left' >
            
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
                        <a  > Home</a>
                        
                       </div>
                       <div     className="nav-item" >
                        <a  href="#team" > Team</a>
                        </div>
                    <div  className="nav-item" >
                        <a href="#service" > Service</a>
                       </div>
                    <div   onClick={()=> router.push('/about') } id={router.pathname == "/about" ? "active" : ""} className="nav-item" >
                        <a> About</a>
                        </div>
                      
                    <div onClick={()=> router.push('/work') } id={router.pathname == "/work" ? "active" : ""} className="nav-item" >
                        
                        <a>Work</a>
                    </div>
                    <div   id={router.pathname == "/contactus" ? "active" : ""} onClick={()=> router.push('/contactus') }  className="nav-item" >
                        <a>Contact Us</a>
                        </div>
                        <div   onClick={toggleTheme} className="nav-item" >
                 
                        {(() => {
        if (theme === "light") {
          return (
            <div  className='mode' onClick={toggleTheme} >  
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1610339534/HimTrek/wplfzyhy3yegsiqikd0f.png" ></img>
    </div>
          )
        } else {
          return (
            <div  className='mode' onClick={toggleTheme} >  
            <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1610339565/HimTrek/drl2swwluor3g4gkjoib.png" ></img>
               </div>
          )
        }
      })()}
                        </div>
                    <i className="fas fa-search"></i>
                </div>

           </div>
        

<div  className='flex-sm' >

<div  id={nav === false ? "" : "hide"} onClick={()=> setvisible(true)} className='left' >
 <div className="data" >
<img
 className="myImage"
src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616129279/goodVibes/vbesqeqpcbryfpenmfkj.png'
alt="Picture of the author"
layout="fill"
objectFit="cover"

/>   
</div>
     </div>
     <div  id={nav === false ? "hide" : "show"}  onClick={()=> setvisible(true)} className='left' >
     <i  class="fas fa-bars"></i>
</div>
{ visible &&
     <div  data-aos="fade-top"  className='right' >
     <div className="data" >
<img
 className="myImage"
src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1616129279/goodVibes/vbesqeqpcbryfpenmfkj.png'
alt="Picture of the author"
layout="fill"
objectFit="cover"
onClick={ () => setvisible(false)}
/>   
</div>
         <div    onClick={()=> send('/') } className="nav-item" >
             <a> Home</a>
             
            </div>
            <div    onClick={ ()=>  setvisible(false) }  className="nav-item" >
             <a  href="#team"> Team</a>
             </div>
         <div  onClick={ ()=>  setvisible(false)  } className="nav-item" >
             <a href="#service" > Service</a>
            </div>
         <div   onClick={ ()=> send('about')  }  className="nav-item" >
             <a> About</a>
             </div>
           
         <div onClick={()=> send('work') }  className="nav-item" >
             
             <a>Work</a>
         </div>
         <div    onClick={()=> send('contactus') }  className="nav-item" >
             <a>Contact Us</a>
             </div>
             <div   onClick={toggleTheme} className="nav-item" >
      
             {(() => {
if (theme === "light") {
return (
 <div  className='mode' onClick={toggleTheme} >  
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1610339534/HimTrek/wplfzyhy3yegsiqikd0f.png" ></img>
</div>
)
} else {
return (
 <div  className='mode' onClick={toggleTheme} >  
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1610339565/HimTrek/drl2swwluor3g4gkjoib.png" ></img>
    </div>
)
}
})()}
             </div>

             <div className='social' >
             <i class="fab fa-instagram"></i>
             <i class="fab fa-facebook"></i>
             <i class="fab fa-twitter"></i>
             </div>
        
     </div>
}
</div>


      
        
       
        </Nav>
    )
}

export default Navbar
