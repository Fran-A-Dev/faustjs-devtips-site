import { useRef, useLayoutEffect } from "react";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "../../client";
import Layout from "../../components/lib/Layout";
export function PostSingle() {
  const { usePost } = client;
  const post = usePost();

  return (
    <Layout>
      <>
        <h1>{post?.title()}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.content() }} />
      </>
    </Layout>
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
