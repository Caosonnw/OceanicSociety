import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storedProductsScript';

export default function Stored() {
    const [products, setProducts] = useState([]);
    const [productIdToDelete, setProductIdToDelete] = useState(null);

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
        try {
            const response = await axios.get('/product'); // Adjust the API endpoint accordingly
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        };

        fetchProducts();
    }, []);

    const openDeleteModal = (productId) => {
        setProductIdToDelete(productId);
        document.getElementById('delete-product-modal').style.display = 'block';
    };

    const handleDeleteProduct = async () => {
        try {
            // Thực hiện xóa sản phẩm tại đây
            await axios.delete(`/product/${productIdToDelete}`);
            // Đặt productIdToDelete về giá trị null để chuẩn bị cho việc sử dụng tiếp theo
            setProductIdToDelete(null);
    
            // Ẩn modal
            document.getElementById('delete-product-modal').style.display = 'none';
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
        }
    };
  return (
    <React.Fragment>
        <div className="mt-4">
            <h3>KHO SẢN PHẨM</h3>

            <table className="table mt-4">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">SẢN PHẨM</th>
                    <th scope="col">GIÁ</th>
                    <th scope="col" colSpan="2">
                    THỜI GIAN ĐĂNG
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
                        <a href={`/products/${product._id}/edit`} className="btn btn-link">
                        UPDATE
                        </a>
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
            <div id="delete-product-modal" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Xoa san pham ?</h5>
                    <button
                        type="button"
                        className="close"
                        onClick={() => {
                            setProductIdToDelete(null);
                            document.getElementById('delete-product-modal').style.display = 'none';
                        }}
                    >
                        &times;
                    </button>
                    </div>
                    <div className="modal-body">
                    <p>Ban co chac chan la muon xoa.</p>
                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                        setProductIdToDelete(null);
                        document.getElementById('delete-product-modal').style.display = 'none';
                        }}
                    >
                        Huy
                   </button>
                    <button
                        id="btn-delete-product"
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDeleteProduct}
                    >
                        Xoa bo
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
