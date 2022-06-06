import Layout from "./components/layout";
import Link from "next/link";
const html = <h1>Index</h1>;
const Home = () => {
    return <div>
      
        <Layout content={html}></Layout>
        <Abc title="Hello next js"></Abc>


    </div>
}
function Abc(props) {
    return <div>
        <Link href={`/components/post?title=${props.title}`}>
            <a>{ props.title}</a>
        </Link>
    </div>
}
export default Home;