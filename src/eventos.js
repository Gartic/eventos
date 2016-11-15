'use strict';
/**
 * Classe para o tratamento de eventos próprios no estilo node (EventEmitter)
 */
class Eventos {
	/**
	 * Construtor da classe, inicializando a lista de eventos.
	 */
	constructor() {
		this._lista = [];
	}

	/**
	 * Criando um evento
	 *
	 * @param {string} evento Nome/indice do evento a ser adicionado
	 * @param {function} callback Função a ser chamada assim que o evento for disparado
	 */
	on(evento, callback) {
		this._lista[evento] = callback;
	}

	/**
	 * Emitindo um evento
	 *
	 * @param {string} evento Nome/indice do evento a ser disparado
	 */
	emit(evento, ...args) {
		if(this._lista[evento])
			this._lista[evento](...args);
	}
}

// Expondo como um modulo common js
if (typeof module !== 'undefined' && module.exports) {
	module.exports = Eventos;
}
