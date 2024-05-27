import { calendar, house, estadistics, users, user } from "../../assets";
import { LinkItem } from "./LinkItem";
const StringsArr = [
  { route: "/estadistics", image: estadistics },
  { route: "/petitions", image: users },
  { route: "/home", image: house },
  { route: "/schedule", image: calendar },
  { route: "/perfil", image: user },
];
export const NavBar = () => {
  return (
    <>
      <nav>
        {StringsArr.map((link, linkIndex) => (
          <LinkItem href={`${link.route}`} key={`${linkIndex}${link.route}`}>
            <img className="little-image" src={`${link.image}`} />
          </LinkItem>
        ))}
      </nav>
      <div className="realative-box"></div>
    </>
  );
};
