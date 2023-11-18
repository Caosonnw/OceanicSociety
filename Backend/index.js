const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const productRoute = require("./Routes/productRoutes");
const bodyParser = require("body-parser");
const multer = require("multer");
const siteRoute = require("./Routes/siteRoutes");
const contactRoute = require("./Routes/contactRoutes");
const meRoute = require("./Routes/meRoutes");
const cartRoute = require("./Routes/cartRoutes");

require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối đến MongoDB:'));
db.once('open', function () {
  console.log('Kết nối đến MongoDB thành công!');
});

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/product", productRoute); // Thêm route sản phẩm
app.use("/shop", siteRoute);
app.use("/contact", contactRoute); //Gửi contact
app.use("/stored", meRoute);
app.use("/cart", cartRoute);

//Use multer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/images', express.static('./src/public/images/'));

app.listen(8000, () => {
    console.log("Sever is running!!!");
});

