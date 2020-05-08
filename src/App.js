import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )
}

export default App;
