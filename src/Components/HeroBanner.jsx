import React, { forwardRef } from "react";

const HeroBanner = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="sm:mt-[11vh] mt-[9vh]" id="home">
      <div className="pl-10 pr-20 bg-image flex felx-col justify-start items-center w-full">
        <div className="rounded-2xl px-5 py-3 bg-slate-300/40 w-fit shadow-md ">
          <h2 className="text-white sm:text-6xl text-5xl">Students' Automobile Club KGEC</h2>
          <p className="text-white sm:text-3xl font-thin text-xl pt-2">
            Gear up for adrenaline-fueled adventures with us.
          </p>
          <div className="pt-10">
            <a className="btn btn-primary btn-lg" href="http://localhost:3000">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroBanner;
