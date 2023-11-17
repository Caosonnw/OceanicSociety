// import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/login";
import GetAllUsers from "./Components/GetAllUsers/GetAllUsers";
import Navbar from "./Components/NavBar/Navbar";
import Create from "./Components/CreateProduct/create";
import Edit from "./Components/EditProduct/edit";
// import Stored from "./Components/StoreProduct/stored";
import Shop from "./Components/Shop/shop";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/getallusers" element={<GetAllUsers />} />
        </Routes>
    </Router>
  );
}

export default App;
