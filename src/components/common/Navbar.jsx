import logo from '../../public/logo-tecosys.png'
// import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="w-full flex place-content-center">
        <div className="h-14 w-11/12 border">
            {/* logo */}
            <img src={logo} width={160} height={42} alt="Tecosys.AI"  />

            {/* baki sare links */}
        </div>
      
    </div>
  )
}

export default Navbar
