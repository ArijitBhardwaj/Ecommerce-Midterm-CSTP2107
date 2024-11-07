import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  // Check if the product is already in the cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <Card
      sx={{
        width: 300,
        height: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          noWrap
          sx={{ height: "3em", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "10px" }}
        >
          ${product.price}
        </Typography>
        {quantityInCart > 0 && (
          <Typography variant="caption" color="primary">
            Quantity in Cart: {quantityInCart}
          </Typography>
        )}
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        {/* Pass product data via state */}
        <Link
          to={`/product/${product.id}`}
          state={{ product }}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
