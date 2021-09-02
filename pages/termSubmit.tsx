import React, { useState } from "react";
import Layout from "../components/lib/Layout";
import styles from "../styles/pages/Termsubmit.module.scss";
import { client } from "../client";

export interface FormData {
  name: string;
  email: string;
  topic: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState<string | undefined>();
  const [submitContactFormCF, { data, error, isLoading }] = client.useMutation(
    (mutation, args: FormData) => {
      console.log("mutation event");
      console.log("args", args);
      const { successMessage, name, errors } = mutation.submitContactFormCF({
        input: args,
      });

      console.log(name);
      console.log(successMessage);

      return successMessage;
    }
  );

  const errorMessage = error?.message;

  const SubmitForm = async (event) => {
    event.preventDefault();

    console.log("submit form event");

    submitContactFormCF({
      args: { name, email, topic },
    }).catch(console.error);
  };

  return (
    <>
      <Layout>
        <main className={`content content-index ${styles.contact}`}>
          <div className="wrap">
            <h1>Submit a Term</h1>
            <div className="message">{message}</div>
            <form style={{ width: "300px" }}>
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="topic">Topic</label>
              <input
                value={topic}
                type="text"
                name="topic"
                onChange={(e) => setTopic(e.target.value)}
              />
              <br></br>
              <button
                className="button"
                disabled={isLoading}
                onClick={SubmitForm}
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </Layout>
    </>
  );
}
