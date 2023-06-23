import Nav from '@/components/Nav';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Nav />
      <div className="bg-white text-black pt-16">
        <section id="about">
          <br />
          <br />
          <br /><About /></section>
        <section id="projects">
          <br />
          <br />
          <br /><Projects /></section>
        <section id="resume">
          <br />
          <br />
          <br /><Resume /></section>
      </div>
    </div>
  );
};
