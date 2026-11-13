import { motion } from 'motion/react';
import '../../css files/certificate.css';

function Certificates() {

    const certificates = [
        {
            title: "Generative AI and Agents by Azure",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/Generative AI and Agents in Azure.jpeg",
            color: "blue"
        },
        {
            title: "Get Started with AI on Azure",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/Fundation of azure.jpeg",
            color: "purple"
        },
        {
            title: "AI-Powered Information Extraction",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/AI powered information by Azure.jpeg",
            color: "cyan"
        },
        {
            title: "Computer Vision on Azure",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/Computer Vision in Azure copy.jpeg",
            color: "blue"
        },
        {
            title: "Speech Analysis on Azure",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/Speech analysis in Azure.jpeg",
            color: "purple"
        },
        {
            title: "Text Analysis on Azure",
            issuer: "Microsoft Azure",
            year: "2025",
            image: "images/certificates/Text Analysis in Azure.jpeg",
            color: "cyan"
        },
        {
            title: "Data Analytics",
            issuer: "Deloitte",
            year: "2026",
            image: "images/certificates/Deloitte.png",
            color: "blue"
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 35,
            scale: 0.96
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="certificates-section" id="certificates">

            {/* Certificates Heading */}
            <motion.div
                className="certificates-heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >

                <span className="certificates-eyebrow">
                    MY ACHIEVEMENTS
                </span>

                <h2>
                    Certifications & <span>Achievements</span>
                </h2>

                <p>
                    Professional certifications and continuous learning
                    that reflect my journey in technology.
                </p>

            </motion.div>

            {/* Certificates Grid */}
            <motion.div
                className="certificates-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.12
                        }
                    }
                }}
            >

                {certificates.map((certificate) => (

                    <motion.a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`certificate-card ${certificate.color}`}
                        key={certificate.title}
                        variants={cardVariants}
                    >

                        <div className="certificate-image">
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                            />

                            <div className="certificate-overlay">
                                <span>
                                    <i className="fas fa-expand"></i>
                                    View Certificate
                                </span>
                            </div>
                        </div>

                        <div className="certificate-info">

                            <h3>{certificate.title}</h3>

                            <div className="certificate-meta">
                                <span>{certificate.issuer}</span>
                                <span>{certificate.year}</span>
                            </div>

                        </div>

                    </motion.a>

                ))}

            </motion.div>

        </section>
    );
}

export default Certificates;