import { ReviewCardThreeStars } from "./common/ReviewCard";
import { ReviewCardFourStars } from "./common/ReviewCard";
import { ReviewCardFiveStars } from "./common/ReviewCard";

import { Container, Row } from "react-bootstrap";

export function Reviews() {
  return (
    <section className="reviews d-flex align-items-center">
      <Container>
        <h2 className="text-center">Customer reviews</h2>
        <Row xs={12} sm={2} md={3} lg={4}>
          <ReviewCardFourStars
            reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod."
            src="./img/richard.jpg"
            alt="cusromer image"
            clientName="Richard Davis"
            date="Feb 14, 2020"
          />

          <ReviewCardThreeStars
            reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod."
            src="./img/laura.jpg"
            alt="cusromer image"
            clientName="Laura Willson"
            date="Feb 05, 2020"
          />

          <ReviewCardFiveStars
            reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod."
            src="./img/mary.jpg"
            alt="cusromer image"
            clientName="Mary Alicia Grant"
            date="Jan 27, 2020"
          />

          <ReviewCardFourStars
            reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod."
            src="./img/rafael.jpg"
            alt="cusromer image"
            clientName="Rafael Marquez"
            date="Dec 19, 2020"
          />

          {/*<div className="col-12 col-md-6 col-lg-3">
            <div className="review card">
              <div className="card-body">
                <svg
                  className="filled-star my-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffc336"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  className="filled-star my-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffc336"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  className="filled-star my-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffc336"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  className="filled-star my-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffc336"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  className="empty-star my-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#7d879c"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>

                <h3 className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </h3>
              </div>

              <div className="card-footer">
                <div className="customer-details mt-3 d-flex justify-content-center align-items-center">
                  <div>
                    <img
                      src="./img/richard.jpg"
                      className="img-fluid"
                      alt="cutomer review"
                    />
                  </div>
                  <div>
                    <p>
                      <strong>Richard Davis</strong>
                    </p>
                    <p className="date">Feb 14, 2020</p>
                  </div>
                </div>
              </div>
            </div>
  </div>*/}
        </Row>

        <nav aria-label="...">
          <ul className="pagination pagination-sm align-items-center justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                <button className="btn review-btn-1"></button>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <button className="btn review-btn-2"></button>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
