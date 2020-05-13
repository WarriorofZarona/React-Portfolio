import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
// import About from "./pages/About";
import Footer from "./components/Footer";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import "./App.css";

function App() {

  return (
    <Router>
      <Header />
      <PageTitle>
        {/* <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
      </PageTitle>
      <Footer />
    </Router >
  )
}

export default App;
