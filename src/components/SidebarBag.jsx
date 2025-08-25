import { faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SidebarProduct from './SidebarProduct'
import { Link } from 'react-router-dom'

export default function SidebarBag({
    setShowSidebarBag,
    showSidebarBag,
    selectedProducts,
    bagTotal,
    removeProductFromBag,
    addToBagTotal,
}) {
  return (
      <aside className={`sidebar-bag ${showSidebarBag ? "show" : ""}`}>

          <div className="top">
              <h3>Sua Sacola de Compras</h3>
              <button onClick={() => setShowSidebarBag(false)}>
                  <FontAwesomeIcon icon={faXmark}/>
              </button>
          </div>
          <div className="sidebar-products-list">
              {selectedProducts.map((product) => (
                  <SidebarProduct
                      key={product.id} {...product}
                      removeProductFromBag={removeProductFromBag}
                      //addToBagTotal={addToBagTotal}
                  />
              ))}
          </div>
          {bagTotal === 0 ? (
            <i>Sua sacola está vazia</i>
          ) : (
            <>
              <div className="total-container">
                <b>Total: R$</b> {bagTotal}
              </div>
              <Link to="/bag/checkout" className="btn-icon">
                <span>Pagar Agora</span>
                <FontAwesomeIcon icon={faMoneyBill} />
              </Link>
            </>
          )}
    </aside>
  )
}
