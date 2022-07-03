import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'
import { useContext } from 'react'

export interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
