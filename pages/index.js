import Head from "next/head";
import Script from "next/script";
import shop from "./shop";
import Link from 'next/link';
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Categories from "./components/categories";
import Product from "./components/product";
import Offer from "./components/offer";
import TrendyProduct from "./components/TrendyProduct";
import Vendor from "./components/vendor";
import Subscribe from "./components/subscribe";
import CommonHead from "./components/commonHead";
const index = () => {
    return (
        <>
            <CommonHead></CommonHead>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Feature></Feature>
            <Categories></Categories>
            <Offer></Offer>
            <TrendyProduct></TrendyProduct>
            <Subscribe></Subscribe>
            <Product></Product>
            <Vendor></Vendor>
            <Footer></Footer>
            {/* Back to Top */}
            <a href="#" className="btn btn-primary back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>

            {/* <!-- JavaScript Libraries --> */}
            {/* <Script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></Script> */}
            {/* <Script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script> */}
            {/* <Script type="text/javascript"  src="lib/easing/easing.min.js"></Script> */}
            {/* <Script type="text/javascript" src="lib/owlcarousel/owl.carousel.min.js"></Script> */}

            {/* <!-- Contact Javascript File --> */}
            {/* <Script type="text/javascript" src="mail/jqBootstrapValidation.min.js"></Script> */}
            {/* <Script type="text/javascript" src="mail/contact.js"></Script> */}

            {/* <!-- Template Javascript --> */}
            {/* <Script type="text/javascript" src="js/main.js"></Script> */}

        </>
    )



}
export default index;