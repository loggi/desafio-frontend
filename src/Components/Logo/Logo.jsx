/* eslint-disable react/prop-types */
import logo from '../../Assets/logo.png'
import './Logo.css'

const Logo = (props) => {
   return (
     <figure className={props.containerClassName}>
       <img src={logo} className={props.imageClassName} alt="Logo da Loggi"/>
     </figure>
   ); 
 };
 
 
export default Logo;