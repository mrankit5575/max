import { useEffect, useState } from "react";

export default function Counter({ targetNumber, suffix = "", startCounting }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const end = parseInt(targetNumber);
    const duration = 1000; // 1 second
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCounting, targetNumber]);

  return <span>{count}{suffix}</span>;
}
