import React, { forwardRef } from "react";
import MapComponent from "./MapComponent";
import AddressComponent from "./AddressComponent";
import ContactUsForm from "./ContactUsForm";

const ContactUs = forwardRef((props, ref) => {
  return (
    <div className="w-full flex flex-col" ref={ref}>
      <section className="flex flex-col justify-center items-center pt-10 pb-10">
        <h2 className="heading-custom">Contact Us</h2>
        <p className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          risus vitae massa semper aliquam quis mattis quam.
        </p>
      </section>
      <section className="bg-green-200 h-[100vh] w-full flex sm:flex-row flex-col justify-center items-center">
        <div className="h-full sm:w-[50%] w-[92%] flex flex-col sm:flex-col justify-between items-center">
          <AddressComponent />
          <ContactUsForm />
        </div>
        <MapComponent />
      </section>
    </div>
  );
});

export default ContactUs;
