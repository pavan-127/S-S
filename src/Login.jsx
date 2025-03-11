import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "Pavan" && password === "Pavan") {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username); // Store username
            alert("Login successful! You can now purchase items.");
            navigate("/"); // Redirect to home
            window.location.reload(); // Reload the page after login success
        } else {
            alert("Invalid username or password");
        }
    };

    // Handle Logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        setUsername("");
        setPassword("");
        navigate("/");
    };

    // Navigate to create account page
    const handleCreateAccount = () => {
        navigate("/create-account");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                {isLoggedIn ? (
                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-circle mb-3"
                            style={{ width: "100px", height: "100px" }}
                        />
                        <h4 className="mb-3">{username}</h4>
                        <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center mb-4">Welcome Back</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email or phone =hint : Pavan"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password =hint : Pavan"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-3 text-center">
                                <a href="#" className="text-decoration-none">Forgot password?</a>
                            </div>
                        </form>
                        <hr />
                        <div className="text-center">
                            <p>Don't have an account?</p>
                            <button className="btn btn-outline-secondary w-100" onClick={handleCreateAccount}>Create account</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
