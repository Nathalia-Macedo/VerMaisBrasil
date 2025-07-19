"use client"

import { useEffect, useRef } from "react"
import {
  CheckCircle,
  Star,
  Shield,
  Heart,
  Users,
  MapPin,
  Gift,
  Zap,
  Eye,
  Building2,
  Phone,
  Calendar,
  Award,
  ArrowRight,
} from "lucide-react"
import "./BenefitsSection.css"

export default function BenefitsSection() {
  const sectionRef = useRef(null)

  const setupAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return

    window.gsap.registerPlugin(window.ScrollTrigger)

    // Benefits cards animation
    window.gsap.fromTo(
      ".benefit-card",
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // How it works steps animation
    window.gsap.fromTo(
      ".process-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".process-grid",
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

  const benefits = [
    {
      icon: Shield,
      title: "100% Gratuito",
      description: "Exames de vista completamente gratuitos para todos os funcionários",
      features: ["Sem custo para instituição", "Sem compromisso de compra", "Receita garantida"],
      color: "yellow",
    },
    {
      icon: MapPin,
      title: "Atendimento no Local",
      description: "Levamos toda estrutura até sua empresa, escola ou instituição",
      features: ["Equipamentos profissionais", "Equipe especializada", "Horário de trabalho"],
      color: "blue",
    },
    {
      icon: Award,
      title: "Até 70% de Desconto",
      description: "Óculos com descontos exclusivos para seus colaboradores",
      features: ["Preços especiais", "Parcelamento facilitado", "Cobrimos orçamentos"],
      color: "yellow",
    },
    {
      icon: Users,
      title: "Equipe Certificada",
      description: "Profissionais legalizados e experientes em saúde visual",
      features: ["Técnicos em óptica", "Optometristas bacharéis", "6 anos de experiência"],
      color: "blue",
    },
    {
      icon: Gift,
      title: "Brindes Exclusivos",
      description: "Cortesias especiais baseadas no número de participantes",
      features: ["Air fryer ou cafeteira", "Kit eletrodomésticos", 'TV 32" para +300 pessoas'],
      color: "yellow",
    },
    {
      icon: Heart,
      title: "Garantia Total",
      description: "Suporte completo com garantia de 1 ano em óculos e exames",
      features: ["Assistência WhatsApp", "Rede credenciada", "Suporte online"],
      color: "blue",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Agendamento",
      description: "Entre em contato via WhatsApp e agende sua visita com 15 dias de antecedência",
      icon: Phone,
      details: ["WhatsApp: 11 96928-2386", "Prazo: 15 dias", "Sem custo"],
    },
    {
      number: "02",
      title: "Preparação",
      description: "Enviamos lista para organização e preparamos toda estrutura necessária",
      icon: Calendar,
      details: ["Lista de participantes", "Sala com mesas e cadeiras", "Organização interna"],
    },
    {
      number: "03",
      title: "Atendimento",
      description: "Nossa equipe realiza os exames no local durante o horário de trabalho",
      icon: Eye,
      details: ["Até 70 pessoas/dia", "Diferentes turnos", "Equipamentos profissionais"],
    },
    {
      number: "04",
      title: "Resultados",
      description: "Receita entregue na hora e óculos disponíveis com desconto especial",
      icon: CheckCircle,
      details: ["Receita imediata", "Desconto até 70%", "Entrega em 10-15 dias"],
    },
  ]

  return (
    <section id="beneficios" className="benefits-section" ref={sectionRef}>
      {/* Background Design - MORE ORBS */}
      <div className="benefits-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
        <div className="floating-orb orb-6"></div>
        <div className="floating-orb orb-7"></div>
        <div className="floating-orb orb-8"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="benefits-container">
        {/* Header */}
        <div className="benefits-header">
          <div className="benefits-badge">
            <Star size={20} />
            <span>Benefícios</span>
          </div>
          <h2 className="benefits-title">
            Por que escolher o <span className="benefits-title-highlight">VERMAISBRASIL</span>?
          </h2>
          <p className="benefits-subtitle">
            Descubra todas as vantagens de ter o melhor programa de saúde visual do Brasil na sua instituição.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`benefit-card ${benefit.color}`}>
              <div className="benefit-icon-wrapper">
                <div className={`benefit-icon ${benefit.color}`}>
                  <benefit.icon size={28} />
                </div>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <div className="benefit-features">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="benefit-feature">
                      <CheckCircle size={14} className={`feature-check ${benefit.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="benefit-glow"></div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div id="como-funciona" className="how-it-works-section">
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <Zap size={24} />
            </div>
            <div className="divider-line"></div>
          </div>

          <div className="how-it-works-header">
            <h3 className="how-it-works-title">Como Funciona</h3>
            <p className="how-it-works-subtitle">
              Processo simples e descomplicado para levar saúde visual até sua equipe
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-header">
                  <div className="process-number">{step.number}</div>
                  <div className="process-icon">
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="process-content">
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                  <div className="process-features">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="process-feature">
                        <CheckCircle size={14} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="process-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="benefits-cta">
          <div className="benefits-cta-content">
            <div className="cta-icon-wrapper">
              <Building2 size={32} />
              <div className="cta-icon-pulse"></div>
            </div>
            <h3>Pronto para transformar a saúde visual da sua equipe?</h3>
            <p>Entre em contato agora e agende uma visita gratuita para sua instituição</p>
            <button className="benefits-cta-button" onClick={handleWhatsAppClick}>
              <Phone size={20} />
              <span>Agendar Visita Gratuita</span>
              <ArrowRight size={18} />
              <div className="cta-button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
