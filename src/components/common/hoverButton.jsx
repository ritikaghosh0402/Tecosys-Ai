
import '../../App.css'


function HoverButton({text}) {
  return (
    <div>
      <div 
      className="btn-pink rounded-md hover:scale-95 border-neutral-200 shadow-sm shadow-white hover:font-bold">
        {text}
    </div>
    </div>
  )
}

export default HoverButton
