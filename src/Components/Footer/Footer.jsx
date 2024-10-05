import { Link } from "react-router-dom";

import links from "../../data/footerLinks.json";
import { motion } from "framer-motion";
import Logolink from "../Navbar/Logolink/Logolink";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const Footer = () => (
  <motion.footer
    className="bg-dark text-light flex flex-col md:flex-row justify-between p-8"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.4,
      type: "spring",
      stiffness: 120,
      damping: 10,
    }}
    viewport={{ once: true }}
  >
    <Logolink />

    <div className=" grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mx-auto gap-3 space-x-8  space-y-0 order-3 md:order-2">
      {links.map((item) => (
        <div className="flex flex-col flex-wrap" key={item.title}>
          <h6 className="font-krona text-sm">{item.title}</h6>
          <div>
            {item.links.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="lowercase text-sm block hover:text-yellow"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="text-yellow space-x-4 md:space-x-0 order-2 md:order-3 flex md:block mb-6 md:mb-0">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey block mb-4"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey block mb-4"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey block mb-4"
      >
        <InstagramIcon />
      </a>
    </div>
  </motion.footer>
);

export default Footer;
