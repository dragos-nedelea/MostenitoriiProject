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
// const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const sect2 = entry.target.querySelector('.app');

//         if (entry.isIntersecting) {
//             sect2.classList.add('app');
//             return; // if we added the class, exit the function
//         }

//         // We're not intersecting, so remove the class!
//         sect2.classList.remove('app');
//     });
// });

// observer1.observe(document.querySelector('.section2'));

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
    ro1: {
        // navbar
        "home": "Acasa",
        "about": "Despre Noi",
        "tour": "Turul Lumii",
        "staff": "Membrii Ansamblului",
        "repert": "Repertoriu",
        "contact": "Alăturăte echipei",

        //footer section 
        "footercitate": "Noi, cei ieșiți din popor, care am crescut legănati de aceste cântece, suntem datori a le păstra cu sfințenia cu care se păstrează moştenirea venită de la o națiune întreagă, trebuie să veghem lângă această comoară, căci ea fiind a poporului este şi a noastră. este a întregii suflări românești",
        "usefullinks": "Linkuri utile",
        "products": "Produse",
        "fcontact": "Contactează-ne",
        "oword": "Noi spunem",
        "disclaim": "Acest website a fost realizat în cadrul competiției ”Tekwill Junior Ambassadors” organizată de proiectul ”Tekwill în Fiecare Școală” și nu reflectă neapărat opinia proiectului.",
        "formTitle": "Completează formularul și devin-o dansator alături de noi",
        "formDesc": "Avem nevoie de tine pentru a ne ajuta să menținem tradițiile.",


    },
    ro: {
        // navbar
        "home": "Acasa",
        "about": "Despre Noi",
        "tour": "Turul Lumii",
        "staff": "Membrii Ansamblului",
        "repert": "Repertoriu",
        "contact": "Alăturăte echipei",

        //Staff section 
        "SectionTitle1": "Despre noi",
        "SectionTitle2": "Turul lumii",
        "SectionTitle3": "Membrii Ansamblului",
        "SectionTitle4": "Repertoriu",
        "SectionTitle5": "Alăturăte echipei",
        "elenaDesc": "Lider artistic/coregraf",
        "elenaCitate": "Dragostea pentru dansuri este răspândită de ea cu precauție.",
        "mihaiDesc": "Muzicant artistic",
        "mihaiCitate": "Muzica lui ne inspiră și ne luminează să dansăm.",
        "ninaDesc": "Lider coregraf",
        "ninaCitate": "Ea este cea care ne oferă exemplul de urmat.",



        //footer section 
        "footercitate": "Noi, cei ieșiți din popor, care am crescut legănati de aceste cântece, suntem datori a le păstra cu sfințenia cu care se păstrează moştenirea venită de la o națiune întreagă, trebuie să veghem lângă această comoară, căci ea fiind a poporului este şi a noastră. este a întregii suflări românești",
        "usefullinks": "Linkuri utile",
        "products": "Produse",
        "fcontact": "Contactează-ne",
        "oword": "Noi spunem",
        "disclaim": "Acest website a fost realizat în cadrul competiției ”Tekwill Junior Ambassadors” organizată de proiectul ”Tekwill în Fiecare Școală” și nu reflectă neapărat opinia proiectului.",
        "formTitle": "Completează formularul și devin-o dansator alături de noi",
        "formDesc": "Avem nevoie de tine pentru a ne ajuta să menținem tradițiile.",
        "morevids": "Videouri",
        "galId": "Galerie",



        //carousel section 
        "descr1": "Moștenitorii si Moștenirea",
        "descr2": "Noi suntem Moștenitorii, mândre fete și feciori.",
        "descr3": "Ansamblul Moștenitorii la 20 de ani de activitate.",
        "descr4": "Împreuna promovăm Ziua Agricultorului.",
        "descr5": "Urmașii lui Ștefan Cel Mare.",
        "descr6": "Toamna de Aur.",


        //Join section 
        "surname": "Nume",
        "Name": "Prenume",
        "email": "Adresa de e-mail",
        "Pnumb": "Nr.telefon",
        "YrMess": "Mesaj...",
        "chbText": "Accept termenii și condițiile",



        //Repertory section 
        "coserHang": "Dans tradițional în care se prindeau bărbaţii, care într-adevăr aveau o coordonare a muşchilor, a braţelor, a picioarelor, a capului, foarte bună, foartedezvoltată. Se prindeau bărbaţii care ştiau foarte bine acest dans.",
        "ciuleandra": "Vechi dans popular, cu origini in Muntenia subcarpatica, este considerat un dans dionisiac, in care fiecare dintre participanti este atras incet-incet de frenezia ritmului.",
        "polca": "Dans ce are caracteristic pași înainte și înapoi, Însăși strigăturile acestui dans sună astfel Și-nainte și-napoi, c-așai polca pe la noi, Și la dreapta și la stânga, uite-așa se joacă mândra!.",
        "suita": "De felul său dans calm, cu pași înainte și înapoi, dansat în perechi, la finele căruia tempoul se modifică, așa numita Floricică- joc de doi.",
        "tiganescu": "La timpul său dansurile „Ţigăneasca au fost preluate de la bulgari, ruşi, armeni şi ţigani. Împrumutând elementele şi ritmurile separate din la dansurile altor popoare, moldovenii le interpretează în felul lor cu mult foc temperament şi într-un mod cu totul special. Nici unul dintre popoarele sus-numite nu au dansuri similare.",
        "jocMare": "Joc care reunește într-un cerc mare întreaga adunare. Dansatorii se țin de mână, mergând pe diagonală separându-se în 2 linii, urmat de joc în pereche, apoi plecare în spate,plecând la stânga dansatorii se închină publicului, apoi mișcarea se repetă până la formarea unui semicerc.",
        "horaSarb": "Este un dans țărănesc care reunește într-un cerc mare întreaga adunare. Dansatorii se țin de mână, făcând 3 pași pe diagonală în față, S-D-S, urmați de o bătaie cu dreptul, apoi în spate, trei pași D-S-D,o bătaie cu stângul, totodată învârtind cercul, în principiu invers sensului acelor ceasului.",
        "arcan": "Dansul Arcanul se executa in horă deschisă, pasul spre inainte făcându-se cu piciorul stâng ,mișcat prin spate ,tainic ,cu aceeași pași continua jocul cuprinzând in coregrafia sa mersul șarpelui si simbolul acestuia. Forma sa exprimă sacrificiul, şi o putem interpreta în mai multe feluri. Cele trei linii convergente pot reprezenta o suliţă, o rădăcină sau un om. Suliţa este arma zeului, şi în ipostaza sa de patron al războiului şi victoriei, promitea celor care purtau acest semn izbândă şi protecţie.",

        // About us section
        "aboutUs": "Dansurile populare, împreună cu cantecele, legendele, poezia populară, tradițiile sunt ale noastre comoara națională - comoara de perle populare moștenite de la strămoșii noștri. Se consideră, și suntem de acord cu această părere, că dansul este limbajul ascuns al sufletului nostru, sau, în altele cuvintele, vizualizarea ardorii noastre și cele mai sublime impulsuri spirituale. ...Ce înseamnă să dansezi? S-ar părea că este o întrebare simplă, dar fiecare are răspunsul lui. De ce? Poate de asemenea pentru că, pentru noi, coregrafii, a dansa este sinonim cu a respira. De fapt, majoritatea oamenii au necesitatea să se manifeste în și prin dans și intuiția spune ei că ar putea avea succes încă din copilărie. Mă refer la satisfacția spirituală... Dansul este pasiunea și dragostea mea, dar intră și în îndatoririle mele profesionale - să-mi învețe micul și elevi stângaci (aduși la Moștenitorii la început cu mâna de către părinți, frați, surori sau bunici) să se miște în concordanță cu ritmul, să învețe pașii borei sau oricare altul dans. Este o bucurie enormă să-i vezi mai târziu dansând profesionist și să te scalzi în aplauze cu care sunt răsplătiți doar artiștii. Mă bucur foarte mult că munca mea nu este în zadar, aș spune mai degrabă că aduce mari satisfacții, deoarece nu există o apreciere mai mare decât cea care se reflectă în ochii părinților si al lor copii. Dansul, dacă se spune în termeni corespunzători, este pofta sufletului și este bucuria trupului. Cel care dansează bora satisface o nevoie spirituală - altfel de ce ar dansa oamenii? Noi, moldovenii, folosim orice ocazie pentru a ne manifesta în dans: ore, nunți, botez și orice petrecere. Prin intermediul dansului ne exprimăm sentimentele - bucuria sau tristețea, dragostea, sete de viață, entuziasm... Poate așa se explică existența atâtor ansambluri coregrafice, multitudinea de folk dansuri moștenite de la strămoși pe care suntem obligați să le păstrăm pentru prezent și viitor generatii. Cred că am dreptate spunând că doar păstrând și valorificând folclorul nostru am face să ne păstrăm ca națiune distinctă. Membrii ansamblului sunt profund îndrăgostiți de dansul nostru popular, autentic național costum, cântecele și muzica națiunii noastre. Ansamblul de dansuri populare Mostenitorii, a fost infiintat in 1994 si avea o echipa restransa - doar 16 copii si adolescenti. În trei ani, în 1997, având deja 48 de membri, echipa a devenit câștigătoare a Festivalului Național pentru Copii Alunelul declarat - dar și dovedit! - Misiunea ansamblului este de a valorifica cultura tradițională, rochia națională, costumele, tradițiile și jocurile populare care sunt caracteristice pentru regiunea pe care o reprezentăm. Scionii arborelui puternic numit Mostenitorii au contribuit și contribuie pe deplin prin dăruire, talent și dragoste față de dans la păstrarea moștenirii națiunii. Într -o perioadă relativ scurtă de timp, echipa a avansat rapid, devenind unul dintre cele mai bune ansambluri ale unui astfel de profil (copii) din țară și, respectiv, bucurându -se de aprecierea publicului. Lista succeselor cuprinde: modelul de onoare al modelului artistic ansamblu artistic, laureat la mai multe concursuri și festivaluri naționale și internaționale. Pe parcursul a două decenii de activitate (inițial, Cerc of Folk Dances from the Center of Creația pentru copiii din orașul Riscani), 400 de copii au fost învățați în ansamblul Mostenitoriti. În prezent, ansamblul participă la 140 de copii de 6-19 ani, împărțiți, în conformitate cu vârsta, în trei grupuri coregrafice: pregătitoare, medii și mari. Echipa a prezentat sute de spectacole pe cele mai importante etape din țară și în străinătate și a apărut de mai multe ori la televiziunea locală și internațională. Repertoriul propriu al ansamblului constă din dansuri populare care reflectă cele mai cunoscute tradiții, obiceiuri și obiceiuri: The Wedding Dance Zestrea, Capra, Caiutii, Procesiunea cântăreților de Carol, faimoasa minge a dirijorilor, etc. Spectatorii din programele de concert și obțin aplicații meritate, deoarece dansul este o oportunitate bună pentru afirmația identității naționale. Frumusețea dansului este finalizată și mai bine valorificată de costumul național. Fiecare membru al ansamblului, fost sau actual, are propriul său costum, care, evident, este unul autentic. Ansamblul de dansuri populare din ce în ce mai mult din orașul Riscani prin tot ceea ce face, contribuie la conservarea și valorificarea bogăției culturale și a valorilor coregrafice tradiționale. Talentul, dăruirea și perseverența sunt elementele care definesc echipa noastră.",

        //Our Wolrd Tour section
        "Map1": "Festivaluri",
        "Map2": "internaționale",



    }
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ro") {

        langshow.textContent = "RO";

        // navbar
        home.textContent = language.ro.home;
        about.textContent = language.ro.about;
        tour.textContent = language.ro.tour;
        staff.textContent = language.ro.staff;
        repert.textContent = language.ro.repert;
        contact.textContent = language.ro.contact;
        // Staff section
        SectionTitle1.textContent = language.ro.SectionTitle1;
        SectionTitle2.textContent = language.ro.SectionTitle2;
        SectionTitle3.textContent = language.ro.SectionTitle3;
        SectionTitle4.textContent = language.ro.SectionTitle4;
        SectionTitle5.textContent = language.ro.SectionTitle5;
        elenaDesc.textContent = language.ro.elenaDesc;
        elenaCitate.textContent = language.ro.elenaCitate;
        mihaiDesc.textContent = language.ro.mihaiDesc;
        mihaiCitate.textContent = language.ro.mihaiCitate;
        ninaDesc.textContent = language.ro.ninaDesc;
        ninaCitate.textContent = language.ro.ninaCitate;
        // footer section
        footercitate.textContent = language.ro.footercitate;
        usefullinks.textContent = language.ro.usefullinks;
        products.textContent = language.ro.products;
        fcontact.textContent = language.ro.fcontact;
        oword.textContent = language.ro.oword;
        disclaim.textContent = language.ro.disclaim;
        morevids.textContent = language.ro.morevids;
        galId.textContent = language.ro.galId;
        // carousel section
        descr1.textContent = language.ro.descr1;
        descr2.textContent = language.ro.descr2;
        descr3.textContent = language.ro.descr3;
        descr4.textContent = language.ro.descr4;
        descr5.textContent = language.ro.descr5;
        descr6.textContent = language.ro.descr6;
        // join section
        surname.placeholder = language.ro.surname;
        Name.placeholder = language.ro.Name;
        email.placeholder = language.ro.email;
        Pnumb.placeholder = language.ro.Pnumb;
        YrMess.placeholder = language.ro.YrMess;
        chbText.textContent = language.ro.chbText;
        formTitle.textContent = language.ro.formTitle;
        formDesc.textContent = language.ro.formDesc;
        // Repertory section
        coserHang.textContent = language.ro.coserHang;
        ciuleandra.textContent = language.ro.ciuleandra;
        polca.textContent = language.ro.polca;
        suita.textContent = language.ro.suita;
        tiganescu.textContent = language.ro.tiganescu;
        jocMare.textContent = language.ro.jocMare;
        horaSarb.textContent = language.ro.horaSarb;
        arcan.textContent = language.ro.arcan;
        //About us section
        aboutUs.textContent = language.ro.aboutUs;
        //Our World Tour secion
        Map1.textContent = language.ro.Map1;
        Map2.textContent = language.ro.Map2;







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
