import React, { forwardRef, useState } from "react";
import MapComponent from "./MapComponent";

const ContactUs = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="w-full flex flex-col" ref={ref}>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center pt-10">
          <h2 className="heading-custom">Contact Us</h2>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa semper aliquam quis mattis quam.
          </p>
        </section>
        <MapComponent/>
        <section className="flex flex-row justify-center items-center">
          <section className="flex flex-col justify-center items-center">
            {/* <div className="bg-yellow-300 flex flex-col justify-center items-center">
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
            </div> */}
            {/* <form
              className="bg-red-200 flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="8"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form> */}
          </section>
          <section>
          </section>
        </section>
      </div>
    </div>
  );
});

export default ContactUs;
