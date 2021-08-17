import Post from "../components/post";
import { client } from "../client";

export default function PostsPage() {
  const { usePosts } = client;
  const posts = usePosts()?.nodes;
  return (
    <div>
      <h1>Hello World</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
