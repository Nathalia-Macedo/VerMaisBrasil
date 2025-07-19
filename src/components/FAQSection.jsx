"use client"

import { useState, useEffect, useRef } from "react"
import { Plus, Minus, MessageCircle, Clock, Users, CreditCard, Gift, FileText, Headphones } from "lucide-react"
import "./FAQSection.css"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set([0]))
  const sectionRef = useRef(null)

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  useEffect(() => {
    const setupAnimations = () => {
      if (!window.gsap || !window.ScrollTrigger) return

      window.gsap.registerPlugin(window.ScrollTrigger)

      // FAQ items animation
      window.gsap.fromTo(
        ".faq-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".faq-grid",
            start: "top 80%",
            end: "bottom 20%",
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

  const faqCategories = [
    {
      title: "Agendamento e Logística",
      icon: Clock,
      color: "#6b7fd7",
      questions: [
        {
          question: "Como a instituição faz para agendar uma visita?",
          answer: "Agendamento via WhatsApp 11 96928-2386",
        },
        {
          question: "Qual o prazo ideal para agendar a visita com antecedência?",
          answer: "15 dias antes",
        },
        {
          question: "Quantos dias dura o atendimento em uma instituição?",
          answer: "O atendimento é rápido, em um dia conseguimos atender até 70 pessoas em diferentes turnos.",
        },
        {
          question: "É possível realizar os atendimentos durante o horário de expediente normal?",
          answer: "Os exames são realizados dentro do período de trabalho uma vez que é um benefício ao trabalhador.",
        },
        {
          question: "Há algum custo para a instituição agendar ou receber a equipe?",
          answer: "Não existe qualquer custo a instituição.",
        },
      ],
    },
    {
      title: "Estrutura e Equipe",
      icon: Users,
      color: "#ffe066",
      questions: [
        {
          question: "Vocês levam toda a estrutura para o local? A equipe precisa de um espaço específico?",
          answer:
            "Montamos toda a estrutura necessária para o exame e demonstração de óculos, precisando apenas de uma sala com mesas e cadeiras.",
        },
        {
          question: "Quantos profissionais participam da ação?",
          answer: "Depende da quantidade de pessoas, em média 3 a 4 funcionários",
        },
        {
          question: "Quais profissionais compõem a equipe. Os profissionais são credenciados?",
          answer:
            "Trabalhamos com técnico em óptica, e optometrista bacharel. Todos nossos profissionais são legalizados.",
        },
      ],
    },
    {
      title: "Custos e Compras",
      icon: CreditCard,
      color: "#6b7fd7",
      questions: [
        {
          question: "O exame de vista é totalmente gratuito mesmo?",
          answer: "Exame gratuito e a receita é entregue ao fim do atendimento",
        },
        {
          question: "Existe algum tipo de cobrança para o colaborador?",
          answer: "Apenas se comprar os óculos, ainda com descontos.",
        },
        {
          question: "A compra dos óculos é obrigatória?",
          answer: "A compra não é obrigatória",
        },
        {
          question: "Qual a média de preços dos óculos oferecidos?",
          answer:
            "O preço em média é de 30% mais barato que em outras óticas e no dia do atendimento cobrimos qualquer orçamento de outros locais.",
        },
        {
          question: "Quais formas de pagamento são aceitas? Há possibilidade de parcelamento?",
          answer: "Pode parcelar no cartão de crédito, crediário próprio ou desconto em folha.",
        },
      ],
    },
    {
      title: "Cortesias e Benefícios",
      icon: Gift,
      color: "#ffe066",
      questions: [
        {
          question: "Todas as instituições recebem brindes ou cortesias? O que está incluído?",
          answer:
            'Sim, oferecemos brindes de acordo com o número de participantes. Para até 70 pessoas, levamos uma air fryer ou cafeteira; acima de 100, um kit de eletrodomésticos; e acima de 300 participantes, uma TV de 32".',
        },
        {
          question: "A escola pode usar as cortesias para rifas ou sorteios?",
          answer: "As cortesias ficam a critério da instituição se deseja realizar rifas, sorteios ou uso interno.",
        },
      ],
    },
    {
      title: "Documentação",
      icon: FileText,
      color: "#6b7fd7",
      questions: [
        {
          question: "A instituição precisa assinar algum termo ou contrato?",
          answer: "Não, apenas agendamos a data com a direção.",
        },
        {
          question: "É necessário enviar lista de funcionários antes do dia da ação?",
          answer: "Sim, lista de quem vai realizar o exame para organização",
        },
        {
          question: "Vocês emitem algum tipo de relatório ou comprovante de atendimento?",
          answer: "Aos familiares podemos fornecer declaração comparecimento (em horas).",
        },
      ],
    },
    {
      title: "Pós-venda e Suporte",
      icon: Headphones,
      color: "#ffe066",
      questions: [
        {
          question: "Em quanto tempo os óculos ficam prontos após a compra?",
          answer: "Os óculos adquiridos são entregues no mesmo local em mãos de 10 a 15 dias após o evento.",
        },
        {
          question: "A instituição recebe suporte caso haja algum problema com os óculos?",
          answer:
            "A garantia dos óculos e do exame são de 1 ano, tendo uma linha de WhatsApp apenas de assistência, sendo suporte online para dúvidas e redes credenciadas para atendimento presencial.",
        },
      ],
    },
  ]

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      {/* Unique Background Design */}
      <div className="faq-background">
        <div className="floating-bubble bubble-1"></div>
        <div className="floating-bubble bubble-2"></div>
        <div className="floating-bubble bubble-3"></div>
        <div className="floating-bubble bubble-4"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <MessageCircle size={20} />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="faq-title">
            Tire suas <span className="faq-title-highlight">dúvidas</span>
            <br />
            sobre nossos serviços
          </h2>
          <p className="faq-subtitle">
            Encontre respostas para as principais questões sobre agendamento, custos, estrutura e muito mais.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <div className="category-header">
                <div className="category-icon" style={{ backgroundColor: category.color }}>
                  <category.icon size={24} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="faq-items">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.has(globalIndex)

                  return (
                    <div key={questionIndex} className={`faq-item ${isOpen ? "open" : ""}`}>
                      <button className="faq-question" onClick={() => toggleItem(globalIndex)}>
                        <span>{faq.question}</span>
                        <div className="faq-icon">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</div>
                      </button>
                      <div className="faq-answer">
                        <div className="faq-answer-content">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="faq-cta">
          <div className="faq-cta-content">
            <h3>Ainda tem dúvidas?</h3>
            <p>Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas</p>
            <button className="faq-cta-button">
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
              <div className="faq-button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
