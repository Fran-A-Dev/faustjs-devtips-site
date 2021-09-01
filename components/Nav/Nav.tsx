import Link from "next/link";
import React from "react";
import Emoji from "../Emoji/Emoji";
import Toggle from "../Toggle";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.Nav_link}>Fran&apos;s Modern Dev Terms</a>
        </Link>

        <div>
          <Link href="/termSubmit">
            <a className={styles.emojilink}>
              <Emoji
                symbol="🚀 ⚛️ 🧗🏾‍♂️ 🤓"
                label="Want to learn a new term or read about a new topic? Submit it here!"
                size="2.1rem"
              />
            </a>
          </Link>
        </div>
        <Link href="/posts">Headless Bloggin</Link>
        <div className={styles.toggle}>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
