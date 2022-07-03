import { onChangeArgs, Product } from '../interfaces/interfaces'
import { useState } from 'react'

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
    onChange &&
      onChange({
        product,
        count: counter,
      });
  };

  return {
    counter,
    increaseBy,
  };
};
