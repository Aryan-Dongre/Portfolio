import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeIcon from './ThemeIcon';
import { motion, AnimatePresence } from 'motion/react';
import '../../css files/ThemeIcon.css';

function Navbar() {

    const BASE_URL = import.meta.env.BASE_URL;

    const navigate = useNavigate();
    const location = useLocation();

    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // Theme State
    const [theme, setTheme] = useState('dark');

    // Settings State
    const [settingsOpen, setSettingsOpen] = useState(false);

    // Text Color State
    const [textColor, setTextColor] = useState(
        () => localStorage.getItem('portfolioTextColor') || 'default'
    );

    // Font State
    const [selectedFont, setSelectedFont] = useState(
        () => localStorage.getItem('portfolioFont') || 'default'
    );

    // Bold Text State
    const [boldText, setBoldText] = useState(
        () => localStorage.getItem('portfolioBoldText') === 'true'
    );

    // Available Fonts
    const fonts = [
        { name: 'Default (Inter)', value: 'default' },
        { name: 'Space Grotesk', value: 'space' },
        { name: 'Georgia', value: 'georgia' },
        { name: 'Cursive', value: 'cursive' },
        { name: 'Monospace', value: 'monospace' }
    ];

    // Available Colors
    const textColors = [
        { name: 'Default', value: 'default', color: '#5B6EF5' },
        { name: 'Red', value: '#EF4444', color: '#EF4444' },
        { name: 'Pink', value: '#EC4899', color: '#EC4899' },
        { name: 'Emerald', value: '#10B981', color: '#10B981' },
        { name: 'Orange', value: '#F97316', color: '#F97316' }
    ];

    // Close menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Navigate to homepage and selected section
    const handleNavigation = (event, sectionId) => {
        event.preventDefault();

        closeMenu();

        if (location.pathname !== '/') {
            navigate('/', {
                state: { scrollTo: sectionId }
            });
        } else {
            if (sectionId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    // Scroll after navigating from another page
    useEffect(() => {
        const sectionId = location.state?.scrollTo;

        if (!sectionId) return;

        let firstFrame;
        let secondFrame;

        firstFrame = requestAnimationFrame(() => {
            secondFrame = requestAnimationFrame(() => {

                if (sectionId === 'home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    document.getElementById(sectionId)?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // Clear navigation state after scrolling
                navigate(location.pathname, {
                    replace: true,
                    state: null
                });
            });
        });

        return () => {
            cancelAnimationFrame(firstFrame);
            cancelAnimationFrame(secondFrame);
        };

    }, [location.key, location.state, location.pathname, navigate]);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Change Text Color
    const changeTextColor = (color) => {
        setTextColor(color);

        if (color === 'default') {
            document.documentElement.style.removeProperty('--text');
            localStorage.removeItem('portfolioTextColor');
        } else {
            document.documentElement.style.setProperty('--text', color);
            localStorage.setItem('portfolioTextColor', color);
        }
    };

    // Change Font Family
    const changeFont = (font) => {
        setSelectedFont(font);

        if (font === 'default') {
            document.documentElement.style.removeProperty('--font-body');
            document.documentElement.style.removeProperty('--font-display');
            localStorage.removeItem('portfolioFont');
        } else {
            const fontFamilies = {
                space: "'Space Grotesk', sans-serif",
                georgia: "Georgia, serif",
                cursive: "cursive",
                monospace: "monospace"
            };

            document.documentElement.style.setProperty(
                '--font-body',
                fontFamilies[font]
            );

            document.documentElement.style.setProperty(
                '--font-display',
                fontFamilies[font]
            );

            localStorage.setItem('portfolioFont', font);
        }
    };

    // Toggle Bold Text
    const toggleBoldText = () => {
        const newValue = !boldText;

        setBoldText(newValue);

        document.documentElement.classList.toggle('bold-text', newValue);

        localStorage.setItem('portfolioBoldText', newValue);
    };

    useEffect(() => {
        if (textColor !== 'default') {
            document.documentElement.style.setProperty('--text', textColor);
        }
    }, [textColor]);

    // Apply Saved Font and Bold Preference
    useEffect(() => {
        if (selectedFont !== 'default') {
            const fontFamilies = {
                space: "'Space Grotesk', sans-serif",
                georgia: "Georgia, serif",
                cursive: "cursive",
                monospace: "monospace"
            };

            document.documentElement.style.setProperty(
                '--font-body',
                fontFamilies[selectedFont]
            );

            document.documentElement.style.setProperty(
                '--font-display',
                fontFamilies[selectedFont]
            );
        }

        document.documentElement.classList.toggle('bold-text', boldText);

    }, [selectedFont, boldText]);

    // Scrolling event
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}
            id="navbar"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >

            <div className="wrap nav-inner">

                <a
                    href={`${BASE_URL}#home`}
                    className="brand"
                    onClick={(e) => handleNavigation(e, 'home')}
                >
                    ARYAN DONGRE
                </a>

                <motion.nav
                    className={`nav-links ${menuOpen ? 'is-open' : ''}`}
                    id="navlinks"
                    initial={false}
                    animate={{
                        opacity: menuOpen ? 1 : undefined,
                        y: menuOpen ? 0 : undefined
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <motion.a
                        href={`${BASE_URL}#home`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'home')}
                    >
                        Home
                    </motion.a>

                    <motion.a
                        href={`${BASE_URL}#about`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'about')}
                    >
                        About
                    </motion.a>

                    <motion.a
                        href={`${BASE_URL}#skills`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'skills')}
                    >
                        Skills
                    </motion.a>

                    <motion.a
                        href={`${BASE_URL}#certificates`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'certificates')}
                    >
                        Certificates
                    </motion.a>

                    <motion.a
                        href={`${BASE_URL}#projects`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'projects')}
                    >
                        Projects
                    </motion.a>

                    <motion.a
                        href={`${BASE_URL}#contact`}
                        className="nav-link"
                        onClick={(e) => handleNavigation(e, 'contact')}
                    >
                        Contact
                    </motion.a>
                </motion.nav>

                {/* Right Side */}

                <div className="nav-right">

                    <motion.a
                        href={`${BASE_URL}Documentation/Aryan_Dongre_Resume.pdf`}
                        download
                        className="btn btn-ghost btn-sm nav-resume"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Resume
                    </motion.a>

                    {/* Settings Button */}
                    <motion.button
                        className="settings-toggle"
                        onClick={() => setSettingsOpen(!settingsOpen)}
                        aria-label="Open settings"
                        aria-expanded={settingsOpen}
                        whileHover={{ scale: 1.15, rotate: 30 }}
                        whileTap={{ scale: 0.85 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i className="fa-solid fa-gear"></i>
                    </motion.button>

                    {/* Theme Toggle */}
                    <motion.button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ThemeIcon theme={theme} />
                    </motion.button>

                    {/* Mobile Hamburger Menu */}
                    <button
                        className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
                {settingsOpen && (
                    <motion.div
                        className="settings-panel"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="settings-header">
                            <h3>Appearance Settings</h3>

                            <button
                                className="settings-close"
                                onClick={() => setSettingsOpen(false)}
                                aria-label="Close settings"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <p>Customize your portfolio appearance.</p>

                        {/* Text Color Settings */}
                        <div className="settings-group">

                            <h4>Text & Heading Color</h4>

                            <div className="color-options">

                                {textColors.map((color) => (
                                    <motion.button
                                        key={color.value}
                                        className={`color-option ${textColor === color.value ? 'active' : ''}`}
                                        onClick={() => changeTextColor(color.value)}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.9 }}
                                        title={color.name}
                                        aria-label={`${color.name} text color`}
                                        aria-pressed={textColor === color.value}
                                    >
                                        <span
                                            className="color-swatch"
                                            style={{ backgroundColor: color.color }}
                                        ></span>
                                    </motion.button>
                                ))}

                            </div>

                            <span className="settings-description">
                                Choose a color for your portfolio text and headings.
                            </span>

                        </div>

                        {/* Font Settings */}
                        <div className="settings-group">

                            <h4>Font Family</h4>

                            <select
                                className="font-select"
                                value={selectedFont}
                                onChange={(e) => changeFont(e.target.value)}
                            >
                                {fonts.map((font) => (
                                    <option key={font.value} value={font.value}>
                                        {font.name}
                                    </option>
                                ))}
                            </select>

                            <span className="settings-description">
                                Choose your preferred typography.
                            </span>

                        </div>

                        {/* Bold Text Settings */}
                        <div className="settings-group bold-settings">

                            <div className="bold-setting-row">
                                <div>
                                    <h4>Bold Text</h4>
                                    <span className="settings-description">
                                        Make website text bolder.
                                    </span>
                                </div>

                                <label className="bold-switch">
                                    <input
                                        type="checkbox"
                                        checked={boldText}
                                        onChange={toggleBoldText}
                                    />

                                    <span className="bold-slider"></span>
                                </label>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.header>
    );
}

export default Navbar;