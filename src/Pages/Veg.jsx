import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToCart } from "../Store";

function Veg() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg);

    // State for pagination and filtering
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("all");
    const [showFilter, setShowFilter] = useState(false);
    const itemsPerPage = 6;
    
    // Filter logic
    const filteredItems = vegItems.filter(item => {
        if (filter === "below200") return item.price < 200;
        if (filter === "100to200") return item.price >= 200 && item.price <= 300;
        return true;
    });
    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Pagination handlers
    const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const goToPage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="container py-5">
                <h1 className="text-center text-success mt-5 mb-4">Veg Items</h1>
                <div className="row">
                    {/* Filter Button */}
                    <div className="text-center mb-3">
                        <button className="btn btn-primary" onClick={() => setShowFilter(!showFilter)}>
                            {showFilter ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>
                    
                    {showFilter && (
                        <div className="col-md-3">
                            <h5 className="text-dark">Filter by Price</h5>
                            <div className="list-group">
                                <button className={`list-group-item list-group-item-action ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
                                <button className={`list-group-item list-group-item-action ${filter === "below200" ? "active" : ""}`} onClick={() => setFilter("below200")}>Below ₹200</button>
                                <button className={`list-group-item list-group-item-action ${filter === "200to300" ? "active" : ""}`} onClick={() => setFilter("200to300")}>₹200 - ₹300</button>
                            </div>
                        </div>
                    )}
                    
                    {/* Products Grid */}
                    <div className={`col-md-${showFilter ? '9' : '12'}` }>
                        <div className="row g-4 justify-content-center">
                            {currentItems.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card veg-card">
                                        <img src={item.source} className="card-img-top" alt={item.name} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.para}</p>
                                            <p className="fw-bold">&#8377;{item.price}</p>
                                            <button className="btn btn-success w-100" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Pagination Controls */}
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-secondary me-2" onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button 
                                    key={index} 
                                    className={`btn ${currentPage === index + 1 ? 'btn-success' : 'btn-light'} mx-1`} 
                                    onClick={() => goToPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button className="btn btn-secondary ms-2" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-2 bg-dark text-light fixed-bottom border-top">
                <p className="mb-0">&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Veg;
