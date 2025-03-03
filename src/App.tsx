import React, { useState, useRef } from 'react';
import { Menu, X, Mail, Linkedin, Github as GitHub, ExternalLink, ChevronRight, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import photo from '../Images/karthiphoto.png';
import summarize from '../Images/summarizer.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service details
    const serviceId = 'service_dkqf3so';
    const templateId = 'template_3qhxjng';
    const userId = 'BXOtngXsFrTK87cCQ';

    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Message sent successfully!');
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">KARTHI S</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#education" className="hover:text-indigo-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#education" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Education</a>
              <a href="#experience" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Experience</a>
              <a href="#projects" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="hover:text-indigo-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-600">Karthi S</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Developer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Aspiring Software Developer eager to develop, design, and maintain impactful technologies. 
              Passionate about creating and supporting innovative solutions in dynamic environments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
              >
                Contact Me <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl bg-white">
              <img 
                src={photo}
                alt="Karthi S" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              I'm a Computer Science And Design student at SNS College Of Engineering, Coimbatore, passionate about creating 
              impactful technologies and innovative solutions. I'm committed to continuous learning and integrating emerging 
              trends for quality and performance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With experience in web development and a strong foundation in HTML, CSS, JavaScript, and React.JS, I enjoy 
              building responsive and user-friendly applications. I'm also skilled in design tools like Figma, Canva, and Adobe.
            </p>
            <p className="text-lg text-gray-700">
              I'm currently seeking opportunities to apply my skills and knowledge in a professional environment where I can 
              contribute to meaningful projects and continue to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-indigo-600">Bachelor Of Engineering</h3>
                  <p className="text-lg font-medium">Computer Science And Design</p>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">2021 - 2025</span>
              </div>
              <p className="text-gray-600 mb-2">SNS College Of Engineering, Coimbatore</p>
              <p className="text-gray-600">CGPA - 7.9</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-indigo-600">Higher Secondary</h3>
                  <p className="text-lg font-medium">SBK Boys Higher Secondary School</p>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">2019 - 2021</span>
              </div>
              <p className="text-gray-600 mb-2">HSC - 85%</p>
              <p className="text-gray-600">SSLC - 79%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Internships</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-indigo-600">Web Development Intern</h3>
                    <p className="text-lg font-medium">Oasis Infobyte</p>
                    <p className="text-gray-600 mt-2">
                      Developed a responsive landing page and personal portfolio using HTML, CSS, and JavaScript, 
                      showcasing modern design practices.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-start">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full">
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Designed and developed responsive web pages</li>
                        <li>Implemented modern UI/UX principles</li>
                        <li>Optimized website performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full">
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Created interactive web elements</li>
                        <li>Implemented dynamic color-changing button</li>
                        <li>Developed time-based alert functionality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <h3 className="text-xl font-bold text-indigo-600">Web Development Intern</h3>
                    <p className="text-lg font-medium">Cognifyz Technologies</p>
                    <p className="text-gray-600 mt-2">
                      Created interactive web elements, including a dynamic color-changing button and a time-based 
                      alert box, enhancing user engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-indigo-600">Web Development Intern</h3>
                    <p className="text-lg font-medium">Cognifyz Technologies</p>
                    <p className="text-gray-600 mt-2">
                      Designed and implemented an expense tracker web app and a blog website using HTML, CSS, Node.js, 
                      and MongoDB to deliver full-stack solutions.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-start">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full">
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Developed full-stack web applications</li>
                        <li>Implemented MongoDB database integration</li>
                        <li>Created responsive UI with modern design principles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={summarize}
                  alt="AI Article Summarizer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Article Summarizer</h3>
                <p className="text-gray-600 mb-4">
                  An AI-powered tool that quickly condenses articles into short summaries, capturing the main points.
                  Users can adjust settings to get summaries tailored to their needs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">API Integration</span>
                </div>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80" 
                  alt="Enhanced Collaborative Tool" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enhanced Collaborative Tool</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative tool combining features of diagramming, real-time video meetings, and chat, 
                  enabling seamless team collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">WebRTC</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Socket.io</span>
                </div>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" 
                  alt="Expense Tracker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
                <p className="text-gray-600 mb-4">
                  A web application that helps users track their expenses, categorize spending, and visualize 
                  financial data through interactive charts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                </div>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">HTML5/CSS3</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React.JS</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Java</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Android Studio</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 mb-6">Design Tools</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Figma</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Canva</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Adobe</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-indigo-600 mt-10 mb-6">Certifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>Business Intelligence And Analytics | NPTEL</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Participations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Hackathon | Code Crusade</h4>
                  <p className="text-gray-600 text-sm">Participated in a 24-hour coding challenge to develop innovative solutions</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Hackathon in Chat GPT | Mindful AI</h4>
                  <p className="text-gray-600 text-sm">Developed AI-powered solutions using ChatGPT and related technologies</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Workshop in AR/VR | SNS Square</h4>
                  <p className="text-gray-600 text-sm">Learned about augmented and virtual reality technologies and applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:karthisenthilkuma789@gmail.com" className="text-indigo-600 hover:underline">
                      karthisenthilkuma789@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <Linkedin className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/karthi-s" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/karthi-s
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <GitHub className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a href="https://github.com/Karthi788" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      github.com/karthi-s
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Location</h3>
                <p className="text-gray-600 mb-4">Coimbatore, Tamil Nadu, India</p>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.9994411650074!2d77.02437527025364!3d11.09921511610205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9fa58e8476f%3A0xdfd26479fcc73c28!2sR.S.%20XEROX!5e0!3m2!1sen!2sin!4v1741000837526!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="to_email" value="karthisenthilkuma789@gmail.com" />
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="from_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="reply_to"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send size={18} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-indigo-400 mb-2">KARTHI S</h2>
              <p className="text-gray-400">Developer | Designer</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:karthisenthilkuma789@gmail.com" className="hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/karthi-s" className="hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Karthi788" className="hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <GitHub size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Karthi S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;