const menuIcon = document.getElementById("menu-image")
const fullMenu = document.getElementById("navbar-menu")

function openMenu () {
    if (fullMenu.classList.value === 'hidde') {
        fullMenu.className = 'show'
    }
    else {
        fullMenu.className = 'hidde'
    }
}

menuIcon.addEventListener('click', openMenu)
