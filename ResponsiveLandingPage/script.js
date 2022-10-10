const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('.navbar-collapse');

navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const buttons = document.querySelectorAll(".mirror");
for(let button of buttons){
    button.addEventListener('click', function(){
        alert("This is just a landing page, website will be launched soon with all these features");
    })
}
