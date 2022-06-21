import PageddComponent from "./pageddComponent";

const LoginRegisterbar = () => {


    return (
        <>
            <div
                className="collapse navbar-collapse justify-content-between"
            >
                <div className="navbar-nav mr-auto py-0">
                    <a href="/" className="nav-item nav-link">
                        Home
                    </a>
                    <a href="/shop" className="nav-item nav-link active">
                        Shop
                    </a>
                    <a href="/detail" className="nav-item nav-link">
                        Shop Detail
                    </a>
                    <div className="nav-item dropdown">
                        <PageddComponent></PageddComponent>
                    </div>
                    <a href="/contact" className="nav-item nav-link">
                        Contact
                    </a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                    <a href="" className="nav-item nav-link">
                        Login
                    </a>
                    <a href="" className="nav-item nav-link">
                        Register
                    </a>
                </div>
            </div>
        </>
    )
}
export default LoginRegisterbar;