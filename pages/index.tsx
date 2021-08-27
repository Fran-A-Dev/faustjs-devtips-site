import React from "react";
import { Devterm } from "../components/lib/types";
import { client } from "../client";
import Layout from "../components/lib/Layout";
import Card from "../components/Card/Card";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";

export default function Home() {
  const { useQuery } = client;
  const devTerms = useQuery().devTerms()?.nodes;

  return (
    <>
      <Layout>
        {devTerms.map((devTerm, index) => (
          <Card key={index} devTerm={devTerm} />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Home,
    client,
  });
}
