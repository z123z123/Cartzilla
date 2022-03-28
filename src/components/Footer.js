import {
  FooterCategoriesJoinUs,
  FooterCategoriesLetUsHelpYou,
  FooterCategoriesFollowUs,
  FooterCategoriesName
} from "./common/FooterComponents";
import { FooterCurrencyPicker } from "./common/FooterCurrencePicker";
import { FooterLogo } from "./common/FooterLogo";
import { FooterLegal } from "./common/FooterLegal";
import { AppStoreBadges } from "./common/AppStoreBadges";

export function Footer() {
  return (
    <footer>
      <section className="footer d-flex">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2 flex-column">
              <FooterLogo
                src="./img/footer-logo-light.png"
                alt="cartzilla footer logo"
              />
              <FooterCurrencyPicker
                src="./img/en.png"
                btn_content=" Eng / $ "
              />
            </div>
            {/*<div className="col-12 col-md-3 col-lg-2 flex-column">
              <img
                src="./img/footer-logo-light.png"
                alt="cartzilla footer logo"
                width="117"
                height="28"
              />
              <button className="btn">
                <img src="./img/en.png" /> Eng / ${" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
  </div>*/}

            <FooterCategoriesJoinUs footercategoryname="Join us" />
            {/*footeritems=["Careers", "Restaurants", "Become a Courier", "About"] /> KAK PRIMENIT ARRAY?*/}

            {/*<div className="col-12 col-md-3 col-lg-2">
                <p className="group-name mb-4">Join us</p>
                <ul className="d-flex flex-column text-md-start p-0">
                  <li><a className="mb-3" href="#">Careers</a></li>
                  <li><a className="mb-3" href="#">Restaurants</a></li>
                  <li><a className="mb-3" href="#">Become a Courier</a></li>
                  <li><a className="mb-3" href="#">About</a></li>
                </ul>
            </div>*/}

            <FooterCategoriesLetUsHelpYou footercategoryname="Let us help you" />

            <FooterCategoriesFollowUs footercategoryname="Follow us" />

            <div className="col-12 col-md-3 col-lg-3">
            <FooterCategoriesName footercategoryname="Download our app" />
              <AppStoreBadges />
            </div>
          </div>

          <div className="footer-last">
            <div className="row">
              <div className="col-12">
                <FooterLegal href="https://reactjs.org/docs/hello-world.html" />

                {/*<div className="legal pt-4">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <p className="text-center text-lg-start">
                        © All rights reserved. Made by Createx Studio
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 d-flex justify-content-center justify-content-lg-end">
                      <ul className="footer-legal-list d-flex flex-column flex-lg-row text-center text-lg-start">
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Cookies policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
          </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
