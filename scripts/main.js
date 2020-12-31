let scriptSrc = document.currentScript.getAttribute('src')
let actualLevel = scriptSrc.substring(0, scriptSrc.lastIndexOf("scripts"))

let body = document.querySelector('body')
let main = document.querySelector('main')
fetch(actualLevel + 'templates/header.html')
.then(response => response.text())
.then(data => {
    let template = new DOMParser().parseFromString(data, 'text/html').querySelector('template')
    let header = template.content.querySelector('header')
    body.prepend(header)
    elevateReferences('header', actualLevel)
    elevateSources('header', actualLevel)
    toTop()
    fetch(actualLevel + 'templates/nav.html')
    .then(response => response.text())
    .then(data => {
        let template = new DOMParser().parseFromString(data, 'text/html').querySelector('template')
        let nav = template.content.querySelector('nav')
        body.insertBefore(nav, main)
        elevateReferences('nav', actualLevel)
        elevateSources('nav', actualLevel)
        fetch(actualLevel + 'templates/footer.html')
        .then(response => response.text())
        .then(data => {
            let template = new DOMParser().parseFromString(data, 'text/html').querySelector('template')
            let footer = template.content.querySelector('footer')
            body.appendChild(footer)
            menu()
            elevateSources('footer', actualLevel)
            document.querySelector('#year').textContent = new Date().getFullYear()
        })
    })
})

document.querySelector('title').textContent += ' - JRM Diseño Web'

let menu = () => {
    let nav = document.querySelector('nav').classList
    let hide = classX => nav.remove(classX)
    let toggle = classX => !nav.contains(classX)? nav.add(classX): hide(classX)
    document.querySelector('#menuBtn').addEventListener('mousedown', () => toggle('show'))
    document.querySelector('main').addEventListener('click', () => hide('show'))
}

document.documentElement.lang = 'es'

let charset = document.createElement('meta')
charset.setAttribute('charset', 'UTF-8')

let favicon = document.createElement('link')
favicon.setAttribute('rel', 'shortcut icon')
favicon.setAttribute('type', 'image/x-icon')
favicon.setAttribute('href', actualLevel + 'favicon.png')
document.head.appendChild(favicon)

let stylesheet = document.createElement('link')
stylesheet.setAttribute('rel', 'stylesheet')
stylesheet.setAttribute('href', actualLevel + 'styles/style.css')
document.head.appendChild(stylesheet)

let viewport =  document.createElement('meta')
viewport.setAttribute('name', 'viewport')
viewport.setAttribute('content', 'width=device-width')
document.head.appendChild(viewport)

let elevateSources = (element, level) => {
    let images = document.querySelectorAll(element + ' img')
    images.forEach(image => {
    let imageSource = image.getAttribute('src')
    image.setAttribute('src', level + imageSource)
    })
}
let elevateReferences = (element, level) => {
    let anchors = document.querySelectorAll(element + ' a')
    anchors.forEach(anchor => {
    let anchorReference = anchor.getAttribute('href')
    anchor.setAttribute('href', level + anchorReference)
    })
}

let toTop = () => {
    document.querySelector('#toTop').setAttribute('href', '#')
}