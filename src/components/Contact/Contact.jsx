import React from "react";
import styles from "./contact.module.css";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Container md="12">
        <Row>
          <Col >
            <div className={styles.container}>
              <div className={styles.photo}>
                <div className={styles.title}>
                  <p className={styles.p1}>Get Every Tour and</p>
                  <p className={styles.p1}>Package Update</p>
                  <div className={styles.rectangle}>
                    <div className={styles.inner}>
                      <div className={styles.icon} />
                      <Form.Control type="email"></Form.Control>
                      <Button className={styles.button}>Subscribe</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    
    </>
  );
};
export default Contact;
