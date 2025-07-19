"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Clientes", href: "#clientes" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#faq" }, // Leva para o botão WhatsApp do FAQ
  ]

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511969282386", "_blank")
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo-text">
              <span className="logo-ver">VER</span>
              <span className="logo-mais">MAIS</span>
              <span className="logo-brasil">BRASIL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="desktop-cta">
            <button className="cta-button" onClick={handleWhatsAppClick}>
              <span>Agendar Exame</span>
              <div className="button-glow"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="menu-icon">
              <Menu className={`hamburger ${isMenuOpen ? "hide" : "show"}`} size={24} />
              <X className={`close ${isMenuOpen ? "show" : "hide"}`} size={24} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav-content">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <button
              className="mobile-cta-button"
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
              onClick={handleWhatsAppClick}
            >
              <span>Agendar Exame</span>
              <div className="button-glow"></div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
