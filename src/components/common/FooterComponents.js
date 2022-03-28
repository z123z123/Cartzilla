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
    <div className="col-12 col-md-3 col-lg-2">
      <FooterCategoriesName footercategoryname={footercategoryname} />

      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </div>
  );
}

export function FooterCategoriesLetUsHelpYou({ footercategoryname }) {
  const footeritems = ["Help Center", "Support", "Contact us"];

  return (
    <div class="col-12 col-md-3 col-lg-3">
      {" "}
      <FooterCategoriesName footercategoryname={footercategoryname} />
      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </div>
  );
}

export function FooterCategoriesFollowUs({ footercategoryname }) {
  const footeritems = ["Facebook", "Twitter", "Instagram"];

  return (
    <div className="col-12 col-md-3 col-lg-2">
      <FooterCategoriesName footercategoryname={footercategoryname} />

      <ul className="d-flex flex-column text-md-start p-0">
        {footeritems.map((c) => (
          <FooterCategoriesItem footercategoryitem={c} key={c} />
        ))}
      </ul>
    </div>
  );
}

