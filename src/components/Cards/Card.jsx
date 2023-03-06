import React from "react";
import { Button } from "react-bootstrap";
import styles from "./card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.text}>
        <h3 style={{ fontSize: "47px" }}> Popular Package</h3>
        <h3 style={{ fontWeight: "lighter", fontSize: "33px" }}>
          The most tour package presented to you
        </h3>

        <div className={styles.card}>
          <div className={styles.photo1}>
            <div className={styles.cardText}>
              <p className={styles.text1}>Pakhara,Nepal</p>
              <p className={styles.text2}>4 Day, 3 Night</p>
            </div>
          </div>
          <div className={styles.photo2}>
            <div className={styles.cardText}>
              <p className={styles.text1}>Pakhara,Nepal</p>
              <p className={styles.text2}>4 Day, 3 Night</p>
            </div>
          </div>
          <div className={styles.photo3}>
            <div className={styles.cardText}>
              <p className={styles.text1}>Pakhara,Nepal</p>
              <p className={styles.text2}>4 Day, 3 Night</p>
            </div>
          </div>
          <div className={styles.photo4}>
            <div className={styles.cardText}>
              <p className={styles.text1}>Pakhara,Nepal</p>
              <p className={styles.text2}>4 Day, 3 Night</p>
            </div>
          </div>
          <div className={styles.photo5}>
            <div className={styles.cardText}>
              <p className={styles.text1}>Pakhara,Nepal</p>
              <p className={styles.text2}>4 Day, 3 Night</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <Button style={{ fontSize: "33px" }} className={styles.buttonText}>
          Explore More
        </Button>
      </div>

     
    </>
  );
};
export default Card;
