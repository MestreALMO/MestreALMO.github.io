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
        "about.p02": "Since I was a kid I always dreamed about being a developer, making my own software. As the years gonne by with me inputing a lot of effort and time to make my dreams come true I could make it true.",
        "about.p03": "Today here I am with my diploma and my own web page to show my work.",
        "about.download": "Download Resume",
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
        "about.p02": "Sobre",
        "about.p03": "Sobre",
        "about.download": "Baixar Currículo",
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