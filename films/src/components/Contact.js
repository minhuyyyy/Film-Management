import React from "react";

export default function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="tel" placeholder="Your Phone" />
        <input type="email" placeholder="Email" />
        <div>
          <span className="material-icons left" style={{ display: "inline" }}>
            edit
            <input
              type="text"
              placeholder="Your content"
              style={{ display: "inline", marginLeft: "10px" }}
            />
          </span>
        </div>
        <div id="submit">
            <button
              className="btn waves-effect waves-light center"
              type="submit"
              name="action"
              style={{ display: "block", marginTop: "70px" }}
            >
              Submit
              <i className="material-icons left">send</i>
            </button>
        </div>
      </form>
    </div>
  );
}
