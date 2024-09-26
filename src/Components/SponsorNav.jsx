import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../data/logo";

const SponsorNav = () => {
  return (
    <div className="p-1 pl-10 pr-10 bg-slate-100/20 flex flex-row gap-2 items-center w-full">
      <Link
        to="/"
        className="flex flex-row justify-center items-center gap-5 w-fit h-fit"
      >
        <div className="w-28 h-28">
          <img src={Logo} alt="SAC-KGEC logo" className="w-fit h-fit" />
        </div>
        <div className="text-4xl font-semibold font-sans text-black">SAC-KGEC</div>
      </Link>
    </div>
  );
};

export default SponsorNav;
