import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar({setShowSidebarBag, selectedProducts}) {
    const [show, setShow] = useState(false);

  return (
    <div className="navbar">
        <div className="inner-content">
            <h1 className="logo">
                VYR<span>ION</span>
            </h1>
            <nav className={`${show && "show"}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="products">Produtos</Link>
                    </li>
                    <li>
                        <Link to="about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="contacts">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/account">Conta</Link>
                    </li>
                </ul>
            </nav>
            <div className="navs-icon-container">
                <div className="search-input-container">
                    <input type="search" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <button className="shopping-bag" onClick={() => setShowSidebarBag(true)}>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <div className="products-count">{selectedProducts.length}</div>
                </button>
                <button className="menu-button" onClick={() => setShow(!show)} >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    </div>
  )
}