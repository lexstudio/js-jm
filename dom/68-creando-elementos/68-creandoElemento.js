
//guardamos en variables los elementos del dom que vamos a trabajar
const $figure = document.createElement("figure"),
$img=document.createElement("img"),
$figcaption=document.createElement("figcaption")
$figcaptionText= document.createTextNode("Animals")

const $cards=document.querySelector(".cards");



$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")


$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)

//agregamos el nuevo figure creado a la lista de cards
$cards.appendChild($figure)



//************************************************************** */
//otra manera de agregar los elementos dentro del figure utilizando innerHTML en lugar de appenChild pero con esto no estmos  creando nodos
$figure2=document.createElement("figure")
$figure2.innerHTML=`
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)




//**************************************************************************** */
//ejercicio
const estaciones=["Primavera","Verano","Otoño","Invierno"]
$ul= document.createElement("ul")

document.write("<h3>Estaciones del año</h3>")
document.body.appendChild($ul)

estaciones.forEach(el=>{
    const $li =document.createElement("li")
    $li.textContent=el
    $ul.appendChild($li)
})




//ejercicio 2
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"]
    $ul2=document.createElement("ul")

document.write("<h3>Continentes del mundo</h3>")
document.body.appendChild($ul2)
$ul2.innerHTML=""
continentes.forEach(el=>{$ul2.innerHTML+= `<li>${el}</li>`})



//ejercicio 3
//insercion una sola vez al body de varios nodos usando fragment
const meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const $ul3= document.createElement("ul")
//nos permite realizar una sola incersion del fragmento de varios elementos
const $fragment=document.createDocumentFragment()

meses.forEach(el=>{
    const $li= document.createElement("li")
    $li.textContent=el
    $fragment.appendChild($li)
})

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)