const button = document.getElementById('menu_button');
// selects by class name
const navlist = document.querySelector('.nav_list');

// toggle ".navlist.expanded"
button.addEventListener('click', (e) => {
    navlist.classList.toggle('expanded');
});

// clicking outside, toggle ".navlist.expanded"
document.addEventListener('click', (e) => {
    if (!navlist.contains(e.target)) {
        navlist.classList.remove('expanded');
    }
});
