let menu = document.querySelector('#menu')
let linksContainer = document.querySelector('.nav__links-container')
let links = document.querySelector('.links')
let dateContent = document.querySelector('.date')

// DATE
let date = new Date()
dateContent.innerHTML = date.getFullYear()

// MENU TOGGLE
menu.addEventListener('click', function() {
    let containerHeight = linksContainer.getBoundingClientRect().height
    let linksHeight = links.getBoundingClientRect().height
    if (containerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = '0'
    }
})

let topLink = document.querySelector('.top-link')
let navbar = document.querySelector('nav')

// FIXED NAV
window.addEventListener('scroll', function() {
    let navHeight = navbar.getBoundingClientRect().height
    let scrollHeight = window.pageYOffset

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    }
    else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 490) {
        topLink.classList.add('show-top-link')
    }
    else {
        topLink.classList.remove('show-top-link')
    }
})

// LINKS
let scrollLinks = document.querySelectorAll('.nav__link')

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        let id = e.currentTarget.getAttribute('href').slice(1)
        let element = document.getElementById(id)

        // CALCULATE HEIGHT
        let navHeight = navbar.getBoundingClientRect().height
        let containerHeight = linksContainer.getBoundingClientRect().height
        let isFixed = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight

        if (!isFixed) {
            position = position - navHeight
        }
        if (containerHeight > 87) {
            position = position + containerHeight
        }
        window.scrollTo({
            top: position,
        })
        linksContainer.style.height = '0'
    })
})