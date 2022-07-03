import styles from '../styles/styles.module.css'
import { createContext, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import {
  onChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    product,
    onChange,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
