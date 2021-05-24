import React from 'react'
import { Nav } from './Style'
import styled from 'styled-components'
import { useEffect  , useState  } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function Navbar({toggleTheme , theme}) {
  
    const isLight = theme === 'light';
    const [nav, setnav] = useState(false);
    const [state, setstate] = useState("")
    const [visible, setvisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        setstate(window.localStorage.theme)
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

const home = () => {
  router.push("/")
  setvisible(false)
}

const team = () => {
  router.push("/#team")
  setvisible(false)
}

const sercices = () => {
  router.push("/#service")
  setvisible(false)
}

    const scrollTo = ()  => {
      scroll.scrollTo(3800);
    }
    const scrollToService = ()  => {
      scroll.scrollTo(800);
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
           src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1621837986/lrvzs1jfygw6klhh8ts1.png'
           alt="Picture of the author"
           layout="fill"
           objectFit="contain"
          
           />   

                </div>

                <div className='right' >

                    <div onClick={()=> router.push('/') } className="nav-item" >
                        <a  > Home</a>
                        
                       </div>

                       <div   onClick={()=> router.push('/about') } id={router.pathname == "/about" ? "active" : ""} className="nav-item" >
                        <a> About</a>
                        </div>
                        <div  className="nav-item" >
                        {router.pathname == "/" ? 
                        <a  onClick={scrollToService} > Services</a>: 
                        
                        <a  onClick={() => router.push('/#service') } > Services</a>
                        }
                           
                       
                       </div>
                           
                    <div  id={router.pathname == "/work" ? "active" : ""} onClick={()=> router.push('/work') } className="nav-item" >
                        
                        <a>Work</a>
                    </div>
                       <div     className="nav-item" >

                       {router.pathname == "/" ? 
                              <a  onClick={scrollTo} > Team</a>: 
                        
                        <a  onClick={() => router.push('/#team') } >Team</a>
                        }
   
                        </div>
                  
                    
                  
                    <div   id={router.pathname == "/contactus" ? "active" : ""} onClick={()=> router.push('/contactus') }  className="nav-item" >
                        <a>Contact Us</a>
                        </div>
                        <div   onClick={toggleTheme} className="nav-item" >
                 
                        {/* {(() => {
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
      })()} */}

<ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
    </ToggleContainer>
                        </div>
                    <i   className="fas fa-search"></i>
                </div>

           </div>
        

<div  className='flex-sm' >

<div  id={nav === false ? "" : "hide"}  className='left' >
 
 <div className="data" >
   
<img
onClick={()=> home()}
 className="myImage"
src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1621837986/lrvzs1jfygw6klhh8ts1.png'
alt="Picture of the author"
layout="fill"
objectFit="cover"

/>   
</div>

<i  onClick={()=> setvisible(true)}  class="fas fa-bars"></i>
     </div>
     <div  id={nav === false ? "hide" : "show"}  onClick={()=> setvisible(true)}  className='left-left' >
     <i  class="fas fa-bars"></i>
</div>
{ visible &&
     <div  data-aos="fade-top"  className='right' >
     <div className="data" >

     <i onClick={()=> setvisible(false)} className="fas fa-bars"></i>
   
</div>
         <div    onClick={()=> home()  } className="nav-item" >
             <a> Home</a>
             
            </div>
            <div    onClick={()=> team()  }    className="nav-item" >
             <a  > Team</a>
             </div>
         <div   onClick={()=> sercices()  }   className="nav-item" >
             <a  > Services</a>
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
      
             {/* {(() => {
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
})()} */}

<ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
    </ToggleContainer>






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



const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background: ${({ theme }) => theme.gradient}; */
  width: 3rem;
  height: 2rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
   
  img {
    max-width: 1rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(50px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


  

  