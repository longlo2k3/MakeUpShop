import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    path: "/MakeUpShop",
    name: "Home",
  },
  {
    path: "/products",
    name: "products",
  },
  {
    path: "/about",
    name: "About",
  },
];

export default function NavLinks() {
  const location = useLocation();
  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          className={`lowercase text-sm font-base font-semibold md:mx-8 mx-4 hover:text-yellow hover:border-b-2 hover:border-yellow ${
            location.pathname === link.path
              ? "text-yellow border-b-2 border-yellow"
              : ""
          }`}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}
