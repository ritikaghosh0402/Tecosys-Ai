import logo from '/logo-tecosys.png'
import { Link, matchPath } from 'react-router-dom'
import { IoIosArrowDropdown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/Constant'



function Navbar() {
    const location = useLocation();
    const matchRoute = (route) => matchPath({ path: route }, location.pathname);
    return (
        <div className='w-full flex place-content-center mb-4'>
        < div className='w-10/12 flex justify-between items-center py-2 px-10 md:px-8 '>
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo" width={55} className='rounded-full' />
                </Link>
            </div>
            <nav className='text-lg'>
                <ul className={`flex  gap-4 md:gap-5 text-richblack-25 `}>
                    {NavbarLinks.map((link, index) => (
                        <li key={index}>
                            {link.title === "Others" ? (
                                <div
                                    className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/others/:links")
                                            ? "text-yellow-25"
                                            : "text-richblack-25"
                                        }`}
                                >
                                    <p >{link.title}</p>
                                    <IoIosArrowDropdown />
                                    <div className="invisible absolute box-border flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-600 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 w-[130px] sm:w-[175px] -left-[120%]  sm:left-[10%] translate-x-[-10%] translate-y-[20%] -top-[200%] sm:top-[50%] z-20 ">
                                        <div className='bg-richblack-5 h-5 w-5 rotate-45 absolute bottom-[90%]'></div>
                                        {link?.sublinks?.map((sublink, index) => (
                                            <Link
                                                to={sublink.url}
                                                key={index}
                                                // onClick={ItemClick}
                                            >
                                                <div className="hover:bg-richblack-50 py-2  px-3 rounded-md">
                                                    <p>{sublink.title}</p>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>

                                </div>
                            ) : (
                                <Link
                                    to={link?.url}
                                    className={`${matchRoute(link?.url)
                                            ? "text-yellow-200"
                                            : "text-richblack-100"
                                        } hover:text-yellow-200 `}
                                    // onClick={ItemClick}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
