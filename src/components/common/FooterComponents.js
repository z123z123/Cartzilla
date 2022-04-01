import React from "react";

import { Col, Row } from "react-bootstrap";
import { AppStoreBadges } from "./AppStoreBadges";
import { FooterCurrencyPicker } from "./FooterCurrencyPicker";
import { FooterLogo } from "./FooterLogo";


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

export function FooterCols() {
  const footerItems = {
    "Join us": [
      { name: "Careers", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "Restaurants", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "Become a Courier", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "About", link: "https://reactjs.org/docs/hello-world.html" },
    ],
    "Let us help you": [
      { name: "Help Center", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "Support", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "Contacts", link: "https://reactjs.org/docs/hello-world.html" },
    ],
    "Follow us": [
      { name: "Facebook", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "Twitter", link: "https://reactjs.org/docs/hello-world.html" },
      { name: "instagram", link: "https://reactjs.org/docs/hello-world.html" },
    ],
    // "Follow us1": [
    //   { name: "Careers1", link: "https://reactjs.org/docs/hello-world.html" },
    //   { name: "About1", link: "https://reactjs.org/docs/hello-world.html" },
    // ],
    // "Follow us12": [
    //   { name: "Careers2", link: "https://reactjs.org/docs/hello-world.html" },
    //   { name: "About2", link: "https://reactjs.org/docs/hello-world.html" },
    // ],
  };

  return (
    <Row>
      <Col xs={12} md={3} lg={2} className="flex-column">
        <FooterLogo
          src="./img/footer-logo-light.png"
          alt="cartzilla footer logo"
        />
        <FooterCurrencyPicker src="./img/en.png" btn_content=" Eng / $ " />
      </Col>

      {Object.entries(footerItems).map(([key, value]) => (
        <Col key={key}>
          <p className="group-name">{key}</p>
          {value.map((object) => (
            <div className="footer_link" key={object.name}>
              <a href={object.link}>{object.name}</a>
            </div>
          ))}
        </Col>
      ))}

      {/* {Object.keys(footerItems).map((key) => <p>{key}</p>)} */}
     
      <Col>
      <p className="group-name">Download our app</p>
        <AppStoreBadges />
      </Col>
    </Row>
  );
}

//Object.entries can also be used with JSON (files/objects)
