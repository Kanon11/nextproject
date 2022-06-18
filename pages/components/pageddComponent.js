import { PageDDLinks } from "./pagedd";
import React from "react";
import Link from "next/link";
const PageddComponent = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <a className="nav-item nav-link dropdown-toggle" onClick={toggle}>Pages</a>
            {open &&
                <div className="dropdown-menu rounded-0 m-0">
                    {PageDDLinks.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href={item.link}><a className="dropdown-item">{item.linkName}</a></Link>
                            </div>
                        );
                    })}
                </div>
            }
        </>
    );
}
export default PageddComponent;