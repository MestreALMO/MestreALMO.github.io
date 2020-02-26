var arrLang = {
    'english': {
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'portfolio': 'Portfolio',
        'client': 'Clients',
        'contact': 'Contact'
    },
    'portuguese': {
        'home': 'Home',
        'about': 'Sobre',
        'services': 'Serviços',
        'portfolio': 'Portfólio',
        'client': 'Cliente',
        'contact': 'Contato'
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