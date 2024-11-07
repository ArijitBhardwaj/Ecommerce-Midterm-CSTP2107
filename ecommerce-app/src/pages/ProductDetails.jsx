import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {}; // Destructure product from state

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <Typography variant="h5" align="center">
        Product not found
      </Typography>
    );
  }

  return (
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
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          ${product.price}
        </Typography>
        <Typography sx={{ mt: 2 }}>{product.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
