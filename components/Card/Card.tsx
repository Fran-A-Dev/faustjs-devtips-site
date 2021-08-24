import Link from "next/link";
import styles from "./Card.module.scss";
import React from "react";

import { client, DevTermIdType, DevTerm } from "../../client";

interface Props {
  term?: string;
  definition?: string;
  id?: string;
}

interface CardProps {
  devTerm: DevTerm;
}

function Card({ devTerm }: CardProps): JSX.Element {
  const { term, id } = devTerm;

  return (
    <div className={styles.card}>
      <h2 className={styles.h2}>Click on the term to learn!</h2>

      <div className="term">
        <Link href={`/details/${id}`}>
          <a href={`/details/${id}`}>
            <span className={styles.term}>{term}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
