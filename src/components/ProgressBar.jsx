import { useState, useEffect } from "react";

const ProgressBar = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Interval cleared");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={time} />;
};

export default ProgressBar;
