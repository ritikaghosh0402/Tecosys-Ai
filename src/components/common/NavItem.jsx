/* eslint-disable react/prop-types */


import { NavbarLinks } from "../../data/Constant";
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function NavItem({customClass1, customClass2, ItemClick }) {
  const location = useLocation();
  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <nav className={`${customClass2}`}>
          <ul className={`flex ${customClass1} gap-4 md:gap-5 text-richblack-25 `}>
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link
                    to={link?.url}
                    className={`${
                      matchRoute(link?.url)
                        ? "text-[#a36cef]"
                        : "text-richblack-100"
                    } hover:text-[#b396dc] `}
                    onClick={ItemClick}
                  >
                    {link.title}
                  </Link>
              </li>
            ))}
          </ul>
        </nav>
  )
}