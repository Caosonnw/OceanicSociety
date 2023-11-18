import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./edit.css";

export default function Edit() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
      });
    
      const { id } = useParams();

      useEffect(() => {
        axios.get(`/product/${id}`)
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
    }, [id]);

    const handleInputChange = (e) => {
        setProduct({
        ...product,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await axios.put(`/product/${id}`, product);
        
        } catch (error) {
        console.error('Error updating product:', error);
        }
    };
  return (
    <React.Fragment>
        <div className="mt-4-e">
            <h2>Update Product</h2>
            <form className="mt-4-e" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name"><b>Product name</b> </label>
                <input 
                type="text" 
                className="form-control-e" 
                value={product.name} 
                onChange={handleInputChange}
                id="name" name="name" />
                </div>
                <div className="form-group-e">
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                className="form-control-e" 
                value={product.price}
                onChange={handleInputChange}
                id="price" name="price" />
                </div>
                <div className="form-group-e">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control-file-e" name="image" />
                </div>
                <button type="submit" className="btn btn-primary-e">UPDATE</button>
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
    </React.Fragment>
  )
}
