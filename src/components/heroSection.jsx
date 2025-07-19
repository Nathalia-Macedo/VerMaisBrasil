// "use client"

// import { useEffect, useRef } from "react"
// import { ArrowRight, Sparkles } from "lucide-react"
// import "./heroSection.css"

// export default function HeroSection() {
//   const heroRef = useRef(null)

//   useEffect(() => {
//     // GSAP animations
//     const setupGSAP = () => {
//       if (!window.gsap) return

//       window.gsap.registerPlugin(window.ScrollTrigger)

//       // Hero content animation
//       window.gsap.fromTo(
//         ".hero-content-left > *",
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//       )

//       // Video animation
//       window.gsap.fromTo(
//         ".video-wrapper",
//         { y: 80, opacity: 0, scale: 0.9 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           delay: 0.8,
//           ease: "back.out(1.7)",
//         },
//       )
//     }

//     // Load GSAP
//     if (!window.gsap) {
//       const gsapScript = document.createElement("script")
//       gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
//       gsapScript.onload = () => {
//         const scrollTriggerScript = document.createElement("script")
//         scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
//         scrollTriggerScript.onload = setupGSAP
//         document.head.appendChild(scrollTriggerScript)
//       }
//       document.head.appendChild(gsapScript)
//     } else {
//       setupGSAP()
//     }
//   }, [])

//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/5511969282386", "_blank")
//   }

//   return (
//     <section className="hero-section-modern" ref={heroRef}>
//       {/* Static Glassmorphism Background */}
//       <div className="hero-background-glass">
//         <div className="glass-panel glass-1"></div>
//         <div className="glass-panel glass-2"></div>
//         <div className="glass-panel glass-3"></div>
//       </div>

//       <div className="hero-container-modern">
//         <div className="hero-grid-modern">
//           {/* Left Content */}
//           <div className="hero-content-left">
//             {/* Badge */}
//             <div className="hero-badge-modern">
//               <Sparkles size={16} />
//               <span>Ver Mais Brasil</span>
//             </div>

//             {/* Main Title */}
//             <h1 className="hero-title-modern">
//               Cuidamos da <span className="title-gradient-modern">visão</span> de quem move o Brasil
//             </h1>

//             {/* Subtitle */}
//             <p className="hero-subtitle-modern">
//               Exames <strong>100% gratuitos</strong> e óculos com <strong>até 70% de desconto</strong> para funcionários
//               de escolas, empresas e instituições em todo o país.
//             </p>

//             {/* CTA Button */}
//             <div className="hero-cta-modern">
//               <button className="cta-primary-hero" onClick={handleWhatsAppClick}>
//                 <span>Agendar Exame Gratuito</span>
//                 <ArrowRight size={20} />
//                 <div className="button-glow-hero"></div>
//                 <div className="button-shine"></div>
//               </button>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="hero-visual-right">
//             {/* Video Container */}
//             <div className="video-container">
//               <div className="video-wrapper">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="hero-video"
//                   poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                 >
//                   <source
//                     src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
//                     type="video/mp4"
//                   />
//                   {/* Fallback image */}
//                   <img
//                     src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                     alt="Exame de vista profissional"
//                     className="video-fallback"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gradient Transition */}
//       <div className="hero-to-about-gradient"></div>
//     </section>
//   )
// }




"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import "./heroSection.css"
import video from '../images/oculos.mp4'
export default function HeroSection() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    // GSAP animations
    const setupGSAP = () => {
      if (!window.gsap) return

      window.gsap.registerPlugin(window.ScrollTrigger)

      // Hero content animation
      window.gsap.fromTo(
        ".hero-content-left > *",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
      )

      // Video animation
      window.gsap.fromTo(
        ".video-wrapper",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.8,
          ease: "back.out(1.7)",
        },
      )
    }

    // Video configuration
    const setupVideo = () => {
      if (videoRef.current) {
        const video = videoRef.current
        video.muted = true
        video.volume = 0

        // Force muted state
        video.addEventListener("volumechange", () => {
          if (!video.muted) {
            video.muted = true
            video.volume = 0
          }
        })

        // Ensure autoplay
        video.play().catch(console.log)
      }
    }

    // Load GSAP
    if (!window.gsap) {
      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      gsapScript.onload = () => {
        const scrollTriggerScript = document.createElement("script")
        scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        scrollTriggerScript.onload = setupGSAP
        document.head.appendChild(scrollTriggerScript)
      }
      document.head.appendChild(gsapScript)
    } else {
      setupGSAP()
    }

    // Setup video after component mounts
    setupVideo()
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511969282386", "_blank")
  }

  return (
    <section className="hero-section-modern" ref={heroRef}>
      {/* Static Glassmorphism Background */}
      <div className="hero-background-glass">
        <div className="glass-panel glass-1"></div>
        <div className="glass-panel glass-2"></div>
        <div className="glass-panel glass-3"></div>
      </div>

      <div className="hero-container-modern">
        <div className="hero-grid-modern">
          {/* Left Content */}
          <div className="hero-content-left">
            {/* Badge */}
            <div className="hero-badge-modern">
              <Sparkles size={16} />
              <span>Ver Mais Brasil</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title-modern">
              Cuidamos da <span className="title-gradient-modern">visão</span> de quem move o Brasil
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle-modern">
              Exames <strong>100% gratuitos</strong> e óculos com <strong>até 70% de desconto</strong> para funcionários
              de escolas, empresas e instituições em todo o país.
            </p>

            {/* CTA Button */}
            <div className="hero-cta-modern">
              <button className="cta-primary-hero" onClick={handleWhatsAppClick}>
                <span>Agendar Exame Gratuito</span>
                <ArrowRight size={20} />
                <div className="button-glow-hero"></div>
                <div className="button-shine"></div>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual-right">
            {/* Video Container */}
            <div className="video-container">
              <div className="video-wrapper">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  className="hero-video"
                  poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  onContextMenu={(e) => e.preventDefault()}
                  onVolumeChange={(e) => {
                    e.target.muted = true
                    e.target.volume = 0
                  }}
                  onLoadedData={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = true
                      videoRef.current.volume = 0
                    }
                  }}
                >
                  <source
                    src={video}
                    type="video/mp4"
                  />
                  {/* Fallback image */}
                  
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Transition */}
      <div className="hero-to-about-gradient"></div>
    </section>
  )
}
