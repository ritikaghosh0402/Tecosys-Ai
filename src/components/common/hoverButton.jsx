/* eslint-disable react/prop-types */

import '../../App.css'


function HoverButton({text, children}) {
  return (
    <div>
      <div 
      className="btn-pink  rounded-md hover:scale-95 border-neutral-200 shadow-sm shadow-white font-bold flex items-center gap-3 px-1 py-[5px]">
        {text}
        <span>{children}</span>
        
    </div>
    </div>
  )
}

export default HoverButton
