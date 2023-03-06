import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./header.module.css";
import Cards from "../Cards/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });
const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState("Kişi sayısı girin");
  const [locationItem, setLocationItem] = useState("Bir yer giriniz");

  const handleLocation = (eventKey, e) => {
    setLocationItem(e.target.textContent);
  };

  const handleSelect = (eventKey, event) => {
    setSelectedItem(event.target.textContent);
    //textContent prop'u sadece görünen metni temsil eder.
  };
  //eventKey prop'u, seçilen öğenin değerini belirlemek için kullanılır. onSelect özelliği, seçilen öğenin değerini almak için kullanılır
  // ve seçilen öğenin görünen metnini belirlemek için kullanılan textContent prop'u ile birlikte kullanılır.
  return (
    <>
      <div className={inter.className}>
        <div className={styles.header}>
          <h3 className={styles.headerText}>
            Explore The Huge World & Enjoy It’s Beauty
          </h3>
          <h3 className={styles.headerText2}>
            {" "}
            Discover new things in explarin the world & make Your vacation
            memarable to remeber forever.
          </h3>
          <div className={styles.innerHeader}>
            <div className={styles.container}>
              <div className={styles.innerContainer}>
                <Image
                  style={{ margin: "10px" }}
                  src={"/Vectors/location.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                <div className={styles.inner}>
                  <div>Location</div>
                  <InputGroup className={styles.dropdown}>
                    <DropdownButton
                      
                      variant="outline-secondary"
                      title={locationItem}
                      onSelect={handleLocation}
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item eventKey="New York">
                        New york
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Seul ">Seul</Dropdown.Item>
                      <Dropdown.Item eventKey="Berlin">Berlin</Dropdown.Item>
                      <Dropdown.Item eventKey="Tokyo">Tokyo</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
              </div>
              <div className={styles.innerContainer}>
                <Image
                  style={{ margin: "10px" }}
                  src={"/Vectors/calendar.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                <div className={styles.inner}>
                  <div>Date</div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className={styles.innerContainer}>
                <Image
                  style={{ margin: "10px" }}
                  src={"/Vectors/guest.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
                <div className={styles.inner}>
                  <div>Guest</div>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      variant="outline-secondary"
                      title={selectedItem}
                      onSelect={handleSelect}
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item eventKey="1">1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
              </div>
              <Button className={styles.button} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
