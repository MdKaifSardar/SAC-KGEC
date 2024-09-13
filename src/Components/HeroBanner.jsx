import React, { forwardRef } from "react";

const HeroBanner = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mt-[30px]" id="home">
      <section id="hero-banner">
        <div className="banner-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Best Flat Responsive html</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a
                  className="btn btn-primary btn-lg"
                  href="http://localhost:3000"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default HeroBanner;
