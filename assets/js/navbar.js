//<language>
var userLang = navigator.language || navigator.userLanguage;
if (userLang = "pt-BR"){
    document.getElementById("language").value = "portuguese";
} else {
    document.getElementById("language").value = "english";
}
//</language>



// Process translation
$(function() {
    var lang = $(this).attr('id');
    $('.lang').each(function(index, item) {
    $(this).text(arrLang[lang][$(this).attr('id')]);
    });
});