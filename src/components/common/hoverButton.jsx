
import '../../App.css'


function HoverButton({text}) {
  return (
    <div>
      <div 
      className="btn-pink rounded-md hover:scale-90 border-neutral-200 shadow-sm shadow-white font-bold">
        {text}
    </div>
    </div>
  )
}

export default HoverButton
