import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'


function Landing() {
  return (
    <Wrapper>
        <nav>
           <img src={logo} alt="logo" /> 
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info">
               <h1>
                job <span>tracking</span> app
               </h1>
               <p>
               I'm baby venmo vaporware food truck helvetica,
               affogato bitters marfa ethical literally aesthetic
               pabst. Bodega boys jean shorts authentic ethical,
               palo santo retro same distillery. 
               </p>
               <button className="btn btn-hero">
                Login/Register
               </button>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}



export default Landing