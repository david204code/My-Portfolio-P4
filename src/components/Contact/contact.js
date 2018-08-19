import React from "react";
import "./contact.css";

const Contact = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="contact-form col-md-8 offset-md-2">
          <h4 className="infor">Feel free to contact me!</h4>
          <form id="contact-form" method="post">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
            <br />
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
            <br />
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              rows="7"
              required
            />
            <br />
            <input
              type="submit"
              className="form-control submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>

    {/* <form>
      <div className="row">
        <div class="col-md-4">
          <input type="text" class="form-control" placeholder="Name" />
        </div>
        <div className="col-md-4">
          <input type="text" class="form-control" placeholder="Email Adress" />
        </div>
      </div>
      <div className="col-md-6 form-group">
        <label for="comment">Please leave your message</label>
        <textarea className="form-control" rows="5">
          {" "}
        </textarea>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form> */}
    {/* <form class="contact-form grid-row">
      <fieldset class="col-1-of-2">
        <label for="name">
          <span />
        </label>
        <input id="name" placeholder="Alex Smith" />
      </fieldset>
      <fieldset class="col-1-of-2">
        <label for="email">
          <span />
        </label>
        <input type="email" id="email" placeholder="alex.smith@gmail.com" />
      </fieldset>
      <fieldset class="col-1-of-1">
        <label for="message">
          <span />
        </label>
        <textarea id="message" placeholder="Hello..." />
      </fieldset>
      <fieldset class="col-1-of-1">
        <div class="grid-row">
          <button class="false">Send Message</button>
        </div>
      </fieldset>
    </form> */}
  </div>
);

export default Contact;
