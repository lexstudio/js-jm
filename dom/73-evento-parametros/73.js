$eventoMultiple=document.getElementById("evento-multiple")


const saludar=(nombre="desconocido")=>{
    alert(`Hola ${nombre}`)
}

// $eventoMultiple.addEventListener("click",saludar)

$eventoMultiple.addEventListener("click", ()=>{
    saludar()
    saludar("alex")
})


//remover eventos
$eventoRemover=document.getElementById("evento-remover")
const removerDblclick=(e)=>{
    alert(`removiendo evento de tipo ${e.type}`)
    console.log(e)
    $eventoRemover.removeEventListener("dblclick",removerDblclick)
    $eventoRemover.disabled=true
}

$eventoRemover.addEventListener("dblclick",removerDblclick)