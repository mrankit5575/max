import { useEffect, useState } from "react";

const Counter = ({ targetNumber, suffix = "", startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 16);

    const step = () => {
      start += increment;
      if (start < targetNumber) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber, startCounting]);

  return (
    <div className="text-2xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  );
};

export default Counter;
