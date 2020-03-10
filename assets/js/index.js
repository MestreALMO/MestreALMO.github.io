$(document).ready(function(){
    $(function(){
        $("#entrace").load("entrace.html");

        $("#navbar").load("navbar.html");

        $("#about").load("about.html");

        $("#skills").load("skills.html");
    });
});

//Stop random scroll on reload
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});