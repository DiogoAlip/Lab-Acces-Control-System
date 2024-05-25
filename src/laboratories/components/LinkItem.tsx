import { Link, useRoute } from "wouter";

interface linkProp {
  href: string;
  children: JSX.Element | JSX.Element[];
}

export const LinkItem = ({ href, children }: linkProp) => {
  const [isActive] = useRoute(href);

  return (
    <Link className={`nav-item ${isActive ? "active" : ""}`} href={href}>
      {children}
    </Link>
  );
};
