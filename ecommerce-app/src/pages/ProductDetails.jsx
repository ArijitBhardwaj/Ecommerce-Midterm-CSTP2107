import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { Box, Button, CardMedia } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  return product ? (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ maxWidth: "50%", height: "auto", margin: "0 auto" }}
      />
      <Box>
        <h2>{product.title}</h2>
        <p style={{ fontSize: "1.2rem", color: "gray", marginTop: "10px" }}>
          ${product.price}
        </p>
        <p>{product.description}</p>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetails;
