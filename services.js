const axios = require('axios');

function getCharacters() {
axios.get('https://rickandmortyapi.com/api/character')
	.then((res) => {
		console.log(res.data.results);
	})
	.catch((err) => {
		console.error(err);
	})
}

function getEpisodes() {
	axios.get('https://rickandmortyapi.com/api/episode')
		.then((res) => {
			console.log(res.data.results);
		})
		.catch((err) => {
			console.error(err)
		})
}

function getCharacterEpisodes(val) {
	axios.get(`https://rickandmortyapi.com/api/character/${val}`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err)
		})
}

function getEpisodeCharacters(val) {
	axios.get(`https://rickandmortyapi.com/api/episode/${val}`)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err)
		})
}

getCharacterEpisodes(28)
