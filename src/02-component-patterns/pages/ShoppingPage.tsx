import { Product } from '../interfaces/interfaces'
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

export const ShoppingPage = () => {
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
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
