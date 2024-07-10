/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem"
import useOnClickOutside from "../../hooks/useOnClickOutside"


export default function ResponsiveNav({ loading, subLinks }) {
    
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));


  return (
    <div className="md:hidden relative flex gap-5 items-centere">
    
      <div className="text-richblack-25 text-3xl cursor-pointer   "
        onClick={() => setOpen(!open)}
      >
        {!open && <FaBars />}

      </div>

      {open && (
        <div
          className={`${open ? "flex flex-col gap-2" : "hidden"
            } w-[180px] text-richblack-50 absolute z-30 -top-8 -right-5 border border-richblack-600 bg-richblack-800 py-4 rounded-md items-center transition-all ease-in-out duration-200`}
          onClick={(e) => e.stopPropagation()}
          ref={ref}
        >
          <div className="w-full flex justify-end items-center px-5 text-2xl " onClick={() => setOpen(!open)}>
            <RxCross2 />
          </div>
          <div className="flex flex-col gap-5 items-center">
        

            <div>
              <NavItem
                open={open}
                customClass1={"flex-col"}
                customClass2={"block  md:hidden"}
                ItemClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}