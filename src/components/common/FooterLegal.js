import { Row, Col } from "react-bootstrap";


export function FooterLegalItem({ href, legalItem }) {
    return (
      <li>
        <a href={href}>{legalItem}</a>
      </li>
    );
  }
  
  export function FooterLegal({ href }) {
    const legal = ["Privacy Policy", "Terms & Conditions", "Cookies policy"];
  
    return (
      <div className="legal pt-4">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <p className="text-center text-lg-start">
              © All rights reserved. Made by Createx Studio
            </p>
          </Col>
          <Col xs={12} md={6} lg={8} className="d-flex justify-content-center justify-content-lg-end">
            <ul className="footer-legal-list d-flex flex-column flex-lg-row text-center text-lg-start">
              {legal.map((c) => (
                <FooterLegalItem legalItem={c} key={c} href={href} />
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }