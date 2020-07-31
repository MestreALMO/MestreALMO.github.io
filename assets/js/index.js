$(document).ready(function(){
    $(function(){
        $("#entrace").load("entrace.html");

        $("#navbar").load("navbar.html");

        $("#about").load("about.html");

        $("#skills").load("skills.html");

        $("#experience").load("experience.html");

        $("#contact").load("contact.html");
    });

    // update footer copyright year
    var today = new Date();
    var year = today.getFullYear();
    var copyright = document.getElementById("copyright");
    $("#copyright").html("© André Lusegardis " + year);
});

//Stop random scroll on reload
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});