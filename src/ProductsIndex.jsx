export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      <p>Products:</p>
      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.primary_image} alt="" />
        </div>
      ))}
    </div>
  );
}
