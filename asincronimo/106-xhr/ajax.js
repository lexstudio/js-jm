//api aplication programming interface
(()=>{
    //1 Instancia xhr
    const xhr = new XMLHttpRequest()
    const $xhr = document.querySelector("#xhr")
    const $fragment = document.createDocumentFragment()

    //console.log(xhr)
    //2 agregar un evento
    xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState!==4)return

        if(xhr.status>=200 && xhr.status<=300){
            console.log(`Exito`)
            // console.log(xhr.responseText)
            // $xhr.innerHTML=xhr.responseText

            //convertir la respuesta a json
            let json= JSON.parse(xhr.responseText)
            json.forEach(element => {
                const $li=document.createElement("li")
                $li.innerHTML=`${element.name}`
                $fragment.appendChild($li)
            });
            $xhr.appendChild($fragment)
        }else{
            console.log(`Error`)
            let message= xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML= `Error ${xhr.status}: ${message}`
        }
    })

    //3 instruccion que va a abrir la peticion 
    //primer parametro el metodo, segundo  el recurso (url)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

    //4 enviar la peticion
    xhr.send()

})();