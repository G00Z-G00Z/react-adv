import { useCallback, useEffect, useState } from 'react'

export const useProduct = (
  initial: number = 0
): [number, (n: number) => void] => {
  const [counter, setCounter] = useState(initial);

  // Check the bound of the counter
  useEffect(() => {
    setCounter((c) => Math.max(0, c));
  }, []);

  const increaseBy = (n: number) => {
    setCounter((c) => Math.max(0, c + n));
  };

  return [counter, increaseBy];
};
