let btn = document.getElementById('btn');
let output = document.getElementById('yta');
let quotes = [
    "Bestig ett berg",
    "Cykla på Välliste",
    "Fjällvandra" 
]

btn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes;
})