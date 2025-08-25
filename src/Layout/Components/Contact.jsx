import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Here you can integrate email API or backend submission
  };

  return (
    <section className="py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-2xl shadow-xl bg-base-200">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center text-primary-content text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-xl font-medium">
            🌐 Let’s Create Something Amazing Together
          </p>
          <p className="text-gray-400 mb-6">
            Fill out the form or reach me directly via the contact details below.
          </p>

          {/* Contact Information */}
          <div className="space-y-3 text-left">
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-primary" />{" "}
              <a href="mailto:fahim@example.com" className="hover:underline">
                fahimhossain@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaPhone className="text-primary" />{" "}
              <a href="tel:+8801234567890" className="hover:underline">
                +8801886651908
              </a>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaWhatsapp className="text-green-500" />{" "}
              <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
               +8801886651908
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-primary-content mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-base-300 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-primary-content mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-base-300 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-primary-content mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="textarea textarea-bordered w-full bg-base-300 text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
