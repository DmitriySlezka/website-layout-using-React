import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button"
import SectionBlock from '../../components/SectionBlock/SectionBlock';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../components/SectionSubtitle/SectionSubtitle';

export default class Contact extends Component {
   render() {
      return (
         <SectionBlock bgColor="light-gray">
            <Container>
               <Row>
                  <Col xs={12} md={4}>
                     <SectionTitle>Contact Info:</SectionTitle>
                     <SectionSubtitle>
                        To give beginning divide, cattle. Give moving won't, there the abundantly
                        she'd brought air upon. Light hath subdue. Life days creature upon first
                        heaven gathering dry.
                     </SectionSubtitle>
                     <div className={styles.Item}>
                        <span className={styles.Item__Header}>Adress:</span>
                        <span className={styles.Item__Text}>10111 Santa Monica Boulevard, LA</span>
                     </div>
                     <div className={styles.Item}>
                        <span className={styles.Item__Header}>Phone:</span>
                        <span className={styles.Item__Text}>+44 987 065908</span>
                     </div>
                     <div className={styles.Item}>
                        <span className={styles.Item__Header}>Email:</span>
                        <span className={styles.Item__Text}>hello@pirolltheme.com</span>
                     </div>
                     <div className={styles.Item}>
                        <span className={styles.Item__Header}>Fax:</span>
                        <span className={styles.Item__Text}>+44.987.065908</span>
                     </div>
                  </Col>
                  <Col xs={12} md={{ span: 7, offset: 1 }}>
                     <form className={styles.Form}>
                        <input placeholder="Your Name" className={styles.Form__Name}></input>
                        <input placeholder="Your Email" className={styles.Form__Email}></input>
                        <input placeholder="Title" className={styles.Form__Title}></input>
                        <textarea
                           placeholder="Comment"
                           className={styles.Form__Comment}
                           rows={8}
                        ></textarea>
                     </form>
                     <Button> Send Message </Button>
                  </Col>
               </Row>
            </Container>
         </SectionBlock>
      );
   }
}
