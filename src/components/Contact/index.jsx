import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters long";
      isValid = false;
    }

    if (formData.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters long";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.body.length < 3) {
      errors.body = "Body must be at least 3 characters long";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col justify-center w-full min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1 text-black">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {formErrors.fullName && (
            <span className="text-red-500">{formErrors.fullName}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {formErrors.email && (
            <span className="text-red-500">{formErrors.email}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1 text-black">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {formErrors.subject && (
            <span className="text-red-500">{formErrors.subject}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block mb-1 text-black">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {formErrors.body && (
            <span className="text-red-500">{formErrors.body}</span>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
