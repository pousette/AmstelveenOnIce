document.getElementById("logo").innerHTML = "<a href='home.html'><img src='images/logo.png'/></a>";
//document.getElementById("mainnav").innerHTML = "<a href='home.html'>Home</a> " +
//           "<a href='schaatsles.html'>Schaatsles</a> " + "<a href='informatie.html'>Informatie</a> " + "<a href='tarieven.html'>Tarieven</a> " + "<a href='contact.html'>Contact</a> ";
document.getElementById("mainnav").innerHTML =
    "<ul class='navMenu'>" +
    "<li class='menuListItem'><a href='home.html'>Home</a></li>" +
    "<li class='menuListItem' id='informatie'><a href='#' class='anchor'>Informatie</a>" + 
        "<ul class='menuSubList'>" +
            "<li><a href='openingstijden.html'>Openingstijden</a></li>" +
            "<li><a href='tarieven.html'>Prijzen</a></li>" +
         "</ul></li>" +
    "<li class='menuListItem' id='schaatsbaan'><a href='#' id='anchorSchaatsbaan'>Schaatsbaan</a>" +
        "<ul class='menuSubList'>" + 
            "<li><a href='schaatsles.html'>Schaatsles</a></li>" +
            "<li><a href='schoolschaatsen.html'>Schoolschaatsen</a></li>" +
            "<li><a href='verjaardagspartijtje.html'>Verjaardagpartijtje</a></li>" +
            "<li><a href='bedrijfsfeesten.html'>Bedrijfsfeesten</a></li>" +
            "<li><a href='curling.html'>Curling" + " " + "competitie</a></li>" +
            "<li><a href='ijshockey.html'>IJshockey</a></li>" +
        "</ul></li>" +
    "<li class='menuListItem' id='horeca'><a href='#'>Horeca</a>" +
        "<ul class='menuSubList'>" +
            "<li><a href='openingstijden.html'>Openingstijden</a></li>" +
        "</ul></li> " +
    "<li class='menuListItem' id='organisatie'><a href='#'>Organisatie</a>" +
        "<ul class='menuSubList'>" +
            "<li><a href='vrijwilligers.html'>Vrijwilligers</a></li>" +
            "<li><a href='bestuur.html'>Bestuur</a></li>" +
        "</ul></li> " +
    "<li class='menuListItem'><a href='sponsoren.html'>Sponsoren</a></li>" +
    "<li class='menuListItem'><a href='contact.html'>Contact</a></li></ul>";
document.getElementById("footer").innerHTML = "&copy; 2016 Amstelveen on Ice";

function hideForm() {
    document.getElementById("zichtbaar").style.display = "block";
};

function schaatsList() {
        "<li><a href='schaatsles.html'>Schaatsles</a></li>" +
        "<li><a href='schaatsles.html'>Schoolschaatsen</a></li>" +
        "<li><a href='schaatsles.html'>Verjaardagpartijtje</a></li>" +
        "<li><a href='schaatsles.html'>Bedrijfsfeesten</a></li>" +
        "<li><a href='schaatsles.html'>Curling" + " " + "competitie</a></li>" +
        "<li><a href='schaatsles.html'>IJshockey</a></li>";
};

function informatieList() {
    //document.getElementById("informatieSub").innerHTML = 
        "<li><a href='schaatsles.html'>Openingstijden</a></li>" +
        "<li><a href='tarieven.html'>Prijzen</a></li>";
};

function horecaList() {
        "<li><a href='openingstijden.html'>Openingstijden</a></li>";
};

function organisatieList() {
        "<li><a href='vrijwilligers.html'>Vrijwilligers</a></li>" +
        "<li><a href='bestuur.html'>Bestuur</a></li>";
}

function hideSchaats() {
    document.getElementById("schaatsList").style.display = "none";
}


function hideInformatie() {
    document.getElementById("informatieList").style.display = "none";
}

function hideHoreca() {
    document.getElementById("horecaList").style.display = "none";
}


function hideOrganisatie() {
    document.getElementById("organisatieList").style.display = "none";
}

function hideMenu() {
    hideHoreca();
    hideInformatie();
    hideOrganisatie();
    hideSchaats();
}