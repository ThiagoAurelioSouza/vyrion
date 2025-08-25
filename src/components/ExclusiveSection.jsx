import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from "react-router-dom";


export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
          <div className="page-inner-content">
              <div className="content">
                  <div className="left-side">
                      <h2>Montclair</h2>
                      <p>
                        OFERTA ESPECIAL: O Montclair combina elegância e precisão em um design atemporal. Um símbolo de prestígio agora por um valor promocional imperdível.
                      </p>
                      <Link to="/products" className="see-more-btn">
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                  </div>
                  <div className="right-side">
                      <img src="/images/exclusive.png" alt="Montclair"/>
                  </div>
              </div>
        </div>
    </div>
  )
}
