// =============================== scroll animation ======================================
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

// =============================== Text apprearance animation ============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ================================= Translation ========================================
// define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

// Language translations
var language = {
    eng: [
        {// navbar

            "home": "Home",
            "about": "About Us",
            "tour": "Our World Tour"
        },

    ],
    ro: [
        {// navbar

            "home": "Acasa",
            "about": "Despre Noi",
            "tour": "Turul Lumii"
        },
        {//about us section 
            "SectionTitle1": "Despre noi",
            "SectionTitle2": "Turul lumii",

        },
    ]
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ro") {
        // navbar
        home.textContent = language.ro[0].home;
        about.textContent = language.ro[0].about;
        tour.textContent = language.ro[0].tour;
        // about us section
        SectionTitle1.textContent = language.ro[1].SectionTitle1;
        SectionTitle1.textContent = language.ro[1].SectionTitle2;


    }
}


// define language onclick illiteration
for (i = 0; i <= dataReload.length; i++) {

    const rolang = document.getElementById("ro");
    const englang = document.getElementById("eng");

    rolang.onclick = function () {
        window.location.hash = "#ro";
        location.reload(true);

    }
    englang.onclick = function () {
        window.location.hash = "#eng";
        location.reload(true);

    }
}

// ======================================================================================
