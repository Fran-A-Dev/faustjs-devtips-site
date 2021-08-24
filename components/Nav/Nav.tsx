import Link from "next/link";
import React from "react";
import Emoji from "../Emoji/Emoji";
import Toggle from "../Toggle";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <span>Frans Dev Term Definer </span>
        </Link>
        <div>
          <Link href="/termsubmit" passHref>
            <Emoji symbol="🚀 ⚛️ 🧗🏾‍♂️ 🤓" label="submit a term" size="2.1rem" />
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
