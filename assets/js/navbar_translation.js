var arrLang = {
    "english": {
        "navbar.home": "Home",
        "navbar.about": "About",
        "navbar.services": "Services",
        "navbar.portfolio": "Portfolio",
        "navbar.client": "Clients",
        "navbar.contact": "Contact",

        "about.title": "About",
        "about.p01": "I'm a front-end developer. My focus is web development.",
        "about.p02": "Since I was a kid I always dreamed about being a developer, making my own software. As the years gonne by, with me putting a lot of effort and time to make my dreams come true, I could make it true.",
        "about.p03": "Today here I am with my diploma, lot's of systems developed and my own web page to show my work.",
        "about.download": "Download Resume",

        "skills.title": "Skills",
        "skills.programming": "Programming",
        "skills.others": "Others",
    },
    "portuguese": {
        "navbar.home": "Home",
        "navbar.about": "Sobre",
        "navbar.services": "Serviços",
        "navbar.portfolio": "Portfólio",
        "navbar.client": "Cliente",
        "navbar.contact": "Contato",

        "about.title": "Sobre",
        "about.p01": "Eu sou um desenvolvedor front-end. Meu foco é desenvolvimento web.",
        "about.p02": "Desde pequeno sempre sonhei em ser um desenvolvedor, fazendo meu próprio sistema. Com o passar do tempo, comigo colancando uma boa quantidade de esforço e tempo para tornar meu sonho realidade, Consegui fazer esse sonho uma realidade.",
        "about.p03": "Hoje aqui estou com meu diploma, vários sistemas desenvolvidos e meu próprio web site pra mostrar meu trabalho.",
        "about.download": "Baixar Currículo",

        "skills.title": "Habilidades",
        "skills.programming": "Programação",
        "skills.others": "Outras",
    }
};

// Process translation
$(function() {
    // grab a reference to the DOM elements
    var $translate = $('.translate');
    var $lang = $('.lang');
    // get the user language
    var userLang = (navigator.language || navigator.userLanguage) == "pt-BR" ? "portuguese" : "english";
    
    $translate
        // bind the change event
        .on("change", function() {
            var lang = $translate.val();
            $lang.each(function(index, item) {
                var $this = $(this);
                var id = $this.attr('id');
                $this.text(arrLang[lang][id]);
            });
        })
        // update the value of the language dropdown with the user lang (happens only on page load)
        .val(userLang)
        // trigger the change event so that the callback gets called (happens only on page load)
        .trigger("change");
});