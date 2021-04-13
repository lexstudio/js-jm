//old version
const $cards = document.querySelector(".cards")
const $newCard=document.createElement("figure")
const $newCard2=document.createElement("figure")


$newCard.innerHTML=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`

$newCard2.innerHTML=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any2</figcaption>
`
$newCard.classList.add("card")
$newCard2.classList.add("card")


//reemplazar por un elemento especifico
$cards.replaceChild($newCard, $cards.children[2])

//insertar el elemento antes de un objeto especifico en este caso antes del primer elemento de $cards
$cards.insertBefore($newCard2, $cards.firstElementChild)

//remover un elemento
$cards.removeChild($cards.lastElementChild)

//clonar un elemento
//copiar elementos dinamicamente (true) para copiar toda la estructura
const $cloneCards=$cards.cloneNode(true)
document.body.appendChild($cloneCards)




