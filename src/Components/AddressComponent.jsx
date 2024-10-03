import React from "react";

const AddressComponent = () => {
  return (
    <div className="sm:pl-10 pl-0 sm:w-[50%] w-[92%] h-fit flex flex-col justify-center items-start">
      <span className="sm:text-3xl text-2xl font-semibold">Contact Info</span>
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl">Kalyani Government Engineering College</span>
        <span className="text-xl">Kalyani - 741 235, Nadia</span>
        <span className="text-xl">West Bengal</span>
        <span className="text-xl font-semibold">
          Students' Automobile Club of Kalyani Government Engineering College
        </span>
        <div className="pt-10 flex flex-col justify-start items-start">
          <span className="pb-3 sm:text-3xl text-2xl font-semibold font-sans">
            Contact Support
          </span>
          <div className="text-xl flex flex-wrap">
            <span>Debdulal Saha - </span> <span>+91 90911 71996</span>
          </div>
          <div className="text-xl flex flex-wrap">
            <span>Afzal Hossain Mallik (3rd Year Coordinator) -</span>{" "}
            <span>+91 98327 66191</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
