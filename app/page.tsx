"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeBentoSlide, setActiveBentoSlide] = useState(0);

  // Toggle Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Data: Tutors
  const tutors = [
    { name: "Teacher Aqil", role: "Tutor", img: "aqil.jpg", desc: "Known for his patient approach and engaging lessons, helping students build strong foundational skills and confidence." },
    { name: "Teacher Christo", role: "Tutor", img: "christo.jpg", desc: "Inspires a love for language and guides students to excel in comprehension, composition, and communication." },
    { name: "Teacher Asyraaf", role: "Lead Tutor", img: "saj-tutor.jpg", desc: "Passionate about making Math enjoyable and accessible, he helps students master challenging concepts and problem-solving strategies." },
    { name: "Teacher Boon Kai", role: "Tutor", img: "boonkai.jpg", desc: "An inspiring educator who bridges the gap between abstract concepts and real-world application, making Math and Science intuitive." },
    { name: "Teacher Hui Jun", role: "Tutor", img: "huju.jpg", desc: "Specializes in fostering creative thinking and problem-solving skills in young learners across STEM subjects." },
    { name: "Teacher Wey Zhih", role: "Tutor", img: "weyzhih.jpg", desc: "A versatile mentor who adapts his teaching style to each student's unique needs, fostering confidence in both Languages and Mathematics." },
    { name: "Teacher Reuben", role: "Tutor", img: "reuben.jpg", desc: "Specializes in equipping students with critical thinking frameworks and exam-smart strategies that apply across all major subjects." },
    { name: "Teacher Leshan", role: "Tutor", img: "leshan.jpg", desc: "Brings a dynamic energy to the classroom, using interactive methods to spark curiosity and drive academic excellence in every student." },
  ];

  // Data: Testimonials
  const testimonials = [
    { name: "Parent of Muhammad Rayn", role: "Math Student", quote: "Mr. Asyraaf made a wonderful difference in Rayn’s confidence and understanding of Maths. His patience, encouragement, and genuine care helped Rayn enjoy learning again. We’re truly grateful for his dedication." },
    { name: "Parent", role: "Math Tutor Review", quote: "Aqil's clear, loud voice keeps everyone on task. He checks students' sums, guides, and explains, even listing steps for 2-digit multiplication. He calls on students for whiteboard answers and coaches those who struggle." },
    { name: "Parent", role: "PSLE Maths Tuition", quote: "My daughter started tuition with Mr. Asyraaf just 10 weeks before PSLE. I saw her confidence grow and her prelim results improve significantly, going from failing Maths to AL5. He's a kind, helpful, and patient teacher, and the small group classes are always fun." },
    { name: "Fahmy Majid (Parent of Yasmine)", role: "Primary School Tuition", quote: "Aqil is patient, responsible, and highly committed. He explains concepts clearly, adjusts to Yasmine’s pace, and builds her confidence. His lessons are structured yet engaging, leading to consistent improvement. We truly appreciate his positive impact." },
    { name: "Stephanie", role: "PSLE Math Tutor", quote: "Asyraaf's guidance led to our daughter scoring an AL1 in PSLE Math. He breaks down complex concepts, making them easy to understand. Our daughter enjoys his lessons. He is patient, friendly, and connects well with students. Highly recommend him for Math tutoring." },
  ];

  // Data: Bento Slides
  const bentoImages = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

  // Pastel Colors for Testimonials
  const pastelColors = [
    '#FFD1DC', '#FFC0CB', '#FFB6C1', '#F8BBD0', '#E1BEE7',
    '#FFF9C4', '#FFFDE7', '#FFECB3', '#FFF176', '#FFEB3B',
    '#F0FFF0', '#F5FFFA', '#F0FFFF', '#E0FFE0', '#D4EDDA',
    '#ADD8E6', '#B0E0E6', '#87CEEB', '#B3E5FC', '#E1F5FE',
    '#E0BBE4', '#DCCFF5', '#C3B1E1', '#CCEEFF', '#FCE4EC',
    '#FDFD96', '#FFFACD', '#FFFFE0', '#FFFDD0', '#FAEBD7',
    '#FFE4B5', '#FFDAB9', '#FDD7E4', '#FFCCCB', '#FFDAB9'
  ];

  // Helper: Shade Color
  function shadeColor(color: string, percent: number) {
    const f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00ff, B = f & 0x0000ff;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

  // Effect: Testimonial Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Effect: Bento Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBentoSlide((prev) => (prev + 1) % bentoImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bentoImages.length]);

  // Determine Testimonial Styles dynamically
  const getTestimonialStyle = (index: number) => {
    const relativePos = (index - activeTestimonialIndex + testimonials.length) % testimonials.length;
    // Pick a stable random color based on index
    const colorIndex = index % pastelColors.length;
    const baseColor = pastelColors[colorIndex];

    if (relativePos === 0) return { className: "active", style: { backgroundColor: baseColor } };
    if (relativePos === 1) return { className: "behind-1", style: { backgroundColor: shadeColor(baseColor, -0.1) } };
    if (relativePos === 2) return { className: "behind-2", style: { backgroundColor: shadeColor(baseColor, -0.2) } };
    return { className: "hidden", style: {} };
  };

  return (
    <main>
      {/* Logo Fixed */}
      <a href="#" className="logo-fixed">
        <img src="/images/logo/scholars-loft-logo.png" alt="Scholar's Loft Logo" className="logo-img" />
        <span className="logo-text">Scholar&apos;s Loft</span>
      </a>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFQsT-dXQFVY3TJ-2kW3J1jwdxlHzCb42B8HgPzqkbq8aiTg/viewform?usp=dialog" target="_blank" className="register-fixed btn btn-primary">Register</a>

      {/* Floating Nav */}
      <div className="floating-nav-pill">
        <nav className="navigation">
          <button 
            className={`hamburger ${isMenuOpen ? "active" : ""}`} 
            id="hamburger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#teachers" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tutors</a></li>
              <li><a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="page-content">
        {/* Hero Section */}
        <section id="hero">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">STEM × Language Bootcamp · Primary 5–6</span>
              <h1>Empower Your Child for the New School Year</h1>
              <p className="hero-sub">
                A 3-day bootcamp blending Science, Math, and English to build a strong academic foundation, led by expert tutors from top institutions.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Register Interest</a>
              </div>
              <p className="hero-note">26–28 December 2025 · Limited slots available</p>
            </div>
          </div>
        </section>

        {/* About Section (Bento Grid) */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2>A Better Way to Start the School Year</h2>
              <p>
                Scholar&apos;s Loft offers a specialized bootcamp designed to make your child feel confident and prepared for the academic year ahead.
              </p>
            </div>

            <div className="bento-grid">
              {/* Main About Text */}
              <div className="bento-card bento-large">
                <h3>More Than Just Tuition</h3>
                <p>
                  We focus on deep understanding, not just memorization. Our goal is to help your child build strong foundations, sharpen problem-solving skills, and develop effective learning habits.
                </p>
                <p>
                  Slots are intentionally kept limited to maintain quality and individual attention, so each student gets meaningful guidance and personalised feedback.
                </p>
              </div>

              {/* Feature 1 */}
              <div className="bento-card bento-item">
                <div className="bento-icon">🧠</div>
                <h3>Structured Mastery</h3>
                <p>We use scaffolded techniques and heuristics to break down complex Science and Math problems into logical, manageable steps.</p>
              </div>

              {/* Image Card (Slideshow) */}
              <div className="bento-card bento-image-card">
                <div className="bento-slideshow">
                  {bentoImages.map((img, index) => (
                    <img 
                      key={index}
                      src={`/images/about-us/${img}`} 
                      alt={`Student learning ${index + 1}`} 
                      className={`slide ${index === activeBentoSlide ? 'active' : ''}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bento-card bento-item">
                <div className="bento-icon">🗣️</div>
                <h3>Language Skills</h3>
                <p>Targeted English enrichment for better comprehension and writing.</p>
              </div>

              {/* Feature 3 */}
              <div className="bento-card bento-item">
                <div className="bento-icon">🎯</div>
                <h3>Goal Setting</h3>
                <p>Practical strategies to help students take ownership of their learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section id="teachers" className="section mesh-bg">
          <div className="container">
            <div className="section-header">
              <h2>Meet Our Expert Tutors</h2>
              <p>
                Our team consists of passionate educators with years of experience, all graduates of <span className="highlight-text">Raffles Institution</span> and <span className="highlight-text">top local universities</span>.
              </p>
            </div>
          </div>
          <div className="tutor-slider">
            <div className="tutor-track">
              {/* Original List */}
              {tutors.map((tutor, i) => (
                <div className="tutor-card" key={i}>
                  <div className="tutor-photo">
                    <img src={`/images/tutors/${tutor.img}`} alt={tutor.name} />
                  </div>
                  <h3>{tutor.name}</h3>
                  <p className="tutor-role">{tutor.role}</p>
                  <p>{tutor.desc}</p>
                </div>
              ))}
              {/* Duplicate List for Infinite Scroll */}
              {tutors.map((tutor, i) => (
                <div className="tutor-card" key={`dup-${i}`}>
                  <div className="tutor-photo">
                    <img src={`/images/tutors/${tutor.img}`} alt={tutor.name} />
                  </div>
                  <h3>{tutor.name}</h3>
                  <p className="tutor-role">{tutor.role}</p>
                  <p>{tutor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated-style Testimonials Section */}
        <section id="testimonials" className="section mesh-bg">
          <div className="container testimonial-shell">
            <div className="testimonial-left">
              <div className="testimonial-image-stack">
                {testimonials.map((t, i) => {
                  const { className, style } = getTestimonialStyle(i);
                  return (
                    <div
                      key={i}
                      className={`testimonial-avatar ${className}`}
                      style={style}
                    >
                      {t.name.charAt(0)}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="testimonial-right">
              <h2>What Parents Say</h2>
              {/* Key change triggers animation restart if managed by CSS animations, 
                  but simple state switch is often enough for React */}
              <div className="testimonial-text animating" key={activeTestimonialIndex}>
                <p className="testimonial-quote">{testimonials[activeTestimonialIndex].quote}</p>
                <p className="testimonial-name">{testimonials[activeTestimonialIndex].name}</p>
                <p className="testimonial-role">{testimonials[activeTestimonialIndex].role}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer / Contact Section */}
      <footer id="contact" className="footer">
        <div className="container footer-container">
          
          {/* Main Grid */}
          <div className="footer-nav-grid">
            {/* Column 1: Brand & Desc */}
            <div className="footer-col-brand">
              <div className="brand-lockup">
                <img src="/images/logo/scholars-loft-logo.png" alt="Scholar's Loft" className="footer-logo-icon" />
                <span className="brand-name">Scholar&apos;s Loft</span>
              </div>
              <p className="footer-mission">
                Redefining academic excellence through holistic STEM & Language mastery.
              </p>
            </div>

            {/* Column 2: Explore */}
            <div className="footer-col-links">
              <h5 className="col-title">Explore</h5>
              <ul className="footer-list">
                <li><a href="#about">Methodology</a></li>
                <li><a href="#teachers">Our Tutors</a></li>
                <li><a href="#testimonials">Success Stories</a></li>
              </ul>
            </div>

            {/* Column 4: CTA */}
            <div className="footer-col-cta">
              <h5 className="col-title">Join the Intake</h5>
              <p className="cta-desc">Secure your child&apos;s spot for the upcoming bootcamp.</p>
              
              <div className="qr-wrapper qr-box-styled">
                <img src="/images/qr-code.png" alt="Registration QR" style={{ width: "100%", height: "100%", display: "block" }} />
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFQsT-dXQFVY3TJ-2kW3J1jwdxlHzCb42B8HgPzqkbq8aiTg/viewform?usp=dialog" target="_blank" className="footer-btn-arrow">
                Register Now <span className="arrow">→</span>
              </a>
              <div className="footer-contact-line mt-2">
                <span>Contact Us at:</span> <a href="mailto:loftofscholars@gmail.com">loftofscholars@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mega Text Bottom (SVG) */}
        <div className="footer-bottom-mega">
          <svg className="mega-text-svg" viewBox="0 0 1500 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fill="#1a1a1a" fontSize="144">SCHOLAR&apos;S LOFT</text>
          </svg>
        </div>

        <div className="footer-copyright-bar">
          <span>&copy; 2025 Scholar&apos;s Loft Tuition. All rights reserved.</span>
          <span>Singapore</span>
        </div>
      </footer>
    </main>
  );
}
