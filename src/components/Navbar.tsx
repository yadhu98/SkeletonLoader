import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Services from './Services';
import { useState } from 'react';
import Details from './Details';
import Divisions from './Divisions';
function Navbar() {
    const [serveshow,setServeshow] = useState<boolean>(false)
    return (
        <div>
        <div className="Navbar_container">
            <ul>
                <li>Home</li>
                <li className="Services_nav" onMouseEnter={()=>setServeshow(!serveshow)}>Services {serveshow === false ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}</li>
                <li className="Careers_nav">Careers <ArrowDropDownIcon/></li>
                <li>Contact Us</li>
            </ul>
        </div>

            <div className={serveshow ? "serviceNavContanineron" : "serviceNavContanineroff"} onMouseLeave={()=>setServeshow(!serveshow)}>
                <Services state={serveshow}/>
            </div>
            <div className="bodycontainer">
               <Details/>
              <Divisions/>
            </div>
            
        </div>
    )
}

export default Navbar
