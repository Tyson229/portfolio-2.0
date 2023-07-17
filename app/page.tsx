import './global.css'
import Hero from '../components/hero/page'
import Wrapper from '../components/Wrapper'
import About from '@/components/about/About';
import Projects from '@/components/projects/page';
import Tech from '@/components/tech/page';
export default function Home() {
  return (
    <Wrapper>
      <Hero/>
      <Projects/>
      {/* <Tech/> */}
      <About/>
      {/* <div>Project</div>
      <div>Experience</div>
      <div>Contact</div>
      <div>Achievements</div> */}
    </Wrapper>
  );
}
