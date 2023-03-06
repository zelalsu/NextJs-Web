import React from "react";
import { MenuItem } from "../Menu/MenuItem";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./footer.module.css";
import footerMenu from "../../Dummydata/FooterMenu.json";
import CustomGoogle from "../GoogleMap/CustomGoogle";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      
          <p className={styles.p}>Travel</p>
       
        <div>
          <p style={{ fontSize: "13px" }}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <p>Follow Us</p>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.menu}>
          <div>
            {" "}
            <p className={styles.p}>About</p>
          </div>
          {footerMenu.one.map((item, key) => {
            return <MenuItem key={item.id} item={item} />;
          })}
        </div>
      </div>

      <div className={styles.innerContainer}>
        <p className={styles.p}>Features</p>

        {footerMenu.two.map((item, key) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
      <div className={styles.innerContainer}>
        <p className={styles.p}>Our Company</p>

        <CustomGoogle />
        <div className={styles.map}>
          <Image
            src={"/Vectors/locat.svg"}
            width={45}
            height={45}
            alt=""
          ></Image>

          <p>Address Line 1, Address Line 2,Lucknow, India - 226028</p>
        </div>
        <div className={styles.map}>
          <Image
            src={"/Vectors/email.svg"}
            width={45}
            height={45}
            alt=""
          ></Image>

          <p>jsndfjks@gmail.com</p>
        </div>
        <div className={styles.map}>
          <Image
            src={"/Vectors/aras.svg"}
            width={45}
            height={45}
            alt=""
          ></Image>

          <p>0541 545 45 7</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
