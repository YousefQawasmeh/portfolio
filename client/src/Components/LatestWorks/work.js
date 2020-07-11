import React from "react";
import "./style.css";
import screenImg from "../../images/screen.png";
import mobileImg from "./../../images/mobile.png";
// import iframeImgDemo from "./../../images/iframeImgDemo1.png";

class Work extends React.Component {
  state = {
    screenImgHeight: 0,
    screenImgWidth: 0,
    mobileImgHeight: 0,
    mobileImgWidth: 0,
    hidden: false,
  };

  render() {
    return (
      <div className='work'>
        <div className='screen-work'>
          <iframe
            height={this.state.screenImgHeight * 0.64 + "px"}
            width={this.state.screenImgWidth * 0.916666 + "px"}
            style={{
              overflow: "scroll",
              marginLeft: this.state.screenImgWidth * 0.04166666 + "px",
              marginTop: this.state.screenImgHeight * 0.062 + "px",
            }}
            className='screen-iframe'
            src={this.props.URL || "/404"}
          ></iframe>
          {/* <img
            onClick={(e) => {
              this.setState({ hidden: true });
            }}
            hidden={this.state.hidden}
            height={this.state.screenImgHeight * 0.64 + "px"}
            width={this.state.screenImgWidth * 0.916666 + "px"}
            style={{
              marginLeft: this.state.screenImgWidth * 0.04166666 + "px",
              marginTop: this.state.screenImgHeight * 0.062 + "px",
            }}
            className='screen-iframe-demo'
            src={iframeImgDemo}
          /> */}
          <img
            id={`screenImg${this.props.name}`}
            onLoad={() => {
              const screenImgElement = document.getElementById(
                "screenImg" + this.props.name
              );
              if (screenImgElement) {
                if (screenImgElement.height !== this.state.screenImgHeight)
                  this.setState({ screenImgHeight: screenImgElement.height });
                if (screenImgElement.width !== this.state.screenImgWidth)
                  this.setState({ screenImgWidth: screenImgElement.width });
              }
            }}
            className='screen-img'
            src={screenImg}
          />
        </div>
        <div
          className='mobile-work'
          style={{
            height:
              (this.state.mobileImgHeight < 600
                ? this.state.mobileImgHeight * 1.5
                : this.state.mobileImgHeight) + "px",
            marginTop:
              (this.state.mobileImgHeight < 600
                ? this.state.mobileImgHeight * -1.5
                : this.state.mobileImgHeight * -1) + "px",
          }}
        >
          <img
            className='mobile-img'
            src={mobileImg}
            id={`mobileImg${this.props.name}`}
            onLoad={() => {
              const mobileImgElement = document.getElementById(
                "mobileImg" + this.props.name
              );
              if (mobileImgElement) {
                if (mobileImgElement.height !== this.state.mobileImgHeight)
                  this.setState({ mobileImgHeight: mobileImgElement.height });
                if (mobileImgElement.width !== this.state.mobileImgWidth)
                  this.setState({ mobileImgWidth: mobileImgElement.width });
              }
            }}
          />
          <iframe
            height={this.state.mobileImgHeight * 0.9 + "px"}
            width={this.state.mobileImgWidth * 0.95 + "px"}
            style={{
              marginLeft: this.state.mobileImgWidth * 0.026 + "px",
              marginTop: this.state.mobileImgHeight * 0.056 + "px",
              borderRadius: this.state.mobileImgWidth * 0.091 + "px",
            }}
            className='mobile-iframe'
            src={this.props.URL || "/404"}
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Work;
