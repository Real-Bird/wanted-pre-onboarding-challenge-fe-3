import "./App.css";
import { useRouter } from "../hooks/useRouter";

function About() {
  const { push } = useRouter();
  return (
    <>
      <h1>About</h1>
      <a className="link" onClick={() => push("/")}>
        Root
      </a>
    </>
  );
}

export default About;
