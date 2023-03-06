import { Container, Navbar } from "react-bootstrap";
import Header from "../Header/Header";
import styles from "./navbar.module.css";
import navbar from "../../Dummydata/navbar.json";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });

const Navbars = () => {
  const router = useRouter();
  return (
    <>
      <div className={inter.className}>
        <Navbar>
          <Container>
            <Navbar.Text className={styles.logo}>Travel</Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className={styles.innercontainer}>
              {navbar.map((item, key) => {
                return (
                  <Link href={item.link} className={styles.text} key={item.id}>
                    {item.name}
                  </Link>
                );
              })}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Navbars;

{
  /* <div className={styles.innerHeader}>
<div className={styles.example}>
  <div>
     <h4 className={styles.text1} >deneme</h4>
    <h4 className={styles.text1} >deneme</h4>
    </div>
    <div>
    <h4 className={styles.text1} >deneme</h4>
  <h4 className={styles.text1} >deneme</h4>
    </div>


</div>


</div> */
}
