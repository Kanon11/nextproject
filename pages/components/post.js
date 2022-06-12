import Link from 'next/link';
import Layout from './layout';
import { withRouter } from 'next/router'
const Post = withRouter((props) => {
    return <div>
        {/* <Layout>

        </Layout> */}
        <h1>{props.router.query.title}</h1>
        <h2>this is url masking with dynamic route</h2>
    </div>


})

export default Post;