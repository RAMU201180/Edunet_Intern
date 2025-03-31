import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const AddProduct = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
    discount: "",
    offerPrice: "",
    reviews: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price),
        discount: parseFloat(product.discount),
        offerPrice: parseFloat(product.offerPrice),
        rating: parseFloat(product.rating),
        reviews: product.reviews.split(",").map((review) => review.trim()), // Convert to array
      };

      await axios.post("http://localhost:5000/api/products", formattedProduct);
      alert("Product added successfully!");
      navigate("/"); // ✅ Redirect to Home page after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
        <input type="url" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required />
        <input type="number" step="0.1" name="rating" placeholder="Rating (1-5)" value={product.rating} onChange={handleChange} />
        <input type="number" name="discount" placeholder="Discount (%)" value={product.discount} onChange={handleChange} />
        <input type="number" name="offerPrice" placeholder="Offer Price" value={product.offerPrice} onChange={handleChange} />
        <textarea name="reviews" placeholder="Reviews (comma-separated)" value={product.reviews} onChange={handleChange} />
        <button type="submit" style={{ background: "blue", color: "white", padding: "10px", marginTop: "10px", border: "none", cursor: "pointer" }}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
