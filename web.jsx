import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Layout = ({ children, darkMode, setDarkMode }) => (
  <div className={`min-h-screen ${darkMode ? 'dark' : ''} font-mono bg-[#f3f3f3] dark:bg-[#1a1a1a] text-[#111] dark:text-[#e6e6e6]`}>
    <header className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center bg-[#e0e0e0] dark:bg-[#2a2a2a]">
      <h1 className="text-xl tracking-widest uppercase">Macrodata Refinement Terminal</h1>
      <nav className="flex gap-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/videos" className="hover:underline">Videos</Link>
        <Link to="/photos" className="hover:underline">Photos</Link>
        <Link to="/vision" className="hover:underline">Vision</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
    <main className="p-6 max-w-6xl mx-auto">
      {children}
    </main>
    <footer className="text-center text-xs p-4 border-t border-gray-300 dark:border-gray-700 bg-[#e0e0e0] dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-400">
      © 2025 Lumon Industries | MDR Department
    </footer>
  </div>
);

const Home = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">Welcome to Your Work Terminal</h2>
    <p className="text-sm max-w-xl">
      You are now entering the severed floor. This interface serves to log, organize, and showcase your output as a Macrodata Refiner. Remain focused. Your work matters.
    </p>
  </section>
);

const Videos = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">Video Logs</h2>
    <div className="space-y-6">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Sample Work"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

const Photos = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">Photo Documentation</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
      <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
      <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
      <div className="aspect-square bg-gray-300 dark:bg-gray-700" />
    </div>
  </section>
);

const Vision = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">Vision Statement</h2>
    <p className="max-w-xl text-sm">
      Our mission is to refine data so thoroughly that the distinction between input and truth becomes meaningless. Each frame, each metric—an offering to corporate clarity.
    </p>
  </section>
);

const About = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">About Me</h2>
    <p className="text-sm max-w-xl">
      A macrodata refiner with creative ambitions beyond the severed floor. This site archives digital output and lays the groundwork for future corporate endeavors.
    </p>
  </section>
);

const Contact = () => (
  <section>
    <h2 className="text-2xl mb-4 uppercase tracking-wide">Contact</h2>
    <form className="max-w-md space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-sm"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-sm"
      />
      <textarea
        placeholder="Message"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-sm h-24"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-wide"
      >
        Submit
      </button>
    </form>
  </section>
);

const MacrodataRefinerSite = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default MacrodataRefinerSite;
