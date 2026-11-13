function HeroVisual() {

    const technology = [
        "Python",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "PostgreSQL",
        "Flask"
    ];

    return (
        <div className="visual-container">
            <div className="visual-glow"></div>

            {/* Transparent AI Globe */}
            <div className="globe-container">
                <div className="globe-sphere">
                    <div className="globe-grid"></div>
                </div>
            </div>

            {/* Orbital Rings */}
            <div className="brain-orbit orbit-one"></div>
            <div className="brain-orbit orbit-two"></div>
            <div className="brain-orbit orbit-three"></div>

            {/* Glowing Orbit Particles */}
            <span className="orbit-particle particle-one"></span>
            <span className="orbit-particle particle-two"></span>
            <span className="orbit-particle particle-three"></span>
            <span className="orbit-particle particle-four"></span>

            {/* AI Brain */}
            <div className="brain-image-wrapper">
                <img
                    src={`${import.meta.env.BASE_URL}assets/ai-brain.png`}
                    alt="Glowing futuristic artificial intelligence brain"
                    className="ai-brain-image"
                />
            </div>

            {/* Technology Labels*/}
            <div className="technology-labels">
                {technology.map((technology, index)=>(
                    <span className={`tech-label tech-label-${index+1}`}
                     key={technology}>{technology}</span>
                ))}
            </div>
        </div>
    );
}

export default HeroVisual;