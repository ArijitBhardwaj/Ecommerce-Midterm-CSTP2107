import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box, Button, Input, Divider } from "@mui/material";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalCost } =
    useContext(CartContext);

  return (
    <Box sx={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <Box>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box component="h3">{item.title}</Box>
              <Box component="p">${item.price}</Box>
              <Input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box component="h3">Total: ${totalCost.toFixed(2)}</Box>
        </Box>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Box>
  );
};

export default Cart;
