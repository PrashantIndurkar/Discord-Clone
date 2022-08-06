import Nav from "./Components/LandingPage/Nav";
import Header from "./Components/LandingPage/Header";
import "./App.css";
import Section from "./Components/LandingPage/Section";
import Footer from "./Components/LandingPage/Footer";
import Login from "./Components/LoginPage/Login";

import { Routes, Route } from "react-router-dom";
import Channel from "./Components/Channel/Channel";
import Layout from "./Components/Layout";

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
        <Route path="channel" element={<Channel />}></Route>
      </Routes>
      {/* <Layout /> */}
    </>
  );
}
export default App;
