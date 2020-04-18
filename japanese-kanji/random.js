// const API_URL = 'https://kanjiapi.dev/v1/';
// const KANJI_EP = 'kanji/:id';

// document.getElementById("kanji").addEventListener("click", imprimirKanji)

// function imprimirKanji () {
//     var url = `${API_URL}${KANJI_EP.replace(':id',id)}`
//     document.write(response[Math.floor(Math.random() * response.length)])
// }

// function obtenerKanji (id) {
//   var url = `${API_URL}${KANJI_EP.replace(':id',id)}`
//   $.get(url, sayKanji)
// }

// var sayKanji = function (kanji) {
//     // console.log(`There are ${kanji.length} in this grade. First kanji is: "${kanji[0]}"`)
//     console.log(`${kanji}'s meaning is ${kanji.meaning}`)
// }


var settings = {
  "url": "https://kanjiapi.dev/v1/kanji/grade-1",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(`There are ${response.length} in this grade. First kanji is: "${response[0]}"`)
});

