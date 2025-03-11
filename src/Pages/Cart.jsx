import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart, completePurchase, decrement, increment, remove } from "../Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const cart = useSelector(state => state.cart);
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
    const [discount, setDiscount] = useState(0);
    const [couponCodeDiscount, setCouponCodeDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [timer, setTimer] = useState(300); // 5 minutes countdown
    const [isFreeDelivery, setIsFreeDelivery] = useState(false);
    
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsFreeDelivery(false);
        }
    }, [timer]);

    const availableCoupons = [
        { code: "RATAN10", discount: 10 },
        { code: "RATAN20", discount: 20 },
        { code: "RATAN30", discount: 30 },
        { code: "RATAN40", discount: 40 }
    ];

    const handleCouponSelect = (event) => {
        const selectedCoupon = availableCoupons.find(coupon => coupon.code === event.target.value);
        if (selectedCoupon) {
            setCouponCode(selectedCoupon.code);
            setCouponCodeDiscount(selectedCoupon.discount);
        }
    };
    
    const discountPrice = (totalPrice * discount) / 100;
    const couponDiscountPrice = (totalPrice * couponCodeDiscount) / 100;
    const freeDeliveryDiscount = isFreeDelivery ? 50 : 0;
    const finalPrice = totalPrice - discountPrice - couponDiscountPrice - freeDeliveryDiscount;
    
    const handlePurchase = () => {
        if (!isLoggedIn) {
            alert("You must log in to complete your purchase.");
            navigate("/login");
            return;
        }
        
        const now = new Date();
        const purchaseDetails = {
            id: Date.now(),
            items: [...cart],
            totalPrice: finalPrice,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        };
        
        const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const updatedOrders = [...previousOrders, purchaseDetails];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        
        dispatch(completePurchase(purchaseDetails));
        dispatch(clearCart());
        
        alert("Purchase completed successfully!");
        navigate("/orders");
    };
    
    return (
        <div className="container py-5">
            {cart.length > 0 ? (
                <>
                    <h2 className="text-center mt-4 mb-4">Your Shopping Cart 🛒</h2>
                    
                    {/* Timer Section */}
                    <div className="text-center mb-3">
                        <h5>Order within: <span className="text-danger">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span> to get Free Delivery or ₹50 Off!</h5>
                    </div>
                    
                    <div className="row g-3">
                        {cart.map((item, index) => (
                            <div className="col-12 col-sm-4 col-md-54" key={index}>
                                <div className="card shadow-sm p-2 item-card">
                                    <img 
                                        src={item.source} 
                                        className="card-img-top img-fluid" 
                                        style={{ height: "150px", objectFit: "cover", borderRadius: "10px" }} 
                                        alt={item.name} 
                                    />
                                    <div className="card-body text-center p-2">
                                        <h6 className="card-title text-truncate">{item.name}</h6>
                                        <p className="card-text small text-muted">{item.para}</p>
                                        <p className="fw-bold text-danger mb-1">₹{item.price}</p>
                                        
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-sm btn-outline-primary mx-1" onClick={() => dispatch(increment(item))}>+</button>
                                            <input type="text" className="form-control text-center w-25 p-0" value={item.quantity} readOnly />
                                            <button className="btn btn-sm btn-outline-primary mx-1" onClick={() => dispatch(decrement(item))}>-</button>
                                        </div>
                                        
                                        <button className="btn btn-sm btn-danger w-100 mt-2" onClick={() => dispatch(remove(item))}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Coupon Dropdown */}
                    <div className="text-center mt-4">
                        <label className="fw-bold">Select a Coupon:</label>
                        <select className="form-select w-50 mx-auto" value={couponCode} onChange={handleCouponSelect}>
                            <option value="">-- Select a Coupon --</option>
                            {availableCoupons.map((coupon, index) => (
                                <option key={index} value={coupon.code}>{coupon.code} - {coupon.discount}% Off</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="text-center mt-2">
                        <h4>Total Price: ₹{totalPrice}</h4>
                        <h4 className="text-primary">Final Price: ₹{finalPrice}</h4>
                        <button className="btn btn-lg btn-success" onClick={handlePurchase}>✅ Complete Purchase</button>
                    </div>
                </>
            ) : (
                <div className="text-center text-danger mt-5">Your Cart is Empty 🛒</div>
            )}
        </div>
    );
}

export default Cart;
