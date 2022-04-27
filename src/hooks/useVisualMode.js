import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transition to a new mode
  const transition = (mode, replace = false) => {

    if (replace) {
      setMode(mode);
      history.pop();
      setHistory([...history, mode]);
    }

    setMode(mode);
    let newHistory = [...history];
    newHistory.push(mode);
    setHistory([...newHistory]);

  }

  // Allows a call back to return to previous mode
  const back = () => {

    if(history.length === 1 ) {
      setMode(History[0]);
    } else {
      let newHistory = [...history];
      setMode(newHistory[newHistory.length - 2]);
      newHistory.pop()
      setHistory([...newHistory]);

    }
  }

  return { mode, transition, back};

}


