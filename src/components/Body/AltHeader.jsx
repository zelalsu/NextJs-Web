import React from "react";
import styles from "./altHeader.module.css";
import Comment from "../Comment/Comment";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });

const AltHeader = () => {
  return (
    <>
      <div className={inter.className}>
        <div className={styles.container}>
          <div className={styles.headers}>
            <div className={styles.header}></div>
          </div>
          <div className={styles.text}>
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>
              We Offer Best Services
            </p>
            <h3 style={{ fontSize: "33px" }}>
              Try a variety of benefits when using our servies.
            </h3>
            <div className={styles.explain}>
              <div className={styles.explainInner}>
                <div>
                  <Image
                    src={"/Photos/icons.png"}
                    width={77}
                    height={77}
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles.p}>Lot of choices</p>
                  <p className={styles.p1}>
                    you can find total 500+ destionation listed in our website.
                  </p>
                </div>
              </div>

              <div className={styles.explainInner}>
                <div>
                  {" "}
                  <Image
                    src={"/Photos/icons.png"}
                    width={77}
                    height={77}
                    alt=""
                  />
                </div>
                <div>
                  <p className={styles.p}>Easy booking</p>
                  <p className={styles.p1}>
                    You can simple book your destination ticket from our
                    website.
                  </p>
                </div>
              </div>
              <div className={styles.explainInner}>
                <div>
                  {" "}
                  <Image
                    src={"/Photos/icons2.png"}
                    width={77}
                    height={77}
                    alt=""
                  />{" "}
                </div>
                <div>
                  <p className={styles.p}>24/7 Customer service</p>
                  <p className={styles.p1}>We provide well customized service to our customer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
};
export default AltHeader;
