var sendMail = document.querySelector(".col100 button");
var a;
var b;
var c;
var d;
var e;
const regexName = /^[A-Za-zÀ-ú']{1,15}/g;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

sendMail.addEventListener("click", function() {
    a = document.querySelector(".contactForm .row:nth-child(1) .col50:nth-child(1) input").value;
    b = document.querySelector(".contactForm .row:nth-child(1) .col50:nth-child(2) input").value;
    c = document.querySelector(".contactForm .row:nth-child(2) .col50:nth-child(1) input").value;
    d = document.querySelector(".contactForm .row:nth-child(2) .col50:nth-child(2) input").value;
    e = document.querySelector(".contactForm .row:nth-child(3) .col100 textarea").value;
    let response = document.querySelector("#mailValid");
    var aOk = a.match(regexName);
    var bOk = b.match(regexName);
    var cOk = c.match(regexMail);
    var dOk = d.match(regexTel);

    if(a == "" || b =="" || c == "" || e == ""){
        response.innerHTML = '<p> Tout les champs sauf "Téléphone" doivent être rempli. </p>';
        response.style.color = "orange";
        response.style.border = "2px solid orange";
    } else if(aOk == null || bOk == null){
        response.innerHTML = '<p> Vous devez entrer un Nom et un Prénom valide. </p>';
        response.style.color = "orange";
        response.style.border = "2px solid orange";
    } else if(cOk == null){
        response.innerHTML = '<p> Vous devez entrer une adresse mail valide. </p>';
        response.style.color = "orange";
        response.style.border = "2px solid orange";
    } else if(e.length < 20 || e.length > 1000) {
        response.innerHTML = '<p> Le message dois contenir entre 20 et 1000 charactères. </p>';
        response.style.color = "orange";
        response.style.border = "2px solid orange";
    } else if(d != "" && dOk == null) {
        response.innerHTML = '<p> Le numéro est incorrect. </p>';
        response.style.color = "orange";
        response.style.border = "2px solid orange";
    } else {
        ajaxC();
    }

    document.querySelector(".contactForm .row:nth-child(1) .col50:nth-child(1) input").value = "";
    document.querySelector(".contactForm .row:nth-child(1) .col50:nth-child(2) input").value = "";
    document.querySelector(".contactForm .row:nth-child(2) .col50:nth-child(1) input").value = ""; 
    document.querySelector(".contactForm .row:nth-child(2) .col50:nth-child(2) input").value = "";
    document.querySelector(".contactForm .row:nth-child(3) .col100 textarea").value = "";
})

function ajaxC() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./mail.php?lastname=" + a + "&firstname=" + b + "&mail=" + c + "&tel=" + d + "&content=" + e);
    xhr.onload = function() {
        if(xhr.status === 200) {
            let response = document.querySelector("#mailValid");
            response.innerHTML = "<p>" + xhr.responseText + "</p>";
            if(xhr.responseText === "Votre mail a bien été envoyé !"){
                response.style.color = "#00bcd4";
                response.style.border = "2px solid #00bcd4";
            } else if(xhr.responseText === "Votre mail n'a pas pu être envoyé") {
                response.style.color = "red";
                response.style.border = "2px solid red";
            } else {
                response.style.color = "orange";
                response.style.border = "2px solid orange";
            }
            response.style.display = "block";
        } else {
            console.log(xhr.status);
        }
    };
    xhr.send();
}