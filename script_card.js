var openCard = document.querySelectorAll(".workBx .imgBx");
var closeCard = document.getElementById("closeCard");

openCard.forEach((openCard) => 
    openCard.addEventListener("click", function(e) {
    var id = e.currentTarget.getAttribute("value");
    var img = document.querySelector(".card img");
    var title = document.querySelector(".card h2");
    var desc = document.querySelector(".card p");
    var link = document.querySelector(".card a");

    if(id === "1"){
        img.src = "img/film.PNG"
        title.textContent = "Projet films";
        desc.textContent = "Le projet consiste à créer un site web de présentation de films un peu comme Allo-ciné avec toutes les informations dans une base de données. Le projet doit être fais en MVC et router avec switch. Le projet se déroulait par groupe de 3, et chaque personne avait un rôle entre Dev front, Dev back et Chef de projet. Pour ma part, j'avais le rôle du chef de projet. Le projet c'est fait sûr deux semaines, du 28/06/2021 au 12/07/2021.";
        link.href = "https://oscarm.promo-66.codeur.online/projet_films/";
    } else if(id === "2"){
        img.src = "img/projet_grahoot.PNG"
        title.textContent = "Projet Grahoot";
        desc.innerHTML = `Le projet consiste à créer un site web de quizz en ligne avec des questions sur chaque membre de la promo. Le quizz devait ajouter un point a chaque bonne réponse et avoir un timer pour chaque question. Le but de ce projet était de débuter en php et de renforcer nos connaissance en JS. Le projet a duré du 7/06/2021 au 16/06/2021. <br> (Le code pin pour accéder au quizz est "1234") `;
        link.href = "https://raphaeld.promo-66.codeur.online/Projet_Grahoot/";
    } else if(id === "3"){
        img.src = "img/js_projet.png"
        title.textContent = "Projet Javascript";
        desc.textContent = "Le projet consiste à créer un site présentant plusieurs fonctionnalités du langage JavaScript : les variables, les opérateurs, les conditions, les tableaux, l’objet JSON, les boucles ainsi que les fonctions. Le projet devait se faire en groupe de 3 et on devait utiliser git et Trello. Le projet a duré 3 jours et a commencé le 17/05/2021";
        link.href = "https://mickaelc.promo-66.codeur.online/Javascript/index.html"
    } else if(id === "4"){
        img.src = "img/projet_widget.png"
        title.textContent = "Projet Widget";
        desc.textContent = "Le projet consiste à créer un site web avec 4 widgets à l’intérieur en utilisant JavaScript, un qui donne la météo en temps réel et en fonction de la ville voulue, un qui donne la fête du jour, une calculatrice, ainsi qu’un convertisseur pour lequel on convertissait ce que l’on voulait. Le site devait également être responsive. Pour finir on devait le mettre en ligne sur le serveur de la promo. Le temps attribué pour ce projet était d'une semaine et à débuter le 5/05/2021.";
        link.href = "https://oscarm.promo-66.codeur.online/widget_info/index.html";
    }

    var theCard = document.querySelector(".card");
    theCard.style.transform = "scale(1)";
}))

closeCard.addEventListener("click", function() {

    var theCard = document.querySelector(".card");
    theCard.style.transform = "scale(0)";

})