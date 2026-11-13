import { motion } from 'motion/react';
import '../../css files/Skills.css';

function Skills() {

    const skills = [
        {
            title: "AI & Machine Learning",
            icon: "fa-brain",
            skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"]
        },
        {
            title: "Backend Development",
            icon: "fa-layer-group",
            skills: ["Flask", "Rest APIs", "PostgreSQL", "MySQL", "MongoDB", "Flask-WTF"]
        },
        {
            title: "Frontend Development",
            icon: "fa-code",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Data & Analytics",
            icon: "fa-chart-column",
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
        },
        {
            title: "Tools & Cloud ",
            icon: "fa-cloud",
            skills: ["Git", "GitHub", "Azure", "Vs Code"]
        },
        {
            title: "Other Technologies",
            icon: "fa-cubes",
            skills: ["Supabase", "n8n"]
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="skills-section" id="skills">

            <motion.div
                className="skills-heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="skills-eyebrow">TECHNICAL SKILLS</span>

                <h2>
                    My Technical <span>Skill Set</span>
                </h2>

                <p>
                    A curated stack of technologies I use to build,
                    train and deploy real-world solutions.
                </p>
            </motion.div>

            <div className="skills-layout">

                <motion.div
                    className="skills-intro"
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="skills-orbit-line"></div>

                    <i className="fas fa-code skills-intro-icon skills-intro-icon-left"></i>

                    <h3>
                        My <span>Tech Stack</span>
                    </h3>

                    <p>
                        Tools and technologies I work with across
                        AI, data and full-stack development.
                    </p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12
                            }
                        }
                    }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            className="skill-card"
                            key={skill.title}
                            variants={cardVariants}
                        >

                            <div className="skill-icon">
                                <i className={`fas ${skill.icon}`}></i>
                            </div>

                            <h3>{skill.title}</h3>

                            <div className="skill-tags">
                                {skill.skills.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Skills;