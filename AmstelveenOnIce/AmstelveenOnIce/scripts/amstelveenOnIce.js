﻿document.getElementById("logo").innerHTML = "<a href='home.html'><img src='images/logo.png'/></a>";
document.getElementById("mainnav").innerHTML = "<a href='home.html'>Home</a> " +
           "<a href='schaatsles.html'>Schaatsles</a> " + "<a href='informatie.html'>Informatie</a> "+ "<a href='tarieven.html'>Tarieven</a> " + "<a href='contact.html'>Contact</a> ";
document.getElementById("footer").innerHTML = "&copy; 2016 Amstelveen on Ice";

function hideForm() {
    document.getElementById("zichtbaar").style.display = "block";
};