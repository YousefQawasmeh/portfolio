import React from "react";
import "./style.css";
import Work from "./work";
class LatestWorks extends React.Component {
  state = {
    screenImgHeight: 0,
    screenImgWidth: 0,
    mobileImgHeight: 0,
    mobileImgWidth: 0,
    hidden: false,
    flag: 0,
    rootWidth: 0,
    LatestWorksHeight: 0,
  };

  componentDidMount() {
    const rootElement = document.getElementById("root");
    if (rootElement) this.setState({ rootWidth: rootElement.clientWidth });
    window.onresize = () => {
      this.setState({ flag: this.state.flag + 1 });
      const screenImgElement = document.getElementById("screenImg");
      if (screenImgElement) {
        if (screenImgElement.height !== this.state.screenImgHeight)
          this.setState({ screenImgHeight: screenImgElement.height });
        if (screenImgElement.width !== this.state.screenImgWidth)
          this.setState({ screenImgWidth: screenImgElement.width });
      }
      const mobileImgElement = document.getElementById("mobileImg");
      if (mobileImgElement) {
        if (mobileImgElement.height !== this.state.mobileImgHeight)
          this.setState({ mobileImgHeight: mobileImgElement.height });
        if (mobileImgElement.width !== this.state.mobileImgWidth)
          this.setState({ mobileImgWidth: mobileImgElement.width });
      }
      const rootElement = document.getElementById("root");
      if (rootElement) this.setState({ rootWidth: rootElement.clientWidth });
      const latestWorksElement = document.getElementById("latest-works");
      if (latestWorksElement)
        this.setState({ LatestWorksHeight: latestWorksElement.clientHeight });
    };
  }

  render() {
    return (
      <div
        onLoad={() => {
          const latestWorksElement = document.getElementById("latest-works");
          if (latestWorksElement)
            this.setState({
              LatestWorksHeight: latestWorksElement.clientHeight,
            });
        }}
        id='latest-works'
        style={{
          marginTop:
            ((1 - this.state.rootWidth / 2650.0) *
              this.state.LatestWorksHeight) /
            -2,
          marginBottom:
            ((1 - this.state.rootWidth / 2650.0) *
              this.state.LatestWorksHeight) /
            -2,
          // backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div
          className='lates-works'
          style={{
            marginLeft: `${
              (this.state.rootWidth *
                0.75 *
                (1 - this.state.rootWidth / 2650.0)) /
                -2 +
              25
            }px`,

            transform: `scale(${
              this.state.rootWidth < 2650 ? this.state.rootWidth / 2650.0 : 1
            })`,
          }}
        >
          <h1>----- Latest Works</h1>
          <h4></h4>
          <Work name='Portifolio' URL='www.qawasmeh.com' />
          <Work name='Portifolio0' />
          <Work name='Portifolio2' URL='http://www.qawasmeh.com' />
          <Work name='Portifolio3' URL='https://clickclock.herokuapp.com/' />
          <Work name='Portifolio4' URL='https://qawasmeh.herokuapp.com/' />
        </div>
      </div>
    );
  }
}
export default LatestWorks;
