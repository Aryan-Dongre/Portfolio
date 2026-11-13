import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projectData';
import '../../css files/project.css';

// Project Animation Variants
const projectVariants = {
    hidden: {
        opacity: 0,
        y: 45
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};


// Individual Project Card
function ProjectCard({ project }) {

    const [showAllImages, setShowAllImages] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const allImages = [project.mainImage, ...project.gallery];

    const openImage = (index) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % allImages.length);
    };

    const previousImage = () => {
        setSelectedImage((prev) =>
            (prev - 1 + allImages.length) % allImages.length
        );
    };

    // Image Modal Keyboard Controls
    // Image Modal Keyboard Controls
    useEffect(() => {
        if (selectedImage === null) return;

        const imageCount = allImages.length;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }

            if (event.key === 'ArrowRight') {
                setSelectedImage((prev) => (prev + 1) % imageCount);
            }

            if (event.key === 'ArrowLeft') {
                setSelectedImage((prev) =>
                    (prev - 1 + imageCount) % imageCount
                );
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedImage, allImages.length]);

    const visibleImages = showAllImages
        ? project.gallery
        : project.gallery.slice(0, 4);


    return (
        <motion.article
            className="detailed-project-card"
            id={project.id}
            variants={projectVariants}
        >

            {/* Project Header */}
            <div className="detailed-project-header">

                <div className="project-number">
                    <span>{project.index}</span>
                    <span>{project.category}</span>
                </div>

                <div className="project-title">
                    <h2>{project.name}</h2>
                    <h3>{project.tagline}</h3>
                    <p>{project.description}</p>
                </div>

            </div>


            {/* Main Screenshot */}
            <div
                className="detailed-project-image clickable-image"
                onClick={() => openImage(0)}
            >
                <img
                    src={`/${project.mainImage.src}`}
                    alt={project.mainImage.label}
                />

                <span className="image-zoom-icon">
                    <i className="fas fa-expand"></i>
                </span>
            </div>


            {/* Project Information */}
            <div className="detailed-project-content">

                {/* Project Overview */}
                <div className="project-overview">

                    <div className="project-info">
                        <span>MY ROLE</span>
                        <h4>{project.role}</h4>
                    </div>

                    <div className="project-info">
                        <span>PROJECT TYPE</span>
                        <h4>{project.type}</h4>
                    </div>

                </div>


                {/* Technology Stack */}
                <div className="project-section">

                    <h3>Technology Stack</h3>

                    <div className="detailed-tech-stack">
                        {project.stack.map((tech) => (
                            <span key={tech.name}>
                                <i className={tech.icon}></i>
                                {tech.name}
                            </span>
                        ))}
                    </div>

                </div>


                {/* Key Features */}
                <div className="project-section">

                    <h3>Key Features</h3>

                    <div className="project-features">

                        {project.features.map((feature, index) => (
                            <div className="project-feature" key={index}>

                                <span className="feature-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div>
                                    <h4>{feature.name}</h4>
                                    <p>{feature.note}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* Screenshot Gallery */}
                {project.gallery.length > 0 && (
                    <div className="project-section">

                        <h3>Project Screenshots</h3>

                        <div className="project-gallery">

                            {visibleImages.map((image, index) => (
                                <div
                                    className="gallery-image clickable-image"
                                    key={image.src}
                                    onClick={() => openImage(index + 1)}
                                >

                                    <img
                                        src={`/${image.src}`}
                                        alt={image.label}
                                    />

                                    <span>{image.label}</span>

                                    <span className="image-zoom-icon">
                                        <i className="fas fa-expand"></i>
                                    </span>

                                </div>
                            ))}

                        </div>


                        {/* View More / View Less */}
                        {project.gallery.length > 4 && (
                            <button
                                className="gallery-toggle-btn"
                                onClick={() => setShowAllImages(!showAllImages)}
                            >
                                {showAllImages ? 'View Less' : 'View More'}

                                <i className={`fas fa-arrow-${showAllImages ? 'up' : 'down'}`}></i>
                            </button>
                        )}

                    </div>
                )}


                {/* Project Links */}
                <div className="detailed-project-actions">

                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link demo-link"
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
                            className="project-link github-link"
                        >
                            <i className="fab fa-github"></i>
                            GitHub Repository
                        </a>
                    )}

                    {project.links.docs && (
                        <a
                            href={`/Documentation/${project.links.docs}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link docs-link"
                        >
                            <i className="fas fa-file-pdf"></i>
                            Documentation
                        </a>
                    )}

                </div>

            </div>


            {/* Image Preview Modal */}
            {selectedImage !== null && (
                <div className="image-modal" onClick={closeImage}>

                    <button
                        className="modal-close"
                        onClick={closeImage}
                        aria-label="Close image preview"
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    <button
                        className="modal-nav modal-prev"
                        onClick={(event) => {
                            event.stopPropagation();
                            previousImage();
                        }}
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div
                        className="modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={`/${allImages[selectedImage].src}`}
                            alt={allImages[selectedImage].label}
                        />

                        <p>{allImages[selectedImage].label}</p>
                    </div>

                    <button
                        className="modal-nav modal-next"
                        onClick={(event) => {
                            event.stopPropagation();
                            nextImage();
                        }}
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                </div>
            )}

        </motion.article>
    );
}


// Main Projects Page
function Projects() {

    // Scroll to top when Projects page opens
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, []);

    return (
        <main className="detailed-projects-page">

            <div className="detailed-projects-container">


                {/* Page Heading */}
                <motion.header
                    className="detailed-projects-heading"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >

                    <span>PORTFOLIO / PROJECTS</span>

                    <h1>Systems I've built.</h1>

                    <p>
                        A collection of real-world applications,
                        machine learning experiments, and data-driven
                        projects developed through continuous learning
                        and practical implementation.
                    </p>

                    <div className="project-count">
                        <span>{String(projects.length).padStart(2, '0')}</span>
                        <span>Projects Completed</span>
                    </div>

                </motion.header>


                {/* Project Navigation */}
                <motion.nav
                    className="project-index"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}
                >

                    <span>EXPLORE PROJECTS</span>

                    <div>
                        {projects.map((project) => (
                            <a
                                href={`#${project.id}`}
                                key={project.id}
                            >
                                {project.index} — {project.name}
                            </a>
                        ))}
                    </div>

                </motion.nav>


                {/* All Projects */}
                <motion.section
                    className="detailed-projects-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.05
                    }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </motion.section>

            </div>

        </main>
    );
}

export default Projects;