import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import { useRouter } from "next/router";

import Layout from "../../components/layout";

function FirstPost() {
    const router = useRouter();
 
    return <Layout>
        <Head>
            <title>First post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>
            This is our first post
        </h1>
        <h2>{router.query.postId}</h2>
        <h2>
            <Link href="/">Back to home page</Link>
        </h2>
    </Layout>
}

export default FirstPost;