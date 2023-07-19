import Contact from "@/components/contact/page";
import Projects from "@/components/projects/page";
import Tech from "@/components/tech/page";
import Wrapper from "../components/Wrapper";
import "./global.css";

export default function Home() {
  return (
    <Wrapper>
      <Projects />
      <Tech />
      <Contact/>
      {/* <div>Experience</div>
      <div>Contact</div>
      <div>Achievements</div> */}
    </Wrapper>
  );
}
