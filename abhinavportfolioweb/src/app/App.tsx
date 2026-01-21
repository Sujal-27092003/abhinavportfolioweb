import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Stats } from '@/app/components/Stats';
import { About } from '@/app/components/About';
import { Impact } from '@/app/components/Impact';
import { Vision } from '@/app/components/Vision';
import { Internships } from '@/app/components/Internships';
import { Reflections } from '@/app/components/Reflections';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="size-full scroll-smooth">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Impact />
      <Vision />
      <Internships />
      <Reflections />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}