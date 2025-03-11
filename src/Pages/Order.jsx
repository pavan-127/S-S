import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Load orders from localStorage when component mounts
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    // Function to clear order history
    const clearHistory = () => {
        localStorage.removeItem("orders"); // Remove from localStorage
        setOrders([]); // Clear UI state
    };

    return (
        <div className="container py-5 mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="text-primary">📜 Purchase History</h1>
                {orders.length > 0 && (
                    <button className="btn btn-danger" onClick={clearHistory}>🗑️ Clear History</button>
                )}
            </div>

            {orders.length === 0 ? (
                <div className="alert alert-warning text-center">No purchase history available.</div>
            ) : (
                <div className="row">
                    {orders.map((purchase, index) => (
                        <div className="col-md-6 mt-4 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <div className="card-header bg-primary text-white d-flex justify-content-between">
                                    <strong>📅 {purchase.date}</strong>
                                    <strong>⏰ {purchase.time}</strong>
                                </div>
                                <div className="card-body">
                                    {purchase.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="d-flex align-items-center mb-3">
                                            <img src={item.source} alt={item.name} className="img-thumbnail me-3" style={{ width: "80px", height: "80px" }} />
                                            <div>
                                                <h6 className="mb-1">{item.name}</h6>
                                                <p className="mb-1">
                                                    {item.quantity} x &#8377;{item.price} = <strong>&#8377;{item.price * item.quantity}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <h5 className="fw-bold text-end mt-3">Total: ₹{purchase.totalPrice}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <footer className="text-center py-2 bg-dark text-light fixed-bottom border-top">
                <p className="mb-0">&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Order;
