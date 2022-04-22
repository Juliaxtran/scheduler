import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // transition to a new mode
  const transition = (mode) => {
    setMode(mode);
    let newHistory = [...history];
    newHistory.push(mode);
    setHistory([...newHistory]);

  }

  // allows to call back to return to previous mode
  const back = () => {

    if(history.length === 1 ) {
      setMode(newHistory[0]);
    } else {
      let newHistory = [...history];
      setMode(newHistory[newHistory.length - 2]);
      newHistory.pop()
      setHistory([...newHistory]);

    }
  }

  return { mode, transition, back};

}


