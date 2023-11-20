import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./create.css";

export default function Create() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('image', formData.image);

    try {
      await axios.post('/product/store', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  return (
    <React.Fragment>
      <h2>Post new Product</h2>
      <div className="mt-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group-p">
            <label htmlFor="name"><b>Product name</b> </label>
            <input 
            type="text" 
            className="form-control-p" 
            onChange={handleInputChange}
            id="exampleInputEmail1" name="name" />
          </div>
          <div className="form-group-p">
            <label htmlFor="description"><b>Description</b></label>
            <input 
            type="text" 
            className="form-control-p"           
            id="exampleInputEmail1" name="description" 
            onChange={handleInputChange}
            value={formData.description}/>
          </div>
          <div className="form-group-p">
            <label htmlFor="price"><b>Price </b></label>
            <input 
            type="number" 
            className="form-control-p" 
            onChange={handleInputChange}
            id="exampleInputEmail1" name="price" />
          </div>
          <div className="form-group-p">
            <label htmlFor="image"><b>Image</b></label>
            <input 
            type="file" 
            className="form-control-file-p" 
            onChange={handleImageChange}
            name="image" />
          </div>
          <button type="submit" className="btn-p btn-primary-p">SAVE</button>
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
