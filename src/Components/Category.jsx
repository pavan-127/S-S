import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Category() {
    const cart = useSelector(state => state.cart);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    const [currentLocation, setCurrentLocation] = useState("Fetching location...");
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("username") || null);

    const defaultLocations = [
        
        "Bangalore, Karnataka",
        "Mumbai, Maharastra",
        "Hyderabad, Telangana",
        "Chennai, Tamilnadu"
    ];

    const fetchCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();

                        const city = data.address.city || data.address.town || data.address.village || "Unknown City";
                        const mandal = data.address.county || data.address.suburb || "Unknown Mandal";

                        setCurrentLocation(`${city}, ${mandal}`);
                    } catch (error) {
                        setCurrentLocation("Unable to fetch location");
                    }
                },
                () => setCurrentLocation("Location permission denied")
            );
        } else {
            setCurrentLocation("Geolocation not supported");
        }
    };

    useEffect(() => {
        fetchCurrentLocation();
    }, []);

    const handleSelectLocation = (location) => {
        if (location === "Current Location") {
            fetchCurrentLocation();
        } else {
            setCurrentLocation(location);
        }
        setShowLocationDropdown(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        setLoggedInUser(null);
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed">
                <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center px-5">
                    
                    {/* Logo */}
                    <Link className="navbar-brand fw-bold text-primary" to="/Home">
                        🍽️ Salted & Sweet
                    </Link>


 {/* Location */}
 <div className="position-relative">
                        <button
                            className="btn btn-warning dropdown-toggle"
                            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                        >
                            📍 {currentLocation}
                        </button>

                        {showLocationDropdown && (
                            <ul className="dropdown-menu show position-absolute">
                                <li>
                                    <button className="dropdown-item fw-bold text-primary" onClick={() => handleSelectLocation("Current Location")}>
                                        📍 Use Current Location
                                    </button>
                                </li>
                                {defaultLocations.map((location, index) => (
                                    <li key={index}>
                                        <button className="dropdown-item" onClick={() => handleSelectLocation(location)}>
                                            {location}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Navigation Links */}
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <Link className="nav-link text-light fw-bold" to="/Home">🏠 Home</Link>
                        <Link className="nav-link text-success fw-bold" to="/veg-items">🥦 Veg</Link>
                        <Link className="nav-link text-danger fw-bold" to="/non-veg-items">🍗 Non-Veg</Link>
                        <Link className="nav-link text-warning fw-bold" to="/dessert">🍰 Desserts</Link>
                        <Link className="nav-link text-light fw-bold" to="/orders">📦 Orders</Link>
                        <Link className="nav-link text-light fw-bold" to="/about-us">ℹ️ About Us</Link>
                        <Link className="nav-link text-light fw-bold" to="/contact-us">📞 Contact Us</Link>
                    </div>

                    {/* User & Cart Section */}
                    <div className="d-flex align-items-center gap-2">
                        {!loggedInUser ? (
                            <Link to="/login" className="btn btn-outline-light">🔑 Login</Link>
                        ) : (
                            <div className="dropdown">
                                <button className="btn btn-warning d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                                    <img src="/image/Login.png" alt="" className="login-icon me-2" />
                                    {loggedInUser}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item text-danger fw-bold" onClick={handleLogout}>
                                            🚪 Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Cart */}
                        <Link to="/cart" className="btn btn-warning position-relative">
                            🛒 Cart
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { Category };
