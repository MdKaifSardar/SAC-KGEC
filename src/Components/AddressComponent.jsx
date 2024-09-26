import React from "react";

const AddressComponent = () => {
  return (
    <div className="pt-10 w-full h-fit flex flex-col justify-center items-center">
      <h3>Contact Info</h3>
      <address>
        <strong>Amazing Company, Inc.</strong>
        <br />
        12345 NewYork, Street 125
        <br />
        United States 94107
        <br />
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>
    </div>
  );
};

export default AddressComponent;
