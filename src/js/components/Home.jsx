import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navegador from "../components/navegador";
import Jumbotron from "../components/jumbotron";
import PCard from "../components/card";
import Footer from "./footer";

//create your first component
export default function Home() {
	return (
		<div>
				<Navegador />
			<div className="container">
				<Jumbotron />
				<PCard />
			</div>
			<Footer />
		</div>
	)
};
