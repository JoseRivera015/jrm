let photos = [
  {pic: 'https://picsum.photos/100', desc: 'desc 1'},
  {pic: 'https://picsum.photos/100', desc: 'descripcion'},
  {pic: 'https://picsum.photos/100', desc: 'desc 3'},
  {pic: 'https://picsum.photos/100', desc: 'desc 4'},
  {pic: 'https://picsum.photos/100', desc: 'desc 5'}, 
  {pic: 'https://picsum.photos/100', desc: 'desc 6'},
  {pic: 'https://picsum.photos/100', desc: 'desc 7'},
  {pic: 'https://picsum.photos/100', desc: 'desc 8'}
    ]
container = document.createElement('div')
container.classList.add('pictContainer')
photos.forEach(photo => {
  let df = document.querySelector('template').cloneNode(true).content
  let photoPic = df.querySelector('.pic')
  let photoDesc = df.querySelector('.desc')
  photoPic.setAttribute('src', photo.pic)
  photoDesc.textContent = photo.desc
  container.appendChild(df)
})
document.querySelector('main').appendChild(container)

let createLayer = figure => {
  let layer = document.createElement('div')
  layer.id = 'layer'
  let clonedFigure = figure.currentTarget.cloneNode(true)
  layer.appendChild(clonedFigure)
  document.querySelector('main').appendChild(layer)
  layer.addEventListener('click', () => layer.remove())
}
let figures = document.querySelectorAll('.figCard')
figures.forEach(figure => figure.addEventListener('click', createLayer))
let layer = document.querySelector('#layer')
