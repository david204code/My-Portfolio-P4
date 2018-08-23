import React from "react";
import "./contact.css";

const Contact = () => (
  <div>
    <div className="container">
      <div className="jumbotron">
      <div className="row"> 
        <div className="col-md-12 first-part">
          <h4 className="">Feel free to contact me!</h4>
          <p>Contact detail below.</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4 offset-md-4 table-part">
        <table>
          <tr>
            <th>Full Name:</th>
            <td>David Wu</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>London, England</td>
          </tr>
          <tr>
            <th>Email:</th>
            <tr>david204code@gmail.com</tr>
          </tr>
          <tr>
            <th>Age:</th>
            <tr>23</tr>
          </tr>
        </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 offset-md-4">            
          <div className="social-media">
            <br>
            </br>
            <a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.github.com" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
  
      </div>
      
    </div>

    {/* <form id="contact-form" method="post">
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
          </form> */}
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
