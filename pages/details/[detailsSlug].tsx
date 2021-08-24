import { getNextStaticProps } from "@faustjs/next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../components/lib/Layout";
import { client, DevTermIdType } from "../../client";
import { GetStaticPropsContext } from "next";

const Detail = () => {
  const router = useRouter();
  const { detailsSlug } = router.query;
  const { useQuery } = client;

  console.log(detailsSlug);

  const { devTerm } = useQuery();

  const term = devTerm({
    id: detailsSlug as string,
  });

  //   if (!term) {
  //     return <div className="loader">Loading...</div>;
  //   }

  return (
    <Layout>
      {term?.term}
      <div dangerouslySetInnerHTML={{ __html: term?.definition }} />
    </Layout>
  );
};

export default Detail;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Detail,
    client,
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
