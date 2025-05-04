import React, { useState } from "react";

function BecomeATutor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for applying! Our team will contact you shortly via call or WhatsApp.");
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Share Your Knowledge.{" "}
          <span className="text-yellow-400">Become a Tutor</span>
        </h2>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Join our team of passionate educators and make a difference in students' lives.
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-left shadow-lg mb-10 border border-white/20">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Who Can Apply?</h3>
          <ul className="list-disc list-inside text-white text-base space-y-2">
            <li>📚 College Students – Start earning pocket money by teaching online.</li>
            <li>🎓 School Students – Teach junior classes and build confidence and income.</li>
            <li>💼 Working Professionals – Earn passive income by teaching in your spare time.</li>
            <li>👨‍🏫 Full-Time Teachers – Expand your reach and impact more students.</li>
          </ul>
          <p className="mt-4 text-sm opacity-80">
            After you submit your application, our team will get in touch with you through a phone call or WhatsApp for further steps.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
        >
          <div className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-80">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-80">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 opacity-80">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-8"
            >
              Submit Application
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm opacity-80">
          We respect your privacy. Your information will never be shared.
        </p>
      </div>
    </section>
  );
}

export default BecomeATutor;
