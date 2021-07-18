var burger = document.querySelector(".toggle");
var menuLink = document.querySelectorAll(".menu li a");

burger.addEventListener("click", function() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.toggle');

    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

menuLink.forEach((menuLink) =>
menuLink.addEventListener("click", function(){
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.toggle');

    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
})
)
