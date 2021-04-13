const holaMundo=()=>{
    alert("HOla chiquitrikix")
    console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico")


$eventoSemantico.onclick=holaMundo

$eventoSemantico.onclick= function(e){
    alert("Hola Mundo Manejador de Eventos Semantico")
    console.log(e)
    console.log(event)
}


const $eventoMultiple=document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click", (e)=>{
    alert("Hola Mundo Manejador de Eventos Multiple")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
})