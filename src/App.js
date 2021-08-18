import { useEffect, useState } from "react";
import "./App.css";
import data from "./Slides";
import Controls from "./Controls";
import Carousel from "./Carousel";

function App() {
  const [slides] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  return (
    <div className="App">
      <Carousel slides={slides} index={index} />
      <Controls setIndex={setIndex} index={index} />
    </div>
  );
}

export default App;
