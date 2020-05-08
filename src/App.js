import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import About from "./pages/About";
import Footer from "./components/Footer";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
import TitleContext from "./utils/TitleContext";

function App() {

  const [titleState, setTitleState] = useState({
    title: ""
  });

  function changeTitle(title) {
    switch (title) {
      case "/":
        titleState.title = "About";
        setTitleState({ ...titleState, title });
        break;
      case "/portfolio":
        titleState.title = "Porfolio";
        setTitleState({ ...titleState, title });
        break;
      case "/contact":
        titleState.title = "Contact";
        setTitleState({ ...titleState, title });
        break;
    }
  };

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    changeTitle();
  }, []);

  return (
    <Router>
      <Header />
      <TitleContext.Provider value={titleState}>
        <PageTitle>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
        </PageTitle>
      </TitleContext.Provider>
      <Footer />
    </Router>
  )
}

export default App;
