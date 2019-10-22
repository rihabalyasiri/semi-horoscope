var month = prompt("give us your birthday month. for example: Apr");
month = month.toLowerCase();
var horoscopeMonth= ["mar","apr","may","jun","jul","aug","sep","oct","nov","dec","jan","feb"];
var horoscopeText= ["Today your patience might be tested when one or more of your projects gets put on hold by someone","Your intense energy makes you a great candidate for a leadership position right now, so if you are","If you arent sure if you are ready to commit to a party, a date, a new job, or anything else that","Too many different elements in your life are overlapping with each other right now—and it's your","The issues you'll be dealing with today are very complicated ones—you will have to navigate your","You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all","Pick a cultural event that's coming up and get some tickets for it today","Someone will challenge a belief that you've held for a very long time today—and they will say an","Someone in your life needs to step up and take on more responsibility—and you need to tell them to","Breaking the rules is not always a bad thing—especially if the rules limit your creativity","Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great","Communication is very important today—written, spoken, and even nonverbal body language will all"];

var horoscopeImg = ["https://www.horoscopedates.com/img/icon_libra.png","https://www.horoscopedates.com/img/icon_taurus.png","https://www.horoscopedates.com/img/icon_gemini.png","https://www.horoscopedates.com/img/icon_cancer.png","https://www.horoscopedates.com/img/icon_leo.png","https://www.horoscopedates.com/img/icon_virgo.png","https://www.horoscopedates.com/img/icon_libra.png","https://www.horoscopedates.com/img/icon_scorpio.png","https://www.horoscopedates.com/img/icon_sagittarius.png","https://www.horoscopedates.com/img/icon_capricorn.png","https://www.horoscopedates.com/img/icon_aquarius.png","https://www.horoscopedates.com/img/icon_pisces.png"];
var horoscope = ["Aries","TAURUS","GEMINI","CANCER","LEO","VIRGO","LIBRA","SCORPIO","SAGITTARIUS","CAPRICORN","AQUARIUS","PISCES"];

for (i =0;i<horoscope.length;i++) {
    if(month==horoscopeMonth[i]) {
        document.write(`<div><img src="${horoscopeImg[i]}"></img><h1>Your horoscope is ${horoscope[i]}</h1><p>${horoscopeText[i]}</p></div>`);
    }
}






