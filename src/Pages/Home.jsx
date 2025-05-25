import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "../Store";
import "../Home.css"


function Home() {
    const dispatch = useDispatch();
    const featuredItems = useSelector((state) => state.products.featured);

    // Restore scroll position after refresh
    useEffect(() => {
        const scrollY = sessionStorage.getItem("scrollPosition");
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY));
        }

        const handleScroll = () => {
            sessionStorage.setItem("scrollPosition", window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
        
            {/* Hero Section */}
            <section id="hero" className="text-center py-5 bg-dark text-light hero-section">
                <div className="container">
                    <h1 className="display-4 fw-bold">Craving Something Delicious?</h1>
                    <img src = "Food1.jpg"/>
                    <p className="lead">Discover the Best Food & Drinks. Order now at your location.</p>
                    <a href="#categories" className="btn btn-danger btn-lg"> 🍽️ Order Now</a>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="container my-5">
                <h2 className="text-center mb-4">🥗 Browse by Categories</h2>
                <div className="row g-4 justify-content-center">
                    {/* Veg Category */}
                    <div className="col-md-3 category-card">
                        <a href="/veg-items" className="text-decoration-none">
                            <div className="card text-center p-3 bg-light category-hover">
                                <img src="/image/Veg/spring-roll.png" className="category-img" alt="Veg Items" />
                                <h5 className="mt-3 fw-bold text-dark">Veg Items</h5>
                            </div>
                        </a>
                    </div>

                    {/* Non-Veg Category */}
                    <div className="col-md-3 category-card">
                        <a href="/non-veg-items" className="text-decoration-none">
                            <div className="card text-center p-3 bg-light category-hover">
                                <img src="/image/Non-Veg/Mutton.jpg" className="category-img" alt="Non-Veg Items" />
                                <h5 className="mt-3 fw-bold text-dark">Non-Veg Items</h5>
                            </div>
                        </a>
                    </div>

                    {/* Dessert Category */}
                    <div className="col-md-3 category-card">
                        <a href="/dessert" className="text-decoration-none">
                            <div className="card text-center p-3 bg-light category-hover">
                                <img src="/image/Desserts/Gulab Jamun.jpg" className="category-img" alt="Desserts" />
                                <h5 className="mt-3 fw-bold text-dark">Desserts</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section id="featured-products" className="container my-5">
                <h2 className="text-center mb-4">🍕 Featured Products</h2>
                <div className="row g-4 justify-content-center">
                    {featuredItems.map((item, index) => (
                        <div className="col-md-4 feature-card" key={index}>
                            <div className="card text-center shadow-lg border-0 feature-hover">
                                <img src={item.source} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.name}</h5>
                                    <p className="card-text">{item.para}</p>
                                    <p className="card-text fw-bold text-danger">&#8377;&nbsp;{item.price}</p>
                                    <button className="btn btn-primary w-100" onClick={() => dispatch(addToCart(item))}>
                                        <i className="fa-solid fa-cart-shopping"></i>&nbsp; Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-2 bg-dark text-light">
                <div className="container">
                    <p className="mb-0">&copy; 2025 Food Delivery Service. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
