import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "../../client";
export function PostSingle() {
  const { usePost } = client;
  const post = usePost();

  return (
    <>
      <h1>{post?.title()}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content() }} />
    </>
  );
}

export default PostSingle;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return getNextStaticProps(context, {
    Page: PostSingle,
    client,
  });
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
