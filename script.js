const navLinks = document.getElementById('nav-links')
const bars = document.getElementsByClassName('window-close')
const closeMenu = document.getElementsByClassName('bars')

function showMenu(){
    navLinks.style.right = "0px";
    
}
function hideMenu(){
    navLinks.style.right = '-200px';
}
