const $fetchAsync= document.getElementById('fetch-async')
$fragment = document.createDocumentFragment()

async function getData(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await res.json()
        console.log(res, json)
        
        if(!res.ok)throw{
            status:res.status, statusText:res.statusText
        }

        json.forEach((el)=>{
            const $li= document.createElement('li')
            $li.innerHTML = `${el.name}`
            $fragment.appendChild($li)
        })

        $fetchAsync.appendChild($fragment)

    }catch(err){
        console.log(err)
    }finally{
        console.log("Esto se ejecutara en todo momento")
    }
}

getData()
