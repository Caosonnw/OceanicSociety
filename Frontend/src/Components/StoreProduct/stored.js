import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./stored.css";
// import './storedProductsScript';

export default function Stored() {
    const [products, setProducts] = useState([]);
    const [productIdToDelete, setProductIdToDelete] = useState(null);
    const deleteProductModalRef = useRef(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/stored/product');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
        fetchProducts();
    }, []); 

    const openDeleteModal = (productId) => {
        setProductIdToDelete(productId);
        setShowDeleteModal(true);
    };
    const closeDeleteModal = () => {
      setProductIdToDelete(null);
      setShowDeleteModal(false);
  };

    const handleDeleteProduct = async () => {
      try {
          // Thực hiện xóa sản phẩm tại đây
          await axios.delete(`/product/${productIdToDelete}`);

          setShowDeleteSuccessMessage(true);
  
          setTimeout(() => {
            setShowDeleteSuccessMessage(false);
          }, 3000);

          // Ẩn modal
          document.getElementById('delete-product-modal').style.display = 'none';
      } catch (error) {
          console.error('Lỗi khi xóa sản phẩm:', error);
      }
  };
  return (
    <React.Fragment>
        <div className='stored'>
            <div className="mt-4">
                <h2>Product Warehouse</h2>
                {showDeleteSuccessMessage && (
                  <div className="delete-success-message">
                    The product has been successfully deleted!
                  </div>
                )}
                <table className="table mt-4">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">PRODUCT</th>
                        <th scope="col">PRICE</th>
                        <th scope="col" colSpan="2">
                        TIME
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>{product.price}$</td>
                        <td>{product.createdAt}</td>
                        <td>
                        <Link to={`/product/${product._id}/edit`} className="btn btn-link">
                        <button>UPDATE</button>
                        </Link>
                            <button
                            className="btn btn-link"
                            data-toggle="modal"
                            data-id={product._id}
                            onClick={() => openDeleteModal(product._id)}
                            >
                            DELETE
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/* Confirm delete product */}
                {showDeleteModal && (
                <div id="delete-product-modal" className="modal" tabIndex="-1" role="dialog" ref={deleteProductModalRef}>
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Delete product</h5>
                        <button
                             type="button"
                             className="close"
                             onClick={closeDeleteModal}
                        >
                            &times;
                        </button>
                        </div>
                        <div className="modal-body">
                        <p>Are you sure you want to delete it?</p>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeDeleteModal}
                        >
                            Cancel
                       </button>
                        <button
                            id="btn-delete-product"
                            type="button"
                            className="btn btn-danger"
                            onClick={handleDeleteProduct}
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                )}
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
  )
}
