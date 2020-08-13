import React from "react";
import "./style.css";
import LandingPage from "../LandingPage";
import LatestWorks from "../LatestWorks";
import WorkedWith from "../WorkedWith";
import ContactMe from "../ContactMe";
import Footer from "../Footer"; 
class HomePage extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className='home-page'>
        <LandingPage />
        <h1 className='title-part'> &nbsp;&nbsp;&nbsp;&nbsp; Latest Works</h1>
        <LatestWorks />
        <h1 className='title-part'>&nbsp;&nbsp;&nbsp;&nbsp; I Worked With</h1>
        <WorkedWith />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}
export default HomePage;
