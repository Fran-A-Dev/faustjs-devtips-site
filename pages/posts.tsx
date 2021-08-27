import Post from "../components/post";
import { client } from "../client";
import Link from "next/link";
import Layout from "../components/lib/Layout";
import { getNextStaticProps } from "@faustjs/next";
import { GetStaticPropsContext } from "next";

export default function PostsPage() {
  const { usePosts } = client;
  const posts = usePosts()?.nodes;

  return (
    <Layout>
      <h1>My Nerd Newbie Blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: PostsPage,
    client,
  });
}



