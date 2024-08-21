

const btn = document.getElementById("btn")
const quote = document.getElementById("quote")
const adviceId = document.getElementById("adviceNumber")




async function getAdvice() {

    const res = await fetch("https://api.adviceslip.com/advice")
    const json = await res.json()
    
    quote.innerText = json.slip.advice
    adviceId.innerText = `Advice # ${json.slip.id}`  

}

btn.addEventListener( "click", getAdvice)