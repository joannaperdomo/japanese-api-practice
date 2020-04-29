

fetch('https://kanjiapi.dev/v1/kanji/grade-1').then(function (gradeKanjis) {
	if (gradeKanjis.ok) {
    var newKanji = gradeKanjis[Math.floor(Math.random() * gradeKanjis.length)]
    return newKanji
	} else {
		return Promise.reject(response);
	}
}).then(function (kanji) {

	// Store the post data to a variable
	post = kanji;

	// Fetch another API
	return fetch('https://kanjiapi.dev/v1/kanji/:id'.replace(':id', kanji))

}).then(function (kanji) {
	if (kanji.ok) {
		return kanji.json();
	} else {
		return Promise.reject(kanji);
	}
}).then(function (kanjiData) {
	console.log(post, kanjiData);
}).catch(function (error) {
	console.warn(error);
});

