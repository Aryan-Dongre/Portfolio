document.addEventListener("DOMContentLoaded", function () {

    /*  Theme Toggle */

    var themeToggle = document.getElementById("themeToggle");
    var icon = themeToggle.querySelector(".icon");

    function applyTheme(isLight) {
        document.body.classList.toggle("light-mode", isLight);
        icon.textContent = isLight ? "☀️" : "🌙";
    }

    var savedTheme = localStorage.getItem("aryan-theme");
    applyTheme(savedTheme === "light");

    themeToggle.addEventListener("click", function () {
        var isLight = !document.body.classList.contains("light-mode");

        applyTheme(isLight);

        localStorage.setItem(
            "aryan-theme",
            isLight ? "light" : "dark"
        );
    });


    /*  Scroll Reveal */

    var revealEls = document.querySelectorAll(".reveal");

    var revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });


    /* Hide all extra cards initially */

    document.querySelectorAll(".extra-card").forEach(function (card) {
        card.style.display = "none";
    });


    /* View More / View Less */

    var allButtons = document.querySelectorAll("#viewMoreBtn");

    allButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Find the grid just before this button group
            var projectGrid = button.parentElement.previousElementSibling;

            var extraCards = projectGrid.querySelectorAll(".extra-card");

            var isOpening = button.dataset.open !== "true";

            extraCards.forEach(function (card) {

                if (isOpening) {

                    card.style.display = "block";

                    requestAnimationFrame(function () {
                        card.classList.add("show");
                    });

                } else {

                    card.style.display = "none";

                }

            });

            if (isOpening) {

                button.dataset.open = "true";

                button.innerHTML =
                    'View Less <i class="fa-solid fa-chevron-up"></i>';

            } else {

                button.dataset.open = "false";

                button.innerHTML =
                    'View More <i class="fa-solid fa-chevron-down"></i>';

            }

        });

    });

});
