
var API_URL = 'https://kanjiapi.dev/v1/kanji/'
var API_GRADE = 'grade-:id'



var settings = {
  "url": `${API_URL}${API_GRADE.replace(':id','1')}`,
  "method": "GET",
  "timeout": 0,
};
    $.ajax(settings).done(function (response) {
      var kanji = document.createElement("h1");
      kanji.innerHTML = (response[Math.floor(Math.random() * response.length)]);
      kanji.classList.add("kanji");
      document.body.appendChild(kanji)
    })