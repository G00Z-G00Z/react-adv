import React from 'react'
import { IProduct } from '../interfaces'
import '../styles/custom-styles.css'
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const products: IProduct[] = [
  {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffe Mug - Card",
  },
  {
    id: "3",
    title: "Coffe Mug - Card",
  },
  {
    id: "4",
    title: "Coffe Mug - Card",
  },
];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products[0]}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products[1]} className="bg-dark">
          <ProductTitle className="text-white" />
          <ProductImage className="custom-image" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
