import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const listaImagens = [
  "images/produtos-header-1.png", 
  "images/produtos-header-2.png",
  "images/produtos-header-3.png"
];

export default function Header() { 
  const [valorAtual, atualizarValor] = useState(0);
  useEffect(()=> { 
    const intervalo = setInterval(() => { 
      atualizarValor(prev =>
        prev === listaImagens.length -1? 0 : prev + 1)
        /*(prev +1) % listaImagens.length)*/ // lógica alternativa
      }, 15000);
    return () => clearInterval(intervalo);
  }, []);
 
  return (
      <header>
          <div className="inner-content">
              <div className="left-side">
                  <h2>Sua identidade em cada acessório</h2>
                  <p>
                  Confiança não se impõe, se transmite. O que você escolhe usar reflete quem você é.
                  Aqui, a exclusividade e o estilo te esperam.
                  </p>
                  <Link to="/products" className="see-more-btn">
                    <span>Ver Agora</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
              </div>
              <div className="right-side">
                  <img
                    src={listaImagens[valorAtual]}
                    alt="Imagem de acessórios"
                    className="header-image"
                    id="img"
                  />
              </div>
          </div>
      </header>
  )
}

