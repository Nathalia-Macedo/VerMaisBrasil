"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Star, Award, Heart, GraduationCap, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import "./ClientsSection.css"
import apae from "../images/apae.png"
import adventista from "../images/adventista.png"
import jv from "../images/image-removebg-preview (37).png"
import ama from "../images/ama.png"
import fc from "../images/fc.png"
import im from "../images/instituto.png"
import escola from "../images/client-photo-1.png"
import exame from "../images/client-photo-3.png"
import profissional from "../images/client-photo-2.png"
import exame3 from "../images/client-photo-4.png"
export default function ClientsSection() {
  const sectionRef = useRef(null)
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const clients = [
    {
      name: "Associação Juliano Varela",
      logo: jv,
      category: "Instituição Social",
      description: "Parceria dedicada ao cuidado visual de pessoas especiais",
      icon: Heart,
      color: "yellow",
    },
    {
      name: "APAE",
      logo: apae,
      category: "Instituição Social",
      description: "Cuidando da visão de quem cuida com amor",
      icon: Heart,
      color: "blue",
    },
    {
      name: "Rede Adventista",
      logo: adventista,
      category: "Educação",
      description: "Educação de qualidade com visão clara",
      icon: GraduationCap,
      color: "yellow",
    },
    {
      name: "Associação de Amigos dos Autistas",
      logo: ama,
      category: "Instituição Social",
      description: "Apoio especializado para famílias e cuidadores",
      icon: Heart,
      color: "blue",
    },
    {
      name: "Associação Flávia Cristina",
      logo: fc,
      category: "Instituição Social",
      description: "Transformando vidas através do cuidado visual",
      icon: Heart,
      color: "yellow",
    },
    {
      name: "Instituto Mirim Campo Grande",
      logo: im,
      category: "Educação",
      description: "Formando o futuro com visão clara",
      icon: GraduationCap,
      color: "blue",
    },
  ]

  const photos = [
    {
      src:escola,
      alt: "Exame de vista em biblioteca escolar",
      caption: "Atendimento em escolas e bibliotecas",
    },
    {
      src: profissional,
      alt: "Profissional realizando exame",
      caption: "Equipamentos profissionais no local",
    },
    {
      src: exame3,
      alt: "Exame em criança com profissional",
      caption: "Cuidado especializado para todas as idades",
    },
    {
      src: exame,
      alt: "Exame em profissional da segurança",
      caption: "Atendimento a profissionais de segurança",
    },
  ]

  useEffect(() => {
    const setupAnimations = () => {
      if (!window.gsap || !window.ScrollTrigger) return

      window.gsap.registerPlugin(window.ScrollTrigger)

      // Client cards animation
      window.gsap.fromTo(
        ".client-card",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".clients-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Photo gallery animation
      window.gsap.fromTo(
        ".photo-gallery",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".photo-gallery",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Load GSAP
    if (!window.gsap) {
      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      gsapScript.onload = () => {
        const scrollTriggerScript = document.createElement("script")
        scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        scrollTriggerScript.onload = setupAnimations
        document.head.appendChild(scrollTriggerScript)
      }
      document.head.appendChild(gsapScript)
    } else {
      setupAnimations()
    }
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying, photos.length])

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="clientes" className="clients-section-full" ref={sectionRef}>
      {/* Background Design */}
      <div className="clients-background">
        <div className="floating-orb-clients orb-1"></div>
        <div className="floating-orb-clients orb-2"></div>
        <div className="floating-orb-clients orb-3"></div>
        <div className="floating-orb-clients orb-4"></div>
        <div className="grid-pattern-clients"></div>
      </div>

      <div className="clients-container">
        {/* Header */}
        <div className="clients-header">
          <div className="clients-badge">
            <Users size={20} />
            <span>Nossos Clientes</span>
          </div>
          <h2 className="clients-title">
            Parceiros que <span className="clients-title-highlight">confiam</span> em nós
          </h2>
          <p className="clients-subtitle">
            Conheça algumas das instituições que já transformaram a saúde visual de suas equipes conosco
          </p>
        </div>

        {/* Clients Grid */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className={`client-card ${client.color}`}>
              <div className="client-card-header">
                <div className="client-logo-wrapper">
                  <img src={client.logo || "/placeholder.svg"} alt={client.name} className="client-logo-img" />
                </div>
                <div className={`client-category ${client.color}`}>
                  <client.icon size={16} />
                  <span>{client.category}</span>
                </div>
              </div>
              <div className="client-card-content">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-description">{client.description}</p>
                <div className="client-features">
                  <div className="client-feature">
                    <Star size={14} className={`feature-star ${client.color}`} />
                    <span>Exames gratuitos</span>
                  </div>
                  <div className="client-feature">
                    <Award size={14} className={`feature-star ${client.color}`} />
                    <span>Atendimento especializado</span>
                  </div>
                </div>
              </div>
              <div className="client-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="photo-gallery">
          <div className="gallery-header">
            <h3 className="gallery-title">Nosso Trabalho em Ação</h3>
            <p className="gallery-subtitle">Veja como levamos cuidado visual diretamente ao local de trabalho</p>
          </div>

          <div className="gallery-container">
            <div className="gallery-main">
              <div className="photo-container">
                <img
                  src={photos[currentPhoto].src || "/placeholder.svg"}
                  alt={photos[currentPhoto].alt}
                  className="gallery-photo"
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <div className="photo-caption">{photos[currentPhoto].caption}</div>
                </div>
              </div>

              {/* Gallery Controls */}
              <div className="gallery-controls">
                <button className="control-btn prev-btn" onClick={prevPhoto} aria-label="Foto anterior">
                  <ChevronLeft size={20} />
                </button>

                <button className="control-btn next-btn" onClick={nextPhoto} aria-label="Próxima foto">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="gallery-thumbnails">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentPhoto ? "active" : ""}`}
                  onClick={() => setCurrentPhoto(index)}
                  aria-label={`Ver foto ${index + 1}`}
                >
                  <img src={photo.src || "/placeholder.svg"} alt={photo.alt} />
                  <div className="thumbnail-overlay"></div>
                </button>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="gallery-indicators">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentPhoto ? "active" : ""}`}
                  onClick={() => setCurrentPhoto(index)}
                  aria-label={`Ir para foto ${index + 1}`}
                >
                  <div className="indicator-progress"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="clients-cta">
          <div className="clients-cta-content">
            <h3>Sua instituição pode ser a próxima!</h3>
            <p>Entre em contato e descubra como podemos cuidar da visão da sua equipe</p>
            <button className="clients-cta-button" onClick={() => window.open("https://wa.me/5511969282386", "_blank")}>
              <Users size={20} />
              <span>Seja Nosso Parceiro</span>
              <div className="clients-button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
