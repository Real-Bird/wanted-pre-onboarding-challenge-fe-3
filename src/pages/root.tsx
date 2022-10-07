import "./App.css";
import { useRouter } from "../hooks/useRouter";

function Root() {
  const { push } = useRouter();
  return (
    <>
      <h1>Root</h1>
      <a className="link" onClick={() => push("/about")}>
        About
      </a>
    </>
  );
}

export default Root;
