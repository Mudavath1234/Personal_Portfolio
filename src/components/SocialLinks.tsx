import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/johndoe',
      color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/johndoe',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/johndoe',
      color: 'hover:text-blue-400 hover:bg-blue-50'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:john@example.com',
      color: 'hover:text-red-600 hover:bg-red-50'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/johndoe',
      color: 'hover:text-pink-600 hover:bg-pink-50'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full border-2 border-gray-200 text-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${link.color}`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Or drop me a line at{' '}
            <a
              href="mailto:john@example.com"
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              john@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;