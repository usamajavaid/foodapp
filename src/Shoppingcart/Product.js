import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img style={{marginTop:"50px"}} className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button id="add-cart-btn" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
