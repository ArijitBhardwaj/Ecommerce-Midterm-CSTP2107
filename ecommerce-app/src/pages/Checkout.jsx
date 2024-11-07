import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box, Button } from "@mui/material";

const Checkout = () => {
  const { cartItems, totalCost } = useContext(CartContext);

  return (
    <Box sx={{ padding: "20px" }}>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <Box
          key={item.id}
          sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
        >
          <p>
            {item.title} - ${item.price} x {item.quantity}
          </p>
        </Box>
      ))}
      <Box component="h3" sx={{ marginTop: "20px" }}>
        Total: ${totalCost.toFixed(2)}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => alert("Purchase Completed!")}
      >
        Complete Purchase
      </Button>
    </Box>
  );
};

export default Checkout;
