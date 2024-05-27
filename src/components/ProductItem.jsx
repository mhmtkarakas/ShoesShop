import React from "react";

const ProductItem = ({ products }) => {
  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${products.image})` }}></div>
      <h1 style={{marginBottom:"10px"}}>{products.name}</h1>
      <h6 style={{marginTop:"0px"}}>{products.content}</h6>
      <p>
        <i style={{color:"red"}} >{products.price} TL</i>
      </p>
    </div>
  );
};

export default ProductItem;
