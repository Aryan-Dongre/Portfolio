function ThemeIcon({ theme }) {

    if (theme === 'light') {
        return (
            // Moon + Star
            <svg viewBox="0 0 24 24" className="theme-icon">
                <path
                    d="M19 15.5A8 8 0 0 1 8.5 5
                    A8.5 8.5 0 1 0 19 15.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M17.5 3.5L18.2 5.3L20 6L18.2 6.7L17.5 8.5L16.8 6.7L15 6L16.8 5.3Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        // Full Sun with eight rays
        <svg viewBox="0 0 24 24" className="theme-icon">

            <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            />

            <path
                d="
                    M12 2V5
                    M12 19V22
                    M2 12H5
                    M19 12H22
                    M4.93 4.93L7.05 7.05
                    M16.95 16.95L19.07 19.07
                    M19.07 4.93L16.95 7.05
                    M7.05 16.95L4.93 19.07
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

        </svg>
    );
}

export default ThemeIcon;