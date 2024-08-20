import Image from "next/image";
import styles from "./cardPost.module.css";
import React from "react";
import { Avatar } from "../Avatar";

const CardPost = ({ post }) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <figure>
          <Image
            className={styles.image}
            src={post.cover}
            width={438}
            height={133}
            alt={`capa do post de título: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};

export default CardPost;
