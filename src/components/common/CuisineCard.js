import { Col } from "react-bootstrap";

export function CuisineCardImage({ src, alt, children }) {
  return (
    <div className="card category">
      <img src={src} className="card-img-top" alt={alt} />
      {children}
    </div>
  );
}

export function CuisineCardText({ title }) {
  return (
    <div className="card-body">
      <h3 className="category-card-text card-title text-center">{title} </h3>
    </div>
  );
}

export function CuisineCard({ src, alt, title }) {
  return (
    <Col xs={12} md={4} >
      <div>
        <CuisineCardImage src={src} alt={alt} className="card-img-top">
        <CuisineCardText title={title} />
        </CuisineCardImage>
      </div>
    </Col>
  );
}
