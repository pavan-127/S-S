import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
    return (
        <>
            <section id="about-us" className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className="text-center mt-5 mb-4">
                            <span className="text-primary">About Us</span>
                        </h1>
                        <p className="text-justify lead">
                            Welcome to <strong>Foodie Buddie Service</strong>, your go-to destination for fast, fresh, and delicious meals delivered right to your doorstep! We are dedicated to providing high-quality food with the convenience you deserve.
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h3 className="text-success">🍽️ Our Mission</h3>
                                <p>
                                    Our mission is to bring the best flavors from your favorite restaurants to your table with just a few clicks. Whether you crave comfort food, healthy meals we have it all.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-warning">🚀 Why Choose Us?</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">✅ Fast and reliable delivery</li>
                                    <li className="list-group-item">✅ Wide range of restaurants and cuisines</li>
                                    <li className="list-group-item">✅ Exciting discounts and coupons</li>
                                    <li className="list-group-item">✅ Easy and secure payment options</li>
                                    <li className="list-group-item">✅ 24/7 customer support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="text-primary">📍 Our Presence</h3>
                            <p>We are currently serving multiple cities and expanding rapidly to bring delicious meals to more customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center py-3 bg-dark text-light border-top">
                <p className="mb-0">&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default AboutUs;
