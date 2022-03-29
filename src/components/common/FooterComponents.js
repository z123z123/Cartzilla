import { Col } from "react-bootstrap";

export function FooterCategoriesItem({ href, footercategoryitem }) {
  return (
    <li>
      <a className="mb-3" href={href}>
        {footercategoryitem}
      </a>
    </li>
  );
}

export function FooterCategoriesName({ footercategoryname }) {
  return <p className="group-name mb-4">{footercategoryname}</p>;
}

export function FooterCategoriesJoinUs({ footercategoryname }) {
  const footeritems = ["Careers", "Restaurants", "Become a Courier", "About"];

  return (
    <Col xs={12} md={3} lg={2}>
      <FooterCategoriesName footercategoryname={footercategoryname} />
      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </Col>
  );
}

export function FooterCategoriesLetUsHelpYou({ footercategoryname }) {
  const footeritems = ["Help Center", "Support", "Contact us"];

  return (
    <Col xs={12} md={3} lg={3}>
      {" "}
      <FooterCategoriesName footercategoryname={footercategoryname} />
      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </Col>
  );
}

export function FooterCategoriesFollowUs({ footercategoryname }) {
  const footeritems = ["Facebook", "Twitter", "Instagram"];

  return (
    <Col xs={12} md={3} lg={2}>
      <FooterCategoriesName footercategoryname={footercategoryname} />

      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </Col>
  );
}
