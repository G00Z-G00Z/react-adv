import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import { createContext, ReactElement } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'
import { Product, ProductContextProps } from '../interfaces/interfaces'
import { useProduct } from '../hooks/useProduct'
import { useProduct } from '../hooks/useProduct'

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
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

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
