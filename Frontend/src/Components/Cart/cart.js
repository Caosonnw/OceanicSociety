import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./cart.css";

export default function Cart () {

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [quantityValues, setQuantityValues] = useState({});

  const handleQuantityChange = (itemId, value) => {
    setQuantityValues({
      ...quantityValues,
      [itemId]: value,
    });
  };

  const handleFormSubmit = (formId) => {
    document.getElementById(formId).submit();
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/cart');
        if (!response.ok) {
          throw new Error(`Failed to fetch cart items. Status: ${response.status}`);
        }
        const data = await response.json();
        setCartItems(data.cartItems);
        setSubtotal(data.subtotal);
        setTax(data.tax);
        setShipping(data.shipping);
        setTotal(data.total);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    fetchCartItems();
  }, []);

  return (
    <React.Fragment>
      <div>
        <div className="header-cart">
          <h1 className="sub-cart">
            <span>Shopping Cart</span>
          </h1>
          <div className="heading-cart">
            <h1 className="my-cart">My Cart</h1>
            <a href="/shop" className="continue">
              Continue Shopping
            </a>
          </div>
        </div>
        <div className="product-total">
          {cartItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item.productId.name}</td>
                    <td>{item.productId.price}$</td>
                    <td>
                      <form
                        className="update-quantity"
                        id={`updateForm${item._id}`}
                        action={`/cart/update/${item._id}`}
                        method="POST"
                      >
                        <label htmlFor={`quantity${item._id}`}>Quantity:</label>
                        <input
                          type="number"
                          id={`quantity${item._id}`}
                          name="quantity"
                          min="1"
                          max="10"
                          value={quantityValues[item._id] || item.quantity}
                          onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                          onBlur={() => handleFormSubmit(`updateForm${item._id}`)}
                        />
                      </form>
                    </td>
                    <td>
                      <img
                        className="cart-image"
                        src={item.productId.image}
                        alt={item.productId.name}
                      />
                    </td>
                    <td>
                      <form
                        className="remove"
                        action={`/cart/remove/${item._id}`}
                        method="POST"
                      >
                        <button type="submit">Remove</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <p>Your shopping cart is empty.</p>
              <a href="/">Return</a>
            </>
          )}
          <div className="totals">
            <div className="totals-item">
              <label className="totals-label">Subtotal:</label>
              <div className="totals-value" id="cart-subtotal">
                {subtotal}$
              </div>
            </div>
            <div className="totals-item">
              <label className="totals-label">Tax (10%):</label>
              <div className="totals-value" id="cart-tax">
                {tax}$
              </div>
            </div>
            <div className="totals-item">
              <label className="totals-label">Shipping:</label>
              <div className="totals-value" id="cart-shipping">
                {shipping}$
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label className="totals-label">Grand Total:</label>
              <div className="totals-value" id="cart-total">
                {total}$
              </div>
            </div>
          </div>
          <form className="checkout-form" action="/cart/checkout" method="GET">
            <button type="submit" className="checkout">
              Checkout
            </button>
          </form>
        </div>


        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>CONTACT</h4>
                <div>
                  <span className="icon-location">
                    <Link target="_blank" to="https://www.google.com/maps/place/Oceanic+Society/@37.9634731,-122.5580775,17z/data=!4m10!1m2!2m1!1sOceanic+Society+P.O.+Box+844+Ross,+CA+94957!3m6!1s0x8085974b629ef789:0xa52b4fd9c401dbcf!8m2!3d37.9634689!4d-122.5555026!15sCitPY2VhbmljIFNvY2lldHkgUC5PLiBCb3ggODQ0IFJvc3MsIENBIDk0OTU3kgEXbm9uX3Byb2ZpdF9vcmdhbml6YXRpb27gAQA!16s%2Fg%2F1hc7_0tdf?hl=vi-VN&entry=ttu"><i className="fa-solid fa-location-dot" /></Link>
                  </span>
                  <ul>
                    <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>&emsp;Oceanic Society<br/>&emsp;P.O. Box 844<br />&emsp;&emsp;&ensp;Ross, CA 94957</div>
                  </ul>
                </div>
                  <div>
                    <span className="icon-phone">
                      <Link to="tel:1-415-256-9604"><i className="fa-solid fa-phone" /></Link>
                    </span>
                      <div style={{marginTop: 30, fontSize: 16, color: 'white', fontWeight: 600}}>&emsp;Hotline:</div>
                      <div style={{marginTop: 8, fontSize: 16, color: '#FEDB3D', fontWeight: 600}}>&emsp;1-415-256-9604</div>
                </div>
                  <div>
                    <div style={{marginTop: 30, fontSize: 16, color: 'white', fontWeight: 600}}><strong>Expeditions &amp; General Inquiries</strong></div>
                    <div style={{marginTop: 8, fontSize: 16, color: '#FEDB3D', fontWeight: 600}}>1-800-326-7491</div>
                  </div>
                  </div>
                  <div className="footer-col">
                    <h4>Office Hours</h4>
                      <ul>
                        <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>CA Office</div>
                          <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>Mon-Fri: 8AM–3PM<br />(PDT/PST)</div>
                          <div style={{marginTop: 40, fontSize: 16, color: 'white', fontWeight: 600}}>DC Office</div>
                          <div style={{fontSize: 16, color: 'white', fontWeight: 600}}>Mon-Fri: 9AM–5PM<br />(EDT/EST)</div>
                      </ul>
                  </div>
                  <div className="footer-col">
                    <h4>NAVIGATE</h4>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Shop</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">Take a Trip</Link></li>
                      </ul>
                  </div>
                      <div className="footer-col">
                        <h4>LEGAL</h4>
                          <ul>
                            <li><Link to="#">Terms of Use</Link></li>
                              <li><Link to="#">Policy</Link></li>
                              <li><Link to="#">Accessibility Statement</Link></li>
                              <li><Link to="#">Sitemap</Link></li>
                          </ul>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="footer-2 ">
                  <div>
                      <img className="ft-logo" src="/assets/Image/footer-logo.png" alt="ft-logo" />
                      <div className="logo-tw social-link"><Link target="_blank" to="https://twitter.com/OceanicSociety"><i className="fa-brands fa-twitter" /></Link></div>
                      <div className="logo-yt social-link"><Link target="_blank" to="https://www.youtube.com/@OceanicSociety/featured"><i className="fa-brands fa-youtube" /></Link></div>
                      <div className="logo-ins social-link"><Link target="_blank" to="https://www.instagram.com/oceanic.society/"><i className="fa-brands fa-instagram" /></Link></div>
                      <div className="logo-fb social-link"><Link target="_blank" to="https://www.facebook.com/OceanicSociety"><i className="fa-brands fa-facebook-f" /></Link></div>
                  </div>
                  <div>
                      <div className="textcenter" style={{color: '#ccc', fontSize: 10}}>
                          © 2023 Oceanic Society. The Oceanic Society is a registered organization. Our Federal Tax ID is 94-3105570.
                      </div>
                  </div>
              </div>
      </div>
    </React.Fragment>
  );
};


