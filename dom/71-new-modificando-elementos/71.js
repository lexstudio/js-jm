/*********** 
new version
***********/

/*
    insert.AdjacentElement(position, el )
    .insert.AdjacentHTML(position, html)
    .insert.AdjacentText(position, text)

    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)
*/

const $cards=document.querySelector(".cards")
const $newCard = document.createElement("figure")

let $contentCard=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`
$newCard.classList.add("card")

$newCard.insertAdjacentHTML("beforeend",$contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("beforeend","Any")
// $cards.insertAdjacentElement("beforebegin",$newCard)
// $cards.insertAdjacentElement("afterbegin",$newCard)
// $cards.insertAdjacentElement("beforeend",$newCard)
// $cards.insertAdjacentElement("afterend",$newCard)



/*
metodos alternos que tienen una ubicacion definida
*/

// $cards.before($newCard)
// $cards.prepend($newCard)
// $cards.append($newCard)
$cards.after($newCard)

