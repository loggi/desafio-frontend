import logo from '../../Assets/logo.png'
import './Logo.css'

const Logo = () => {
    return (
       <figure className='logo-img'>
          <img src={logo} className='logo' alt="Logo da Loggi" />
       </figure>       
    )
}

export default Logo;