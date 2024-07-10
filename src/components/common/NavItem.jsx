/* eslint-disable react/prop-types */


import { NavbarLinks } from "../../data/Constant";
import { matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function NavItem({ customClass1, customClass2 }) {
  const location = useLocation();
  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <nav className={`${customClass2}`}>
      <ul className={`flex ${customClass1} gap-4 md:gap-5 text-richblack-25 `}>
        {NavbarLinks.map((link, index) => (
          <li key={index}>
            <HashLink
              smooth
              to={
                link.title === 'Home' || link.title === 'Invest'
                  ? link.url
                  : `/${link.url}`
              }
              className={`${matchRoute(link?.url)
                ? "text-[#a36cef] text-lg"
                : "text-richblack-100 text-base"
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
  )
}