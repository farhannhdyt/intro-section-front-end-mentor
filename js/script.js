// Dropdown menu header
const dropdownButton = document.querySelectorAll('.button-dropdown'),
      dropdownMenu = document.querySelectorAll('.dropdown-menu'),
      dropdownIcon = document.querySelectorAll('.arrow-icon')

function toggleDropdownMenu(e) {
  const target = e.target
  let dropdownContent = null
  let dropdownArrow = null

  dropdownMenu.forEach(menu => {
    if (target.parentNode.contains(menu)) {
      dropdownContent = menu
    } else {
      menu.classList.remove('show')
    }
  })

  dropdownIcon.forEach(icon => {
    if (target.parentNode.contains(icon)) {
      dropdownArrow = icon
    } else {
        icon.classList.remove('rotate')
    }
  })

  if (dropdownContent && dropdownArrow) {
    dropdownContent.classList.toggle('show')
    dropdownArrow.classList.toggle('rotate')
  }
}

dropdownButton.forEach(item => {
  item.addEventListener('click', toggleDropdownMenu)
})

window.onclick = function(event) {
  if (!event.target.matches('.button-dropdown')) {
    for (let i = 0; i < dropdownMenu.length; i++) {
      if (dropdownMenu[i].classList.contains('show')) {
        dropdownMenu[i].classList.remove('show')
      }
    }
    for (let i = 0; i < dropdownIcon.length; i++) {
      if (dropdownIcon[i].classList.contains('rotate')) {
        dropdownIcon[i].classList.remove('rotate')
      }
    }
  }
}

// Open responsive menu
const buttonOpenMenu = document.getElementById('button-menu-open'),
      buttonCloseMenu = document.getElementById('button-menu-close'),
      overlay = document.getElementById('overlay')

function openMenu() {
  overlay.classList.add('show')
}

function closeMenu() {
  overlay.classList.remove('show')
}

buttonOpenMenu.addEventListener('click', openMenu)
buttonCloseMenu.addEventListener('click', closeMenu)
