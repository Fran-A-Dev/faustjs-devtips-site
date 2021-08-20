import Post from "../components/post";
import { client } from "../client";
import Link from "next/link";

export default function PostsPage() {
  const { usePosts } = client;
  const posts = usePosts()?.nodes;

  return (
    <div>
      <h1>My posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
