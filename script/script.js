let imagesCup = [
    {
        "url": "./imgs/cupcake_1.webp",
        "nombre": "Cupcake de Fondant",
        "descripcion": "Festeja con esa persona especial a lo grande"
    },
    {
        "url": "./imgs/cupcake_2.webp",
        "nombre": "Cupcake de Fondant",
        "descripcion": "El mejor cupcake para tu persona especial"
    },
    {
        "url": "./imgs/cupcake_3.webp",
        "nombre": "Cupcake Mixto",
        "descripcion": "Un cupcake especial de cream cubierto de fondant"
    },
] 

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('text_carrucel')
let actual = 0
posicionCarrusel()

console.log(atras)
atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagesCup.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagesCup[actual].url}" alt="${imagesCup[actual].nombre}" loading="lazy"></img>`
    texto.innerHTML = `
    <p class="title_carrucel text_md">${imagesCup[actual].nombre}</h3>
    <p class="paragraph">${imagesCup[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

adelante.addEventListener('click', function(){
    actual += 1

    if (actual == imagesCup.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagesCup[actual].url}" alt="${imagesCup[actual].nombre}" loading="lazy"></img>`
    texto.innerHTML = `
    <p class="title_carrucel text_md">${imagesCup[actual].nombre}</h3>
    <p class="paragraph">${imagesCup[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagesCup.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}