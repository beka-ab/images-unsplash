import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";
import "./header.css";

const Navbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const up = document.querySelector(".up") as HTMLElement;
      if (up) {
        const isBelow =
          window.scrollY - window.outerHeight >= up.offsetTop + up.offsetHeight;
        if (isBelow) {
          up.classList.add("visible");
        } else {
          up.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const up = document.querySelector(".scroll-top") as HTMLElement;
    if (up) {
      up.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="lists">
          <li className="list">
            <Link className="list" to={"/"}>
              Home
            </Link>
          </li>
          <li className="list">
            <Link className="list" to={"/history"}>
              History
            </Link>
          </li>
        </ul>
      </nav>
      <Scroll />
    </>
  );
};

export default Navbar;
