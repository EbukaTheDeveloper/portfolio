import Header from './components/header';
import Hero_section from './components/hero-section';
import AboutMe from './components/about-me';
import Project_section from './components/projects-section';
import SkillsSection from './components/skills';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero_section />
        <AboutMe />
        <Project_section />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
