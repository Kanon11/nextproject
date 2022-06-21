import { Maindd } from "./maindd";
import React, { useEffect } from "react";
import Link from "next/link";
import DressddComponent from "./dressddComponent";
const MainddComponent = ({from}) => {
    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen(!open);
    };
    useEffect(() => {
        if (from === "home") {
            setOpen(!open);
        }
    },[])


    return (
        <div style={{ zIndex: 100, position: "absolute",minWidth:280 }}>
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" onClick={toggle}
                style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark" />
            </a>
            {open &&
                <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                    id="navbar-vertical"
                    style={{ width: "calc(100% - 30px)", zIndex: 1000 }}
                >

                    <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }} >
                        <DressddComponent></DressddComponent>
                        {Maindd.map((item, index) => {
                            return (
                                <div key={index} >
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