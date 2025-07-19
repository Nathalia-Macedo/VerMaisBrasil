"use client"

import { useEffect, useRef } from "react"
import {
  MapPin,
  Heart,
  Building2,
  GraduationCap,
  Shield,
  Eye,
  Calendar,
  Target,
  Globe,
  CheckCircle,
  Star,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react"
import "./AboutSection.css"
import apae from "../images/apae.png"
import adventista from "../images/adventista.png"
import jv from "../images/image-removebg-preview (37).png"
import ama from "../images/ama.png"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const cardsRef = useRef(null)
  const carouselRef = useRef(null)

  const clients = [
    { name: "Associação Juliano Varela", logo: jv },
    { name: "APAE", logo: apae },
    { name: "Rede Adventista", logo: adventista },
    { name: "Associação de Amigos dos Autistas", logo: ama },
    { name: "Universidade", logo: "/placeholder.svg?height=60&width=120&text=Universidade" },
    { name: "Empresa Tech", logo: "/placeholder.svg?height=60&width=120&text=Tech+Corp" },
    { name: "ONG Visão", logo: "/placeholder.svg?height=60&width=120&text=ONG+Visão" },
    { name: "Colégio Particular", logo: "/placeholder.svg?height=60&width=120&text=Colégio" },
  ]

  const setupAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return

    window.gsap.registerPlugin(window.ScrollTrigger)

    // Carousel animation
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const logos = carousel.querySelectorAll(".client-logo")

      window.gsap.set(logos, { x: (i) => i * 180 })

      window.gsap.to(logos, {
        x: "-=1440",
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: window.gsap.utils.unitize((x) => Number.parseFloat(x) % 1440),
        },
      })
    }

    // Stats animation with stagger
    if (statsRef.current) {
      window.gsap.fromTo(
        ".stat-card-new",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Mission cards animation
    if (cardsRef.current) {
      window.gsap.fromTo(
        ".mission-card",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Services cards animation
    window.gsap.fromTo(
      ".service-card-modern",
      { y: 80, opacity: 0, rotateX: 45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid-modern",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }

  useEffect(() => {
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511969282386", "_blank")
  }

  const stats = [
    {
      number: "6+",
      label: "Anos de Experiência",
      icon: Calendar,
      color: "yellow",
      description: "Transformando vidas",
    },
    {
      number: "5",
      label: "Estados Atendidos",
      icon: MapPin,
      color: "blue",
      description: "Cobertura nacional",
    },
    {
      number: "1000+",
      label: "Instituições Parceiras",
      icon: Building2,
      color: "yellow",
      description: "Confiança comprovada",
    },
    {
      number: "50k+",
      label: "Exames Realizados",
      icon: Eye,
      color: "blue",
      description: "Vidas impactadas",
    },
  ]

  const services = [
    {
      icon: GraduationCap,
      title: "Escolas",
      description: "Cuidamos da visão de educadores e funcionários que formam o futuro do Brasil",
      features: ["Ensino público", "Escolas privadas", "Universidades"],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "blue",
    },
    {
      icon: Building2,
      title: "Empresas",
      description: "Parcerias corporativas para o bem-estar visual dos colaboradores",
      features: ["Pequenas empresas", "Corporações", "Startups"],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Órgãos Públicos",
      description: "Convênios com prefeituras e governo para servidores públicos",
      features: ["Prefeituras", "Estado", "Federal"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "blue",
    },
    {
      icon: Heart,
      title: "Instituições Sociais",
      description: "Apoio a organizações que cuidam de quem mais precisa",
      features: ["APAEs", "ONGs", "Asilos"],
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "yellow",
    },
  ]

  return (
    <section id="quem-somos" className="about-section-new">
      <div className="about-container-new">
        {/* Header Section */}
        <div className="about-header-new">
          <div className="section-badge-new">
            <Eye size={20} />
            <span>Quem Somos</span>
          </div>

          <h2 className="about-title-new">
            <span className="title-highlight-new">Ver Mais Brasil</span>
            <br />
            Transformando vidas através da visão
          </h2>

          <p className="about-subtitle-new">
            Há 6 anos promovendo saúde visual e bem-estar para profissionais em todo o Brasil, conectando pessoas com a
            oportunidade de enxergar melhor e viver com mais qualidade.
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="clients-section">
          <h3 className="clients-title">Nossos Parceiros</h3>
          <div className="carousel-container">
            <div className="carousel-track" ref={carouselRef}>
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="client-logo">
                  <img src={client.logo || "/placeholder.svg"} alt={client.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Modern Cards */}
        <div className="stats-grid-new" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-new">
              <div className="stat-card-inner">
                <div className={`stat-icon-new ${stat.color}`}>
                  <stat.icon size={28} />
                </div>
                <div className="stat-content">
                  <div className="stat-number-new">{stat.number}</div>
                  <div className="stat-label-new">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Cards - Horizontal Layout */}
        <div className="mission-section" ref={cardsRef}>
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon yellow">
                <Target size={32} />
              </div>
              <div className="mission-content">
                <h3 className="mission-title">Nossa Missão</h3>
                <p className="mission-subtitle">Democratizar o acesso à saúde visual no Brasil</p>
              </div>
            </div>
            <div className="mission-features">
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon yellow" />
                <span>Exames 100% gratuitos para todos</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon yellow" />
                <span>Óculos com até 70% de desconto</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={16} className="feature-icon yellow" />
                <span>Atendimento no local de trabalho</span>
              </div>
            </div>
          </div>

          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon blue">
                <Globe size={32} />
              </div>
              <div className="mission-content">
                <h3 className="mission-title">Nossa Cobertura</h3>
                <p className="mission-subtitle">Todo o Brasil com foco estratégico</p>
              </div>
            </div>
            <div className="mission-features">
              <div className="feature-item">
                <Star size={16} className="feature-icon blue" />
                <span>São Paulo (sede principal)</span>
              </div>
              <div className="feature-item">
                <Star size={16} className="feature-icon blue" />
                <span>Rio de Janeiro e Minas Gerais</span>
              </div>
              <div className="feature-item">
                <Star size={16} className="feature-icon blue" />
                <span>Paraná e Santa Catarina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services - Modern Grid Layout */}
        <div className="services-section-new">
          <div className="services-header">
            <h3 className="services-title-new">Onde Atuamos</h3>
            <p className="services-subtitle">Levamos cuidado visual para quem constrói o Brasil</p>
          </div>

          <div className="services-grid-modern">
            {services.map((service, index) => (
              <div key={index} className={`service-card-modern ${service.color}`}>
                <div className="service-image">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  <div className="service-overlay">
                    <div className={`service-icon-modern ${service.color}`}>
                      <service.icon size={32} />
                    </div>
                  </div>
                </div>
                <div className="service-content-modern">
                  <h4 className="service-title-modern">{service.title}</h4>
                  <p className="service-description-modern">{service.description}</p>
                  <div className="service-features-modern">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className={`service-tag-modern ${service.color}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Redesigned with Dynamic Colors */}
        <div className="cta-section-dynamic">
          <div className="cta-background-effects">
            <div className="cta-gradient-orb orb-1"></div>
            <div className="cta-gradient-orb orb-2"></div>
            <div className="cta-gradient-orb orb-3"></div>
          </div>

          <div className="cta-grid-dynamic">
            <div className="cta-content-dynamic">
              <div className="cta-badge-dynamic">
                <Zap size={16} />
                <span>Pronto para começar?</span>
                <div className="badge-shimmer"></div>
              </div>
              <h3 className="cta-title-dynamic">
                Transforme a <span className="cta-highlight-dynamic">visão</span> da sua equipe
              </h3>
              <p className="cta-description-dynamic">
                Entre em contato conosco e descubra como podemos levar saúde visual para sua instituição de forma
                gratuita e sem compromisso.
              </p>
              <div className="cta-features-dynamic">
                <div className="cta-feature-dynamic">
                  <CheckCircle size={16} />
                  <span>Sem custo para instituição</span>
                </div>
                <div className="cta-feature-dynamic">
                  <CheckCircle size={16} />
                  <span>Profissionais certificados</span>
                </div>
                <div className="cta-feature-dynamic">
                  <CheckCircle size={16} />
                  <span>Atendimento no local</span>
                </div>
              </div>
            </div>

            <div className="cta-actions-dynamic">
              <div className="cta-card-dynamic primary-dynamic">
                <div className="cta-card-header-dynamic">
                  <div className="cta-icon-wrapper primary-icon">
                    <Phone size={24} />
                    <div className="icon-pulse"></div>
                  </div>
                  <div>
                    <h4>Fale Conosco</h4>
                    <p>Resposta imediata</p>
                  </div>
                </div>
                <button className="cta-btn-primary-dynamic" onClick={handleWhatsAppClick}>
                  <span>WhatsApp</span>
                  <ArrowRight size={18} />
                  <div className="btn-gradient-bg"></div>
                  <div className="btn-shine-effect"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
