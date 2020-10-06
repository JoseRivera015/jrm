export let slider = (images) => {
    let counter = 0
    let setImage = counter => {
        document.querySelector('#frame').setAttribute('src', images[counter].sliderSrc)
        document.querySelector('#frameLink').setAttribute('href', images[counter].sliderHref)
    }
    setImage(0)
    let PrevSlide = () => {
        if (counter === 0) { counter = images.length }
        counter--
        setImage(counter)
    }
    let nextSlide = () => {
        if (counter === images.length - 1) { counter = -1 }
        counter++
        setImage(counter)
    }
    document.querySelector('#btnPrev').addEventListener('click', PrevSlide)
    document.querySelector('#btnNext').addEventListener('click', nextSlide)
}