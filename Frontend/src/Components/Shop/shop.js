import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./shop.css";


export default function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        axios.get('/shop/getproduct')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const addToCart = async (productId) => {
      try {
        await axios.post(`/cart/add/${productId}`);
  
        // Chuyển hướng đến trang giỏ hàng
        navigate('/cart');
      } catch (error) {
        console.error('Failed to add to cart', error);
      }
    };

  return (
    <React.Fragment>
      <div className='shopp'>
        <div>     
          <div className="product-shop">
          <div className="product-list">
            </div>
            <div className="product-box">
            {products.map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-title">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}$</p>
                  </div>
                  <button onClick={() => addToCart(product._id)}>Buy now</button>
                </div>
              ))}
            </div>
          </div>
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
}
