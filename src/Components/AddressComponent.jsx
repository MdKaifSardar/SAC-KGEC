import React from "react";

const AddressComponent = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-start">
      <h3>Contact Info</h3>
      <div className="flex flex-col justify-center items-start">
        <span>Amazing Company, Inc.</span>
        <span>12345 NewYork, Street 125</span>
        <span>United States 94107</span>
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </div>
    </div>
  );
};

export default AddressComponent;
