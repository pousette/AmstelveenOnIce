document.getElementById("logo").innerHTML = "<a href='home.html'><img src='images/logo.png'/></a>";
//document.getElementById("mainnav").innerHTML = "<a href='home.html'>Home</a> " +
//           "<a href='schaatsles.html'>Schaatsles</a> " + "<a href='informatie.html'>Informatie</a> " + "<a href='tarieven.html'>Tarieven</a> " + "<a href='contact.html'>Contact</a> ";
document.getElementById("mainnav").innerHTML = "<a href='home.html' onmouseover='hideMenu()'>Home</a> " +
    "<a href='#' onmouseover='informatieList()' >Informatie</a> " + "<div id='informatieList' class='menuList'></div>" +
            "<a href='#' onmouseover='schaatsList()'  >Schaatsbaan</a>" + "<div id='schaatsList' class='menuList'  ></div>" +
            "<a href='#' onmouseover='horecaList()'>Horeca</a> " + "<div id='horecaList' class='menuList'  ></div>" +
            "<a href='#' onmouseover='organisatieList()'>Organisatie</a> " + "<div id='organisatieList' class='menuList'  ></div>" +
            "<a href='sponsoren.html' onmouseover='hideMenu()'>Sponsoren</a> " + "<a href='contact.html' onmouseover='hideMenu()'>Contact</a> ";
document.getElementById("footer").innerHTML = "&copy; 2016 Amstelveen on Ice";

function hideForm() {
    document.getElementById("zichtbaar").style.display = "block";
};

function schaatsList() {
    hideInformatie();
    hideHoreca();
    hideOrganisatie();
    document.getElementById("schaatsList").innerHTML =
    "<ul class='menuTabel' onmouseleave='hideSchaats()' >" +
        "<li><a href='schaatsles.html'>Schaatsles</a></li>" +
        "<li><a href='schaatsles.html'>Schoolschaatsen</a></li>" +
        "<li><a href='schaatsles.html'>Verjaardagpartijtje</a></li>" +
        "<li><a href='schaatsles.html'>Bedrijfsfeesten</a></li>" +
        "<li><a href='schaatsles.html'>Curling" + " " + "competitie</a></li>" +
        "<li><a href='schaatsles.html'>IJshockey</a></li>" +
    "</ul>";
    document.getElementById("schaatsList").style.display = "flex";
};

function informatieList() {
    hideSchaats();
    hideHoreca();
    hideOrganisatie();
    document.getElementById("informatieList").innerHTML =
    "<ul class='menuTabel' onmouseleave='hideInformatie()'>" +
        "<li><a href='schaatsles.html'>Openingstijden</a></li>" +
        "<li><a href='tarieven.html'>Prijzen</a></li>" +
    "</ul>";
    document.getElementById("informatieList").style.display = "flex";
};

function horecaList() {
    hideSchaats();
    hideInformatie();
    hideOrganisatie();
    document.getElementById("horecaList").innerHTML =
    "<ul class='menuTabel' onmouseleave='hideHoreca()'>" +
        "<li><a href='openingstijden.html'>Openingstijden</a></li>" +
    "</ul>";
    document.getElementById("horecaList").style.display = "flex";
};

function organisatieList() {
    hideSchaats();
    hideInformatie();
    hideHoreca();
    document.getElementById("organisatieList").innerHTML =
    "<ul class='menuTabel' onmouseleave='hideOrganisatie()'>" +
        "<li><a href='vrijwilligers.html'>Vrijwilligers</a></li>" +
        "<li><a href='bestuur.html'>Bestuur</a></li>" +
    "</ul>";
    document.getElementById("organisatieList").style.display = "flex";
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