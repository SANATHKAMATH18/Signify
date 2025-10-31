import React from "react";

function Masthead() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center home-gradient">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="col-lg-7 text-white font-weight-bold display-1 text-center">
          Welcome to Signify!
        </div>
        <div className="col-lg-4 divider my-4" />
        <div
          className="col-lg-7 container text-white-50 lead text-center"
          style={{ fontSize: "5rem !important" }}
        >
          A tool that helps hearing impaired individuals understand speech
          through real-time sign language translation.
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a className="btn btn-light btn-lg px-3" href="#intro">
            Get Started <i className="fa fa-angle-down" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Masthead;
