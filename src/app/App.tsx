import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Work } from "./components/portfolio/Work";
import { About } from "./components/portfolio/About";
import { Craft } from "./components/portfolio/Craft";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Craft />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
