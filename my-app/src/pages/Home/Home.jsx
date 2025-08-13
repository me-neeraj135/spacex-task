import React from 'react'
import '../style/home.css'

const Home = () => {
  return (
    <div>
      <main className="global-container main-content">
        {/* hero-section */}
        <section className="hero-section">
          <div className="content-wrapper">
            {/* hero-content */}

            <div className="hero-content">
              <h1 className="hero-title">
                ПУТЕШЕСТВИЕ
                <span className="subtitle">на красную планету</span>
              </h1>
              <button className="cta-button">Начать путешествие</button>
            </div>

            {/* planet-container */}
            <div className="planet-container">
              <div className="planet mars">
                <div className="planet-glow"></div>
                <div className="rocket-silhouette"></div>
              </div>
            </div>

            {/* status-panel */}

            <div className="stats-panel">
              <div className="stat-item">
                <div className="stat-label">на </div>

                <div className="stat-number">1</div>
                <div className="stat-label">на рынке</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">гарантируем</div>
                <div className="stat-number">50%</div>
                <div className="stat-label">
                  гарантируем
                  <br />
                  безопасность
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">кален за</div>
                <div className="stat-number">2001.</div>
                <div className="stat-label">календарик за</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">дней</div>

                <div className="stat-number">597</div>
                <div className="stat-label">дней</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
