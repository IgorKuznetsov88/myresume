import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/AboutMe";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Footer from "./components/Footer/Footer";
import BackTop from "./components/BackTop/BackTop";
import ThemeSwitcher from "./components/ThemeSwitcher";

import education from "./resourses/education";
import experience from "./resourses/experience";
import skills from "./resourses/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <ThemeSwitcher />
      <About />
      <Education education={education} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Certificates />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
