import React from "react";
import res from "./../../Restaurants.json";

import { Row, Col, Image } from "react-bootstrap";
import McD from "./../../img/McD.png";
import Asian from "./../../img/Asian.png";
import bonefish from "./../../img/bonefish.png";
import BurKing from "./../../img/BurKing.png";
import Carrabba from "./../../img/Carrabba.png";
import Dom from "./../../img/Dom.png";
import kfc from "./../../img/kfc.png";
import Logans from "./../../img/Logans.png";
import Moon from "./../../img/Moon.png";
import Olive from "./../../img/Olive.png";
import pHut from "./../../img/pHut.png";
import Ruth from "./../../img/Ruth.png";

export function RestautantCard({ src, alt }) {
  return (
    <Col xs={12} sm={3} md={4} lg={3}>
      <div className="restaurant-card card">
        <Image src={src} className="card-img-top" alt={alt} />
      </div>
    </Col>
  );
}

//second version//
export function RestaurantBrands() {
  const restaurants = [
    {
      src: McD,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "mcdonald's logo",
      status: "archive"
    },
    {
      src: Dom,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "domino's logo",
      status: "active"
    },
    {
      src: Moon,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "moon logo",
      status: "active"

    },
     {
      src: kfc,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "kfc logo",
    },
    {
      src: Olive,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "olive garden logo",
    },
    {
      src: Logans,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "logan's roadhouse logo",
    },
    {
      src: BurKing,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "burger king logo",
    },
    {
      src: bonefish,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "bonefish logo",
    },
    {
      src: Ruth,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "ruth's logo",
    },
    {
      src: Carrabba,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "carrabba logo",
    },
    {
      src: pHut,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "pizza hut logo",
    },
    {
      src: Asian,
      link: "https://cartzilla.createx.studio/home-food-delivery.html",
      alt: "asina chao logo",
    }, 
  ];

  // Find in array
  // const foundEl = restaurants.find((value) => value.alt.includes("logo"));
  // console.log(foundEl);


  return (
    <Row>
      {restaurants.map((value) => (
        <Col key={value.src} xs={12} sm={3} md={4} lg={3}>
          <a href={value.link} ><Image className="restaurant-card" src={value.src} alt={value.alt}/> </a>
        </Col>
      ))}
      {/*
      Filter in array
      <hr />
      {restaurants.filter((item) => item.status !== "archive").map((value) => (
        <Col key={value.src} xs={12} sm={3} md={4} lg={3}>
          
         <a href={value.link} ><Image className="............" src={value.src} alt={value.alt}/> </a>
        </Col>
      ))}
      <hr />
      */}
      
    </Row>
  );
}
