import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DivDots from "./../../SharedComponent/DivDots";
import iconWhatsApp from "./../../images/icons/iconWhatsApp.png";
import iconFacebook from "./../../images/icons/iconFacebook.png";
import iconLinkedIn from "./../../images/icons/iconLinkedIn.png";
import iconGitHub from "./../../images/icons/iconGitHub.png";
import iconRightArrow from "./../../images/icons/iconRightArrow.png";
// import personalImg3 from "./../../images/img3.png";
// import personalImg2 from "./../../images/img2.png";
// import personalImg1 from "./../../images/img1.png";
import personalImg from "./../../images/img.jpeg";

class LandingPage extends React.Component {
  // state = { personalImg: [personalImg1, personalImg2, personalImg3], imgNo: 0 };
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ imgNo: (this.state.imgNo + 1) % 3 });
  //   }, 3000);
  // }
  render() {
    return (
      <div className='landing-page'>
        <div className='social-media-contener'>
          <h4
            className='name'
            onMouseEnter={({ target }) =>
              (target.innerText = "Yousef Qawasmeh ــــــــــــ")
            }
            onMouseLeave={({ target }) =>
              (target.innerText = "Yousef Qawasmeh ــــــــ")
            }
          >
            Yousef Qawasmeh ــــــــ
          </h4>
          <div className='social-media'>
            <Link className='social-media-link' to='https://wa.me/970597252561'>
              <img className='social-media-icon' src={iconWhatsApp} />
            </Link>
            <Link
              className='social-media-link'
              to='https://fb.com/you97sef'
              target='_blank'
            >
              <img className='social-media-icon' src={iconFacebook} />
            </Link>
            <Link
              className='social-media-link'
              to='https://www.linkedin.com/in/yousefqawasmeh/'
            >
              <img className='social-media-icon' src={iconLinkedIn} />
            </Link>
            <Link
              className='social-media-link'
              to='https://github.com/YousefQwasmeh'
            >
              <img className='social-media-icon' src={iconGitHub} />
            </Link>
          </div>
        </div>
        <div className='float-div-contener'>
          <div className='float-div'>
            <h1 className='my-name'>
              Yousef Qawasmeh,
              <br />
            </h1>
            <h1>Full-Stack Dev</h1>
            <h2>React/Node JS</h2>
            <br />
            <h4 className='short-description'>
              Hi, my name is Yousef Qawasmeh and I'm glad that you visited my
              site. I have very good experience in developing and implementing
              Web and Mobile applications. I have worked on many different
              projects and have gained and still gain daily experience in every
              new project. I love my job very much and strive to provide the
              best always.
            </h4>
            <div className='cv-container'>
              <Link to='/yousef-qawasmeh' target='_blank'>
                <button className='button-preview'>
                  preview CV &nbsp; &nbsp; &nbsp;
                  <img src={iconRightArrow} />
                </button>
              </Link>
            </div>
          </div>
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
