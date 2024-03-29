import Nav from "./Components/LandingPage/Nav";
import Header from "./Components/LandingPage/Header";
import "./App.css";
import Section from "./Components/LandingPage/Section";
import Footer from "./Components/LandingPage/Footer";
import Login from "./Components/LoginPage/Login";

import { Routes, Route } from "react-router-dom";
import Channels from "./Components/Channel/Channels";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Header />
              <Section />
              <Footer />
            </>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="channels" element={<Channels />}></Route>
        <Route path="channels/:id" element={<Channels />}></Route>
      </Routes>
      {/* <Layout /> */}
    </>
  );
}
export default App;
