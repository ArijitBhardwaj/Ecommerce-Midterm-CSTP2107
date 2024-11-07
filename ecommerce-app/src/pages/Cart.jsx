import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Input,
} from "@mui/material";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalCost } =
    useContext(CartContext);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      sx={{ width: 60 }}
                    />
                  </TableCell>
                  <TableCell>
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography align="center" sx={{ mt: 2 }}>
          Your cart is empty.
        </Typography>
      )}
      <Typography variant="h6" align="right" sx={{ mt: 2 }}>
        Total Cost: ${totalCost.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Cart;


