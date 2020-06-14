import React from "react";
import "./style.css";
import DivDots from "./../../SharedComponent/DivDots";
// import personalImg3 from "./../../images/img3.png";
// import personalImg2 from "./../../images/img2.png";
// import personalImg1 from "./../../images/img1.png";
import personalImg from "./../../images/img.jpeg";

class LandingPage extends React.Component {
  state = { personalImg: [personalImg1, personalImg2, personalImg3], imgNo: 0 };
  componentDidMount() {
    setInterval(() => {
      this.setState({ imgNo: (this.state.imgNo + 1) % 3 });
    }, 3000);
  }
  render() {
    return (
      <div className='landing-page'>
        <div className='social-media-contener'>
          <h4 className='name'>Yousef Qawasmeh</h4>
          <div className='social-media'>
            <h4>Facebook</h4>
            <h4>Gmail</h4>
            <h4>GitHub</h4>
            <h4>Instagram</h4>
          </div>
        </div>
        <div className='float-div'>
          <h1 className='my-name'>
            Yousef Qawasmeh,
            <br />
            Full-Stack Dev
          </h1>
          <h1>React/Node JS</h1>
          <br />
          <h4 className='short-description'>
            Hi, my name is Yousef Qawasmeh and I'm glad that you visited my
            site. I have very good experience in developing and implementing Web
            and Mobile applications. I have worked on many different projects
            and have gained and still gain daily experience in every new
            project. I love my job very much and strive to provide the best
            always.
          </h4>
        </div>
        <DivDots width='35%' height='70vh'>
          <img
            className='personal-img'
            src={personalImg}
            // src={this.state.personalImg[this.state.imgNo]}
          />
        </DivDots>
        <div className='blue-div'></div>
      </div>
    );
  }
}
export default LandingPage;
