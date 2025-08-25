import { faMoneyBill, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({id, image, name, rating, price, addProductToBag}){
    return (
        <div className="product">
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <p className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="price"><span>R$</span> {price}
            </p>

            <div className="buttons">
                <Link to="/checkout" className="btn-icon">
                    <span>Comprar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill}/>
                </Link>

                <button onClick={() => addProductToBag(id)} className="btn-icon add-to-cart-btn">
                  <span>Adicionar Na Sacola</span>
                  <FontAwesomeIcon icon={faShoppingBag}/>
                </button>
            </div>
        </div>
    );
}