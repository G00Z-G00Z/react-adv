import { FC, ReactElement } from 'react'
import { ProductCardProps } from '../components/ProductCard'
import { Props as ProductCardTitleProps } from '../components/ProductTitle'
import { Props as ProductCardImgProps } from '../components/ProductImage'

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: FC<ProductCardTitleProps>;
  Image: FC<ProductCardImgProps>;
  Buttons: () => JSX.Element;
}
