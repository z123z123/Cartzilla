import { Row, Col } from "react-bootstrap";
import { Button } from "./Button";

export function PartnershipCard({ cta, partner_promo_text, src, alt, width, col }) {
  
  return (
    <div>
      <div className="cta_block mb-3 mb-lg-0">
        <Row>
          <Col className={`col-${col || "4"} d-flex align-items-center`}>
            <div className="inner-content">
              <h2>{cta}</h2>
              <p>{partner_promo_text}</p>
              <Button cta="Start earning" />
            </div>
          </Col>
          <div className={`col-${col === undefined ? "6" : col} d-flex align-items-end`}>
            <img className="img-fluid" src={src} alt={alt} width={width} />
          </div>
        </Row>
      </div>
    </div>
  );
}
