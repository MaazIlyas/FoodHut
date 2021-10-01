// Responsive navigation
const toggleButton = document.getElementsByClassName('toggleButton')[0];
toggleButton.addEventListener('click', navToggle);
function navToggle(){
    const navLinks = document.getElementsByClassName('navZone')[0];
    navLinks.classList.toggle('mobileNavZone');
}