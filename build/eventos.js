'use strict';
/**
 * Classe para o tratamento de eventos próprios no estilo node (EventEmitter)
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eventos = function () {
	/**
  * Construtor da classe, inicializando a lista de eventos.
  */
	function Eventos() {
		_classCallCheck(this, Eventos);

		this._lista = [];
	}

	/**
  * Criando um evento
  *
  * @param {string} evento Nome/indice do evento a ser adicionado
  * @param {function} callback Função a ser chamada assim que o evento for disparado
  */


	_createClass(Eventos, [{
		key: 'on',
		value: function on(evento, callback) {
			//verificando se ja existe marcador para o evento
			if (!this._lista[evento]) this._lista[evento] = [];

			//agregando callback ao marcador
			this._lista[evento].push(callback);
		}

		/**
   * Emitindo um evento
   *
   * @param {string} evento Nome/indice do evento a ser disparado
   * @returns {boolean} Se o evento possui um registro ou não
   */

	}, {
		key: 'emit',
		value: function emit(evento) {
			//checando se evento existe
			if (this._lista[evento]) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				//executando cada callback atrelado ao evento
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this._lista[evento][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var callback = _step.value;

						callback.apply(undefined, args);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return true;
			}
			return false;
		}

		/**
   * Remove todos os listeners de um evento
   *
   * @param {string} evento Evento a ser zerado
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners(evento) {
			delete this._lista[evento];
		}
	}]);

	return Eventos;
}();

exports.default = Eventos;