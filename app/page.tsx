import './global.css'
import Hero from '../components/hero/Hero'
import Wrapper from '../components/Wrapper'
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
export default function Home() {
  return (
    <Wrapper>
      <Hero/>
      <About/>
      <Projects/>
      {/* <div>Project</div>
      <div>Experience</div>
      <div>Contact</div>
      <div>Achievements</div> */}
    </Wrapper>
  );
}
