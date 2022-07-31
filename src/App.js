import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import "./App.css";
import Section from "./Components/Section";

function App() {
	return (
		<div className="">
			<Nav />
			<Header />
			<Section />
		</div>
	);
}
export default App;
