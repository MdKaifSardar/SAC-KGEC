import React, { forwardRef, useState } from "react";

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
      <section id="contact-us">
        <div className="container">
          <div className="flex flex-col justify-center items-center pt-10">
            <h2 className="heading-custom">Contact Us</h2>
            <p className="main-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget risus vitae massa semper aliquam quis mattis quam.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="container contact-info">
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="contact-form">
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
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="contact-form">
                  <form
                    id="main-contact-form"
                    name="contact-form"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default ContactUs;
