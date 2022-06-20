import { DressLink } from "./dressdd";
import React from "react";
import Link from "next/link";
const DressddComponent = () => {
    const [open, setOpen] = React.useState(false);
    function toggle() {
        setOpen(!open);
    }
    return (
        <div className="nav-item dropdown">
            <a onClick={toggle} className="nav-link">  Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
            {open && <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                {DressLink.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link href={item.link}><a className="dropdown-item">{item.linkName}</a></Link>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
export default DressddComponent;