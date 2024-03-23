import { useRef, useState } from "react";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const timer = useRef(null);
  const timerState = useRef(false);

  if (timerState.current) {
    timer.current = setInterval(setCounter(counter + 1), 1000);
    // clearInterval(timer.current);
    // timerState.current = false;
  }
  timerState.current = true;

  return (
    <div>
      <mark key={counter}>
        Timer state:{timerState.current} - {counter}
      </mark>
    </div>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
