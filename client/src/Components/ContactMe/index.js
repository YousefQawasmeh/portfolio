import React from "react";
import "./style.css";
class ContactMe extends React.Component {
  state = {
    fullNameClass: "",
    emailClass: "",
    messageClass: "",
    fullName: "",
    email: "",
    message: "",
  };

  render() {
    return (
      <div className='contact-me'>
        <div className='get-in-touch'>
          <p>GET IN TOUCH</p>
          <h1>
            I LOVE TO
            <br /> HEAR FROM YOU
          </h1>
        </div>
        <form className='contact-form'>
          <label>
            <span className={"span-input " + this.state.fullNameClass}>
              Full Name
            </span>
            <input
              value={this.state.fullName}
              autoComplete='off'
              onChange={({ target: { name, value } }) => {
                this.setState({ [name]: value });
              }}
              name='fullName'
              type='text'
              onFocus={({ target: { name, value } }) => {
                this.setState({ [name + "Class"]: "span-input-active" });
              }}
              onBlur={({ target: { name, value } }) => {
                if (!value) this.setState({ [name + "Class"]: "" });
              }}
            />
          </label>
          <br />
          <label>
            <span className={"span-input " + this.state.emailClass}>Email</span>
            <input
              value={this.state.email}
              autoComplete='off'
              onChange={({ target: { name, value } }) => {
                this.setState({ [name]: value });
              }}
              name='email'
              type='text'
              onFocus={({ target: { name, value } }) => {
                this.setState({ [name + "Class"]: "span-input-active" });
              }}
              onBlur={({ target: { name, value } }) => {
                if (!value) this.setState({ [name + "Class"]: "" });
              }}
            />
          </label>
          <br />
          <label>
            <span className={"span-input " + this.state.messageClass}>
              Message
            </span>

            <textarea
              value={this.state.message}
              onChange={({ target: { name, value } }) => {
                this.setState({ [name]: value });
              }}
              name='message'
              className={this.state.message ? "textarea-active" : ""}
              type='textarea'
              onFocus={({ target: { name, value } }) => {
                this.setState({ [name + "Class"]: "span-input-active" });
              }}
              onBlur={({ target: { name, value } }) => {
                if (!value) this.setState({ [name + "Class"]: "" });
              }}
            />
          </label>
          <button
            className='submit-contact-me '
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
