import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import logo from "../../images/logo.svg";
import { FiArrowRight } from "react-icons/fi";

interface LandingPageProps {

}

const LandingPage: React.FC<LandingPageProps> = () => {
    return (
		<div id="page-landing">
			<div className="content-wrapper">
				<img src={logo} alt="Happy logo" />
				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>
				<div className="location">
					<strong>São Caetano do Sul</strong>
					<span>São Paulo</span>
				</div>
				<Link to="/app" className="enter-app">
					<FiArrowRight size="26" color="rgb(0, 0, 0, 0.6)" />
				</Link>
			</div>
		</div>
	);
}

export default LandingPage;

