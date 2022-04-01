import { Col, Image, Card } from "react-bootstrap";

export function CuisineCardImage({ src, alt, children }) {
  return (
    <div className="card category">
      <Image src={src} className="card-img-top" alt={alt} />
      {children}
    </div>
  );
}

export function CuisineCardText({ title }) {
  return (
    <div>
      <h3 className="category-card-text card-title text-center">{title} </h3>
    </div>
  );
}

export function CuisineCard({ src, alt, title }) {
  return (
    <Col xs={12} md={4} >
      <Card>
        <CuisineCardImage src={src} alt={alt} className="card-img-top">
        <CuisineCardText title={title} />
        </CuisineCardImage>
      </Card>
    </Col>
  );
}
