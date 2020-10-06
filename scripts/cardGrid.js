export let cardGrid = (cards) => {
  let container = document.createElement('div')
  container.classList.add('newsContainer')
  cards.forEach(card => {
    let df = document.querySelector('template').cloneNode(true).content
    let cardTitle = df.querySelector('.cardTitle')
    let cardPicture = df.querySelector('.cardPicture')
    let cardHref = df.querySelectorAll('.cardHref')
    cardTitle.textContent = card.title
    cardPicture.setAttribute('src', card.picture)
    cardHref.forEach(elem => elem.setAttribute('href', card.href))
    container.appendChild(df)
  })
  document.querySelector('main').insertAdjacentElement('beforeend', container)
}