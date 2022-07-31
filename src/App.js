import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/LandingPage/Nav";
import Header from "./Components/LandingPage/Header";
import "./App.css";
import Section from "./Components/LandingPage/Section";
import Footer from "./Components/LandingPage/Footer";

function App() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
export default App;
