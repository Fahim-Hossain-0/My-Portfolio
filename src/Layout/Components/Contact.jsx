import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <section className="py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-2xl shadow-xl bg-base-200">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center text-primary-content text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-xl font-medium mb-2">
            🌐 Let’s Create Something Amazing Together
          </p>
          <p className="text-gray-400">
            Fill out the form and I’ll get back to you as soon as possible.
          </p>
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
              placeholder="Enter message"
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
