import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './View.css'

function View() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  return (
    <>
      <div className="view-container">
        {product ? (
          <div className="product-details">
            <img src={product.image} alt={product.title} style={{ width: '300px' }} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>${product.price.toFixed(2)}</h2>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </>
  );
}

export default View;
