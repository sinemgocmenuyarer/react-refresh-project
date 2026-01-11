import React, { useState, useEffect } from "react";

export const ProgressBar = ({ timer }) => {
  const [remainingInterval, setNewInterval] = useState(timer);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("SET INTERVAL");
      setNewInterval((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <progress value={remainingInterval} max={timer} />;
};
