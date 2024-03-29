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
		//verificando se ja existe marcador para o evento
		if(!this._lista[evento]) this._lista[evento] = [];

		//agregando callback ao marcador
		this._lista[evento].push(callback);
	}

	/**
	 * Emitindo um evento
	 *
	 * @param {string} evento Nome/indice do evento a ser disparado
	 * @returns {boolean} Se o evento possui um registro ou não
	 */
	emit(evento, ...args) {
		//checando se evento existe
		if(this._lista[evento]) {
			//executando cada callback atrelado ao evento
			for(let callback of this._lista[evento])
				callback(...args);

			return true;
		}
		return false;
	}

	/**
	 * Adiciona um listener no topo da chamada do evento
	 *
	 * @param {string} evento Nome/indice do evento a ser adicionado
	 * @param {function} callback Função a ser chamada assim que o evento for disparado
	 */
	prependListener(evento, callback) {
		//verificando se ja existe marcador para o evento
		if(!this._lista[evento]) this._lista[evento] = [];

		//agregando callback ao marcador
		this._lista[evento].unshift(callback);
	}

	/**
	 * Remove um listener específico do evento
	 *
	 * @param {string} evento Nome/indice do evento
	 * @param {function} callback Função a ser se removida
	 */
	removeListener(evento, callback) {
		if(this._lista[evento]) {
			let pos = this._lista[evento].indexOf(callback);
			if(pos != -1)
				this._lista[evento].splice(pos,1);
		}
	}

	/**
	 * Remove todos os listeners de um evento
	 *
	 * @param {string} evento Evento a ser zerado
	 */
	removeAllListeners(evento) {
		delete this._lista[evento];
	}
}

export default Eventos;
