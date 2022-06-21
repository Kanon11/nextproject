import CommonHead from "./components/commonHead"
import Footer from "./components/footer";
import LoginRegisterbar from "./components/loginRegisterbar";
import MainddComponent from "./components/mainddComponent";
import Topbar from "./components/topbar"

const Cart = () => {
    return (
        <>
            <CommonHead></CommonHead>
            <Topbar></Topbar>
            <>
                {/* Navbar Start */}
                <div className="container-fluid">
                    <div className="row border-top px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <MainddComponent></MainddComponent>
                            {/* <a
                                className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                                data-toggle="collapse"
                                href="#navbar-vertical"
                                style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
                            >
                                <h6 className="m-0">Categories</h6>
                                <i className="fa fa-angle-down text-dark" />
                            </a>
                            <nav
                                className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                                id="navbar-vertical"
                                style={{ width: "calc(100% - 30px)", zIndex: 1 }}
                            >
                                <div
                                    className="navbar-nav w-100 overflow-hidden"
                                    style={{ height: 410 }}
                                >
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-toggle="dropdown">
                                            Dresses <i className="fa fa-angle-down float-right mt-1" />
                                        </a>
                                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                            <a href="" className="dropdown-item">
                                                Men's Dresses
                                            </a>
                                            <a href="" className="dropdown-item">
                                                Women's Dresses
                                            </a>
                                            <a href="" className="dropdown-item">
                                                Baby's Dresses
                                            </a>
                                        </div>
                                    </div>
                                    <a href="" className="nav-item nav-link">
                                        Shirts
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jeans
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Swimwear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Sleepwear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Sportswear
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jumpsuits
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Blazers
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Jackets
                                    </a>
                                    <a href="" className="nav-item nav-link">
                                        Shoes
                                    </a>
                                </div>
                            </nav> */}
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                                <a href="" className="text-decoration-none d-block d-lg-none">
                                    <h1 className="m-0 display-5 font-weight-semi-bold">
                                        <span className="text-primary font-weight-bold border px-3 mr-1">
                                            E
                                        </span>
                                        Shopper
                                    </h1>
                                </a>
                                <button
                                    type="button"
                                    className="navbar-toggler"
                                    data-toggle="collapse"
                                    data-target="#navbarCollapse"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <LoginRegisterbar></LoginRegisterbar>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Navbar End */}
                {/* Page Header Start */}
                <div className="container-fluid bg-secondary mb-5">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ minHeight: 300 }}
                    >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                            Shopping Cart
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <a href="">Home</a>
                            </p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">Shopping Cart</p>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Cart Start */}
                <div className="container-fluid pt-5">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    <tr>
                                        <td className="align-middle">
                                            <img src="img/product-1.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Colorful Stylish Shirt
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src="img/product-2.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Colorful Stylish Shirt
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src="img/product-3.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Colorful Stylish Shirt
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src="img/product-4.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Colorful Stylish Shirt
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src="img/product-5.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Colorful Stylish Shirt
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <form className="mb-5" action="">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        placeholder="Coupon Code"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Apply Coupon</button>
                                    </div>
                                </div>
                            </form>
                            <div className="card border-secondary mb-5">
                                <div className="card-header bg-secondary border-0">
                                    <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Subtotal</h6>
                                        <h6 className="font-weight-medium">$150</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Shipping</h6>
                                        <h6 className="font-weight-medium">$10</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">Total</h5>
                                        <h5 className="font-weight-bold">$160</h5>
                                    </div>
                                    <button className="btn btn-block btn-primary my-3 py-3">
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart End */}
            </>

            <Footer></Footer>
        </>
    )
}
export default Cart;