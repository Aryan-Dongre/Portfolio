import { motion } from 'motion/react';
import '../../css files/About.css';

function About() {
    const highlights = [
        {
            number: "01",
            title: "AI & Machine Learning",
            description: "Exploring intelligent models and practical AI applications."
        },
        {
            number: "02",
            title: "Backend Development",
            description: "Building scalable applications, APIs and database systems."
        },
        {
            number: "03",
            title: "Continuous Learning",
            description: "Turning new technologies and ideas into real-world projects."
        }
    ];

    const fadeUp = {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: "easeOut" }
    };

    return (
        <section className="about-section" id="about">
            <div className="about-container">

                {/* Heading section */}
                <motion.div className="about-heading" {...fadeUp}>
                    <span className="section-tag">GET TO KNOW ME</span>

                    <h2>
                        About <span>Me.</span>
                    </h2>

                    <p>
                        A little introduction about my journey,
                        interests and what drives me.
                    </p>
                </motion.div>

                {/* About Content */}
                <div className="about-content">

                    <motion.div className="about-intro" {...fadeUp}>
                        <h3>
                            Building technology with
                            <span> purpose and curiosity.</span>
                        </h3>

                        <p>
                            I'm Aryan Dongre, a B.Tech student specializing
                            in Artificial Intelligence and Data Science.
                            I'm passionate about understanding how technology
                            works and using it to solve real-world problems.
                        </p>

                        <p>
                            My interests include Artificial Intelligence,
                            Machine Learning and Backend Development.
                            I enjoy learning new technologies, experimenting
                            with ideas and building practical applications.
                        </p>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        className="about-highlights"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.18
                                }
                            }
                        }}
                    >
                        {highlights.map((item) => (
                            <motion.div
                                className="about-card"
                                key={item.number}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut"
                                }}
                            >
                                <span className="about-card-number">
                                    {item.number}
                                </span>

                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>

                                <span className="about-card-arrow">↗</span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;