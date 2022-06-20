import { Maindd } from "./maindd";
import React from "react";
import Link from "next/link";
import DressddComponent from "./dressddComponent";
const MainddComponent = () => {
    const [open, setOpen] = React.useState(true);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" onClick={toggle}
                style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark" />
            </a>
            {open &&
                <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">

                    <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }} >
                        <DressddComponent></DressddComponent>
                        {Maindd.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link href={item.link}><a className="nav-item nav-link">{item.linkName}</a></Link>
                                </div>
                            );
                        })}
                    </div>
                </nav>

            }

        </div>
    )
}
export default MainddComponent;