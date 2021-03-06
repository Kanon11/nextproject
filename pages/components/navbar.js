import Link from 'next/link';
import DressddComponent from './dressddComponent';
import LoginRegisterbar from './loginRegisterbar';
import MainddComponent from './mainddComponent';
const Navbar = () => {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <MainddComponent from="home"></MainddComponent>
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
                        <div
                            id="header-carousel"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: 410 }}>
                                    <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                                10% Off Your First Order
                                            </h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                                Fashionable Dress
                                            </h3>
                                            <a href="" className="btn btn-light py-2 px-3">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" style={{ height: 410 }}>
                                    <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: 700 }}>
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                                10% Off Your First Order
                                            </h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                                Reasonable Price
                                            </h3>
                                            <a href="" className="btn btn-light py-2 px-3">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#header-carousel"
                                data-slide="prev"
                            >
                                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                    <span className="carousel-control-prev-icon mb-n2" />
                                </div>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#header-carousel"
                                data-slide="next"
                            >
                                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                    <span className="carousel-control-next-icon mb-n2" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar End */}
        </>
    )
}
export default Navbar;