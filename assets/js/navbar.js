//<language>
var userLang = navigator.language || navigator.userLanguage;
if (userLang = "pt-BR"){
    selectItemByValue(, 'portuguese');
} else {
    $('#language').val(english);
}
//</language>