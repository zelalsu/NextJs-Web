import React from "react";
import styles from "./comment.module.css";
import Contact from "../Contact/Contact";
const Comment = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Loved by businesses, and individuals across the globe.</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.star} />
          <p className={styles.text}>
            Moderate children at of outweigh it. Unsatiable it considered
            invitation he travelling insensible. Consulted admitting oh mr up as
            described.
          </p>
          <div className={styles.users}>
            <div className={styles.photo1}></div>
            <div className={styles.texts}>
              <p className={styles.p}>Jane Cooper</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.star} />
          <p className={styles.text}>
            The and collecting motionless difficulty son. His hearing staying
            ten colonel met. Sex drew six easy four dear cold
          </p>
          <div className={styles.users}>
            <div className={styles.photo2}></div>
            <div className={styles.texts}>
              <p className={styles.p}>Robert Fox</p>
              <p>New York City, NY</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.star} />
          <p className={styles.text}>
            Sociable on as carriage my position weddings raillery consider.
            Peculiar trifling absolute and wandered vicinity property yet.
          </p>
          <div className={styles.users}>
            <div className={styles.photo3}></div>
            <div className={styles.texts}>
              <p className={styles.p}>Leslie Alexander</p>
              <p>Buffalo, NJ</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.logo} />
        <div className={styles.pp}>
          <p style={{fontSize:"20px"}}>
            Give us a Call +91 123-456-7890 and we can set you up, or{" "}
            <a href="#" target="_blank">
              check our pricing plans
            </a>{" "}
          </p>
        </div>
      </div>
     
    </>
  );
};
export default Comment;
