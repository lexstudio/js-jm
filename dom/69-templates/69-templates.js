//etiqueta template no en los elements no se visualiza
const $cards= document.querySelector(".cards")
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment()

const cardContent=[

    {
        title: "Technology",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animals",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Architecture",
        img:"https://placeimg.com/200/200/arch"
    },

    {
        title: "People",
        img:"https://placeimg.com/200/200/people"
    },


    {
        title: "Nature",
        img:"https://placeimg.com/200/200/nature"
    },
]

cardContent.forEach((el)=>{
    $template.querySelector("img").setAttribute("src",el.img)
    $template.querySelector("img").setAttribute("alt",el.title)
    $template.querySelector("figcaption").textContent=el.title

    //al utilizar true le decimos que copie toda la estructura 
    //con false solo la etiqueta de apertua y cierre
    let $clone= document.importNode($template, true)
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment)