import { Link } from "wouter";
import { calendar, house, estadistics, users, user } from "../../assets";
export const NavBar = () => {
  const show = (value: boolean) => console.log(value);

  return (
    <nav>
      <Link
        href="/estadistics"
        className={(active) => {
          show(active);
          return `nav-item ${active ? "active" : ""}`;
        }}
      >
        <img className="little-image" src={estadistics} />
      </Link>
      <Link
        href="/petitions"
        className={(active) => `nav-item ${active ? "active" : ""}`}
      >
        <img className="little-image" src={users} />
      </Link>
      <Link
        href="/home"
        className={(active) => `nav-item ${active ? "active" : ""}`}
      >
        <img className="little-image" src={house} />
      </Link>
      <Link
        href="/schedule"
        className={(active) => `nav-item ${active ? "active" : ""}`}
      >
        <img className="little-image" src={calendar} />
      </Link>
      <Link
        href="/perfil"
        className={(active) => `nav-item ${active ? "active" : ""}`}
      >
        <img className="little-image" src={user} />
      </Link>
    </nav>
  );
};
