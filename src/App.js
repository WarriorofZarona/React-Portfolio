import React, { Component } from 'react';
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import About from "./pages/About";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import TitleContext from "./utils/TitleContext";

class App extends Component {
  state = { text: "" }

  changeText = page => {
    switch (page) {
      case "/":
        this.setState({ text: "About Me" });
        break;
      case "/portfolio":
        this.setState({ text: "Portfolio" });
        break;
      case "/contact":
        this.setState({ text: "Contact" });
        break;
    }
  };

  componentDidMount() {
    // const location = useLocation();
    // let page = location.pathname;
    let page = "/"
    this.changeText(page)
  }

  render() {
    return (
      <Router>
        <Header />
        <PageTitle text={this.state.text}>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </PageTitle>
        <Footer />
      </Router >
    )
  }
}

export default App;
