import React from "react";
import Footer from "./footer.jsx";
import NavOption from "./navOptions.jsx";
import Timer from "./timer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavOption/>
			
			<Footer/>
		</div>
	);
};

export default Home;
//<Timer/>