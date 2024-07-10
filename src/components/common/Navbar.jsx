/* eslint-disable no-unused-vars */
import logo from '/logo-tecosys.png'
import { Link, matchPath } from 'react-router-dom'
import { IoIosArrowDropdown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/Constant'
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import ResponsiveNav from './ResponsiveNav';


function Navbar() {
    const location = useLocation();
    const [loading, subLinks] = useState(false);
    const matchRoute = (route) => matchPath({ path: route }, location.pathname);
    return (
        <div className='w-full flex place-content-center '>
            < div className='w-full sm:w-11/12 md:w-10/12 flex justify-between items-center py-2 md:px-10 sm:px-10 px-5  relative'>
                <div>
                    <Link to='https://www.tecosys.in/' target='_blank'>
                        <img src={logo} alt="logo" width={55} className='rounded-full' />
                    </Link>
                </div>
                <nav className='text-lg hidden md:block'>
                    <ul className={`flex  gap-4 md:gap-5 text-richblack-25 `}>
                        {NavbarLinks.map((link, index) => (

                            <li key={index}>
                                <HashLink
                                    smooth 
                                    to={`${link.title!='Home' ? `#${link.url}`:`${link.url}` }`}
                                    className={`${matchRoute(link?.url)
                                        ? "text-[#a36cef] border-b-2"
                                        : "text-richblack-100"
                                        } hover:text-[#b396dc] p-2
                                         
                                        `}
                                >
                                    {/* <div className='h-full  hover:border transition-all  px-2'> */}
                                    {link.title}
                                    {/* </div> */}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                    <ResponsiveNav loading={loading} subLinks={subLinks} />
            
            </div>
        </div>
    )
}

export default Navbar
