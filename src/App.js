import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center m-5">Please complete the form</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label className="form-check-label" for="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="30"
                cols="50"
              ></textarea>
            </div>
            <div className="col-md-6 offset-3 mb-5">
              <button type="submit" className="col-md-12 btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
