import React, { forwardRef } from "react";

const HeroBanner = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mt-[30px]" id="home">
      <section id="hero-banner">
        <div className="banner-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Students' Automobile Club KGEC</h2>
                <p className="sm:text-3xl font-thin text-xl pt-2">
                  Gear up for adrenaline-fueled adventures with us.
                </p>
                <div className="pt-10">
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
        </div>
      </section>
    </div>
  );
});

export default HeroBanner;
