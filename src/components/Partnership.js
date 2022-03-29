import { PartnershipCard } from "./common/PartnershipCard";

import { Container, Row, Col } from "react-bootstrap";

export function Partnership() {
  return (
    <section className="offer">
      <Container>
        <Row>
          
          <Col xs={12} lg={6}>
            <div className="cta_courier">
              <PartnershipCard
                cta="Become a Courier"
                partner_promo_text="Earn competitive salary as delivery courier working
          flexible schedule."
                src="./img/courier.png"
                alt="courier image"
                width="544"
                col="6"
              />
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="cta_partner">
              <PartnershipCard
                cta="Become a Partner"
                partner_promo_text="Grow your business by reaching new customers."
                src="./img/chef.png"
                alt="chef image"
                width="538"
                col="6"
              />
            </div>
          </Col>

          {/*<div className="col-12 col-lg-6">
            <div className="cta_block cta_courier mb-3 mb-lg-0">
              <div className="row">
                <Container className="col-6 d-flex align-items-center">
                  <Row className="inner-content">
                    <h2>Become a Courier</h2>
                    <p>
                      Earn competitive salary as delivery courier working
                      flexible schedule.
                    </p>
                    <Button cta="Start earning" />
                    {/*<button type="button" className="btn">Start earning</button>*/}
          {/*</div>
                </div>
                <div className="col-6 d-flex align-items-end">
                  <img
                    className="img-fluid"
                    src="./img/courier.png"
                    alt="courier image"
                    width="544"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="cta_block cta_partner mb-3 mb-lg-0">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <div className="inner-content">
                    <h2>Become a Partner</h2>
                    <p>Grow your business by reaching new customers.</p>
                    <Button cta="Partner with us" />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-end">
                  <img
                    className="img-fluid"
                    src="./img/chef.png"
                    alt="chef image"
                    width="538"
                  />
                </div>
              </div>
            </div>
          </div>*/}
        </Row>
      </Container>
    </section>
  );
}
