"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var nome = 'João';
var obj = {
  nome: nome
};
var novoObj = _objectSpread(_objectSpread({}, obj), {}, {
  sobrenome: 'Silva'
});
var novoObj2 = _objectSpread(_objectSpread({}, novoObj), {}, {
  idade: 23
});
console.log(nome);
console.log(obj);
console.log(novoObj);
console.log(novoObj2);

// Esse código não funciona em navegadores antigos, pois o mesmo não entende o código ES6. Para que o código funcione, é necessário transpilar o código ES6 para ES5. Para isso, podemos usar o Babel. 

// Tem como automatizar o processo de transpilação? Sim, usando o Babel CLI.
/* Usando: 
"babel": "babel ./main.js -o ./bundle.js --presets=@babel/preset-env -w"

Dentro do package.json, podemos criar um script para automatizar o processo de transpilação. Para isso, basta adicionar o script dentro da seção "scripts" do package.json. Onde o trecho -w(--watch) faz com que o processo de transpilação seja executado automaticamente sempre que o arquivo main.js for alterado.
*/
