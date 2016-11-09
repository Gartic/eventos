'use strict';

class Eventos {
	constructor() {
		this._lista = [];
	}

	on(evento, callback) {
		this._lista[evento] = callback;
	}

	emit(evento) {
		if(this._lista[evento])
			this._lista[evento]();
	}
}

// Expondo como um modulo common js
if (typeof module !== 'undefined' && module.exports) {
	module.exports = Eventos;
}
