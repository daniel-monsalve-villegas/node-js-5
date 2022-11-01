'use strict'
const axios = require('axios');

async function getCharacters() {
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/character');
		console.log(res.data.results)
	} catch (err) {
		console.error(err);
	}
}

async function getEpisodes() {
	try {
		const res = await	axios.get('https://rickandmortyapi.com/api/episode');
		console.log(res.data.results);
	} catch (err) {
		console.error(err);
	}
}

async function getCharacterEpisodes(val) {
	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/character/${val}`)
		console.log(res.data);
	} catch (err) {
		console.error(err);
	}
}

async function getEpisodeCharacters(val) {
	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/episode/${val}`)
		console.log(res.data.name);
	} catch (err) {
		console.error(err);
	}
}

module.exports = { getCharacters, getEpisodes, getCharacterEpisodes, getEpisodeCharacters }

//getCharacters();
//getEpisodes();
//getCharacterEpisodes(3);
//getEpisodeCharacters(4);
