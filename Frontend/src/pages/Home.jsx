import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        console.log("API Response:", response.data); // Debugging output
        setProducts(response.data);
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container>
        <h2 className="mt-4 mb-3 text-center">Product List</h2>
        <Row>
          {products.length > 0 ? (
            products.map(product => (
              <Col key={product._id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image || "https://via.placeholder.com/150"} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No products available.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
