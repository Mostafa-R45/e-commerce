import {Link} from 'react-router-dom'
const Button = ({label}) => {
    return (
      <Link to="/men"  className="border-[2px] px-4 py-2 rounded-full font-bold border-[#000000] hover:bg-black hover:text-white transition-colors ">{label ? label :"Sign In"}</Link>
    )
  }
  
  export default Button