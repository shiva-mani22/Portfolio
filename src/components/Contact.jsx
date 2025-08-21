import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/contact/saveContact",
        formData
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Registered successfully 🎉");
        setFormData({ name: "", email: "", phone: "", description: "" });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Left Info Section */}
      <div className="md:w-1/2 px-6 space-y-4">
        <h1 className="text-4xl font-bold text-amber-400">Contact Me</h1>
        <p className="text-lg text-gray-300">
          Thanks for viewing my portfolio. I’d love to hear from you!
        </p>
        <p className="text-gray-400">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello — feel free to reach out ✨
        </p>
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black flex flex-col gap-6 p-10 w-full max-w-lg rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Get in Touch
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            placeholder="Message"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="border rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-amber-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-500 text-white py-3 rounded-md font-semibold tracking-widest hover:bg-amber-600 active:scale-95 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
