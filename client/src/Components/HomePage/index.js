import React from "react";
import "./style.css";
import LandingPage from "../LandingPage";
import ContactMe from "../ContactMe";
import LatestWorks from "../LatestWorks";
class HomePage extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className='home-page'>
        <LandingPage />
        <LatestWorks />
        <ContactMe />
      </div>
    );
  }
}
export default HomePage;
