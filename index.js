const op = require('./services');

const option = process.argv[2];
const id = process.argv[3];

if(option === "character" || option === "personaje") {
	if(id !== "") {
		return op.getCharacterEpisodes(id);
	} else {
		return op.getCharacters();
	}
} else if(option === "episodes" || option === "episodios") {
	if(id !== "") {
		return op.getEpisodeCharacters(id);
	} else {
		op.getEpisodes();
	}
}
