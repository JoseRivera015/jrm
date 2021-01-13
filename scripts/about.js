let staff = [{title: 'Jose Rivera',
    picture: './images/gallery/yo.jpg',
    features: ['Estudiante en diseño web', 'Estudiante en diseño grafico', 'Amigo de Annie'],
    about: 'Me considero una persona responsable, optimista, creativa impulsador de metas y desafios prsonales, capaz de vencer los miedos para generar cambios, con capacidad para el trabajo en equipo.',
    social: [
      {icon: 'facebook',
      link: 'https://www.facebook.com/'},
      {icon: 'twitter',
      link: 'https://www.twitter.com/'},
  ]
  },
  {title: 'Annie Palacin',
    picture: './images/gallery/annie.jpg',
    features: ['Estudiante en diseño web', 'Estudiante en diseño grafico', 'Amiga de Jose'],
    about: 'Me considero una persona responsable, optimista, creativa impulsador de metas y desafios prsonales, capaz de vencer los miedos para generar cambios, con capacidad para el trabajo en equipo.',
    social: []
  }]
  
  let iconSelector = icon => {
    if (icon === 'facebook') {
      return './images/icons/facebook.svg'
    } else if (icon === 'twitter') {
      return './images/icons/twitter.svg'
    }
      
  }
  let socialListFiller = (container, icon, link) => {
    anchor = document.createElement('a')
    anchor.setAttribute('href', link)
    imgTag = document.createElement('img')
    imgTag.setAttribute('src', iconSelector(icon))
    imgTag.classList.add('tinyIcon')
    anchor.appendChild(imgTag)
    container.appendChild(anchor)
  }
  let listFiller = (container, itemTag, text) => {
    element = document.createElement(itemTag)
    element.textContent = text
    container.appendChild(element)
  }
  let changeText = (container, selector, text) => container.querySelector(selector).textContent = text

  let cardContainer = document.createElement('div')
  cardContainer.classList.add('cardContainer')
  staff.forEach(card => {
    let df = document.querySelector('template').cloneNode(/*deep*/true).content
    changeText(df, '.cardTitle', card.title)
    changeText(df, '.cardAbout', card.about)
    //let cardTitle = df.querySelector('.cardTitle')
    let profilePic = df.querySelector('.profilePic')
    let cardFeatures = df.querySelector('.cardFeatures')
    card.features.forEach(elem => listFiller(cardFeatures, 'li', elem))
    //let cardAbout = df.querySelector('.cardAbout')
    let socialContainer = df.querySelector('.socialContainer')
    card.social.forEach(elem => socialListFiller(socialContainer, elem.icon, elem.link))
    //cardTitle.textContent = card.title
    profilePic.setAttribute('src', card.picture)
    cardContainer.appendChild(df)
    //cardAbout.textContent = card.about
  })
  
  

  document.querySelector('main').insertAdjacentElement('beforeend', cardContainer)