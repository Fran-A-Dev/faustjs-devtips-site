import React from "react";
import { Devterm } from "../components/lib/types";
import { client } from "../client";
import Layout from "../components/lib/Layout";
import Card from "../components/Card/Card";

export default function Home() {
  const { useQuery } = client;
  const devTerms = useQuery().devTerms()?.nodes;

  return (
    <>
      <Layout>
        <h1>Hello World</h1>

        {devTerms.map((devTerm, index) => (
          <Card key={index} devTerm={devTerm} />
        ))}
      </Layout>
    </>
  );
}
