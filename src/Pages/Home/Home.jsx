
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setProducts(result);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (product) => {
    navigate(`/view/${product.id}`, { state: { product } });
  };

  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          className="form-controls"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="home-list">
        {filteredProducts.map((product) => (
          <div className="home-card" key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => handleView(product)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
