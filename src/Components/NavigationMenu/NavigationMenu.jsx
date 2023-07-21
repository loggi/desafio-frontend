import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import './NavigationMenu.css'

function NavigationMenu() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Logo
			containerClassName="logo-img"
			imageClassName="logo"
			/>
			<nav ref={navRef}>
				<a href="/#">Para você</a>
				<a href="/#">Para empresas</a>
				<a href="/#">Para entregar</a>
				<a href="/#">Vendas e suporte</a>
                <a id="menu-item" href="/#">Acompanhe seu pedido</a>
                <a id="enter" href="/#">Entrar</a>
                <a id="register" href="/#">Criar conta</a>
				<button 
                   className="nav-btn nav-close-btn" 
                   onClick={showNavbar}>
                    <FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn" id="nav-icon"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavigationMenu;