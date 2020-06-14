import React from "react";
import "./style.css";
import LandingPage from "../LandingPage";
class HomePage extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className="home-page">
        <LandingPage />
      </div>
    );
  }
}
export default HomePage;
