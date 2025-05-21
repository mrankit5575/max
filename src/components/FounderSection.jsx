import React from 'react';
import img from '../assets/img.jpg';

const FounderSection = () => {
  const founder = {
    name: "Ankit Singh",
    title: "Founder & CEO",
    bio: "I’m a 2nd-year student, passionate Full Stack and App Developer, and a natural problem solver driven by curiosity and innovation. I run my own web agency, avdevelopment.in, where I provide modern web solutions to individuals and businesses. Alongside my development work, I’ve mentored over 50+ students, helping them get started with coding and development. I'm constantly learning, building, and striving to create impact through technology.",
    socialLinks: [
      { name: "Instagram", url: "https://www.instagram.com/viranshusingh055/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ankit5575/" },
      { name: "Medium", url: "#" }
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Meet Our <span className="text-blue-600">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary behind our success
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
          <div className="md:w-full lg:w-2/5 flex justify-center items-center">
  <img 
    src={img} 
    alt={founder.name} 
    className="w-48 h-48 object-cover rounded-full shadow-md border border-gray-300"
  />
</div>

            <div className="p-8 md:p-12 md:w-2/3 lg:w-3/5">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                Leadership
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{founder.name}</h3>
              <p className="text-lg text-blue-500 mb-6">{founder.title}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {founder.bio}
              </p>
              <div className="flex space-x-4">
                {founder.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Learn More About Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;