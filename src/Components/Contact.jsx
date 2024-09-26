import React, { forwardRef } from "react";
import MapComponent from "./MapComponent";
import AddressComponent from "./AddressComponent";
import ContactUsForm from "./ContactUsForm";

const ContactUs = forwardRef((props, ref) => {
  return (
    <div className="w-full flex flex-col" ref={ref}>
      <section className="flex flex-col justify-center items-center pt-10 pb-10">
        <h2 className="heading-custom">Contact Us</h2>
        <p className="main-text font-semibold">
          Have a question, comment, or want to get involved? Contact us today!
        </p>
      </section>
      <section className="sm:gap-0 gap-10 sm:h-[100vh] h-fit w-full flex sm:flex-row flex-col justify-center items-center">
        <div className="h-full px-20 sm:w-[50%] w-[100%] flex flex-col sm:flex-col justify-start items-start">
          <AddressComponent />
        </div>
        <MapComponent />
      </section>
    </div>
  );
});

export default ContactUs;
