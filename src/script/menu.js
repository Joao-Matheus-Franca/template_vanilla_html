const menuIcon = document.getElementById("menu-image")
const fullMenu = document.getElementById("navbar-menu")

function openMenu () {
    if (fullMenu.classList.value === 'hidde') {
        fullMenu.classList.remove('hidde')
    }
    else {
        fullMenu.className = 'hidde'
    }
}

menuIcon.addEventListener('click', openMenu)
