export function DropdownMenu() {
  const cities = ["Los Angeles", "Chicago", "Houston", "Philadelphia", "San Diego", "Miami"];
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {cities.map((c) => (
        <DropdownMenuItem city={c} key={c} />
      ))}
    </ul>
  );
}

function DropdownMenuItem({city}) {
    return (
      <li>
        <a
          className="dropdown-item"
          href="https://getbootstrap.com/docs/5.1/layout/grid/"
        >
          {city}
        </a>
      </li>
    );
  }



