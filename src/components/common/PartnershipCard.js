import { Row, Col, Image } from "react-bootstrap";
import { ButtonPrimary } from "./Button";

export function PartnershipCard({ cta, partner_promo_text, src, alt, width, col }) {
  
  return (
    <div>
      <div className="cta_block mb-3 mb-lg-0">
        <Row>
          <Col xs={col || "4"} className="d-flex align-items-center">
            <div className="inner-content">
              <h2>{cta}</h2>
              <p>{partner_promo_text}</p>
              <ButtonPrimary cta="Start earning" />
            </div>
          </Col>
          <div className={`col-${col === undefined ? "6" : col} d-flex align-items-end`}> 
          {/* comments 
          xs={col || "4"} can be used only with Col and can't be used with div, for ex.
          */}
            <Image className="img-fluid" src={src} alt={alt} width={width} />
          </div>
        </Row>
      </div>
    </div>
  );
}
