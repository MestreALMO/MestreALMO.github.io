//<language>
var userLang = navigator.language || navigator.userLanguage;
if (userLang == "pt-BR"){
    document.getElementById("language").value = "portuguese";
} else {
    document.getElementById("language").value = "english";
}
//</language>