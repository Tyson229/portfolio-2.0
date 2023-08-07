import Contact from "@/components/contact/page";
import Projects from "@/components/projects/page";
import Tech from "@/components/tech/page";
import Wrapper from "../components/Wrapper";
import "./global.css";

export default function Home() {
  return (
    <Wrapper>
      <Projects />
      <Contact />
    </Wrapper>
  );
}
