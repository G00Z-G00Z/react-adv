import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { IProduct } from '../interfaces'
import { useProduct } from '../hooks'
import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useState,
} from "react";

interface Props {
  product: IProduct;
  children?: ReactElement | ReactElement[];
}

interface SubComponents {
  Title: typeof ProductTitle;
  Image: typeof ProductImage;
  Buttons: typeof ProductButtons;
}

interface ProductContextProps {
  product: IProduct;
  counter: number;
  increaseBy: (n: number) => void;
}

const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export const ProductCard: FC<Props> & SubComponents = ({
  product,
  children,
}: Props) => {
  const [counter, increaseBy] = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export const ProductImage: FC<{ img?: string }> = ({ img }) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={styles.productImg}
      src={img ?? product.img ?? noImage}
      alt="Product"
    />
  );
};

export const ProductTitle: FC<{ title?: string }> = ({ title }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

// Exportaciones
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
