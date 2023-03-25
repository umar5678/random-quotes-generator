const quoteText = document.querySelector('.quote')
const authorName = document.querySelector('.author .name')
const quoteBtn = document.querySelector('button')
const soundBtn = document.querySelector('.sound')
const copyBtn = document.querySelector('.copy')
const twitterBtn = document.querySelector('.twitter')


// Rondom quote funstion 
function randomQuote(){
    quoteBtn.classList.add('loading')
     quoteBtn.innerText = "Loading Quote...."
    // fetching random quote/data from API and parsing it into JS object
 
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        // console.log(result)
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove('loading')
    })
}

// text(quote) to speech
soundBtn.addEventListener('click', ()=>{
    // the SpeechSynthesisUtterance is a web speech api that uses a speech request
    let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} `)
    speechSynthesis.speak(utterence)
})


// copy to clipboard
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
})

//share to twitter
twitterBtn.addEventListener('click', ()=>{
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(twitterUrl, '_blank')
})

quoteBtn.addEventListener('click', randomQuote)

