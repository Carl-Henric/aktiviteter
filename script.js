let btn = document.getElementById('btn');
let text = document.getElementById('yta');
let quotes = [
    "<a href=\"https://www.google.se/maps/place/Totthummeln/@63.4002615,13.07993,13.67z/data=!4m5!3m4!1s0x466e0b747612b463:0xd0b49ffaf85805f7!8m2!3d63.4!4d13.1\">Spring runt Totthummeln</a>",
    "<a href=\"https://www.summitguides.se/prova-pa-klippklattring/\">Prova på klättring</a>",
    "<a href=\"https://www.summitguides.se/klattring-och-cykling/grundkurs-klattring/\">Gå en grundkurs i klättring</a>",
    "<a href=\"https://www.summitguides.se/klattring-och-cykling/stigcykel/\">Cykla stigcykel med egen guide</a>",
    "<a href=\"https://www.summitguides.se/klattring-och-cykling/stigcykel/\">'Vandra jämtladstriangeln'</a>",
    "<a href=\"http://www.xn--grdda-hra.se/\">Ät glass på Grädda</a>",
    "<a href=\"https://undersakers.se/\">Besök Undersåkers Charkuterifabrik</a>",
    "<a href=\"https://fjallupplevelser.com/led/240/\">Vandra Välliste runt</a>",
    "<a href=\"https://goo.gl/maps/ogEg6MDXB7hmjr7V9/\">Bada i Ullån</a>",
    "<a href=\"Cykla downhill på Åreskutan/\">Cykla downhill på Åreskutan</a>",
    "Grilla vid nalleklippan",
]

btn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    text.innerHTML = randomQuotes;
})

function change_text(){
    document.getElementById("btn").innerHTML = "Och igen!";
}