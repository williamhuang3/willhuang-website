import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import BackgroundBlobs from '@/components/BackgroundBlobs';

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <BackgroundBlobs />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
