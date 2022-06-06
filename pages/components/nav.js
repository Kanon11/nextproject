import Link from "next/link";
const Nav = () => {
    return <div>
        <ul>
            <li>
                <Link href="/components/about">
                    <a > About</a>
                </Link>
            </li>
            <li>
                <Link  href="/components/contact">
                    <a > Contact</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a > Index</a>
                </Link>
            </li>
        </ul>
    </div>

}
export default Nav;