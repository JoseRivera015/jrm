let staff = [{title: 'Jose Rivera',
    picture: './images/gallery/yo.jpg',
    features: ['Estudiante en diseño web', 'Estudiante en diseño grafico'],
    about: 'Me considero una persona responsable, optimista, creativa impulsador de metas y desafios prsonales, capaz de vencer los miedos para generar cambios, con capacidad para el trabajo en equipo.',
    social: ['Facebook','https://www.facebook.com/']
  },
  {title: 'Annie Palacin',
    picture: './images/gallery/annie.jpg',
    features: ['Estudiante en diseño web', 'Estudiante en diseño grafico'],
    about: 'Me considero una persona responsable, optimista, creativa impulsador de metas y desafios prsonales, capaz de vencer los miedos para generar cambios, con capacidad para el trabajo en equipo.',
    social: ['Facebook','https://www.facebook.com/']
  }]

  let staffCard = satff => {
    let df = document.querySelector('template').cloneNode(/*deep*/true)
    let cardTitle = df.querySelector('cardTitle')
    let profilePic = df.querySelector('profilePic')
    let cardFeatures = df.querySelector('cardFeatures')
    let cardAbout = df.querySelector('cardAbout')
    
  }