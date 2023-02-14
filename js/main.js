// =============================== scroll animation ======================================
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

// ---------------------------ImageMap scroll animation-----------------------------------
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const sect2 = entry.target.querySelector('.app');
  
      if (entry.isIntersecting) {
        sect2.classList.add('app');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      sect2.classList.remove('app');
    });
  });
  
  observer1.observe(document.querySelector('.section2'));

// ---------------------------------------------------------------------------------------

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
            "tour": "Turul Lumii",
            "staff": "Membrii Ansamblului",
            "repert": "Repertoriu",
            "contact": "Contactează-ne"
        },
        {//about us section 
            "SectionTitle1": "Despre noi",
            "SectionTitle2": "Turul lumii",
            "SectionTitle3": "Personalul Ansamblului",
            "SectionTitle4": "Repertoriu",
            "SectionTitle5": "Contactează-ne"


        },
        {//footer section 
            "footercitate": "Noi, cei ieșiți din popor, care am crescut legănati de aceste cân- tece, suntem datori a le păstra cu sfințenia cu care se păstrează moştenirea venită de la o națiune întreagă, trebuie să veghem lângă această comoară, căci ea fiind a poporului este şi a noastră. este a întregii suflări românești",
            "usefullinks": "Linkuri utile",
            "products": "Produse",
            "fcontact": "Contactează-ne",
            "oword": "Noi spunem"

        },
         {//carousel section 
            "descr1":"Moștenitorii si Moștenirea",
            "descr2":"Noi suntem Moștenitorii, mândre fete și feciori.",
            "descr3":"Ansamblul Moștenitorii la 20 de ani de activitate.",
            "descr4":"Împreuna promovăm Ziua Agricultorului.",
            "descr5":"Urmașii lui Ștefan Cel Mare.",
            "descr6":"Toamna de Aur.",

        },
        {//Join section 
            "surname":"Nume",
            "Name":"Prenume",
            "email":"Adresa de e-mail",
            "Pnumb":"Nr.telefon",
            "YrMess":"Mesaj...",
            "chbText":"Sunt de acord cu termenii și condițiile",


        },
    ]
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ro") {

        langshow.textContent = "RO";

        // navbar
        home.textContent = language.ro[0].home;
        about.textContent = language.ro[0].about;
        tour.textContent = language.ro[0].tour;
        staff.textContent = language.ro[0].staff;
        repert.textContent = language.ro[0].repert;
        contact.textContent = language.ro[0].contact;
        // about us section
        SectionTitle1.textContent = language.ro[1].SectionTitle1;
        SectionTitle2.textContent = language.ro[1].SectionTitle2;
        SectionTitle3.textContent = language.ro[1].SectionTitle3;
        SectionTitle4.textContent = language.ro[1].SectionTitle4;
        SectionTitle5.textContent = language.ro[1].SectionTitle5;
        // footer section
        footercitate.textContent = language.ro[2].footercitate;
        usefullinks.textContent = language.ro[2].usefullinks;
        products.textContent = language.ro[2].products;
        fcontact.textContent = language.ro[2].fcontact;
        oword.textContent = language.ro[2].oword;
        // carousel section
        descr1.textContent = language.ro[3].descr1;
        descr2.textContent = language.ro[3].descr2;
        descr3.textContent = language.ro[3].descr3;
        descr4.textContent = language.ro[3].descr4;
        descr5.textContent = language.ro[3].descr5;
        descr6.textContent = language.ro[3].descr6;
         // join section
         surname.placeholder = language.ro[4].surname;
         Name.placeholder = language.ro[4].Name;
         email.placeholder = language.ro[4].email;
         Pnumb.placeholder = language.ro[4].Pnumb;
         YrMess.placeholder = language.ro[4].YrMess;
         chbText.textContent = language.ro[4].chbText;




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
