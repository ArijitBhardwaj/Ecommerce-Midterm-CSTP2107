import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Box, Button, AppBar, Toolbar } from "@mui/material";

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/cart" color="inherit">
          Cart
        </Button>
        <Button component={Link} to="/checkout" color="inherit">
          Checkout
        </Button>
      </Toolbar>
    </AppBar>
    <Box mt={2}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
