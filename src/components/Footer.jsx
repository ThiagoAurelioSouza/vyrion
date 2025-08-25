import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
      <footer>
          <div className="pager-inner-content content">
              <div className="download-options">
                  <p>Baixe a nossa aplicação</p>
                  <p>Baixe nossa aplicação para Android e IOS</p>
                  <div>
                      <img src="/images/app-store.png" alt="App Store download" />
                      <img src="/images/play-store.png" alt="Play Store download"/>
                  </div>
              </div>
              <div className="logo-footer">
                  <h1 className="logo">
                      VYR<span>ION</span>
                  </h1>
                  <p>Nosso objetivo é fazer a sua satifação</p>
              </div>
              <div className="links">
                  <h3>Links Úteis</h3>
                  <ul>
                      <li>
                          <Link>Cupons</Link>
                      </li>
                      <li>
                          <Link>Blog Pessoal</Link>
                      </li>
                      <li>
                          <Link>Políticas</Link>
                      </li>
                      <li>
                          <Link>Torne-se Afiliado</Link>
                      </li>
                  </ul>
              </div>
          </div> 
          <div className="page-inner-content content">
              <hr />
              <p className="copyright">
                  Copyright 2030 - Thiago Aurélio - Todos os direitos reservados
              </p>
          </div>
      </footer>
  )
}
