import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectData';
import '../../css files/project.css';

function ProjectsPreview() {

    const BASE_URL = import.meta.env.BASE_URL;
    const featuredProjects = projects.slice(0, 3);

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="projects-preview-section" id="projects">
            <div className="projects-preview-container">

                <motion.div
                    className="projects-preview-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <span>MY WORK</span>
                    <h1>Selected Projects.</h1>
                    <p>
                        A selection of projects I've built across AI,
                        machine learning, and full-stack development.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-preview-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.18
                            }
                        }
                    }}
                >

                    {featuredProjects.map((project) => (
                        <motion.article
                            className="preview-card"
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.25 }
                            }}
                        >

                            <div className="preview-image">
                                <img
                                    src={`${BASE_URL}${project.mainImage.src}`}
                                    alt={project.mainImage.label}
                                />
                            </div>

                            <div className="preview-details">

                                <span className="preview-category">
                                    {project.category}
                                </span>

                                <h2>{project.name}</h2>

                                <h3>{project.tagline}</h3>

                                <p>{project.description}</p>

                                <div className="preview-tech-stack">
                                    {project.stack.map((tech) => (
                                        <span key={tech.name}>
                                            <i className={tech.icon}></i>
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="preview-actions">

                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="preview-demo-btn"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Demo
                                        </a>
                                    )}

                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="preview-github-btn"
                                        >
                                            <i className="fab fa-github"></i>
                                            GitHub
                                        </a>
                                    )}

                                </div>

                            </div>
                        </motion.article>
                    ))}

                </motion.div>

                <motion.div
                    className="explore-projects"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link to="/projects" className="explore-projects-btn">
                        Explore All Projects
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

export default ProjectsPreview;