import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Main from "./mainPage";
import Thank from "./thankPage";
function App() {
  const [activeRating, setActiveRating] = useState(0);
  const [status, setStatus] = useState(false);
  console.log(activeRating);
  return (
    <main>
      {status ? (
        <Thank activeRating={activeRating}></Thank>
      ) : (
        <Main
          activeRating={activeRating}
          setStatus={setStatus}
          setActiveRating={setActiveRating}
        ></Main>
      )}
    </main>
  );
}

export default App;
