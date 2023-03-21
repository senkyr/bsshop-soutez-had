// identifikator a jmeno hada z konfiguracniho souboru .env
const { id, name } = require('../conf');
// povolene smery pohybu hada
const directions = ["Up", "Down", "Left", "Right"];

// nedostane data hry, vraci jmeno hada
exports.index = () => {
	return name;
}

// dostane data hry, vraci prazdnou odpoved
exports.init = (game) => {
	return '';
}

// dostane data hry, vraci smer pohybu hada
exports.move = (game) => {
	/*
		SEM UMISTUJTE SVUJ KOD
	*/
	
	// pro ukazku se vraci nahodny smer
	return {"direction": directions[Math.floor(Math.random() * 4)]};
}
