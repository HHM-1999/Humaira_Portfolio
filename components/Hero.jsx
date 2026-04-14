export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-center">
        {/* 
        <div className="welcome-pill mt-5">
          ⭐ Welcome to my universe
        </div> */}

        <h1 className="hero-title">
          <span className="gradient-text">React and Next js Developer</span>
          <br />
          <span className="text-white">& Creative </span>
          <span className="gradient-text">Coder</span>
        </h1>

        <p className="hero-description mt-4">
          I craft dynamic, engaging web experiences and passionate about clean code and seamless user interactions.
          {/* I craft <span className="highlight">beautiful, interactive</span> web experiences
          with modern technologies.
          <br />
          Passionate about clean code, stunning designs,
          and seamless user experiences. */}
        </p>

        <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn primary-btn">
            🚀 Explore My Universe
          </a>

          <a href="#" className="btn secondary-btn">
            📄 Download CV
          </a>
        </div>

      </div>
    </section>
  )
}