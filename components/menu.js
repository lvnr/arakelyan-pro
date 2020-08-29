import React from "react";
import Link from "next/link";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/design">
        <a>Design &amp; 3D</a>
      </Link>

      <Link href="/">
        <a>Coding</a>
      </Link>

      <Link href="/photography">
        <a>Photography</a>
      </Link>

      <Link href="/">
        <a>Music</a>
      </Link>
    </nav>
  );
};

export default Menu;
