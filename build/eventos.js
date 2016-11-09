'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eventos = function () {
	function Eventos() {
		_classCallCheck(this, Eventos);

		this._lista = [];
	}

	_createClass(Eventos, [{
		key: 'on',
		value: function on(evento, callback) {
			this._lista[evento] = callback;
		}
	}, {
		key: 'emit',
		value: function emit(evento) {
			var _lista;

			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			if (this._lista[evento]) (_lista = this._lista)[evento].apply(_lista, args);
		}
	}]);

	return Eventos;
}();

// Expondo como um modulo common js


if (typeof module !== 'undefined' && module.exports) {
	module.exports = Eventos;
}