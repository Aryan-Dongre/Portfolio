import '../../css files/Hero.css';
import HeroVisual from './HeroVisual';

function Hero() {
    return (
        <section className="home-hero" id="home">

            {/* Left Content */}
            <div className="home-content">

                <div className="home-badge">
                    <span className="status-dot"></span>
                    <span>AI Engineer</span>
                    <span>•</span>
                    <span>Backend Developer</span>
                    <span>•</span>
                    <span>B.Tech (AI & DS)</span>
                </div>

                <h1 className="home-title">
                    I Build Intelligent <br />
                    Systems That Solve <br />
                    <span>Real Problems.</span>
                </h1>

                <div className="home-specializations">
                    <span>AI Engineering</span>
                    <span>Machine Learning</span>
                    <span>Backend Development</span>
                    <span>Full-Stack Development</span>
                </div>

                <p className="home-description">
                    I'm Aryan Dongre, a B.Tech (AI & Data Science) student passionate
                    about turning data, models and ideas into scalable, real-world
                    applications using AI, ML and robust backend systems.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="home-btn home-btn-primary">
                        🚀 Explore My Work <span>→</span>
                    </a>

                    <a
                        href="Documentation/Aryan_Dongre_Resume.pdf"
                        download
                        className="home-btn home-btn-secondary"
                    >
                        ↓ Download Resume
                    </a>
                </div>

            </div>

            {/* Right Content */}
            <div className="home-visual">
                <HeroVisual />
            </div>

        </section>
    );
}

export default Hero;