// import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/login";
import GetAllUsers from "./Components/GetAllUsers/GetAllUsers";
import Navbar from "./Components/NavBar/Navbar";
import Create from "./Components/CreateProduct/create";
import Shop from "./Components/Shop/shop";
import AdminManager from "./Components/AdminManager/AdminManager";
import Stored from "./Components/StoreProduct/stored";
import Edit from "./Components/EditProduct/edit";
import Cart from "./Components/Cart/cart";
import About from "./Components/About/about";
import News from "./Components/News/news";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/stored" element={<Stored />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id/edit" element={<Edit />} />
          <Route path="/getallusers" element={<GetAllUsers />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/manager" element={<AdminManager />} />
        </Routes>
    </Router>
  );
}

export default App;
