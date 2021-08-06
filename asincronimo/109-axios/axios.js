const $axios = document.getElementById("axios")
$fragment = document.createDocumentFragment()

axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res)=>{
        console.log(res)
        let json = res.data.results

        json.forEach(el =>{
            let $li = document.createElement("li")
            $li.innerHTML= `${el.name} `
            console.log(el.name)
            $fragment.appendChild($li)
        })
        $axios.appendChild($fragment)
    })
    .catch((err)=>{
        console.log("estamos en el catch", err.response)
        let message = err.response.statusText || "Ocurrio un error"

        $axios.innerHTML = `Error ${err.response.status}: ${message}`
    })
    .finally(
        ()=>console.log('finally')
    )