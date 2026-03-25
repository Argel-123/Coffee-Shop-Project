const nav = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", this.window.scrollY > 100);

});
    