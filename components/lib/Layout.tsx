import React from "react";
import Head from "next/head";
import styles from "../lib/Layout.module.scss";
import Nav from "../Nav/Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Modern Dev Terms</title>
      </Head>
      <div className={styles.layout}>
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
