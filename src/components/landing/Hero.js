import bg from "./../../img/hero-bg.jpg";
import { ButtonPrimary } from "../common/Button";
import { DropdownMenu } from "../common/DropdownMenu";
import { Container, Row, Col } from "react-bootstrap";

export function Hero() {
  return (
    <section
      className="hero pt-2 pb-4 bg-position-center d-flex align-items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container>
        <Row>
          <Col xs={12} lg={{span:6, offset:3}}>
            <p className="text-center" id="hero-text-1">
              #1 Food Delivery Service since 2010
            </p>
            <div className="text-center">
              <strong className="text-center" id="hero-text-2">
                We deliver your favorite food fresh &#38; fast in {" "}
              </strong>
              <div className="dropdown d-inline-block">
                <a
                  className="dropdown-toggle"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                  id="hero-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong className="hero-city">New York</strong>
                </a>
                <DropdownMenu />
                {/* <ul className="dropdown-menu" aria-labelledby="hero-dropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      Chicago
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      Houston
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      Philadelphia
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      San Diego
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    >
                      Miami
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="d-flex justify-content-center">

            <ButtonPrimary cta="What do you want to eat?"  id="hero-button" />

              {/*<button
                type="button"
                className="btn btn-primary"
                id="hero-button"
              >
                What do you want to eat?
  </button>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
