import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Menu() {
  function openMenu() {
    document.body.classList.add("active");
    console.log("open");
  }
  function closeMenu() {
    document.body.classList.remove("active");
    console.log("close");
  }
  return (
    <>
      <div className="menu" id="menu">
        <FontAwesomeIcon icon="bars" onClick={openMenu} />
        <div className="menu__links">
          <Link to="/" className="menu__link" onClick={closeMenu}>
            {" "}
            Home{" "}
          </Link>
          <Link to="/movie" className="menu__link" onClick={closeMenu}>
            {" "}
            Find Your Movies{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
