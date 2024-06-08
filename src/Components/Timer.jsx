import { useEffect, useState } from "react";

export default function Timer({ sendData }) {
  const [remainingTime, setRemainingTime] = useState(600);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 591) {
          clearInterval(timerId);
          sendData();
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <p>
        Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
