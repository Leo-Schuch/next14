import React from "react";
import styles from "./aside.module.css";
import Image from "next/image";
import logo from "./nextlogo.png";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da code Connect" />
    </aside>
  );
};

export default Aside;
