import { motion } from 'motion/react';
import '../../css files/Contact.css';

function Contact() {

    const contactDetails = [
        {
            id: 1,
            label: "EMAIL",
            value: "aryan08.work@gmail.com",
            icon: "fas fa-envelope",
            link: "mailto:aryan08.work@gmail.com"
        },
        {
            id: 2,
            label: "PHONE",
            value: "+91 8770679378",
            icon: "fa-solid fa-phone",
            link: "tel:+918770679378"
        },
        {
            id: 3,
            label: "CODE",
            value: "GitHub",
            icon: "fab fa-github",
            link: "https://github.com/Aryan-Dongre"
        },
        {
            id: 4,
            label: "LINKEDIN",
            value: "LinkedIn",
            icon: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/aryan-dongre-417475359/"
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
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
        <section className="contact-section" id="contact">

            <div className="contact-container">

                {/* Contact Heading */}
                <motion.div
                    className="contact-heading"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut"
                    }}
                >
                    <span className="contact-label">
                        — CONTACT
                    </span>

                    <h2>Let's build something useful.</h2>

                    <p>
                        Interested in AI, backend engineering, intelligent
                        systems, or building something together?
                    </p>
                </motion.div>


                {/* Contact Cards */}
                <motion.div
                    className="contact-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >

                    {contactDetails.map((contact) => (

                        <motion.a
                            href={contact.link}
                            key={contact.id}
                            className="contact-card"
                            target={contact.id > 2 ? '_blank' : undefined}
                            rel={contact.id > 2 ? 'noopener noreferrer' : undefined}
                            variants={cardVariants}
                            whileHover={{
                                y: -7,
                                scale: 1.02,
                                transition: { duration: 0.25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >

                            <motion.div
                                className="contact-icon"
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 5,
                                    transition: { duration: 0.25 }
                                }}
                            >
                                <i className={contact.icon}></i>
                            </motion.div>

                            <div className="contact-info">

                                <span>{contact.label}</span>

                                <h3>{contact.value}</h3>

                            </div>

                        </motion.a>

                    ))}

                </motion.div>

            </div>

        </section>
    );
}

export default Contact;