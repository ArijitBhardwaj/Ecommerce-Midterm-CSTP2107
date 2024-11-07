import React, { useContext } from "react";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Box component="h3" sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          {product.title}
        </Box>
        <Box component="p" sx={{ color: "gray", marginBottom: "10px" }}>
          ${product.price}
        </Box>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, marginRight: "10px" }}
          >
            View Details
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
