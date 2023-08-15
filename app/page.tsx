import Contact from "@/components/contact/page";
import Projects from "@/components/projects/page";
import Wrapper from "../components/Wrapper";
import "./global.css";
import About from "@/components/about/page";

export default function Home() {
  return (
    <Wrapper>
      <Projects />
      <About />
      <Contact />
    </Wrapper>
  );
}
