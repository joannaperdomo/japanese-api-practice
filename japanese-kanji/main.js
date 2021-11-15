
  const API_URL = 'https://kanjiapi.dev/v1/kanji/'
  var API_GRADE = 'grade-:id'

  // Generate random kanji

  $.ajax(`${API_URL}${API_GRADE.replace(':id','1')}`).done(function (grade) {
        var kanji = document.createElement('h1');
        var newKanji = grade[Math.floor(Math.random() * grade.length)]
        kanji.innerHTML = newKanji;
        kanji.classList.add("kanji");
        document.body.appendChild(kanji);
      });


  $.ajax(`${API_URL}蛍`).done(function (kanji){
    var meaning = document.createElement('h2');
    meaning.innerHTML = kanji.kun_readings;
    document.body.appendChild(meaning);

  })
// esto es una prueba. Hola Joa