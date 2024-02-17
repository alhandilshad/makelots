"use client"
// components/AnimatedNumbers.js
import { useEffect, useState } from 'react';

const AnimatedNumbers = ({ start, end }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (value < end) {
        setValue((prevValue) => prevValue + 1);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [value, end]);

  return <span>{value}</span>;
};

export default AnimatedNumbers;