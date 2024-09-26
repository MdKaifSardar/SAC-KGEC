import React, { useState } from "react";

const ContactUsForm = () => {
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
    <div className="w-full justify-center items-center">
      <form
        className="w-full py-10 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full py-2">
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
        <div className="w-full py-2">
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
        <div className="w-full py-2">
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
        <div className="w-full py-2">
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
        <div className="pt-4">
          <button type="submit" className=" btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
