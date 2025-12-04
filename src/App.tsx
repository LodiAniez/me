import Navigation from "./components/Navigation";
import HeroIntro from "./components/HeroIntro";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import PortfolioGallery from "./components/PortfolioGallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroIntro />
      <About />
      <Services />
      <Resume />
      <PortfolioGallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
