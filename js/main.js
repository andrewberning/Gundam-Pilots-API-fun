document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const suitName = document.querySelector('input').value
    try{
        const response = await fetch(`https://gundam-pilots-api-fun.herokuapp.com/api/${suitName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.pilotName
        document.querySelector('h3').innerText = data.gundamSuit
    }catch(error){
        console.log(error)
    }
}