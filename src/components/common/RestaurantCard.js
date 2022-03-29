import { Col } from "react-bootstrap";


export function RestautantCard({src, alt}){
    return(

        <Col xs={12} sm={3} md={4} lg={3}> 
        <div className="restaurant-card card">
          <img
            src={src}
            className="card-img-top"
            alt={alt}
          />
        </div>
      </Col>
    )
}