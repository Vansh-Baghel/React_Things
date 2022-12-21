import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PROD = [
    {
      id: "b1",
      title: "Book 1",
      price: 50,
      description: "This is the best book on planet 1",
    },
    {
      id: "b2",
      title: "Book 2",
      price: 20,
      description: "This is the best book on planet 2",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROD.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))};  
      </ul>
    </section>
  );
};

export default Products;
