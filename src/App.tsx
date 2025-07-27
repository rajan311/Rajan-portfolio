import React, { useState } from 'react';
import './index.css';
import photo from './photo.jpg';
import virtual from './virtual.mp4';
import RRinterior from './RRinteriro.mp4';
import flutter from './flutter.png';
import java from './java.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Contact from './Component/Contact';

function App() {
  const [contact, setContact] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-gray-900/80 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-6 px-10">
          <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-600 to-purple-600 tracking-widest cursor-pointer">
            Rajan Vishwakarma
          </span>
          <ul className="flex gap-10 font-semibold text-lg">
            <li className="hover:text-pink-400 duration-200 cursor-pointer">Profile</li>
            <li className="hover:text-pink-400 duration-200 cursor-pointer">Skills</li>
            <li className="hover:text-pink-400 duration-200 cursor-pointer">Projects</li>
            <li className="hover:text-pink-400 duration-200 cursor-pointer">Certifications</li>
          </ul>
        </nav>
      </header>

      <main className="bg-gradient-to-tr from-gray-950 via-gray-900 to-sky-900 min-h-screen text-white font-mono">

        {/* Header */}
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-14 px-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400 to-pink-600 mb-2">
              Full Stack Developer
            </h1>
            <p className="text-xl mb-4 text-gray-200">
              Passionate Full Stack Developer skilled in <span className="font-semibold">JavaScript (React.js, Node.js), REST APIs, SQL/NoSQL, and Cloud Deployment</span>. Proven ability to deliver efficient, scalable solutions from concept to launch.
            </p>
            <div className="flex gap-4 text-2xl mt-3">
              <a href="https://github.com/rajan311" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rajan-vishwakarma-695174280/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FaLinkedin />
              </a>
              <a href="mailto:se.rajancishwakarma@email.com" className="hover:text-yellow-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <img src={photo} alt="Rajan Vishwakarma" className="w-48 h-48 rounded-3xl shadow-lg ring-2 ring-pink-400 ring-opacity-60 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </section>

        {/* Skills */}
        <section className="container mx-auto bg-gradient-to-r from-sky-900 to-fuchsia-900/80 rounded-xl p-6 mb-10 shadow-xl">
          <h3 className="text-2xl font-bold text-yellow-300 mb-3">Technical Skills</h3>
          <ul className="flex flex-wrap gap-5 text-lg">
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">React.js</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">Node.js</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">Express.js</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">MongoDB</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">SQL</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">Socket.io</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">REST APIs</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">Git/GitHub</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full shadow text-sky-200">Firebase/AWS</li>
          </ul>
        </section>

        {/* Education */}
        <section className="container mx-auto bg-gray-800/80 rounded-3xl shadow-xl mb-16 px-10 py-10">
          <h2 className="text-2xl font-bold mb-6 text-sky-400">Education</h2>
          <ul className="space-y-4 text-gray-200 list-inside list-disc">
            <li>
              <span className="font-semibold">Higher Secondary Certificate – [2021]</span><br />
              Thakur College of Arts, Commerce & Science <span className="opacity-80">(89%)</span>
            </li>
            <li>
              <span className="font-semibold">Bachelor of Computer Science – [2025]</span><br />
              Abhinav College (7.99 CGPA)<br />
              Solid software development foundation, time & project management, teamwork.
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="container mx-auto flex flex-col gap-16 mb-16">
          {/* Virtual Space Project */}
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-700/60 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row gap-7 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-pink-300">VIRTUAL SPACE (Academic Project)</h3>
              <p className="mb-2 opacity-90">Connects individuals in shared virtual rooms for videos, docs, images, chat, and video calls.</p>
              <ul className="text-gray-200 list-disc list-inside">
                <li>Designed REST API for real-time messaging, handling 500+ concurrent users with zero downtime</li>
                <li>Optimized frontend performance, reducing load times by 35%</li>
                <li>Deployed on AWS using CI/CD pipelines</li>
              </ul>
            </div>
            <video
              src={virtual}
              autoPlay
              muted
              loop
              playsInline
              poster={photo}
              className="rounded-xl shadow-lg ring-2 ring-sky-400 ring-opacity-40 w-full max-w-md"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* RR Interior Project */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700/80 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row gap-7 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-sky-300">RR INTERIOR DESIGN</h3>
              <p className="mb-2 opacity-90">A platform to securely upload and show images to clients with a smooth, easy interface.</p>
              <ul className="text-gray-200 list-disc list-inside">
                <li>Focus on image management & presentation. <span className="text-gray-400"> (HTML, CSS, Oct ’24) </span></li>
                <li>Engineered secure user authentication and efficient image retrieval</li>
                <li>Achieved 99.9% uptime with robust deployment</li>
              </ul>
            </div>
            <video
              src={RRinterior}
              autoPlay
              muted
              loop
              playsInline
              poster={photo}
              className="rounded-xl shadow-lg ring-2 ring-pink-400 ring-opacity-30 w-full max-w-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="container mx-auto px-10 pb-20">
          <h2 className="text-2xl font-bold mb-6 text-pink-300">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/80 rounded-xl shadow-md p-6 flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-sky-200">Flutter Development [2024]</h4>
              <p className="opacity-85">Completed this certification from Great Learning. <span className="font-medium">Dart, XML, and more</span></p>
              <img src={flutter} alt="Flutter Certification" className="rounded-lg mt-2 ring-2 ring-sky-500 ring-opacity-30" />
            </div>
            <div className="bg-gray-800/80 rounded-xl shadow-md p-6 flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-sky-200">Java Development [2024]</h4>
              <p className="opacity-85">Completed this certification from Great Learning.</p>
              <img src={java} alt="Java Certification" className="rounded-lg mt-2 ring-2 ring-sky-500 ring-opacity-30" />
            </div>
          </div>
        </section>

        {/* Why Hire Me */}
        <section className="container mx-auto bg-gray-800/80 rounded-xl p-8 shadow-md mt-10 mb-14">
          <h3 className="text-2xl font-bold text-pink-300 mb-2">Why Hire Me?</h3>
          <ul className="text-lg text-gray-200 list-disc pl-5 space-y-2">
            <li>Full-stack expertise: Build and deploy complete products, not just features.</li>
            <li>Proactive communicator and fast learner, thrive in team settings.</li>
            <li>Prior internship experience delivering results on real client projects.</li>
            <li>Strong problem-solving skills and passion for technology.</li>
          </ul>
        </section>

        <div className="container mx-auto flex justify-center mb-10">
          {!contact && (
            <button
              onClick={() => setContact(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Open Contact Component
            </button>
          )}
          {contact && <Contact onClose={() => setContact(false)} />}
        </div>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-400 bg-gray-900/90">
          <span className="tracking-wide">© 2024 Rajan Vishwakarma. All rights reserved.</span>
        </footer>
      </main>
    </>
  );
}

export default App;



