'use strict'
const axios = require('axios');

async function getCharacters() {
	try {
		const res = await axios.get('https://rickandmortyapi.com/api/character');
		const resp = res.data.results;
		const names = resp.map(ele => ele.name);
		console.log(names);
	} catch (err) {
		console.error(err);
	}
}

async function getEpisodes() {
	try {
		const res = await	axios.get('https://rickandmortyapi.com/api/episode');
		const resp = res.data.results;
		const names = resp.map(ele => [ele.id, ele.name]);
		console.log(names);
	} catch (err) {
		console.error(err);
	}
}

async function getCharacterEpisodes(val) {
	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/character/${val}`)
		console.log(res.data.name);
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
