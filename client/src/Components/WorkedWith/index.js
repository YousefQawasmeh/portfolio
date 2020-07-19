import React from "react";
import "./style.css";
import gsgLogo from "../../images/gazaskygeeks logo.png";
import darbLogo from "../../images/darbtravel logo.png";
class WorkedWith extends React.Component {
  render() {
    return (
      <div>
        <div className='worked-with'>
          <div className='company'>
            <img className='company-logo' src={gsgLogo} />
            <h1>gaza sky geeks</h1>
          </div>
          <div className='company'>
            <img className='company-logo' src={darbLogo} />
            <h1>darb travel</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkedWith;
