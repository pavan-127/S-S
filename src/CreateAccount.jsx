import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Login from './Login';

function CreateAccount() {
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    // Handle OTP send
    const handleSendOtp = () => {
        if (phoneNumber) {
            alert("OTP sent to your phone number!");
            setIsOtpSent(true); // Simulate OTP sent
        } else {
            alert("Please enter a valid phone number.");
        }
    };

    // Handle OTP verification
    const handleVerifyOtp = () => {
        if (otp === "0000") {
            alert("OTP verified successfully!");
            setOtpVerified(true);
        } else {
            alert("Invalid OTP.");
        }
    };

    // Handle account creation
    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (otpVerified && password) {
            alert("Account created successfully!");
            navigate("/"); // Navigate to the login page
        } else {
            alert("Please verify OTP and enter a valid password.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Create Account</h2>
                <form onSubmit={handleCreateAccount}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    {!isOtpSent ? (
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleSendOtp}
                        >
                            Send OTP
                        </button>
                    ) : (
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-success w-100 mt-2"
                                onClick={handleVerifyOtp}
                            >
                                Verify OTP
                            </button>
                        </div>
                    )}
                    {otpVerified && (
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Create Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {otpVerified && (
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary w-100">Create Account</button>
                        </div>
                    )}
                </form>
                <div className="mt-3 text-center">
                    <button className="btn btn-link" onClick={() => navigate("/Login")}>
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
