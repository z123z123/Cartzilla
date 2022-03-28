import { DropdownMenu } from "./DropdownMenu";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://getbootstrap.com/docs/5.1/layout/grid/"
          >
            <img
              src="./../../img/Cartzilla_logo.png"
              alt="Cartzilla logo"
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown" id="city-selector">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-baseline"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  New York
                </a>
                <DropdownMenu />
              </li>
              <li className="nav-item" id="cuisine">
                <a className="nav-link" href="#cuisine">
                  Cuisine
                </a>
              </li>
            </ul>
            
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item" id="search">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item" id="user">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                >
                  <svg
                    id="user-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6875rem"
                    height="1.6875rem"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item ms-auto" id="cart">
                <a
                  className="nav-link ms-auto cir"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                >
                  <span className="sticky" id="number-of-items-in-cart">
                    <b>3</b>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6875rem"
                    height="1.6875rem"
                    className="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
