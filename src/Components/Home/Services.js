import React from "react";
import { Link } from "react-router-dom";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn.png";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h2 section-heading">Features</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
              The convert feature lets you convert audio or text into Indian Sign
              Language in real-time whereas the learn sign feature helps you learn
              signs for the English letters and some common words in Indian Sign Language.
            </div>
          </div>
        </div>
        
        {/* --- MODIFICATION IS ON THE LINE BELOW --- */}
        <div className="card-deck">
          <div className="row justify-content-center">
            
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgConvert} alt="Convert Clipart" />
                <div className="card-body">
                  <h5 className="card-title">Convert speech or text to ISL</h5>
                  <p className="card-text">
                    Want to convert audio or text into Indian Sign Language?
                    Provide your audio by speaking into your mic or type the text that you want to
                    convert into ISL and click start animations.
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/convert"
                    className="btn btn-secondary btn-outline-dark w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    Try it Out!
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgLearnSign} alt="Learn Sign Clipart" />
                <hr className="m-0"></hr>
                <div className="card-body">
                  <h5 className="card-title">Learn Indian Sign Language</h5>
                  <p className="card-text">
                    Curious about Indian Sign Language?
                    Select a sign from the list, watch it as many times as you
                    want and learn ISL.
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/learn-sign"
                    className="btn btn-secondary btn-outline-dark w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    Try it Out!
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;