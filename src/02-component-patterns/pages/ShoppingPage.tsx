import { onChangeArgs, Product } from '../interfaces/interfaces'
import { useState } from 'react'
import '../styles/custom-styles.css'
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

const products: Product[] = [
  {
    id: "1",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffee Mug 2 - Card",
    img: "./coffee-mug2.png",
  },
];

interface ProductInCart extends Product {
  count: number;
}

type ShoppingCartState = { [key: string]: ProductInCart };

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({
    "1": { ...products[0], count: 10 },
    "2": { ...products[1], count: 2 },
  });

  const onProductChange = ({ product, count }: onChangeArgs) => {};

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          style={{
            width: "100px",
          }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={products[1]}
          className="bg-dark text-white"
          style={{
            width: "100px",
          }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
