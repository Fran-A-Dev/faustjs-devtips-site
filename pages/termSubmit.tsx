import React from "react";
import Layout from "../components/lib/Layout";
import styles from "../styles/pages/Termsubmit.module.scss";
import { client } from "../client";

export default function Form() {
  return (
    <>
      <Layout>
        <main className={`content content-index ${styles.contact} `}>
          <div>
            <h1>Submit a Subject or Topic to Learn!</h1>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
              <label htmlFor="topic">Topic</label>
              <input type="text" name="Topic" />
              <br></br>
              <button className={styles.button}>Submit Here</button>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
}
