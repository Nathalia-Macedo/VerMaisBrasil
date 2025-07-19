"use client"

import { MapPin, Phone, Github, Instagram, Globe, Heart } from "lucide-react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-text">
                <span className="logo-vermaisbrasil">VERMAISBRASIL</span>
              </div>
            </div>
            <p className="footer-description">
              Há 6 anos promovendo saúde visual e bem-estar para profissionais em todo o Brasil através de exames
              gratuitos e óculos acessíveis.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <p>Alameda Rio Negro 503</p>
                  <p>Sala 2020/1063 - CEP 06454-000</p>
                  <p>Alphaville - Barueri SP</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <p>11 96928-2386</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Links Rápidos</h3>
            <div className="footer-links">
              <a href="#quem-somos">Quem Somos</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#clientes">Clientes</a>
              <a href="#como-funciona">Como Funciona</a>
              <a href="#faq">FAQ</a>
              <a href="#faq">Contato</a>
            </div>
          </div>

          {/* Developer Info */}
          <div className="footer-section">
            <h3 className="footer-title">Desenvolvido por</h3>
            <div className="developer-info">
              <p className="developer-name">Nathalia Macedo</p>
              <div className="developer-links">
                <a href="https://github.com/Nathalia-Macedo" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://nathalia-macedo.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Globe size={18} />
                  <span>Portfólio</span>
                </a>
                <a href="https://instagram.com/nath_dev_" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                  <span>@nath_dev_</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2024 VERMAISBRASIL. Todos os direitos reservados.</p>
            <div className="footer-heart">
              <span>Feito com</span>
              <Heart size={16} className="heart-icon" />
              <span>para um Brasil que enxerga melhor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
