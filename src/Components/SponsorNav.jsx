import React from "react";
import { Link } from "react-router-dom";
import { KGEC_Logo, Logo } from "../data/logo";

const SponsorNav = () => {
  return (
    <div className="py-5 pl-10 pr-10 bg-slate-100/20 flex flex-row gap-2 items-center w-full">
      <Link
        to="/"
        className="flex flex-row justify-center items-center gap-5 w-fit h-fit"
      >
        <div className="hover:cursor-pointer gap-5 flex flex-row w-fit h-fit justify-center items-center">
          <div className="border-r-2 pr-5 border-black">
            <img
              className="w-fit sm:h-20 h-14"
              src={KGEC_Logo}
              alt="KGEC-Logo"
            />
          </div>
          <img className="w-fit sm:h-20 h-14" src={Logo} alt="SAC-KGEC Logo" />
          <div className="text-black sm:text-4xl text-3xl font-sans font-semibold">
            SAC-KGEC
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SponsorNav;
