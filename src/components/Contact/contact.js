import React from "react";
import "./contact.css";

const Contact = () => (
  <div className="card-shadow text-muted bg-light position-relative">
    <div className="row">
      <div className="col-md-4">
        <img className="img-fluid p-5" src="/images/myAvatar1.jpg" alt="" />
      </div>
      <div className="col-md-8">
        <div className="pt-5">
          <h4 className="">Please get in touch!</h4>
          <p>Contact details below.</p>
        </div>
        <hr />
        <div>
          <table>
            <tbody>
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
                <td>david204code@gmail.com</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className=" social-media">
          <a
            href="https://www.linkedin.com/in/david-wu-012080155"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/david204code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
