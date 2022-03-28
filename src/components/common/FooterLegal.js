export function FooterLegalItem({ href, legalItem }) {
    return (
      <li>
        <a href={href}>{legalItem}</a>
      </li>
    );
  }
  
  export function FooterLegal({ href }) {
    const legal = ["Privacy Policy", "Terms & Conditions", "Cookies policy"];
  
    return (
      <div className="legal pt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <p className="text-center text-lg-start">
              © All rights reserved. Made by Createx Studio
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-8 d-flex justify-content-center justify-content-lg-end">
            <ul className="footer-legal-list d-flex flex-column flex-lg-row text-center text-lg-start">
              {legal.map((c) => (
                <FooterLegalItem legalItem={c} key={c} href={href} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }