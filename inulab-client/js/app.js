"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect; // PERFILES (PAQUETES)
var perfiles = [{
  id: 'P1',
  name: 'Perfil Básico',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 10',
  icon: 'fa-box',
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  price: 175,
  turnaround: '1-2 hrs'
}, {
  id: 'P2',
  name: 'Perfil CHEM 15',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 15',
  icon: 'fa-boxes-stacked',
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  price: 219,
  turnaround: '1-2 hrs'
}, {
  id: 'P3',
  name: 'Perfil Básico Renal',
  subtitle: 'Hemograma + CHEM 10 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-amber-600',
  bg: 'bg-amber-100',
  price: 330,
  turnaround: '1-2 hrs'
}, {
  id: 'P4',
  name: 'Perfil CHEM 15 Renal',
  subtitle: 'Hemograma + CHEM 15 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-orange-600',
  bg: 'bg-orange-100',
  price: 375,
  turnaround: '1-2 hrs'
}, {
  id: 'P5',
  name: 'Perfil Básico + Electrolitos',
  subtitle: 'Hemograma + CHEM 10 + LYTE 4 (Na, K, Cl)',
  icon: 'fa-bolt',
  color: 'text-yellow-600',
  bg: 'bg-yellow-100',
  price: 226,
  turnaround: '1-2 hrs'
}, {
  id: 'P6',
  name: 'Perfil Electrolitos',
  subtitle: 'LYTE 4 (Na, K, Cl) + Calcio + Fósforo',
  icon: 'fa-bolt',
  color: 'text-cyan-600',
  bg: 'bg-cyan-100',
  price: 120,
  turnaround: '1-2 hrs'
}, {
  id: 'P7',
  name: 'Perfil Hormonal',
  subtitle: 'T4 Total + TSH + Cortisol (Healvet)',
  icon: 'fa-dna',
  color: 'text-pink-600',
  bg: 'bg-pink-100',
  price: 170,
  turnaround: '2 hrs'
}, {
  id: 'P8',
  name: 'Perfil Hemoparásitos',
  subtitle: 'Hemograma + Reticulocitos + SNAP 4DX Plus',
  icon: 'fa-bugs',
  color: 'text-red-600',
  bg: 'bg-red-100',
  price: 165,
  turnaround: '1-2 hrs'
}, {
  id: 'P9',
  name: 'Perfil Felino',
  subtitle: 'Hemograma + Reticulocitos + SNAP Combo Felino',
  icon: 'fa-cat',
  color: 'text-indigo-600',
  bg: 'bg-indigo-100',
  price: 180,
  turnaround: '1-2 hrs'
}]; // EXÁMENES INDIVIDUALES POR CATEGORÍA
var categorias = [{
  nombre: 'Hematología',
  icon: 'fa-droplet',
  color: 'text-red-500',
  examenes: [{
    id: 'H1',
    name: 'Hemograma + Reticulocitos',
    subtitle: 'IDEXX',
    icon: 'fa-droplet',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 42,
    turnaround: '1 hr'
  }, {
    id: 'H2',
    name: 'Frotis de Hemoparásitos',
    subtitle: 'Capa flogística',
    icon: 'fa-microscope',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 30,
    turnaround: '6-8 hrs'
  }, {
    id: 'H3',
    name: 'Hemograma Manual',
    subtitle: null,
    icon: 'fa-hand',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 35,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Bioquímica IDEXX',
  icon: 'fa-flask',
  color: 'text-purple-500',
  examenes: [{
    id: 'B1',
    name: 'CHEM 10',
    subtitle: 'ALB, GLOB, ALKP, ALT, BUN, CREA, GLU, PT',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'B2',
    name: 'CHEM 15',
    subtitle: 'CHEM 10 + CA, CHOL, GGT, PHOS, TBIL',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 195,
    turnaround: '1 hr'
  }, {
    id: 'B3',
    name: 'Creatinina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B4',
    name: 'BUN',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B5',
    name: 'Fósforo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B6',
    name: 'Calcio',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B7',
    name: 'Amoníaco (NH3)',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 37,
    turnaround: '1 hr'
  }, {
    id: 'B8',
    name: 'Electrolitos',
    subtitle: 'LYTE 4: Na, K, Cl',
    icon: 'fa-bolt',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 66,
    turnaround: '1 hr'
  }, {
    id: 'B9',
    name: 'Colesterol',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B10',
    name: 'Triglicéridos',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 35,
    turnaround: '1 hr'
  }, {
    id: 'B11',
    name: 'Lactato',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'B12',
    name: 'SDMA',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 165,
    turnaround: '1 hr'
  }, {
    id: 'B13',
    name: 'Fructosamina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 93,
    turnaround: '1 hr'
  }, {
    id: 'B14',
    name: 'Fenobarbital',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'B15',
    name: 'Ácidos Biliares',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 125,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Endocrinología',
  icon: 'fa-dna',
  color: 'text-pink-500',
  examenes: [{
    id: 'E1',
    name: 'Cortisol',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 50,
    turnaround: '2 hrs'
  }, {
    id: 'E2',
    name: 'Progesterona',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 60,
    turnaround: '2 hrs'
  }, {
    id: 'E3',
    name: 'TSH',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 65,
    turnaround: '2 hrs'
  }, {
    id: 'E4',
    name: 'T4 Total (Healvet)',
    subtitle: 'Inmunofluorescencia',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 60,
    turnaround: '2 hrs'
  }, {
    id: 'E5',
    name: 'T4 Total (IDEXX)',
    subtitle: 'IDEXX',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 98,
    turnaround: '1 hr'
  }, {
    id: 'E6',
    name: 'T4 Libre',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 48,
    turnaround: '24 hrs'
  }, {
    id: 'E7',
    name: 'T3 Triyodotironina',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 65,
    turnaround: '24 hrs'
  }]
}, {
  nombre: 'PCR en Tiempo Real',
  icon: 'fa-virus',
  color: 'text-emerald-500',
  examenes: [{
    id: 'PCR1',
    name: 'PCR Leucemia Felina',
    subtitle: 'VILEF',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR2',
    name: 'PCR Mycoplasma Hemotrópico',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR3',
    name: 'PCR Erlichia',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR4',
    name: 'PCR Anaplasma SPP',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR5',
    name: 'PCR Leptospira Interrogans',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 200,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR6',
    name: 'PCR VIF / VILEF',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 220,
    turnaround: '24-48 hrs'
  }, {
    id: 'PCR7',
    name: 'PCR Panel Completo',
    subtitle: 'Babesia, Lyme, Erlichia, Anaplasma, Mycoplasma',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 380,
    turnaround: '24-48 hrs'
  }]
}, {
  nombre: 'Inmunoserología',
  icon: 'fa-shield-virus',
  color: 'text-blue-500',
  examenes: [{
    id: 'I1',
    name: 'SNAP Combo Felino',
    subtitle: 'VIF y VILEF - IDEXX',
    icon: 'fa-cat',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 145,
    turnaround: '1 hr'
  }, {
    id: 'I2',
    name: 'SNAP 4DX',
    subtitle: 'E. canis, Lyme, Anaplasma, Dirofilaria - IDEXX',
    icon: 'fa-dog',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 130,
    turnaround: '1 hr'
  }, {
    id: 'I3',
    name: 'SNAP cPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 145,
    turnaround: '1 hr'
  }, {
    id: 'I4',
    name: 'SNAP fPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'I5',
    name: 'Brucella Canino',
    subtitle: 'Rosa de Bengala',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 80,
    turnaround: '24 hrs'
  }, {
    id: 'I6',
    name: 'Leptospira MAT',
    subtitle: '6 Serovares - Campo oscuro',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 100,
    turnaround: '24-48 hrs'
  }, {
    id: 'I7',
    name: 'Toxoplasma IgG & IgM',
    subtitle: 'Elisa',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 160,
    turnaround: '24 hrs'
  }, {
    id: 'I8',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - Healvet',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 75,
    turnaround: '2 hrs'
  }, {
    id: 'I9',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 125,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Coagulación',
  icon: 'fa-bandage',
  color: 'text-rose-500',
  examenes: [{
    id: 'C1',
    name: 'TP + TTPA + Fibrinógeno',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 75,
    turnaround: '6 hrs'
  }, {
    id: 'C2',
    name: 'TP + TTPA + Fibrinógeno + Dímero D',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 125,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Patología',
  icon: 'fa-microscope',
  color: 'text-slate-500',
  examenes: [{
    id: 'PA1',
    name: 'Citología',
    subtitle: '3-5 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 70,
    turnaround: '3-5 días'
  }, {
    id: 'PA2',
    name: 'Histopatología',
    subtitle: '7-10 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 120,
    turnaround: '7-10 días'
  }]
}, {
  nombre: 'Uroanálisis',
  icon: 'fa-vial',
  color: 'text-yellow-500',
  examenes: [{
    id: 'U1',
    name: 'Examen de Orina Completo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 16,
    turnaround: '12 hrs'
  }, {
    id: 'U2',
    name: 'Urocultivo',
    subtitle: null,
    icon: 'fa-bacteria',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 35,
    turnaround: '3-5 días'
  }, {
    id: 'U3',
    name: 'Ex. Orina + Urocultivo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 46,
    turnaround: '3-5 días'
  }, {
    id: 'U4',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'Colorimetría',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 55,
    turnaround: '6 hrs'
  }, {
    id: 'U5',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'IDEXX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 90,
    turnaround: '1 hr'
  }, {
    id: 'U6',
    name: 'Ex. Orina Completo IDEXX',
    subtitle: 'SEDIVUE DX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 155,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Parasitología',
  icon: 'fa-bugs',
  color: 'text-orange-500',
  examenes: [{
    id: 'PR1',
    name: 'Coprológico Simple',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 15,
    turnaround: '12 hrs'
  }, {
    id: 'PR2',
    name: 'Coprológico Funcional',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 25,
    turnaround: '12 hrs'
  }, {
    id: 'PR3',
    name: 'Coprológico Completo',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 40,
    turnaround: '12-24 hrs'
  }, {
    id: 'PR4',
    name: 'Giardia Ag Cuantitativo',
    subtitle: 'Healvet',
    icon: 'fa-virus',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 70,
    turnaround: '12-24 hrs'
  }]
}, {
  nombre: 'Microbiología',
  icon: 'fa-bacteria',
  color: 'text-lime-600',
  examenes: [{
    id: 'M1',
    name: 'Cultivo + 1 Antibiograma',
    subtitle: 'Piel y Oído',
    icon: 'fa-bacteria',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    price: 45,
    turnaround: '3-5 días'
  }]
}]; // PAQUETES AMIGABLES PARA DUEÑOS (mapeados a exámenes reales)
var paquetesDuenos = [{
  id: 'P1',
  name: 'Chequeo General',
  description: 'Análisis de sangre completo para conocer el estado general de salud de tu mascota.',
  icon: 'fa-heart-pulse',
  color: 'text-rose-500',
  bg: 'bg-rose-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Básico',
  recomendado: true,
  incluye: ['Hemograma completo IDEXX', 'Conteo de Reticulocitos', 'Bioquímica CHEM 10'],
  evalua: [{
    nombre: 'Glóbulos rojos y blancos',
    desc: 'Detecta anemia, infecciones o problemas inmunológicos'
  }, {
    nombre: 'Función hepática',
    desc: 'ALT y ALKP evalúan el estado del hígado'
  }, {
    nombre: 'Función renal',
    desc: 'BUN y Creatinina miden cómo funcionan los riñones'
  }, {
    nombre: 'Glucosa',
    desc: 'Detecta diabetes o problemas metabólicos'
  }, {
    nombre: 'Proteínas',
    desc: 'Evalúa nutrición y estado general'
  }]
}, {
  id: 'P2',
  name: 'Chequeo Completo',
  description: 'Evaluación más amplia con parámetros adicionales para un análisis detallado.',
  icon: 'fa-stethoscope',
  color: 'text-blue-500',
  bg: 'bg-blue-100',
  tiempo: '24-48 horas',
  price: 320,
  examenReal: 'Perfil CHEM 15',
  recomendado: false,
  incluye: ['Hemograma completo IDEXX', 'Conteo de Reticulocitos', 'Bioquímica CHEM 15 (ampliada)'],
  evalua: [{
    nombre: 'Todo lo del Chequeo General',
    desc: 'Hemograma + función hepática y renal'
  }, {
    nombre: 'Calcio y Fósforo',
    desc: 'Importantes para huesos y metabolismo'
  }, {
    nombre: 'Colesterol',
    desc: 'Evalúa metabolismo de grasas'
  }, {
    nombre: 'GGT y Bilirrubina',
    desc: 'Evaluación hepática más profunda'
  }]
}, {
  id: 'P3',
  name: 'Control de Riñones',
  description: 'Especial para detectar problemas renales de forma temprana.',
  icon: 'fa-kidneys',
  color: 'text-amber-500',
  bg: 'bg-amber-100',
  tiempo: '24-48 horas',
  price: 450,
  examenReal: 'Perfil Básico Renal',
  recomendado: false,
  incluye: ['Hemograma completo', 'Bioquímica CHEM 10', 'SDMA IDEXX (marcador renal temprano)'],
  evalua: [{
    nombre: 'SDMA',
    desc: 'Detecta enfermedad renal hasta 9 meses antes que otros análisis'
  }, {
    nombre: 'Creatinina y BUN',
    desc: 'Marcadores clásicos de función renal'
  }, {
    nombre: 'Estado general',
    desc: 'Hemograma completo para descartar otras condiciones'
  }]
}, {
  id: 'P8',
  name: 'Mi perro está decaído',
  description: 'Detecta parásitos en sangre. Ideal si tu perro está sin energía o inapetente.',
  icon: 'fa-dog',
  color: 'text-red-500',
  bg: 'bg-red-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Hemoparásitos',
  recomendado: false,
  incluye: ['Hemograma completo + Reticulocitos', 'Test SNAP 4DX Plus IDEXX'],
  evalua: [{
    nombre: 'Ehrlichia canis',
    desc: 'Parásito transmitido por garrapatas, muy común en Perú'
  }, {
    nombre: 'Anaplasma',
    desc: 'Otra infección por garrapatas que causa decaimiento'
  }, {
    nombre: 'Enfermedad de Lyme',
    desc: 'Infección bacteriana transmitida por garrapatas'
  }, {
    nombre: 'Dirofilaria (gusano del corazón)',
    desc: 'Parásito que afecta corazón y pulmones'
  }, {
    nombre: 'Anemia',
    desc: 'El hemograma detecta si hay pérdida de glóbulos rojos'
  }]
}, {
  id: 'P9',
  name: 'Chequeo para Gatos',
  description: 'Detecta Leucemia e Inmunodeficiencia felina (VIF/VILEF).',
  icon: 'fa-cat',
  color: 'text-indigo-500',
  bg: 'bg-indigo-100',
  tiempo: '24-48 horas',
  price: 250,
  examenReal: 'Perfil Felino',
  recomendado: false,
  incluye: ['Hemograma completo + Reticulocitos', 'Test SNAP Combo Felino IDEXX'],
  evalua: [{
    nombre: 'Virus de Leucemia Felina (VILEF)',
    desc: 'Virus que afecta el sistema inmune y puede causar cáncer'
  }, {
    nombre: 'Virus de Inmunodeficiencia Felina (VIF)',
    desc: 'Similar al VIH en humanos, debilita las defensas'
  }, {
    nombre: 'Estado general',
    desc: 'El hemograma evalúa anemia y defensas'
  }]
}, {
  id: 'U1',
  name: 'Análisis de Orina Básico',
  description: 'Para problemas urinarios: orina frecuente, con sangre o mal olor.',
  icon: 'fa-droplet',
  color: 'text-yellow-500',
  bg: 'bg-yellow-100',
  tiempo: '24 horas',
  price: 50,
  examenReal: 'Examen de Orina Completo',
  recomendado: false,
  incluye: ['Análisis físico (color, olor, aspecto)', 'Análisis químico (tira reactiva)', 'Análisis microscópico del sedimento'],
  evalua: [{
    nombre: 'Infecciones urinarias',
    desc: 'Detecta bacterias, glóbulos blancos'
  }, {
    nombre: 'Cristales y cálculos',
    desc: 'Identifica formación de piedras en vejiga o riñones'
  }, {
    nombre: 'Sangre en orina',
    desc: 'Puede indicar infección, trauma o tumores'
  }, {
    nombre: 'Glucosa en orina',
    desc: 'Puede indicar diabetes'
  }, {
    nombre: 'Proteínas',
    desc: 'Evalúa posible daño renal'
  }]
}, {
  id: 'U2',
  name: 'Análisis de Orina con Urocultivo',
  description: 'Análisis completo + cultivo bacteriano para identificar infecciones y el antibiótico ideal.',
  icon: 'fa-flask-vial',
  color: 'text-teal-500',
  bg: 'bg-teal-100',
  tiempo: '3-5 días',
  price: 90,
  examenReal: 'Orina Completa + Urocultivo',
  recomendado: false,
  incluye: ['Análisis de orina completo (físico, químico, sedimento)', 'Urocultivo (cultivo bacteriano)', 'Antibiograma (sensibilidad a antibióticos)'],
  evalua: [{
    nombre: 'Identificación bacteriana',
    desc: 'Detecta exactamente qué bacteria causa la infección urinaria'
  }, {
    nombre: 'Antibiograma',
    desc: 'Determina qué antibiótico es más efectivo para el tratamiento'
  }, {
    nombre: 'Infecciones recurrentes',
    desc: 'Ideal cuando las infecciones urinarias vuelven tras el tratamiento'
  }, {
    nombre: '¿Por qué demora 3-5 días?',
    desc: 'La muestra se coloca en un medio de cultivo a 37°C para que las bacterias crezcan. Este proceso de incubación toma 24-48 horas. Si el cultivo es positivo, se realizan pruebas adicionales de sensibilidad antibiótica (antibiograma), lo que requiere 1-2 días más.'
  }]
}, {
  id: 'U3',
  name: 'Análisis de Orina PRO IDEXX',
  description: 'El análisis más avanzado con tecnología SediVue de IDEXX. Resultados en 1 hora.',
  icon: 'fa-microscope',
  color: 'text-cyan-500',
  bg: 'bg-cyan-100',
  tiempo: '1 hora',
  price: 150,
  examenReal: 'Urianálisis IDEXX SediVue',
  recomendado: false,
  incluye: ['Análisis químico con tira VetLab UA', 'Sedimento automatizado con SediVue Dx', 'Imágenes digitales de alta resolución con IA'],
  evalua: [{
    nombre: 'Tecnología SediVue Dx',
    desc: 'Analizador automatizado de IDEXX que usa inteligencia artificial y redes neuronales para identificar hasta 13 elementos en el sedimento urinario con precisión superior al análisis manual'
  }, {
    nombre: 'Imágenes digitales HD',
    desc: 'Captura más de 45 campos de alta potencia con fotografías de cada hallazgo, permitiendo al veterinario ver exactamente lo que se encontró'
  }, {
    nombre: 'Detección avanzada de bacterias',
    desc: 'La tecnología de IA detecta bacterias con mayor sensibilidad que la microscopía tradicional'
  }, {
    nombre: 'Resultados en minutos',
    desc: 'Al ser automatizado, los resultados están listos en aproximadamente 3 minutos, permitiendo decisiones clínicas inmediatas sin esperar horas o días'
  }, {
    nombre: 'Mayor precisión',
    desc: 'Elimina la variabilidad del análisis manual: no depende de la experiencia del técnico ni de la preparación de la muestra centrifugada'
  }]
}, {
  id: 'PR3',
  name: 'Examen de Heces',
  description: 'Detecta parásitos intestinales. Recomendado cada 6 meses.',
  icon: 'fa-poop',
  color: 'text-orange-500',
  bg: 'bg-orange-100',
  tiempo: '24 horas',
  price: 90,
  examenReal: 'Coprológico Completo',
  recomendado: false,
  incluye: ['Examen macroscópico', 'Examen microscópico directo', 'Técnicas de flotación y sedimentación'],
  evalua: [{
    nombre: 'Lombrices (Áscaris)',
    desc: 'Parásitos redondos comunes en cachorros'
  }, {
    nombre: 'Tenias',
    desc: 'Parásitos planos transmitidos por pulgas'
  }, {
    nombre: 'Giardia',
    desc: 'Protozoario que causa diarrea crónica'
  }, {
    nombre: 'Coccidios',
    desc: 'Parásitos microscópicos que afectan intestino'
  }, {
    nombre: 'Ancylostomas',
    desc: 'Parásitos que causan anemia y diarrea con sangre'
  }]
}, {
  id: 'M1',
  name: 'Problemas de Piel u Oídos',
  description: 'Para infecciones de piel u oídos con antibiograma incluido.',
  icon: 'fa-hand-dots',
  color: 'text-lime-500',
  bg: 'bg-lime-100',
  tiempo: '3-5 días',
  price: 90,
  examenReal: 'Cultivo + 1 Antibiograma',
  recomendado: false,
  incluye: ['Cultivo bacteriano', 'Identificación de la bacteria', 'Antibiograma (prueba de sensibilidad)'],
  evalua: [{
    nombre: 'Tipo de bacteria',
    desc: 'Identifica exactamente qué microorganismo causa la infección'
  }, {
    nombre: 'Resistencia antibiótica',
    desc: 'Determina a qué antibióticos es sensible o resistente'
  }, {
    nombre: 'Mejor tratamiento',
    desc: 'El antibiograma indica qué medicamento funcionará mejor'
  }]
}];
var tomaMuestraPrecios = {
  'santiago de surco': {
    normal: 40,
    promo: 0
  },
  'miraflores': {
    normal: 50,
    promo: 20
  },
  'san borja': {
    normal: 50,
    promo: 20
  },
  'san isidro': {
    normal: 50,
    promo: 20
  },
  'surquillo': {
    normal: 50,
    promo: 20
  },
  'barranco': {
    normal: 50,
    promo: 20
  },
  'la molina': {
    normal: 50,
    promo: 20
  },
  'chorrillos': {
    normal: 50,
    promo: 20
  },
  'magdalena del mar': {
    normal: 65,
    promo: 35
  },
  'magdalena': {
    normal: 65,
    promo: 35
  },
  'san miguel': {
    normal: 65,
    promo: 35
  },
  'pueblo libre': {
    normal: 65,
    promo: 35
  },
  'jesus maria': {
    normal: 65,
    promo: 35
  },
  'jesús maría': {
    normal: 65,
    promo: 35
  },
  'lince': {
    normal: 65,
    promo: 35
  },
  'breña': {
    normal: 65,
    promo: 35
  },
  'brena': {
    normal: 65,
    promo: 35
  },
  'la victoria': {
    normal: 65,
    promo: 35
  },
  'san luis': {
    normal: 65,
    promo: 35
  },
  'cercado de lima': {
    normal: 65,
    promo: 35
  },
  'lima': {
    normal: 65,
    promo: 35
  },
  'santa anita': {
    normal: 65,
    promo: 35
  },
  'el agustino': {
    normal: 65,
    promo: 35
  },
  'rimac': {
    normal: 65,
    promo: 35
  },
  'rímac': {
    normal: 65,
    promo: 35
  },
  'ate': {
    normal: 65,
    promo: 35
  },
  'comas': {
    normal: 80,
    promo: 50
  },
  'los olivos': {
    normal: 80,
    promo: 50
  },
  'independencia': {
    normal: 80,
    promo: 50
  },
  'san martin de porres': {
    normal: 80,
    promo: 50
  },
  'san martín de porres': {
    normal: 80,
    promo: 50
  },
  'villa maria del triunfo': {
    normal: 80,
    promo: 50
  },
  'villa maría del triunfo': {
    normal: 80,
    promo: 50
  },
  'san juan de miraflores': {
    normal: 80,
    promo: 50
  },
  'villa el salvador': {
    normal: 80,
    promo: 50
  },
  'pachacamac': {
    normal: 80,
    promo: 50
  },
  'pachacámac': {
    normal: 80,
    promo: 50
  },
  'cieneguilla': {
    normal: 80,
    promo: 50
  },
  'callao': {
    normal: 80,
    promo: 50
  },
  'ventanilla': {
    normal: 80,
    promo: 50
  },
  'mi peru': {
    normal: 80,
    promo: 50
  },
  'mi perú': {
    normal: 80,
    promo: 50
  },
  'puente piedra': {
    normal: 100,
    promo: 70
  },
  'carabayllo': {
    normal: 100,
    promo: 70
  },
  'chaclacayo': {
    normal: 100,
    promo: 70
  },
  'lurigancho': {
    normal: 100,
    promo: 70
  },
  'chosica': {
    normal: 100,
    promo: 70
  },
  'ancon': {
    normal: 120,
    promo: 90
  },
  'ancón': {
    normal: 120,
    promo: 90
  },
  'santa rosa': {
    normal: 120,
    promo: 90
  },
  'lurin': {
    normal: 120,
    promo: 90
  },
  'lurín': {
    normal: 120,
    promo: 90
  },
  'punta hermosa': {
    normal: 120,
    promo: 90
  },
  'punta negra': {
    normal: 120,
    promo: 90
  },
  'san bartolo': {
    normal: 120,
    promo: 90
  },
  'santa maria del mar': {
    normal: 120,
    promo: 90
  },
  'santa maría del mar': {
    normal: 120,
    promo: 90
  },
  'pucusana': {
    normal: 120,
    promo: 90
  }
};
var perfilesDuenos = [{
  id: 'DP1',
  name: 'Perfil Básico',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 10',
  icon: 'fa-box',
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  price: 250,
  turnaround: '1-2 hrs'
}, {
  id: 'DP2',
  name: 'Perfil CHEM 15',
  subtitle: 'Hemograma IDEXX + Reticulocitos + CHEM 15',
  icon: 'fa-boxes-stacked',
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  price: 320,
  turnaround: '1-2 hrs'
}, {
  id: 'DP3',
  name: 'Perfil Básico Renal',
  subtitle: 'Hemograma + CHEM 10 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-amber-600',
  bg: 'bg-amber-100',
  price: 400,
  turnaround: '1-2 hrs'
}, {
  id: 'DP4',
  name: 'Perfil CHEM 15 Renal',
  subtitle: 'Hemograma + CHEM 15 + SDMA IDEXX',
  icon: 'fa-kidneys',
  color: 'text-orange-600',
  bg: 'bg-orange-100',
  price: 450,
  turnaround: '1-2 hrs'
}, {
  id: 'DP5',
  name: 'Perfil Básico + Electrolitos',
  subtitle: 'Hemograma + CHEM 10 + LYTE 4 (Na, K, Cl)',
  icon: 'fa-bolt',
  color: 'text-yellow-600',
  bg: 'bg-yellow-100',
  price: 350,
  turnaround: '1-2 hrs'
}, {
  id: 'DP6',
  name: 'Perfil Electrolitos',
  subtitle: 'LYTE 4 (Na, K, Cl) + Calcio + Fósforo',
  icon: 'fa-bolt',
  color: 'text-cyan-600',
  bg: 'bg-cyan-100',
  price: 220,
  turnaround: '1-2 hrs'
}, {
  id: 'DP7',
  name: 'Perfil Hormonal',
  subtitle: 'T4 Total + TSH + Cortisol (Healvet)',
  icon: 'fa-dna',
  color: 'text-pink-600',
  bg: 'bg-pink-100',
  price: 300,
  turnaround: '2 hrs'
}, {
  id: 'DP8',
  name: 'Perfil Hemoparásitos',
  subtitle: 'Hemograma + Reticulocitos + SNAP 4DX Plus',
  icon: 'fa-bugs',
  color: 'text-red-600',
  bg: 'bg-red-100',
  price: 250,
  turnaround: '1-2 hrs'
}, {
  id: 'DP9',
  name: 'Perfil Felino',
  subtitle: 'Hemograma + Reticulocitos + SNAP Combo Felino',
  icon: 'fa-cat',
  color: 'text-indigo-600',
  bg: 'bg-indigo-100',
  price: 250,
  turnaround: '1-2 hrs'
}];
var categoriasDuenos = [{
  nombre: 'Hematología',
  icon: 'fa-droplet',
  color: 'text-red-500',
  examenes: [{
    id: 'DH1',
    name: 'Hemograma + Reticulocitos',
    subtitle: 'IDEXX',
    icon: 'fa-droplet',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 70,
    turnaround: '1 hr'
  }, {
    id: 'DH2',
    name: 'Frotis de Hemoparásitos',
    subtitle: 'Capa flogística',
    icon: 'fa-microscope',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 60,
    turnaround: '6-8 hrs'
  }, {
    id: 'DH3',
    name: 'Hemograma Manual',
    subtitle: null,
    icon: 'fa-hand',
    color: 'text-red-500',
    bg: 'bg-red-50',
    price: 65,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Bioquímica IDEXX',
  icon: 'fa-flask',
  color: 'text-purple-500',
  examenes: [{
    id: 'DB1',
    name: 'CHEM 10',
    subtitle: 'ALB, GLOB, ALKP, ALT, BUN, CREA, GLU, PT',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 195,
    turnaround: '1 hr'
  }, {
    id: 'DB2',
    name: 'CHEM 15',
    subtitle: 'CHEM 10 + CA, CHOL, GGT, PHOS, TBIL',
    icon: 'fa-flask',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 270,
    turnaround: '1 hr'
  }, {
    id: 'DB3',
    name: 'Creatinina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB4',
    name: 'BUN',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB5',
    name: 'Fósforo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB6',
    name: 'Calcio',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB7',
    name: 'Amoníaco (NH3)',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 75,
    turnaround: '1 hr'
  }, {
    id: 'DB8',
    name: 'Electrolitos',
    subtitle: 'LYTE 4: Na, K, Cl',
    icon: 'fa-bolt',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 120,
    turnaround: '1 hr'
  }, {
    id: 'DB9',
    name: 'Colesterol',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB10',
    name: 'Triglicéridos',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 45,
    turnaround: '1 hr'
  }, {
    id: 'DB11',
    name: 'Lactato',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 65,
    turnaround: '1 hr'
  }, {
    id: 'DB12',
    name: 'SDMA',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DB13',
    name: 'Fructosamina',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DB14',
    name: 'Fenobarbital',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DB15',
    name: 'Ácidos Biliares',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    price: 220,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Endocrinología',
  icon: 'fa-dna',
  color: 'text-pink-500',
  examenes: [{
    id: 'DE1',
    name: 'Cortisol',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 90,
    turnaround: '2 hrs'
  }, {
    id: 'DE2',
    name: 'Progesterona',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 95,
    turnaround: '2 hrs'
  }, {
    id: 'DE3',
    name: 'TSH',
    subtitle: 'Inmunofluorescencia - Healvet',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 98,
    turnaround: '2 hrs'
  }, {
    id: 'DE4',
    name: 'T4 Total (Healvet)',
    subtitle: 'Inmunofluorescencia',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 110,
    turnaround: '2 hrs'
  }, {
    id: 'DE5',
    name: 'T4 Total (IDEXX)',
    subtitle: 'IDEXX',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DE6',
    name: 'T4 Libre',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 90,
    turnaround: '24 hrs'
  }, {
    id: 'DE7',
    name: 'T3 Triyodotironina',
    subtitle: 'Elisa',
    icon: 'fa-dna',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    price: 95,
    turnaround: '24 hrs'
  }]
}, {
  nombre: 'PCR en Tiempo Real',
  icon: 'fa-virus',
  color: 'text-emerald-500',
  examenes: [{
    id: 'DPCR1',
    name: 'PCR Leucemia Felina',
    subtitle: 'VILEF',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR2',
    name: 'PCR Mycoplasma Hemotrópico',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR3',
    name: 'PCR Erlichia',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 390,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR4',
    name: 'PCR Anaplasma SPP',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 390,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR5',
    name: 'PCR Leptospira Interrogans',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 400,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR6',
    name: 'PCR VIF / VILEF',
    subtitle: null,
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 420,
    turnaround: '24-48 hrs'
  }, {
    id: 'DPCR7',
    name: 'PCR Panel Completo',
    subtitle: 'Babesia, Lyme, Erlichia, Anaplasma, Mycoplasma',
    icon: 'fa-virus',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    price: 480,
    turnaround: '24-48 hrs'
  }]
}, {
  nombre: 'Inmunoserología',
  icon: 'fa-shield-virus',
  color: 'text-blue-500',
  examenes: [{
    id: 'DI1',
    name: 'SNAP Combo Felino',
    subtitle: 'VIF y VILEF - IDEXX',
    icon: 'fa-cat',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 240,
    turnaround: '1 hr'
  }, {
    id: 'DI2',
    name: 'SNAP 4DX',
    subtitle: 'E. canis, Lyme, Anaplasma, Dirofilaria - IDEXX',
    icon: 'fa-dog',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 220,
    turnaround: '1 hr'
  }, {
    id: 'DI3',
    name: 'SNAP cPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '1 hr'
  }, {
    id: 'DI4',
    name: 'SNAP fPL Cualitativo',
    subtitle: 'IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 140,
    turnaround: '1 hr'
  }, {
    id: 'DI5',
    name: 'Brucella Canino',
    subtitle: 'Rosa de Bengala',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '24 hrs'
  }, {
    id: 'DI6',
    name: 'Leptospira MAT',
    subtitle: '6 Serovares - Campo oscuro',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 180,
    turnaround: '24-48 hrs'
  }, {
    id: 'DI7',
    name: 'Toxoplasma IgG & IgM',
    subtitle: 'Elisa',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 300,
    turnaround: '24 hrs'
  }, {
    id: 'DI8',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - Healvet',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 120,
    turnaround: '2 hrs'
  }, {
    id: 'DI9',
    name: 'Lipasa Canina/Felina',
    subtitle: 'Cuantitativa - IDEXX',
    icon: 'fa-shield-virus',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    price: 190,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Coagulación',
  icon: 'fa-bandage',
  color: 'text-rose-500',
  examenes: [{
    id: 'DC1',
    name: 'TP + TTPA + Fibrinógeno',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 150,
    turnaround: '6 hrs'
  }, {
    id: 'DC2',
    name: 'TP + TTPA + Fibrinógeno + Dímero D',
    subtitle: null,
    icon: 'fa-bandage',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    price: 250,
    turnaround: '6 hrs'
  }]
}, {
  nombre: 'Patología',
  icon: 'fa-microscope',
  color: 'text-slate-500',
  examenes: [{
    id: 'DPA1',
    name: 'Citología',
    subtitle: '3-5 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 130,
    turnaround: '3-5 días'
  }, {
    id: 'DPA2',
    name: 'Histopatología',
    subtitle: '7-10 días hábiles',
    icon: 'fa-microscope',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    price: 250,
    turnaround: '7-10 días'
  }]
}, {
  nombre: 'Uroanálisis',
  icon: 'fa-vial',
  color: 'text-yellow-500',
  examenes: [{
    id: 'DU1',
    name: 'Examen de Orina Completo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 45,
    turnaround: '12 hrs'
  }, {
    id: 'DU2',
    name: 'Urocultivo',
    subtitle: null,
    icon: 'fa-bacteria',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 50,
    turnaround: '3-5 días'
  }, {
    id: 'DU3',
    name: 'Ex. Orina + Urocultivo',
    subtitle: null,
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 83,
    turnaround: '3-5 días'
  }, {
    id: 'DU4',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'Colorimetría',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 90,
    turnaround: '6 hrs'
  }, {
    id: 'DU5',
    name: 'Cociente Proteína/Creatinina UPC',
    subtitle: 'IDEXX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 83,
    turnaround: '3-5 días'
  }, {
    id: 'DU6',
    name: 'Ex. Orina Completo IDEXX',
    subtitle: 'SEDIVUE DX',
    icon: 'fa-vial',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    price: 155,
    turnaround: '1 hr'
  }]
}, {
  nombre: 'Parasitología',
  icon: 'fa-bugs',
  color: 'text-orange-500',
  examenes: [{
    id: 'DPR1',
    name: 'Coprológico Simple',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 45,
    turnaround: '12 hrs'
  }, {
    id: 'DPR2',
    name: 'Coprológico Funcional',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 55,
    turnaround: '12 hrs'
  }, {
    id: 'DPR3',
    name: 'Coprológico Completo',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 80,
    turnaround: '12-24 hrs'
  }, {
    id: 'DPR4',
    name: 'Coprológico Seriado',
    subtitle: null,
    icon: 'fa-poop',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    price: 95,
    turnaround: '12-24 hrs'
  }]
}, {
  nombre: 'Microbiología',
  icon: 'fa-bacteria',
  color: 'text-lime-600',
  examenes: [{
    id: 'DM1',
    name: 'Cultivo + 1 Antibiograma',
    subtitle: 'Piel y Oído',
    icon: 'fa-bacteria',
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    price: 120,
    turnaround: '3-5 días'
  }]
}];
var getTomaMuestraPrice = function getTomaMuestraPrice(district, examTotal) {
  if (!district) return null;
  var key = district.toLowerCase().trim();
  var precios = tomaMuestraPrecios[key];
  if (!precios) return null;
  return examTotal >= 250 ? precios.promo : precios.normal;
};
var todosLosExamenes = [].concat(perfiles, _toConsumableArray(categorias.flatMap(function (cat) {
  return cat.examenes;
})));
var animalTypes = [{
  id: 'perro',
  name: 'Perro',
  icon: '🐕'
}, {
  id: 'gato',
  name: 'Gato',
  icon: '🐱'
}, {
  id: 'caballo',
  name: 'Caballo',
  icon: '🐴'
}];
var formatAge = function formatAge(pet) {
  // Nuevo formato: ageValue + ageUnit
  if (pet.ageValue !== undefined && pet.ageUnit) {
    var val = pet.ageValue;
    if (pet.ageUnit === 'años') return "".concat(val, " a\xF1o").concat(val !== 1 ? 's' : '');
    return "".concat(val, " mes").concat(val !== 1 ? 'es' : '');
  } // Formato anterior (compatibilidad): ageYears + ageMonths
  if (pet.ageYears !== undefined || pet.ageMonths !== undefined) {
    var years = pet.ageYears || 0;
    var months = pet.ageMonths || 0;
    if (years > 0 && months > 0) return "".concat(years, " a\xF1o").concat(years > 1 ? 's' : '', " ").concat(months, " mes").concat(months > 1 ? 'es' : '');
    if (years > 0) return "".concat(years, " a\xF1o").concat(years > 1 ? 's' : '');
    if (months > 0) return "".concat(months, " mes").concat(months > 1 ? 'es' : '');
  } // Formato más antiguo: solo age (años)
  if (pet.age !== undefined) return "".concat(pet.age, " a\xF1o").concat(pet.age !== 1 ? 's' : '');
  return 'Edad no especificada';
}; // Función para búsqueda flexible (maneja variaciones de género)
var flexibleSearch = function flexibleSearch(text, searchTerm) {
  var t = text.toLowerCase();
  var s = searchTerm.toLowerCase().trim();
  if (t.includes(s)) return true; // Variaciones de género
  var variations = {
    'canino': ['canina', 'caninos', 'caninas'],
    'canina': ['canino', 'caninos', 'caninas'],
    'felino': ['felina', 'felinos', 'felinas'],
    'felina': ['felino', 'felinos', 'felinas'],
    'completo': ['completa', 'completos', 'completas'],
    'completa': ['completo', 'completos', 'completas'],
    'cuantitativo': ['cuantitativa', 'cuantitativos', 'cuantitativas'],
    'cuantitativa': ['cuantitativo', 'cuantitativos', 'cuantitativas'],
    'cualitativo': ['cualitativa', 'cualitativos', 'cualitativas'],
    'cualitativa': ['cualitativo', 'cualitativos', 'cualitativas'],
    'basico': ['basica', 'básico', 'básica'],
    'básico': ['básica', 'basico', 'basica'],
    'renal': ['renales'],
    'hormonal': ['hormonales'],
    'funcional': ['funcionales'],
    'simple': ['simples']
  };
  if (variations[s]) {
    var _iterator = _createForOfIteratorHelper(variations[s]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var variant = _step.value;
        if (t.includes(variant)) return true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return false;
}; // =============================================================================
// API SERVICE LAYER
// Configurar BASE_URL según el entorno del backend
// =============================================================================
var API_BASE = "https://inulab-backend-production.up.railway.app/api";
function cargarPreciosDesdeAPI() {
  return _cargarPreciosDesdeAPI.apply(this, arguments);
}
function _cargarPreciosDesdeAPI() {
  _cargarPreciosDesdeAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
    var token, headers, response, precios, _t1;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.p = _context23.n) {
        case 0:
          _context23.p = 0;
          token = localStorage.getItem('inulab_token');
          headers = token ? {
            'Authorization': "Bearer ".concat(token)
          } : {};
          _context23.n = 1;
          return fetch("".concat(API_BASE, "/Precios"), {
            headers: headers
          });
        case 1:
          response = _context23.v;
          if (response.ok) {
            _context23.n = 2;
            break;
          }
          return _context23.a(2);
        case 2:
          _context23.n = 3;
          return response.json();
        case 3:
          precios = _context23.v;
          precios.forEach(function (p) {
            var id = p.examenId;
            var precio = p.precio;
            var tipo = p.tipoUsuario;
            if (tipo === 'medico') {
              // Actualizar en perfiles (médico)
              var perfil = perfiles.find(function (x) {
                return x.id === id;
              });
              if (perfil) {
                perfil.price = precio;
                return;
              } // Actualizar en categorias (médico)
              var _iterator2 = _createForOfIteratorHelper(categorias),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var cat = _step2.value;
                  var exam = cat.examenes.find(function (x) {
                    return x.id === id;
                  });
                  if (exam) {
                    exam.price = precio;
                    return;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            if (tipo === 'dueno') {
              // Actualizar en paquetesDuenos (por id que coincide con el examen)
              var paquete = paquetesDuenos.find(function (x) {
                return x.id === id;
              });
              if (paquete) {
                paquete.price = precio;
              } // Actualizar en perfilesDuenos
              var _perfil = perfilesDuenos.find(function (x) {
                return x.id === id;
              });
              if (_perfil) {
                _perfil.price = precio;
                return;
              } // Actualizar en categoriasDuenos
              var _iterator3 = _createForOfIteratorHelper(categoriasDuenos),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _cat = _step3.value;
                  var _exam = _cat.examenes.find(function (x) {
                    return x.id === id;
                  });
                  if (_exam) {
                    _exam.price = precio;
                    return;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          });
          console.log('✅ Precios cargados desde API:', precios.length, 'registros');
          _context23.n = 5;
          break;
        case 4:
          _context23.p = 4;
          _t1 = _context23.v;
          console.warn('⚠️ No se pudieron cargar precios desde API, usando valores por defecto:', _t1);
        case 5:
          return _context23.a(2);
      }
    }, _callee23, null, [[0, 4]]);
  }));
  return _cargarPreciosDesdeAPI.apply(this, arguments);
}
cargarPreciosDesdeAPI();
var getToken = function getToken() {
  return localStorage.getItem('inulab_token');
};
var api = {
  // Headers con JWT
  _headers: function _headers() {
    var h = {
      'Content-Type': 'application/json'
    };
    var token = getToken();
    if (token) h['Authorization'] = "Bearer ".concat(token);
    return h;
  },
  // ---------- AUTH ----------
  login: function login(username, password) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var res, data;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return fetch("".concat(API_BASE, "/Auth/login"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            });
          case 1:
            res = _context.v;
            if (res.ok) {
              _context.n = 2;
              break;
            }
            throw new Error('Usuario o contraseña incorrectos');
          case 2:
            _context.n = 3;
            return res.json();
          case 3:
            data = _context.v;
            console.log("DATA LOGIN:", data);
            localStorage.setItem('inulab_token', data.token);
            return _context.a(2, data);
        }
      }, _callee);
    }))();
  },
  getMe: function getMe() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var res;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return fetch("".concat(API_BASE, "/Auth/me"), {
              headers: _this._headers()
            });
          case 1:
            res = _context2.v;
            if (res.ok) {
              _context2.n = 2;
              break;
            }
            throw new Error('No autenticado');
          case 2:
            _context2.n = 3;
            return res.json();
          case 3:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }))();
  },
  logout: function logout() {
    localStorage.removeItem('inulab_token');
  },
  // ---------- PERFIL ----------
  updateProfile: function updateProfile(profileData) {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var res, err;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return fetch("".concat(API_BASE, "/Users/profile"), {
              method: 'PUT',
              headers: _this2._headers(),
              body: JSON.stringify(profileData)
            });
          case 1:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 3;
              break;
            }
            _context3.n = 2;
            return res.json();
          case 2:
            err = _context3.v;
            throw new Error(err.error || 'Error al actualizar perfil');
          case 3:
            _context3.n = 4;
            return res.json();
          case 4:
            return _context3.a(2, _context3.v);
        }
      }, _callee3);
    }))();
  },
  // ---------- MASCOTAS ----------
  createPet: function createPet(petData) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var res;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return fetch("".concat(API_BASE, "/Pets"), {
              method: 'POST',
              headers: _this3._headers(),
              body: JSON.stringify(petData)
            });
          case 1:
            res = _context4.v;
            if (res.ok) {
              _context4.n = 2;
              break;
            }
            throw new Error('Error al crear mascota');
          case 2:
            _context4.n = 3;
            return res.json();
          case 3:
            return _context4.a(2, _context4.v);
        }
      }, _callee4);
    }))();
  },
  getPets: function getPets() {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var res;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return fetch("".concat(API_BASE, "/Pets"), {
              headers: _this4._headers()
            });
          case 1:
            res = _context5.v;
            if (res.ok) {
              _context5.n = 2;
              break;
            }
            throw new Error('Error al obtener mascotas');
          case 2:
            _context5.n = 3;
            return res.json();
          case 3:
            return _context5.a(2, _context5.v);
        }
      }, _callee5);
    }))();
  },
  // ---------- DIRECCIONES ----------
  createAddress: function createAddress(addressData) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var res;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return fetch("".concat(API_BASE, "/Addresses"), {
              method: 'POST',
              headers: _this5._headers(),
              body: JSON.stringify(addressData)
            });
          case 1:
            res = _context6.v;
            if (res.ok) {
              _context6.n = 2;
              break;
            }
            throw new Error('Error al crear dirección');
          case 2:
            _context6.n = 3;
            return res.json();
          case 3:
            return _context6.a(2, _context6.v);
        }
      }, _callee6);
    }))();
  },
  getAddresses: function getAddresses() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var res;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return fetch("".concat(API_BASE, "/Addresses"), {
              headers: _this6._headers()
            });
          case 1:
            res = _context7.v;
            if (res.ok) {
              _context7.n = 2;
              break;
            }
            throw new Error('Error al obtener direcciones');
          case 2:
            _context7.n = 3;
            return res.json();
          case 3:
            return _context7.a(2, _context7.v);
        }
      }, _callee7);
    }))();
  },
  // ---------- PEDIDOS ----------
  createOrder: function createOrder(orderData) {
    var _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var res;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            console.log("ADDRESS ID QUE ENVÍAS:", orderData.addressId);
            _context8.n = 1;
            return fetch("".concat(API_BASE, "/Orders"), {
              method: 'POST',
              headers: _this7._headers(),
              body: JSON.stringify(orderData)
            });
          case 1:
            res = _context8.v;
            if (res.ok) {
              _context8.n = 2;
              break;
            }
            throw new Error('Error al crear pedido');
          case 2:
            _context8.n = 3;
            return res.json();
          case 3:
            return _context8.a(2, _context8.v);
        }
      }, _callee8);
    }))();
  },
  getOrders: function getOrders() {
    var _this8 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var res, data;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return fetch("".concat(API_BASE, "/Orders"), {
              headers: _this8._headers()
            });
          case 1:
            res = _context9.v;
            if (res.ok) {
              _context9.n = 2;
              break;
            }
            throw new Error('Error al obtener pedidos');
          case 2:
            _context9.n = 3;
            return res.json();
          case 3:
            data = _context9.v;
            console.log('RAW orders data:', data);
            return _context9.a(2, data.orders);
        }
      }, _callee9);
    }))();
  },
  // ---------- RESULTADOS ----------
  markExamSeen: function markExamSeen(examId) {
    var _this9 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var res;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return fetch("".concat(API_BASE, "/Exams/").concat(examId, "/seen"), {
              method: 'PUT',
              headers: _this9._headers()
            });
          case 1:
            res = _context0.v;
            if (res.ok) {
              _context0.n = 2;
              break;
            }
            throw new Error('Error al marcar examen');
          case 2:
            _context0.n = 3;
            return res.json();
          case 3:
            return _context0.a(2, _context0.v);
        }
      }, _callee0);
    }))();
  },
  // ---------- CONFIG ----------
  getConfig: function getConfig() {
    var _this0 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var res;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return fetch("".concat(API_BASE, "/Config"), {
              headers: _this0._headers()
            });
          case 1:
            res = _context1.v;
            if (res.ok) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2, {
              nightMode: false
            });
          case 2:
            _context1.n = 3;
            return res.json();
          case 3:
            return _context1.a(2, _context1.v);
        }
      }, _callee1);
    }))();
  }
};
function checkAuth() {
  return _checkAuth.apply(this, arguments);
}
function _checkAuth() {
  _checkAuth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
    var token, _t10;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.p = _context24.n) {
        case 0:
          token = localStorage.getItem('inulab_token');
          if (token) {
            _context24.n = 1;
            break;
          }
          console.log("No logueado");
          return _context24.a(2);
        case 1:
          _context24.p = 1;
          _context24.n = 2;
          return api.getMe();
        case 2:
          _context24.n = 4;
          break;
        case 3:
          _context24.p = 3;
          _t10 = _context24.v;
          console.log("Token inválido");
          localStorage.removeItem('inulab_token');
        case 4:
          return _context24.a(2);
      }
    }, _callee24, null, [[1, 3]]);
  }));
  return _checkAuth.apply(this, arguments);
}
checkAuth(); // =============================================================================
// NOTA SOBRE PDFs:
// El frontend actual usa exam.pdfData para mostrar PDFs (puede ser base64 o URL).
// El backend puede devolver pdfData como URL (ej: "https://storage.../result.pdf")
// y los iframes/links funcionarán igual. También puede usar un campo pdfUrl.
// Si se usa pdfUrl, hacer find-and-replace de "pdfData" → "pdfUrl" en el render.
// Para invoicePdf es lo mismo: puede ser URL directa al comprobante PDF.
// =============================================================================
// SwipeToDelete — slide left to reveal red delete zone
var SwipeToDelete = function SwipeToDelete(_ref) {
  var children = _ref.children,
    onDelete = _ref.onDelete;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dx = _React$useState2[0],
    setDx = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    startX = _React$useState4[0],
    setStartX = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    startY = _React$useState6[0],
    setStartY = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    swiped = _React$useState8[0],
    setSwiped = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    isScrolling = _React$useState0[0],
    setIsScrolling = _React$useState0[1];
  var revealWidth = 76;
  var onTouchStart = function onTouchStart(e) {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setIsScrolling(false);
  };
  var onTouchMove = function onTouchMove(e) {
    if (startX === null) return;
    var deltaX = e.touches[0].clientX - startX;
    var deltaY = e.touches[0].clientY - startY;
    if (!isScrolling && Math.abs(deltaY) > Math.abs(deltaX) + 4) {
      setIsScrolling(true);
      return;
    }
    if (isScrolling) return;
    if (deltaX < 0) {
      e.preventDefault();
      var base = swiped ? -revealWidth : 0;
      setDx(Math.max(base + deltaX, -revealWidth));
    } else if (swiped) {
      setDx(Math.min(0, -revealWidth + deltaX));
    }
  };
  var onTouchEnd = function onTouchEnd() {
    if (!isScrolling) {
      if (dx <= -revealWidth / 2) {
        setSwiped(true);
        setDx(-revealWidth);
      } else {
        setSwiped(false);
        setDx(0);
      }
    }
    setStartX(null);
    setStartY(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '8px',
      borderRadius: '12px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: "".concat(revealWidth + 20, "px"),
      background: '#ef4444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-trash text-white text-base"
  })), /*#__PURE__*/React.createElement("div", {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onClick: swiped ? function (e) {
      e.stopPropagation();
      onDelete();
    } : undefined,
    style: {
      width: '100%',
      transform: "translateX(".concat(dx, "px)"),
      transition: startX === null ? 'transform 0.22s ease' : 'none',
      position: 'relative',
      zIndex: 1
    }
  }, children));
};
var PdfViewer = function PdfViewer(_ref2) {
  var url = _ref2.url,
    style = _ref2.style,
    className = _ref2.className;
  var _React$useState1 = React.useState(null),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    blobUrl = _React$useState10[0],
    setBlobUrl = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    error = _React$useState12[0],
    setError = _React$useState12[1];
  React.useEffect(function () {
    if (!url) {
      setError(true);
      return;
    }
    if (url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('https://www.') || url.startsWith('http://')) {
      setBlobUrl(url);
      return;
    }
    var token = localStorage.getItem('inulab_token');
    fetch(url, {
      headers: token ? {
        'Authorization': "Bearer ".concat(token)
      } : {}
    }).then(function (r) {
      if (!r.ok) throw new Error('Error');
      return r.blob();
    }).then(function (blob) {
      return setBlobUrl(URL.createObjectURL(blob));
    })["catch"](function () {
      return setError(true);
    });
  }, [url]);
  if (error) return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center h-full text-gray-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-pdf text-5xl mb-3 text-gray-300"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "PDF no disponible"));
  if (!blobUrl) return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center h-full text-gray-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin text-3xl mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "Cargando PDF..."));
  return /*#__PURE__*/React.createElement("iframe", {
    src: blobUrl + '#toolbar=0&navpanes=0',
    style: style,
    className: className,
    title: "PDF"
  });
};
var App = function App() {
  // ✅ PON ESTO AQUÍ
  var safeText = function safeText(value) {
    if (typeof value === "string" || typeof value === "number") return value;
    if (value && _typeof(value) === "object") return value.name || "";
    return "";
  };
  var safeImage = function safeImage(value) {
    return typeof value === "string" ? value : null;
  };
  var _useState = useState({
      pets: [],
      orders: [],
      addresses: [],
      results: [],
      users: [],
      invoices: [],
      exams: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    database = _useState2[0],
    setDatabase = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedAddressId = _useState4[0],
    setSelectedAddressId = _useState4[1];
  var loadAddresses = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var res, data, _t;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            _context10.n = 1;
            return fetch("".concat(API_BASE, "/Addresses"), {
              headers: api._headers()
            });
          case 1:
            res = _context10.v;
            _context10.n = 2;
            return res.json();
          case 2:
            data = _context10.v;
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                addresses: data
              });
            });
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t = _context10.v;
            console.error("Error cargando direcciones", _t);
          case 4:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 3]]);
    }));
    return function loadAddresses() {
      return _ref3.apply(this, arguments);
    };
  }();
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAuthenticated = _useState6[0],
    setIsAuthenticated = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentUser = _useState8[0],
    setCurrentUser = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    userType = _useState0[0],
    setUserType = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    username = _useState10[0],
    setUsername = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    password = _useState12[0],
    setPassword = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = useState('pedidos'),
    _useState18 = _slicedToArray(_useState17, 2),
    activeTab = _useState18[0],
    setActiveTab = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    searchTerm = _useState20[0],
    setSearchTerm = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedPet = _useState22[0],
    setSelectedPet = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedExam = _useState24[0],
    setSelectedExam = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    viewingInvoice = _useState26[0],
    setViewingInvoice = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    viewingOrderTracking = _useState28[0],
    setViewingOrderTracking = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    showAllPending = _useState30[0],
    setShowAllPending = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    trackingMenuOpen = _useState32[0],
    setTrackingMenuOpen = _useState32[1];
  var _useState33 = useState([]),
    _useState34 = _slicedToArray(_useState33, 2),
    cart = _useState34[0],
    setCart = _useState34[1];
  var _useState35 = useState([]),
    _useState36 = _slicedToArray(_useState35, 2),
    pendingExams = _useState36[0],
    setPendingExams = _useState36[1];
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    currentExamForPet = _useState38[0],
    setCurrentExamForPet = _useState38[1];
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    petSearchTerm = _useState40[0],
    setPetSearchTerm = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    showNewPetForm = _useState42[0],
    setShowNewPetForm = _useState42[1];
  var _useState43 = useState({
      name: '',
      owner: '',
      animalType: '',
      breed: '',
      ageValue: '',
      ageUnit: 'años',
      sex: ''
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    newPet = _useState44[0],
    setNewPet = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    showOrderSummary = _useState46[0],
    setShowOrderSummary = _useState46[1];
  var _useState47 = useState('factura'),
    _useState48 = _slicedToArray(_useState47, 2),
    invoiceType = _useState48[0],
    setInvoiceType = _useState48[1]; // 'boleta', 'factura'
  var _useState49 = useState(null),
    _useState50 = _slicedToArray(_useState49, 2),
    selectedPetForOrder = _useState50[0],
    setSelectedPetForOrder = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showAddressSelection = _useState52[0],
    setShowAddressSelection = _useState52[1];
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    showNewAddressForm = _useState54[0],
    setShowNewAddressForm = _useState54[1];
  var _useState55 = useState({
      name: '',
      address: '',
      district: '',
      reference: ''
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    newAddress = _useState56[0],
    setNewAddress = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    newResultHighlight = _useState58[0],
    setNewResultHighlight = _useState58[1];
  var _useState59 = useState(false),
    _useState60 = _slicedToArray(_useState59, 2),
    newInvoiceHighlight = _useState60[0],
    setNewInvoiceHighlight = _useState60[1];
  var _useState61 = useState(0),
    _useState62 = _slicedToArray(_useState61, 2),
    lastSeenResultCount = _useState62[0],
    setLastSeenResultCount = _useState62[1];
  var _useState63 = useState(0),
    _useState64 = _slicedToArray(_useState63, 2),
    lastSeenInvoiceCount = _useState64[0],
    setLastSeenInvoiceCount = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    showEditProfile = _useState66[0],
    setShowEditProfile = _useState66[1];
  var _useState67 = useState({
      name: '',
      clinic: '',
      phone: '',
      email: '',
      address: '',
      district: '',
      ruc: ''
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    editProfile = _useState68[0],
    setEditProfile = _useState68[1];
  var _useState69 = useState(null),
    _useState70 = _slicedToArray(_useState69, 2),
    selectedUserForUpload = _useState70[0],
    setSelectedUserForUpload = _useState70[1];
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    selectedPetForUpload = _useState72[0],
    setSelectedPetForUpload = _useState72[1];
  var _useState73 = useState(null),
    _useState74 = _slicedToArray(_useState73, 2),
    uploadedFile = _useState74[0],
    setUploadedFile = _useState74[1];
  var _useState75 = useState(''),
    _useState76 = _slicedToArray(_useState75, 2),
    examTitle = _useState76[0],
    setExamTitle = _useState76[1];
  var _useState77 = useState(new Date().toISOString().split('T')[0]),
    _useState78 = _slicedToArray(_useState77, 2),
    examDate = _useState78[0],
    setExamDate = _useState78[1];
  var _useState79 = useState(''),
    _useState80 = _slicedToArray(_useState79, 2),
    successMessage = _useState80[0],
    setSuccessMessage = _useState80[1];
  var _useState81 = useState(null),
    _useState82 = _slicedToArray(_useState81, 2),
    selectedPaqueteDetail = _useState82[0],
    setSelectedPaqueteDetail = _useState82[1];
  var _useState83 = useState(''),
    _useState84 = _slicedToArray(_useState83, 2),
    mascotaSearchTerm = _useState84[0],
    setMascotaSearchTerm = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    selectedMascota = _useState86[0],
    setSelectedMascota = _useState86[1];
  var _useState87 = useState(''),
    _useState88 = _slicedToArray(_useState87, 2),
    examFilterType = _useState88[0],
    setExamFilterType = _useState88[1];
  var _useState89 = useState(''),
    _useState90 = _slicedToArray(_useState89, 2),
    examSearchTerm = _useState90[0],
    setExamSearchTerm = _useState90[1];
  var _useState91 = useState(''),
    _useState92 = _slicedToArray(_useState91, 2),
    examFilterDay = _useState92[0],
    setExamFilterDay = _useState92[1];
  var _useState93 = useState(''),
    _useState94 = _slicedToArray(_useState93, 2),
    examFilterMonth = _useState94[0],
    setExamFilterMonth = _useState94[1];
  var _useState95 = useState(''),
    _useState96 = _slicedToArray(_useState95, 2),
    examFilterYear = _useState96[0],
    setExamFilterYear = _useState96[1];
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    menuOpen = _useState98[0],
    setMenuOpen = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    duenoMenuOpen = _useState100[0],
    setDuenoMenuOpen = _useState100[1];
  var _useState101 = useState('main'),
    _useState102 = _slicedToArray(_useState101, 2),
    duenoView = _useState102[0],
    setDuenoView = _useState102[1]; // 'main' o 'config'
  var _useState103 = useState(''),
    _useState104 = _slicedToArray(_useState103, 2),
    orderComment = _useState104[0],
    setOrderComment = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    termsAccepted = _useState106[0],
    setTermsAccepted = _useState106[1];
  var _useState107 = useState(false),
    _useState108 = _slicedToArray(_useState107, 2),
    showTermsModal = _useState108[0],
    setShowTermsModal = _useState108[1];
  var _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    showTechnicalExams = _useState110[0],
    setShowTechnicalExams = _useState110[1];
  var _useState111 = useState(false),
    _useState112 = _slicedToArray(_useState111, 2),
    showTomaMuestraStep = _useState112[0],
    setShowTomaMuestraStep = _useState112[1];
  var _useState113 = useState(null),
    _useState114 = _slicedToArray(_useState113, 2),
    pendingOrderAddress = _useState114[0],
    setPendingOrderAddress = _useState114[1];
  var _useState115 = useState([]),
    _useState116 = _slicedToArray(_useState115, 2),
    facturas = _useState116[0],
    setFacturas = _useState116[1];
  var _useState117 = useState('login'),
    _useState118 = _slicedToArray(_useState117, 2),
    authMode = _useState118[0],
    setAuthMode = _useState118[1];
  var _useState119 = useState({
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      type: 'dueño'
    }),
    _useState120 = _slicedToArray(_useState119, 2),
    regData = _useState120[0],
    setRegData = _useState120[1];
  var _useState121 = useState(''),
    _useState122 = _slicedToArray(_useState121, 2),
    regError = _useState122[0],
    setRegError = _useState122[1];
  var _useState123 = useState(false),
    _useState124 = _slicedToArray(_useState123, 2),
    regLoading = _useState124[0],
    setRegLoading = _useState124[1];
  var _useState125 = useState(''),
    _useState126 = _slicedToArray(_useState125, 2),
    regSuccess = _useState126[0],
    setRegSuccess = _useState126[1];
  var _useState127 = useState(''),
    _useState128 = _slicedToArray(_useState127, 2),
    pedidosSearchTerm = _useState128[0],
    setPedidosSearchTerm = _useState128[1]; // Estados búsqueda dueño
  var paquetesFiltrados = paquetesDuenos.filter(function (paquete) {
    var texto = pedidosSearchTerm.toLowerCase();
    return paquete.name && paquete.name.toLowerCase().includes(texto) || paquete.description && paquete.description.toLowerCase().includes(texto);
  });
  var _useState129 = useState(''),
    _useState130 = _slicedToArray(_useState129, 2),
    facDuenoSearchTerm = _useState130[0],
    setFacDuenoSearchTerm = _useState130[1];
  var _useState131 = useState(''),
    _useState132 = _slicedToArray(_useState131, 2),
    facDuenoFilterDay = _useState132[0],
    setFacDuenoFilterDay = _useState132[1];
  var _useState133 = useState(''),
    _useState134 = _slicedToArray(_useState133, 2),
    facDuenoFilterMonth = _useState134[0],
    setFacDuenoFilterMonth = _useState134[1];
  var _useState135 = useState(''),
    _useState136 = _slicedToArray(_useState135, 2),
    facDuenoFilterYear = _useState136[0],
    setFacDuenoFilterYear = _useState136[1];
  var _useState137 = useState(''),
    _useState138 = _slicedToArray(_useState137, 2),
    resSearchTerm = _useState138[0],
    setResSearchTerm = _useState138[1];
  var _useState139 = useState(''),
    _useState140 = _slicedToArray(_useState139, 2),
    resFilterDay = _useState140[0],
    setResFilterDay = _useState140[1];
  var _useState141 = useState(''),
    _useState142 = _slicedToArray(_useState141, 2),
    resFilterMonth = _useState142[0],
    setResFilterMonth = _useState142[1];
  var _useState143 = useState(''),
    _useState144 = _slicedToArray(_useState143, 2),
    resFilterYear = _useState144[0],
    setResFilterYear = _useState144[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    showMobileSearch = _React$useState14[0],
    setShowMobileSearch = _React$useState14[1];
  var _React$useState15 = React.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    showFacMobileSearch = _React$useState16[0],
    setShowFacMobileSearch = _React$useState16[1];
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    showResMobileSearch = _React$useState18[0],
    setShowResMobileSearch = _React$useState18[1];
  var _useState145 = useState(false),
    _useState146 = _slicedToArray(_useState145, 2),
    pedidosSearchOpen = _useState146[0],
    setPedidosSearchOpen = _useState146[1];
  var _useState147 = useState(false),
    _useState148 = _slicedToArray(_useState147, 2),
    petResSearchOpen = _useState148[0],
    setPetResSearchOpen = _useState148[1];
  var _useState149 = useState(false),
    _useState150 = _slicedToArray(_useState149, 2),
    facDuenoSearchOpen = _useState150[0],
    setFacDuenoSearchOpen = _useState150[1];
  var _useState151 = useState(false),
    _useState152 = _slicedToArray(_useState151, 2),
    selSearchOpen = _useState152[0],
    setSelSearchOpen = _useState152[1];
  var _useState153 = useState(false),
    _useState154 = _slicedToArray(_useState153, 2),
    isLandscapePhone = _useState154[0],
    setIsLandscapePhone = _useState154[1];
  var _useState155 = useState(false),
    _useState156 = _slicedToArray(_useState155, 2),
    clinPedidosSearchOpen = _useState156[0],
    setClinPedidosSearchOpen = _useState156[1];
  var _useState157 = useState(false),
    _useState158 = _slicedToArray(_useState157, 2),
    clinMascSearchOpen = _useState158[0],
    setClinMascSearchOpen = _useState158[1];
  var _useState159 = useState(false),
    _useState160 = _slicedToArray(_useState159, 2),
    clinResSearchOpen = _useState160[0],
    setClinResSearchOpen = _useState160[1];
  var _useState161 = useState(false),
    _useState162 = _slicedToArray(_useState161, 2),
    clinFacSearchOpen = _useState162[0],
    setClinFacSearchOpen = _useState162[1];
  var _useState163 = useState(false),
    _useState164 = _slicedToArray(_useState163, 2),
    clinMascDetailSearchOpen = _useState164[0],
    setClinMascDetailSearchOpen = _useState164[1];
  useEffect(function () {
    if (showAddressSelection) {
      loadAddresses();
    }
  }, [showAddressSelection]);
  useEffect(function () {
    var checkLandscape = function checkLandscape() {
      var isPhone = window.innerHeight <= 500 && window.innerWidth > window.innerHeight;
      setIsLandscapePhone(isPhone);
    };
    checkLandscape();
    window.addEventListener('resize', checkLandscape);
    window.addEventListener('orientationchange', checkLandscape);
    return function () {
      window.removeEventListener('resize', checkLandscape);
      window.removeEventListener('orientationchange', checkLandscape);
    };
  }, []);
  var examTotal = cart.reduce(function (sum, item) {
    return sum + (item.exam.price || 0);
  }, 0);
  var tomaMuestraFees = function () {
    var counted = new Set();
    return cart.reduce(function (sum, item) {
      if (!item.tomaMuestra || !item.address) return sum;
      var addrKey = item.address.id || item.address.name;
      if (counted.has(addrKey)) return sum;
      counted.add(addrKey);
      var price = getTomaMuestraPrice(item.address.district, examTotal);
      return sum + (price || 0);
    }, 0);
  }();
  var cartTotal = examTotal + tomaMuestraFees;
  function cargarFacturas() {
    return _cargarFacturas.apply(this, arguments);
  }
  function _cargarFacturas() {
    _cargarFacturas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      var token, res, data;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            token = localStorage.getItem("inulab_token"); // ← correcto
            _context22.n = 1;
            return fetch("".concat(API_BASE, "/Facturas"), {
              headers: {
                "Authorization": "Bearer ".concat(token)
              }
            });
          case 1:
            res = _context22.v;
            _context22.n = 2;
            return res.json();
          case 2:
            data = _context22.v;
            setFacturas(data);
          case 3:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    return _cargarFacturas.apply(this, arguments);
  }
  var termsContent = {
    notas: ['Los tubos de muestra deben ser llenados estrictamente hasta la marca indicada, según el volumen requerido para garantizar la validez del análisis.', 'Los resultados de las muestras se entregan en un tiempo aproximado de 1 a 2 horas para exámenes IDEXX y Healvet, sujeto a variaciones según la ubicación.', 'El horario de recepción y procesamiento para muestras manuales (hemograma manual, frotis sanguíneo, exámenes coprológicos y análisis de orina) es de lunes a viernes de 9:00 a.m. a 5:00 p.m. y los días sábado de 9:00 a.m. a 2:00 p.m.', 'Disponible 24 hrs solo para exámenes de IDEXX y Healvet.'],
    tenerEnCuenta: ['Las diluciones no están incluidas en los paquetes. En caso de requerirse por alerta del equipo o condición del paciente, se realizarán bajo criterio médico y se cobrarán como analito individual.', 'Los precios están expresados en Soles (S/) e incluyen IGV.', 'Los tiempos de entrega son aproximados y pueden variar según la complejidad del análisis y la ubicación del paciente.'],
    tomaMuestra: ['Para los exámenes que lo requieran, la mascota deberá cumplir con el ayuno indicado previamente (generalmente entre 8 y 12 horas). Es responsabilidad del propietario confirmar las indicaciones antes del servicio. En caso de no cumplir el ayuno, INULABORATORIOS no se hace responsable por las alteraciones que puedan presentarse en los resultados.', 'Para solicitar el servicio de toma de muestra a domicilio, se requiere un adelanto del 30% del valor total del pedido al momento de la confirmación.', 'Las reprogramaciones deben solicitarse con un mínimo de 24 horas de anticipación. Si la reprogramación se solicita con menos de 24 horas, se aplicará un cargo adicional de S/ 30 al pago restante. Si al momento de solicitar la reprogramación ya se le ha comunicado que el equipo salió y está en camino a la dirección, el cargo adicional será de S/ 50 al pago restante.', 'El propietario deberá informar con anticipación si la mascota presenta antecedentes de conducta difícil. Esta información debe ser <strong>indicada en la sección de Comentarios</strong> al momento de solicitar el pedido, especificando detalles como: si la mascota muerde, se agita mucho, solo se deja cargar o manipular por el dueño, tiene miedo a extraños, requiere bozal, o cualquier otro dato relevante que facilite el manejo seguro durante el procedimiento.', 'Durante la toma de muestra, se recomienda mantener un ambiente tranquilo y seguro. Se espera que el propietario brinde apoyo durante el procedimiento, permaneciendo cerca para tranquilizarla o ayudando en su contención de manera segura.', 'El equipo evaluará en el momento si existen condiciones adecuadas para realizar la toma de muestra. En caso de que la mascota no permita el procedimiento de manera segura y no se haya informado previamente, el servicio podrá ser suspendido.', 'Si el procedimiento no puede realizarse debido a conducta no informada o imposibilidad de manejo seguro, no corresponde devolución del monto pagado por concepto de toma de muestra, dado que el servicio de desplazamiento ya fue brindado.', 'El equipo se reserva el derecho de suspender el procedimiento cuando considere que existen riesgos para la integridad de la mascota o del personal.']
  };
  var renderTermsModal = function renderTermsModal() {
    return showTermsModal && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 flex flex-col bg-white",
      style: {
        zIndex: 999999
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-500 px-6 py-4 flex items-center justify-between flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-contract text-white text-lg"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-white"
    }, "T\xE9rminos y Condiciones")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowTermsModal(false);
      },
      className: "w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-lg"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto px-6 py-6 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto my-auto"
    }, (freshUser === null || freshUser === void 0 ? void 0 : freshUser.type) === 'dueño' && /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-emerald-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Para el caso de toma de muestra a domicilio")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mb-3"
    }, "Cuando necesitas que un profesional vaya a tu domicilio a tomar la muestra de tu mascota.")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.tomaMuestra.map(function (item, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, i + 1), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify",
        dangerouslySetInnerHTML: {
          __html: item
        }
      }));
    }))), (freshUser === null || freshUser === void 0 ? void 0 : freshUser.type) === 'dueño' && /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-t-2 border-cyan-200 pt-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-truck text-cyan-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Para el caso de recojo de muestras")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mb-3"
    }, "Cuando ya tienes la muestra lista y solo necesitas que la recojamos."))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-blue-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Condiciones del Servicio")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.notas.map(function (nota, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, i + 1), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify"
      }, nota));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-triangle text-amber-600 text-sm"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 text-lg"
    }, "Tener en Cuenta")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, termsContent.tenerEnCuenta.map(function (item, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-info text-xs"
      })), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600 leading-relaxed text-justify"
      }, item));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-cyan-500 mr-1"
    }), "Alameda del Sereno 495, La Alborada - Santiago de Surco, Lima"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-phone text-cyan-500 mr-1"
    }), "954 904 248 \xB7 ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-cyan-500 ml-2 mr-1"
    }), "lab@inulaboratorios.com")))), /*#__PURE__*/React.createElement("div", {
      className: "px-6 py-4 border-t bg-white flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setTermsAccepted(true);
        setShowTermsModal(false);
      },
      className: "w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3.5 rounded-xl font-semibold shadow-lg"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle mr-2"
    }), "He le\xEDdo y acepto"))));
  };
  var renderTermsCheckbox = function renderTermsCheckbox() {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, cartTotal > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt text-cyan-500 mr-2"
    }), "Total estimado"), /*#__PURE__*/React.createElement("span", {
      className: "text-xl font-bold text-cyan-700"
    }, "S/ ", cartTotal)), tomaMuestraFees > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 pt-2 border-t border-cyan-200/50 flex items-center justify-between text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", null, "Ex\xE1menes: S/ ", examTotal), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe mr-1"
    }), "Toma de muestra: +S/ ", tomaMuestraFees))), /*#__PURE__*/React.createElement("label", {
      className: "flex items-start gap-3 cursor-pointer group",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: termsAccepted,
      onChange: function onChange(e) {
        return setTermsAccepted(e.target.checked);
      },
      className: "mt-1 w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-600 leading-relaxed"
    }, "He le\xEDdo y acepto los ", /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowTermsModal(true);
      },
      className: "text-cyan-600 font-semibold underline hover:text-cyan-700"
    }, "t\xE9rminos y condiciones"), " de entrega y procesamiento de muestras.")));
  };
  var _useState165 = useState('inicio'),
    _useState166 = _slicedToArray(_useState165, 2),
    medicoView = _useState166[0],
    setMedicoView = _useState166[1]; // inicio, pedidos, mascotas, resultados, facturacion
  var _useState167 = useState(''),
    _useState168 = _slicedToArray(_useState167, 2),
    resultadosSearch = _useState168[0],
    setResultadosSearch = _useState168[1];
  var _useState169 = useState(''),
    _useState170 = _slicedToArray(_useState169, 2),
    resultadosFilterDay = _useState170[0],
    setResultadosFilterDay = _useState170[1];
  var _useState171 = useState(''),
    _useState172 = _slicedToArray(_useState171, 2),
    resultadosFilterMonth = _useState172[0],
    setResultadosFilterMonth = _useState172[1];
  var _useState173 = useState(''),
    _useState174 = _slicedToArray(_useState173, 2),
    resultadosFilterYear = _useState174[0],
    setResultadosFilterYear = _useState174[1];
  var _useState175 = useState(''),
    _useState176 = _slicedToArray(_useState175, 2),
    facturacionSearch = _useState176[0],
    setFacturacionSearch = _useState176[1];
  var _useState177 = useState(null),
    _useState178 = _slicedToArray(_useState177, 2),
    facturacionInvoice = _useState178[0],
    setFacturacionInvoice = _useState178[1];
  var _useState179 = useState(null),
    _useState180 = _slicedToArray(_useState179, 2),
    medicoFacInvoice = _useState180[0],
    setMedicoFacInvoice = _useState180[1];
  var _useState181 = useState(''),
    _useState182 = _slicedToArray(_useState181, 2),
    facturacionFilterDay = _useState182[0],
    setFacturacionFilterDay = _useState182[1];
  var _useState183 = useState(''),
    _useState184 = _slicedToArray(_useState183, 2),
    facturacionFilterMonth = _useState184[0],
    setFacturacionFilterMonth = _useState184[1];
  var _useState185 = useState(''),
    _useState186 = _slicedToArray(_useState185, 2),
    facturacionFilterYear = _useState186[0],
    setFacturacionFilterYear = _useState186[1]; // Wrapper sobre setDatabase (antes persistía a localStorage en versión demo;
  // ahora el backend es el source of truth, pero mantenemos la función para
  // no romper los callsites existentes)
  var saveDatabase = function saveDatabase(newDbOrFn) {
    setDatabase(newDbOrFn);
  };
  var getCurrentNightMode = function getCurrentNightMode() {
    return (database === null || database === void 0 ? void 0 : database.nightMode) || false;
  }; // Toggle modo motorizado
  // Componente de Mapa de Tracking
  var TrackingMapComponent = function TrackingMapComponent(_ref4) {
    var orderId = _ref4.orderId;
    var mapRef = React.useRef(null);
    var mapInstanceRef = React.useRef(null);
    var motoMarkerRef = React.useRef(null);
    var simulationRef = React.useRef(null);
    var currentIndexRef = React.useRef(0);
    var _useState187 = useState('8'),
      _useState188 = _slicedToArray(_useState187, 2),
      eta = _useState188[0],
      setEta = _useState188[1];
    var _useState189 = useState('2.3'),
      _useState190 = _slicedToArray(_useState189, 2),
      dist = _useState190[0],
      setDist = _useState190[1];
    var routePoints = [[-12.0564, -77.0528], [-12.0544, -77.0508], [-12.0524, -77.0488], [-12.0504, -77.0468], [-12.0484, -77.0448], [-12.0464, -77.0428]];
    var destination = [-12.0464, -77.0428];
    var calcDist = function calcDist(p1, p2) {
      var R = 6371;
      var dLat = (p2[0] - p1[0]) * Math.PI / 180;
      var dLon = (p2[1] - p1[1]) * Math.PI / 180;
      var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(p1[0] * Math.PI / 180) * Math.cos(p2[0] * Math.PI / 180) * Math.pow(Math.sin(dLon / 2), 2);
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };
    useEffect(function () {
      if (mapRef.current && !mapInstanceRef.current) {
        var map = L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false
        }).setView([-12.0514, -77.0478], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(destination, {
          icon: L.divIcon({
            html: '<div class="dest-marker-icon">🏠</div>',
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
          })
        }).addTo(map);
        var motoMarker = L.marker(routePoints[0], {
          icon: L.divIcon({
            html: '<div class="moto-marker-icon moto-animating">🛵</div>',
            className: '',
            iconSize: [35, 35],
            iconAnchor: [17, 17]
          })
        }).addTo(map);
        motoMarkerRef.current = motoMarker;
        L.polyline(routePoints, {
          color: '#0891b2',
          weight: 4,
          opacity: 0.7,
          dashArray: '8, 8'
        }).addTo(map);
        map.fitBounds(L.latLngBounds(routePoints), {
          padding: [30, 30]
        });
        mapInstanceRef.current = map;
        setTimeout(function () {
          simulationRef.current = setInterval(function () {
            if (currentIndexRef.current < routePoints.length - 1) {
              var _motoMarkerRef$curren, _mapInstanceRef$curre;
              currentIndexRef.current++;
              var p = routePoints[currentIndexRef.current];
              (_motoMarkerRef$curren = motoMarkerRef.current) === null || _motoMarkerRef$curren === void 0 || _motoMarkerRef$curren.setLatLng(p);
              (_mapInstanceRef$curre = mapInstanceRef.current) === null || _mapInstanceRef$curre === void 0 || _mapInstanceRef$curre.panTo(p, {
                animate: true,
                duration: 0.5
              });
              var d = calcDist(p, destination);
              setDist(d.toFixed(1));
              setEta(Math.max(1, Math.ceil(d * 4)));
              if (currentIndexRef.current === routePoints.length - 1) {
                clearInterval(simulationRef.current);
                setEta('0');
                setDist('0');
              }
            }
          }, 3000);
        }, 1000);
      }
      return function () {
        if (simulationRef.current) clearInterval(simulationRef.current);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rounded-2xl overflow-hidden shadow-lg"
    }, /*#__PURE__*/React.createElement("div", {
      ref: mapRef,
      className: "tracking-map"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 grid grid-cols-2 gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-50 rounded-xl p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Tiempo estimado"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-cyan-700"
    }, eta, " min")), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-blue-600 font-medium"
    }, "Distancia"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-bold text-blue-700"
    }, dist, " km"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-xl"
    }, "\uD83D\uDC68\u200D\u2695\uFE0F"), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800 text-sm"
    }, "Juan P\xE9rez"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Motorizado \u2022 \uD83D\uDEF5 ABC-123")), /*#__PURE__*/React.createElement("a", {
      href: "tel:+51999555666",
      className: "w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-phone text-sm"
    })))));
  }; // Componente de Mapa de Tracking para Admin (incluye ruta de regreso)
  useEffect(function () {
    if (isAuthenticated) {
      loadDatabase();
    }
  }, [isAuthenticated]);
  useEffect(function () {
    if (activeTab === "facturacion") {
      cargarFacturas();
    }
  }, [activeTab]);
  useEffect(function () {
    // Solicitar permisos de notificación al cargar
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, [isAuthenticated]); // Polling para actualizar pedidos y datos del usuario (cada 10 segundos)
  useEffect(function () {
    if (!isAuthenticated) return;
    var interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var ordersResponse, statusMap, orders, _t2;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            _context11.n = 1;
            return api.getOrders();
          case 1:
            ordersResponse = _context11.v;
            statusMap = {
              0: 'pending',
              1: 'assigned',
              2: 'moto_en_camino',
              3: 'moto_arrived',
              4: 'pickup_in_progress',
              5: 'sample_received',
              6: 'arrived_at_lab',
              7: 'processing',
              8: 'results_uploaded',
              9: 'completed'
            };
            orders = (ordersResponse || []).map(function (o) {
              return {
                id: o.id,
                userId: o.userId,
                userName: o.userName || '',
                comment: o.comment || '',
                createdAt: o.createdAt,
                completedAt: o.completedAt,
                documentType: o.documentType || 'boleta',
                invoicePdf: o.invoicePdfUrl ? "https://inulab-backend-production.up.railway.app".concat(o.invoicePdfUrl) : null,
                invoicePdfUrl: o.invoicePdfUrl || null,
                invoiceStatus: o.invoicePdfUrl ? 'uploaded' : 'pending',
                status: statusMap[Number(o.status)] || 'pending',
                addressId: o.addressId,
                items: (o.items || []).map(function (item) {
                  var rawPdf = item.pdfUrl || o.resultPdfUrl || null;
                  var orderResultPdf = rawPdf ? rawPdf.startsWith('http') ? rawPdf : "https://inulab-backend-production.up.railway.app".concat(rawPdf) : null;
                  return {
                    examName: String(item.examName || ''),
                    exam: {
                      name: String(item.examName || ''),
                      icon: 'fa-vial',
                      color: 'text-cyan-600',
                      bg: 'bg-cyan-100'
                    },
                    pet: {
                      name: String(item.petName || ''),
                      photo: item.petPhoto || '🐾'
                    },
                    address: {
                      address: String(item.addressStreet || ''),
                      district: String(item.addressDistrict || '')
                    },
                    pdfData: orderResultPdf
                  };
                })
              };
            });
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                orders: orders
              });
            });
            _context11.n = 2;
            return cargarFacturas();
          case 2:
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t2 = _context11.v;
            console.error('Polling error:', _t2);
          case 4:
            return _context11.a(2);
        }
      }, _callee11, null, [[0, 3]]);
    })), 15000);
    return function () {
      return clearInterval(interval);
    };
  }, [isAuthenticated]); // Estados para trackear nuevos pendientes de mostrar
  var _useState191 = useState(false),
    _useState192 = _slicedToArray(_useState191, 2),
    pendingNewResult = _useState192[0],
    setPendingNewResult = _useState192[1];
  var _useState193 = useState(false),
    _useState194 = _slicedToArray(_useState193, 2),
    pendingNewInvoice = _useState194[0],
    setPendingNewInvoice = _useState194[1]; // Efecto para detectar nuevos resultados y comprobantes (solo marca como pendiente)
  useEffect(function () {
    var _database$users;
    if (!currentUser || !Array.isArray(database === null || database === void 0 ? void 0 : database.orders)) return;
    var orders = database.orders;
    var freshUser = ((_database$users = database.users) === null || _database$users === void 0 ? void 0 : _database$users.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    })) || currentUser;
    var completedOrders = orders.filter(function (o) {
      return (o.status === 9 || o.status === 'completed' || Number(o.status) === 9) && (o.items || []).length > 0;
    });
    var invoicesWithPdf = completedOrders.filter(function (o) {
      return o.invoicePdf;
    });
    if ((completedOrders || []).length > lastSeenResultCount && lastSeenResultCount > 0) {
      setPendingNewResult(true);
    }
    setLastSeenResultCount((completedOrders || []).length);
  }, [database, currentUser]); // Efecto para activar highlights cuando el usuario entra a Inicio
  useEffect(function () {
    if (medicoView === 'inicio') {
      if (pendingNewResult) {
        setNewResultHighlight(true);
        setPendingNewResult(false);
        setTimeout(function () {
          return setNewResultHighlight(false);
        }, 4000);
      }
      if (pendingNewInvoice) {
        setNewInvoiceHighlight(true);
        setPendingNewInvoice(false);
        setTimeout(function () {
          return setNewInvoiceHighlight(false);
        }, 4000);
      }
    }
  }, [medicoView, pendingNewResult, pendingNewInvoice]); // Bloquear scroll del #root cuando estamos en inicio (sin overlay ni vista secundaria)
  useEffect(function () {
    var root = document.getElementById('root');
    if (!root) return;
    var isInicio = medicoView === 'inicio' && !viewingOrderTracking && !selectedExam && !viewingInvoice && !currentExamForPet && !showOrderSummary;
    root.style.overflowY = isInicio ? 'hidden' : 'auto';
    return function () {
      root.style.overflowY = 'auto';
    };
  }, [medicoView, viewingOrderTracking, selectedExam, viewingInvoice, currentExamForPet, showOrderSummary]);
  var loadDatabase = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var silent,
        petsResponse,
        pets,
        ordersResponse,
        statusMap,
        orders,
        addressesResponse,
        addresses,
        db,
        _database$orders$,
        _args12 = arguments,
        _t3;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            silent = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : false;
            console.log("INICIANDO LOAD DATABASE");
            if (!silent) setLoading(true);
            _context12.p = 1;
            console.log("cargando pets...");
            _context12.n = 2;
            return api.getPets();
          case 2:
            petsResponse = _context12.v;
            console.log("RAW pets:", petsResponse); // ← agrega aquí
            pets = ((petsResponse === null || petsResponse === void 0 ? void 0 : petsResponse.pets) || petsResponse || []).map(function (p) {
              return {
                id: p.id,
                name: String(p.name || p.Name || ''),
                species: String(p.species || p.animalType || ''),
                breed: String(p.breed || ''),
                age: p.age,
                ageValue: p.age,
                ageUnit: 'años',
                sex: String(p.sex || p.gender || p.sexo || p.genero || ''),
                photo: p.species === 'perro' ? '🐶' : p.species === 'gato' ? '🐱' : p.species === 'ave' ? '🦜' : p.species === 'conejo' ? '🐰' : '🐾',
                owner: String(p.ownerName || p.owner || ''),
                exams: (p.exams || []).map(function (e) {
                  return {
                    id: e.id,
                    type: e.type || e.examName || 'Examen',
                    date: e.date,
                    seen: true,
                    pdfData: e.pdfUrl ? e.pdfUrl.startsWith('http') ? e.pdfUrl : 'https://inulab-backend-production.up.railway.app' + e.pdfUrl : null
                  };
                })
              };
            });
            console.log("pets OK", pets);
            console.log("cargando orders...");
            _context12.n = 3;
            return api.getOrders();
          case 3:
            ordersResponse = _context12.v;
            console.log('ordersResponse directo:', ordersResponse);
            statusMap = {
              0: 'pending',
              1: 'assigned',
              2: 'moto_en_camino',
              3: 'moto_arrived',
              4: 'pickup_in_progress',
              5: 'sample_received',
              6: 'arrived_at_lab',
              7: 'processing',
              8: 'results_uploaded',
              9: 'completed'
            };
            console.log('ordersResponse antes de map:', ordersResponse, Array.isArray(ordersResponse));
            orders = (ordersResponse || []).map(function (o) {
              return {
                id: o.id,
                userId: o.userId,
                userName: o.userName || '',
                comment: o.comment || '',
                createdAt: o.createdAt,
                completedAt: o.completedAt,
                documentType: o.documentType || 'boleta',
                invoicePdf: o.invoicePdfUrl ? "https://inulab-backend-production.up.railway.app".concat(o.invoicePdfUrl) : null,
                invoicePdfUrl: o.invoicePdfUrl || null,
                invoiceStatus: o.invoicePdfUrl ? 'uploaded' : 'pending',
                status: statusMap[Number(o.status)] || 'pending',
                addressId: o.addressId,
                resultPdfUrl: o.resultPdfUrl || null,
                items: (o.items || []).map(function (item) {
                  var rawPdf = item.pdfUrl || o.resultPdfUrl || null;
                  var orderResultPdf = rawPdf ? rawPdf.startsWith('http') ? rawPdf : "https://inulab-backend-production.up.railway.app".concat(rawPdf) : null;
                  return {
                    examName: String(item.examName || ''),
                    exam: {
                      name: String(item.examName || ''),
                      icon: 'fa-vial',
                      color: 'text-cyan-600',
                      bg: 'bg-cyan-100'
                    },
                    pet: {
                      name: String(item.petName || ''),
                      photo: item.petPhoto || '🐾'
                    },
                    address: {
                      address: String(item.addressStreet || ''),
                      district: String(item.addressDistrict || '')
                    },
                    pdfData: orderResultPdf
                  };
                })
              };
            });
            console.log("orders OK", orders);
            console.log("STATUS:", orders.map(function (o) {
              return o.status;
            }));
            console.log("cargando addresses...");
            _context12.n = 4;
            return api.getAddresses();
          case 4:
            addressesResponse = _context12.v;
            console.log("RAW addresses:", addressesResponse);
            addresses = Array.isArray(addressesResponse) ? addressesResponse : (addressesResponse === null || addressesResponse === void 0 ? void 0 : addressesResponse.$values) || (addressesResponse === null || addressesResponse === void 0 ? void 0 : addressesResponse.addresses) || (addressesResponse === null || addressesResponse === void 0 ? void 0 : addressesResponse.data) || []; // Enriquecer exams con pdfData de orders
            pets.forEach(function (pet) {
              console.log('PET EXAMS:', pet.exams.map(function (e) {
                return e.type;
              }));
              console.log('ORDERS COMPLETED:', orders.filter(function (o) {
                return Number(o.status) === 9;
              }).map(function (o) {
                return {
                  status: o.status,
                  resultPdfUrl: o.resultPdfUrl,
                  items: (o.items || []).map(function (i) {
                    return i.examName;
                  })
                };
              }));
              pet.exams = pet.exams.map(function (exam) {
                console.log('EXAM TYPE:', exam.type, '| ITEMS:', orders.map(function (o) {
                  var _o$items;
                  return (_o$items = o.items) === null || _o$items === void 0 ? void 0 : _o$items.map(function (i) {
                    return i.examName;
                  });
                }));
                var matchingOrder = orders.find(function (o) {
                  return (o.status === 'completed' || Number(o.status) === 9) && (o.items || []).some(function (i) {
                    return String(i.examName).toLowerCase() === String(exam.type || exam).toLowerCase();
                  });
                });
                var rawUrl = (matchingOrder === null || matchingOrder === void 0 ? void 0 : matchingOrder.resultPdfUrl) || null;
                var pdfUrl = rawUrl ? rawUrl.startsWith('http') ? rawUrl : "https://inulab-backend-production.up.railway.app".concat(rawUrl) : null;
                return _objectSpread(_objectSpread({}, exam), {}, {
                  pdfData: pdfUrl
                });
              });
            });
            db = {
              pets: pets || [],
              orders: orders || [],
              addresses: addresses || [],
              results: []
            };
            console.log("database armado", db);
            setDatabase({
              pets: (db === null || db === void 0 ? void 0 : db.pets) || [],
              orders: (db === null || db === void 0 ? void 0 : db.orders) || [],
              addresses: (db === null || db === void 0 ? void 0 : db.addresses) || [],
              results: (db === null || db === void 0 ? void 0 : db.results) || [],
              users: (db === null || db === void 0 ? void 0 : db.users) || [],
              invoices: (db === null || db === void 0 ? void 0 : db.invoices) || [],
              exams: (db === null || db === void 0 ? void 0 : db.exams) || []
            });
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t3 = _context12.v;
            console.error("ERROR API:", _t3);
            setDatabase({
              pets: [],
              orders: [],
              addresses: []
            });
          case 6:
            _context12.p = 6;
            console.log("FIN LOAD DATABASE");
            console.log("orders en render:", database.orders, Array.isArray(database.orders)); // ← agrega esto
            console.log("freshUser.id:", freshUser.id);
            console.log("orders userId:", (_database$orders$ = database.orders[0]) === null || _database$orders$ === void 0 ? void 0 : _database$orders$.userId);
            console.log("primer order completo:", database.orders[0]);
            if (!silent) setLoading(false);
            return _context12.f(6);
          case 7:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 5, 6, 7]]);
    }));
    return function loadDatabase() {
      return _ref6.apply(this, arguments);
    };
  }();
  useEffect(function () {
    console.log("DATABASE ACTUALIZADA:", database.orders);
  }, [database]);
  var handleLogin = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(e) {
      var response, data, _t4;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            e.preventDefault();
            setError('');
            _context13.p = 1;
            _context13.n = 2;
            return fetch(API_BASE + "/Auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            });
          case 2:
            response = _context13.v;
            if (response.ok) {
              _context13.n = 3;
              break;
            }
            throw new Error("Usuario o contraseña incorrectos");
          case 3:
            _context13.n = 4;
            return response.json();
          case 4:
            data = _context13.v;
            localStorage.setItem("inulab_token", data.token);
            if (!(data.user.type === 'admin' || data.user.type === 'motorizado')) {
              _context13.n = 5;
              break;
            }
            setError('Este portal es solo para clientes. El panel de staff está en otra URL.');
            return _context13.a(2);
          case 5:
            _context13.n = 6;
            return cargarPreciosDesdeAPI();
          case 6:
            setCurrentUser(_objectSpread(_objectSpread({}, data.user), {}, {
              name: data.user.username
            }));
            setUserType(data.user.type);
            setIsAuthenticated(true);
            _context13.n = 8;
            break;
          case 7:
            _context13.p = 7;
            _t4 = _context13.v;
            setError("Usuario o contraseña incorrectos");
          case 8:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 7]]);
    }));
    return function handleLogin(_x) {
      return _ref7.apply(this, arguments);
    };
  }(); // Función para obtener nombre de mascota con apellido del dueño
  var getPetFullName = function getPetFullName(pet) {
    if (!pet || !pet.owner) return (pet === null || pet === void 0 ? void 0 : pet.name) || '';
    var ownerParts = pet.owner.trim().split(' ');
    var lastName = ownerParts.length > 1 ? ownerParts.slice(1).join(' ') : '';
    return lastName ? "".concat(pet.name, " ").concat(lastName) : pet.name;
  };
  var handleLogout = function handleLogout() {
    localStorage.removeItem('inulab_token');
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentUser(null);
    setSelectedPet(null);
    setSelectedExam(null);
    setUsername('');
    setPassword('');
    setError('');
    setActiveTab('pedidos');
    setSearchTerm('');
    setCart([]);
    setPendingExams([]);
    setCurrentExamForPet(null);
    setShowNewPetForm(false);
    setNewPet({
      name: '',
      owner: '',
      animalType: '',
      breed: '',
      ageValue: '',
      ageUnit: 'años',
      sex: ''
    });
    setSelectedPetForOrder(null);
    setShowAddressSelection(false);
    setShowNewAddressForm(false);
    setNewAddress({
      name: '',
      address: '',
      district: '',
      reference: ''
    });
    setShowEditProfile(false);
    setDuenoMenuOpen(false);
    setDuenoView('main');
    setOrderComment('');
  }; // Funciones para editar perfil
  var openEditProfile = function openEditProfile() {
    var user = database.users.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    }) || currentUser;
    setEditProfile({
      name: user.name || '',
      clinic: user.clinic || '',
      phone: user.phone || '',
      email: user.email || '',
      address: user.profileAddress || '',
      district: user.profileDistrict || '',
      ruc: user.ruc || ''
    });
    setShowEditProfile(true);
  };
  var saveProfile = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
      var changingName,
        userIndex,
        user,
        nameChanges,
        changesThisYear,
        _args14 = arguments,
        _t5;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            changingName = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : false;
            userIndex = database.users.findIndex(function (u) {
              return u.id === currentUser.id;
            });
            if (!(userIndex === -1)) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            user = _objectSpread({}, database.users[userIndex]);
            if (!(changingName && editProfile.name !== user.name)) {
              _context14.n = 3;
              break;
            }
            nameChanges = user.nameChanges || [];
            changesThisYear = nameChanges.filter(function (c) {
              return new Date(c).getFullYear() === new Date().getFullYear();
            }).length;
            if (!(changesThisYear >= 1)) {
              _context14.n = 2;
              break;
            }
            alert('Has alcanzado el límite de 1 cambio de nombre por año.');
            return _context14.a(2);
          case 2:
            user.nameChanges = [].concat(_toConsumableArray(nameChanges), [new Date().toISOString()]);
            user.name = editProfile.name;
          case 3:
            user.clinic = editProfile.clinic;
            user.phone = editProfile.phone;
            user.email = editProfile.email;
            user.profileAddress = editProfile.address;
            user.profileDistrict = editProfile.district;
            user.ruc = editProfile.ruc;
            _context14.p = 4;
            saveDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? user : u;
                })
              });
            });
            setCurrentUser(user);
            _context14.n = 6;
            break;
          case 5:
            _context14.p = 5;
            _t5 = _context14.v;
            alert(_t5.message);
            return _context14.a(2);
          case 6:
            setShowEditProfile(false);
            setSuccessMessage('Perfil actualizado correctamente');
            setTimeout(function () {
              return setSuccessMessage('');
            }, 3000);
          case 7:
            return _context14.a(2);
        }
      }, _callee14, null, [[4, 5]]);
    }));
    return function saveProfile() {
      return _ref8.apply(this, arguments);
    };
  }();
  var getNameChangesRemaining = function getNameChangesRemaining() {
    var _database$users2;
    var user = database === null || database === void 0 || (_database$users2 = database.users) === null || _database$users2 === void 0 ? void 0 : _database$users2.find(function (u) {
      return u.id === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    });
    if (!user) return 1;
    var currentYear = new Date().getFullYear();
    var nameChanges = user.nameChanges || [];
    var changesThisYear = nameChanges.filter(function (c) {
      return new Date(c).getFullYear() === currentYear;
    }).length;
    return 1 - changesThisYear;
  };
  var getNameChangeText = function getNameChangeText() {
    var remaining = getNameChangesRemaining();
    if (remaining <= 0) return 'Sin cambios disponibles este año';
    return '1 cambio disponible este año';
  };
  var selectExam = function selectExam(exam) {
    if (!pendingExams.find(function (e) {
      return e.id === exam.id;
    }) && !cart.find(function (c) {
      return c.exam.id === exam.id;
    })) {
      setPendingExams([].concat(_toConsumableArray(pendingExams), [exam]));
      setCurrentExamForPet(exam);
      setPetSearchTerm('');
      setShowNewPetForm(false);
    }
  };
  var removeFromPending = function removeFromPending(examId) {
    setPendingExams(pendingExams.filter(function (e) {
      return e.id !== examId;
    }));
    if ((currentExamForPet === null || currentExamForPet === void 0 ? void 0 : currentExamForPet.id) === examId) setCurrentExamForPet(null);
  };
  var removeFromCart = function removeFromCart(examId) {
    setCart(cart.filter(function (c) {
      return c.exam.id !== examId;
    }));
  };
  var handleExamClick = function handleExamClick(exam) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === exam.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === exam.id;
    });
    if (isInCart) removeFromCart(exam.id);else if (isPending) {
      setCurrentExamForPet(exam);
      setPetSearchTerm('');
      setShowNewPetForm(false);
    } // re-entra al flujo
    else selectExam(exam);
  };
  var assignPetToExam = function assignPetToExam(pet) {
    if (currentExamForPet) {
      setSelectedPetForOrder(pet);
      setShowAddressSelection(true);
      loadAddresses(); // ← agrega esta línea
      setShowNewPetForm(false);
      setShowNewAddressForm(false);
    }
  };
  var assignAddressAndComplete = function assignAddressAndComplete(address) {
    var tomaMuestra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (currentExamForPet && selectedPetForOrder) {
      setCart([].concat(_toConsumableArray(cart), [{
        exam: currentExamForPet,
        pet: selectedPetForOrder,
        address: address,
        tomaMuestra: tomaMuestra
      }]));
      setPendingExams(pendingExams.filter(function (e) {
        return e.id !== currentExamForPet.id;
      }));
      var remaining = pendingExams.filter(function (e) {
        return e.id !== currentExamForPet.id;
      });
      if (remaining.length > 0) {
        setCurrentExamForPet(remaining[0]);
        setSelectedPetForOrder(null);
        setShowAddressSelection(false);
      } else {
        setCurrentExamForPet(null);
        setSelectedPetForOrder(null);
        setShowAddressSelection(false);
      }
      setPetSearchTerm('');
      setShowNewPetForm(false);
      setShowNewAddressForm(false);
      setShowTomaMuestraStep(false);
      setPendingOrderAddress(null);
    }
  };
  var handleDuenoAddressSelect = function handleDuenoAddressSelect(addr) {
    setPendingOrderAddress(addr);
    setShowTomaMuestraStep(true);
    setShowNewAddressForm(false);
  };
  var completeTomaMuestraStep = function completeTomaMuestraStep(wantsTomaMuestra) {
    assignAddressAndComplete(pendingOrderAddress, wantsTomaMuestra);
    setShowTomaMuestraStep(false);
    setPendingOrderAddress(null);
  };
  var _useState195 = useState(false),
    _useState196 = _slicedToArray(_useState195, 2),
    gettingLocation = _useState196[0],
    setGettingLocation = _useState196[1];
  var getMyLocation = function getMyLocation() {
    if (!navigator.geolocation) {
      alert('Tu navegador no soporta geolocalización');
      return;
    }
    setGettingLocation(true);
    navigator.geolocation.getCurrentPosition(/*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(position) {
        var _position$coords, latitude, longitude, response, data, _addr, street, number, district, _t6;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.p = _context15.n) {
            case 0:
              _position$coords = position.coords, latitude = _position$coords.latitude, longitude = _position$coords.longitude;
              _context15.p = 1;
              _context15.n = 2;
              return fetch("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(latitude, "&lon=").concat(longitude, "&addressdetails=1"));
            case 2:
              response = _context15.v;
              _context15.n = 3;
              return response.json();
            case 3:
              data = _context15.v;
              if (data && data.address) {
                _addr = data.address;
                street = _addr.road || _addr.street || '';
                number = _addr.house_number || '';
                district = _addr.suburb || _addr.neighbourhood || _addr.city_district || _addr.town || _addr.city || '';
                setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
                  name: newAddress.name || "",
                  address: "".concat(street, " ").concat(number).trim() || data.display_name.split(',')[0],
                  district: district,
                  reference: ''
                }));
              }
              _context15.n = 5;
              break;
            case 4:
              _context15.p = 4;
              _t6 = _context15.v;
              alert('No se pudo obtener la dirección. Intenta de nuevo.');
            case 5:
              setGettingLocation(false);
            case 6:
              return _context15.a(2);
          }
        }, _callee15, null, [[1, 4]]);
      }));
      return function (_x2) {
        return _ref9.apply(this, arguments);
      };
    }(), function (error) {
      setGettingLocation(false);
      if (error.code === 1) {
        alert('Permiso de ubicación denegado. Habilítalo en tu navegador.');
      } else {
        alert('No se pudo obtener tu ubicación. Intenta de nuevo.');
      }
    }, {
      enableHighAccuracy: true,
      timeout: 10000
    });
  };
  var addNewAddress = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var response, savedAddress, _t7;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            console.log("SE PRESIONO GUARDAR DIRECCION");
            _context16.p = 1;
            _context16.n = 2;
            return fetch("".concat(API_BASE, "/Addresses"), {
              method: "POST",
              headers: _objectSpread(_objectSpread({}, api._headers()), {}, {
                "Content-Type": "application/json"
              }),
              body: JSON.stringify({
                name: newAddress.name || "Casa",
                street: newAddress.address,
                district: newAddress.district,
                reference: newAddress.reference
              })
            });
          case 2:
            response = _context16.v;
            console.log("STATUS:", response.status);
            _context16.n = 3;
            return response.json();
          case 3:
            savedAddress = _context16.v;
            console.log("RESPUESTA:", savedAddress); // 🔥 Agrega la nueva dirección directamente al estado
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                addresses: [].concat(_toConsumableArray(prev.addresses || []), [savedAddress])
              });
            });
            setShowNewAddressForm(false);
            assignAddressAndComplete(savedAddress);
            _context16.n = 5;
            break;
          case 4:
            _context16.p = 4;
            _t7 = _context16.v;
            console.error("Error:", _t7);
          case 5:
            return _context16.a(2);
        }
      }, _callee16, null, [[1, 4]]);
    }));
    return function addNewAddress() {
      return _ref0.apply(this, arguments);
    };
  }();
  var addNewPet = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var petData, response, pet, _t8;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (!(!newPet.name || !newPet.animalType || !newPet.breed || !newPet.sex)) {
              _context17.n = 1;
              break;
            }
            alert('Por favor completa todos los campos');
            return _context17.a(2);
          case 1:
            if (!(!newPet.ageValue || parseInt(newPet.ageValue) < 0)) {
              _context17.n = 2;
              break;
            }
            alert('Por favor ingresa la edad');
            return _context17.a(2);
          case 2:
            _context17.p = 2;
            // Datos que se enviarán al backend
            petData = {
              name: newPet.name,
              species: newPet.animalType,
              breed: newPet.breed,
              age: parseInt(newPet.ageValue)
            }; // Llamada a la API
            _context17.n = 3;
            return api.createPet(petData);
          case 3:
            response = _context17.v;
            // Algunas APIs devuelven { pet: {...} } y otras directamente el objeto
            pet = (response === null || response === void 0 ? void 0 : response.data) || (response === null || response === void 0 ? void 0 : response.pet) || response; // Agregar al estado del frontend
            setDatabase(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                pets: Array.isArray(prev.pets) ? [].concat(_toConsumableArray(prev.pets), [pet]) : [pet]
              });
            }); // Seleccionar automáticamente la mascota
            assignPetToExam(pet); // Limpiar formulario
            setNewPet({
              name: '',
              owner: '',
              animalType: '',
              breed: '',
              ageValue: '',
              ageUnit: 'años',
              sex: ''
            }); // Cerrar formulario
            setShowNewPetForm(false);
            _context17.n = 5;
            break;
          case 4:
            _context17.p = 4;
            _t8 = _context17.v;
            console.error("Error creando mascota:", _t8);
            alert("Error al guardar la mascota");
          case 5:
            return _context17.a(2);
        }
      }, _callee17, null, [[2, 4]]);
    }));
    return function addNewPet() {
      return _ref1.apply(this, arguments);
    };
  }();
  var submitOrder = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var _cart$, _cart$2, _cart$3, total, addressId, response, text, _order, _t9;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            _context18.p = 0;
            total = cart.reduce(function (sum, item) {
              return sum + (item.exam.price || 0);
            }, 0);
            addressId = (_cart$ = cart[0]) === null || _cart$ === void 0 || (_cart$ = _cart$.address) === null || _cart$ === void 0 ? void 0 : _cart$.id;
            console.log("CART COMPLETO:", JSON.stringify((_cart$2 = cart[0]) === null || _cart$2 === void 0 ? void 0 : _cart$2.address));
            console.log("ADDRESS ID:", addressId);
            _context18.n = 1;
            return fetch("".concat(API_BASE, "/Orders"), {
              method: "POST",
              headers: _objectSpread(_objectSpread({}, api._headers()), {}, {
                "Content-Type": "application/json"
              }),
              body: JSON.stringify({
                total: total,
                addressId: addressId || '00000000-0000-0000-0000-000000000000',
                examName: cart.map(function (item) {
                  return item.exam.name;
                }).join(', '),
                petId: ((_cart$3 = cart[0]) === null || _cart$3 === void 0 || (_cart$3 = _cart$3.pet) === null || _cart$3 === void 0 ? void 0 : _cart$3.id) || '00000000-0000-0000-0000-000000000000'
              })
            });
          case 1:
            response = _context18.v;
            if (response.ok) {
              _context18.n = 3;
              break;
            }
            _context18.n = 2;
            return response.text();
          case 2:
            text = _context18.v;
            console.error("ERROR BACKEND:", text);
            throw new Error("Error en backend");
          case 3:
            _context18.n = 4;
            return response.json();
          case 4:
            _order = _context18.v;
            console.log("ORDER CREADO:", _order);
            if ('Notification' in window && Notification.permission === 'default') {
              Notification.requestPermission();
            }
            alert('¡Pedido enviado exitosamente!');
            _context18.n = 5;
            return loadDatabase();
          case 5:
            setCart([]);
            setPendingExams([]);
            setCurrentExamForPet(null);
            setShowOrderSummary(false);
            setInvoiceType('factura');
            setOrderComment('');
            setTermsAccepted(false);
            setMedicoView('inicio');
            _context18.n = 7;
            break;
          case 6:
            _context18.p = 6;
            _t9 = _context18.v;
            console.error(_t9);
            alert("Error al enviar pedido");
          case 7:
            return _context18.a(2);
        }
      }, _callee18, null, [[0, 6]]);
    }));
    return function submitOrder() {
      return _ref10.apply(this, arguments);
    };
  }();
  var getStatusInfo = function getStatusInfo(status) {
    var statusMap = {
      'pending': {
        label: 'Pendiente',
        color: 'text-amber-600',
        bg: 'bg-amber-100',
        icon: 'fa-clock'
      },
      'assigned': {
        label: 'Asignado a motorizado',
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        icon: 'fa-user-check'
      },
      'moto_en_camino': {
        label: 'Motorizado en camino',
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
        icon: 'fa-motorcycle'
      },
      'moto_arrived': {
        label: 'Motorizado llegó',
        color: 'text-red-600',
        bg: 'bg-red-100',
        icon: 'fa-map-marker-alt'
      },
      'pickup_in_progress': {
        label: 'Recojo en camino',
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        icon: 'fa-motorcycle'
      },
      'sample_received': {
        label: 'Regresando al laboratorio',
        color: 'text-violet-600',
        bg: 'bg-violet-100',
        icon: 'fa-route'
      },
      'arrived_at_lab': {
        label: 'Muestra en laboratorio',
        color: 'text-purple-600',
        bg: 'bg-purple-100',
        icon: 'fa-flask'
      },
      'processing': {
        label: 'En proceso',
        color: 'text-cyan-600',
        bg: 'bg-cyan-100',
        icon: 'fa-flask'
      },
      'results_uploaded': {
        label: 'Resultados listos / Esperando pago',
        color: 'text-orange-600',
        bg: 'bg-orange-100',
        icon: 'fa-credit-card'
      },
      'completed': {
        label: 'Completado',
        color: 'text-emerald-600',
        bg: 'bg-emerald-100',
        icon: 'fa-check-circle'
      }
    };
    return statusMap[status] || statusMap['pending'];
  };
  var markExamAsSeen = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(exam, pet) {
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            if (exam.seen === false) {
              try {
                saveDatabase(function (prev) {
                  var userIndex = prev.users.findIndex(function (u) {
                    return u.id === currentUser.id;
                  });
                  if (userIndex === -1) return prev;
                  var user = prev.users[userIndex];
                  var petsArray = user.type === 'medico' ? 'patients' : 'pets';
                  var petIndex = (user[petsArray] || []).findIndex(function (p) {
                    return p.id === pet.id;
                  });
                  if (petIndex === -1) return prev;
                  var updatedExams = (user[petsArray][petIndex].exams || []).map(function (e) {
                    return e.id === exam.id ? _objectSpread(_objectSpread({}, e), {}, {
                      seen: true
                    }) : e;
                  });
                  var updatedPets = (user[petsArray] || []).map(function (p, i) {
                    return i === petIndex ? _objectSpread(_objectSpread({}, p), {}, {
                      exams: updatedExams
                    }) : p;
                  });
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    users: (prev.users || []).map(function (u, i) {
                      return i === userIndex ? _objectSpread(_objectSpread({}, u), {}, _defineProperty({}, petsArray, updatedPets)) : u;
                    }),
                    nightMode: getCurrentNightMode()
                  });
                });
              } catch (err) {
                console.error('Error marking exam as seen:', err);
              }
              exam = _objectSpread(_objectSpread({}, exam), {}, {
                seen: true
              });
            }
            setSelectedExam(exam);
          case 1:
            return _context19.a(2);
        }
      }, _callee19);
    }));
    return function markExamAsSeen(_x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  var countUnseenExams = function countUnseenExams(pets) {
    return (pets || []).reduce(function (total, pet) {
      return total + (pet.exams || []).filter(function (e) {
        return e.seen === false;
      }).length;
    }, 0);
  };
  var countUnseenExamsForPet = function countUnseenExamsForPet(pet) {
    return (pet.exams || []).filter(function (e) {
      return e.seen === false;
    }).length;
  };
  var countPendingPayments = function countPendingPayments() {
    return (database.orders || []).filter(function (o) {
      return o.userId === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) && o.status === 'results_uploaded';
    }).length;
  };
  var handleResultPdfUpload = function handleResultPdfUpload(e, itemIndex) {
    var file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      var reader = new FileReader();
      reader.onload = function (event) {
        setUploadedFiles(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, itemIndex, {
            name: file.name,
            data: event.target.result
          }));
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var handleFileUpload = function handleFileUpload(e) {
    var file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Guardar tanto el File (para FormData upload) como el base64 (para preview)
      var reader = new FileReader();
      reader.onload = function (event) {
        setUploadedFile({
          file: file,
          name: file.name,
          data: event.target.result,
          size: file.size
        });
      };
      reader.readAsDataURL(file);
    }
  };
  var handleSubmitExam = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var newExam;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            if (!(!selectedUserForUpload || !selectedPetForUpload || !uploadedFile || !examTitle)) {
              _context20.n = 1;
              break;
            }
            return _context20.a(2);
          case 1:
            newExam = {
              id: 'EX' + Date.now(),
              date: examDate,
              type: examTitle,
              status: 'completed',
              pdfData: uploadedFile.data,
              pdfName: uploadedFile.name,
              uploadedAt: new Date().toISOString()
            };
            saveDatabase(function (prev) {
              var userIndex = prev.users.findIndex(function (u) {
                return u.id === selectedUserForUpload.id;
              });
              var user = prev.users[userIndex];
              var petsArray = user.type === 'medico' ? 'patients' : 'pets';
              var petIndex = (user[petsArray] || []).findIndex(function (p) {
                return p.id === selectedPetForUpload.id;
              });
              var updatedExams = [newExam].concat(_toConsumableArray(user[petsArray][petIndex].exams || []));
              var updatedPets = user[petsArray].map(function (p, i) {
                return i === petIndex ? _objectSpread(_objectSpread({}, p), {}, {
                  exams: updatedExams
                }) : p;
              });
              return _objectSpread(_objectSpread({}, prev), {}, {
                users: prev.users.map(function (u, i) {
                  return i === userIndex ? _objectSpread(_objectSpread({}, u), {}, _defineProperty({}, petsArray, updatedPets)) : u;
                }),
                nightMode: getCurrentNightMode()
              });
            });
            setSuccessMessage("\u2705 Resultado subido para ".concat(selectedPetForUpload.name));
            setUploadedFile(null);
            setExamTitle('');
            setSelectedPetForUpload(null);
            if (document.getElementById('pdfInput')) document.getElementById('pdfInput').value = '';
            setTimeout(function () {
              return setSuccessMessage('');
            }, 4000);
          case 2:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    return function handleSubmitExam() {
      return _ref12.apply(this, arguments);
    };
  }();
  var filteredPerfiles = searchTerm.trim() === '' ? perfiles : perfiles.filter(function (p) {
    return flexibleSearch(p.name, searchTerm) || flexibleSearch(p.subtitle, searchTerm);
  });
  var filteredCategorias = searchTerm.trim() === '' ? categorias : categorias.map(function (cat) {
    return _objectSpread(_objectSpread({}, cat), {}, {
      examenes: cat.examenes.filter(function (e) {
        return flexibleSearch(e.name, searchTerm) || e.subtitle && flexibleSearch(e.subtitle, searchTerm);
      })
    });
  }).filter(function (cat) {
    return cat.examenes.length > 0;
  });
  var hayResultados = filteredPerfiles.length > 0 || filteredCategorias.length > 0; // LOGIN PRIMERO
  if (!isAuthenticated) {
    var handleRegister = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(e) {
        var response, msg, _t0;
        return _regenerator().w(function (_context21) {
          while (1) switch (_context21.p = _context21.n) {
            case 0:
              e.preventDefault();
              setRegError('');
              if (!(regData.password !== regData.confirmPassword)) {
                _context21.n = 1;
                break;
              }
              setRegError('Las contraseñas no coinciden');
              return _context21.a(2);
            case 1:
              if (!(regData.password.length < 6)) {
                _context21.n = 2;
                break;
              }
              setRegError('La contraseña debe tener al menos 6 caracteres');
              return _context21.a(2);
            case 2:
              setRegLoading(true);
              _context21.p = 3;
              _context21.n = 4;
              return fetch(API_BASE + "/Auth/registrarse", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: regData.username,
                  email: regData.email,
                  phone: regData.phone,
                  password: regData.password,
                  type: regData.type
                })
              });
            case 4:
              response = _context21.v;
              if (response.ok) {
                _context21.n = 6;
                break;
              }
              _context21.n = 5;
              return response.text();
            case 5:
              msg = _context21.v;
              throw new Error(msg || 'Error al registrarse');
            case 6:
              setRegSuccess('¡Cuenta creada exitosamente! Ya puedes ingresar.');
              setTimeout(function () {
                setAuthMode('login');
                setRegSuccess('');
              }, 2500);
              _context21.n = 8;
              break;
            case 7:
              _context21.p = 7;
              _t0 = _context21.v;
              setRegError(_t0.message);
            case 8:
              _context21.p = 8;
              setRegLoading(false);
              return _context21.f(8);
            case 9:
              return _context21.a(2);
          }
        }, _callee21, null, [[3, 7, 8, 9]]);
      }));
      return function handleRegister(_x5) {
        return _ref13.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen flex items-center justify-center p-4 login-wrapper",
      style: {
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center mb-6"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULABORATORIOS",
      className: "h-14 mb-2",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl items-center justify-center text-white font-bold text-2xl mb-2"
    }, "I"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-600 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("div", {
      className: "flex rounded-xl bg-gray-100 p-1 mb-5"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setAuthMode('login');
        setRegError('');
        setRegSuccess('');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-semibold transition-all ".concat(authMode === 'login' ? 'bg-white shadow text-cyan-600' : 'text-gray-500 hover:text-gray-700')
    }, "Ingresar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setAuthMode('register');
        setError('');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-semibold transition-all ".concat(authMode === 'register' ? 'bg-white shadow text-cyan-600' : 'text-gray-500 hover:text-gray-700')
    }, "Crear cuenta")), authMode === 'login' && /*#__PURE__*/React.createElement("form", {
      onSubmit: handleLogin,
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: username,
      onChange: function onChange(e) {
        return setUsername(e.target.value);
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Usuario"
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Contrase\xF1a"
    }), error && /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-200 p-2.5 rounded-xl"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-red-600"
    }, error)), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 transition-all shadow-md"
    }, "Ingresar")), authMode === 'register' && /*#__PURE__*/React.createElement("form", {
      onSubmit: handleRegister,
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: regData.username,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          username: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Nombre de usuario",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: regData.email,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          email: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Correo electr\xF3nico",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: regData.phone,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          phone: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Tel\xE9fono"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: regData.type,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          type: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:border-cyan-500 focus:bg-white focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "due\xF1o"
    }, "\uD83D\uDC3E Due\xF1o de mascota"), /*#__PURE__*/React.createElement("option", {
      value: "medico"
    }, "\uD83C\uDFE5 M\xE9dico / Cl\xEDnica")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    }))), regData.type === 'medico' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: regData.clinicName || '',
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          clinicName: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Nombre de la cl\xEDnica"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: regData.ruc || '',
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          ruc: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "RUC (opcional)",
      maxLength: 11
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: regData.district || '',
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Distrito"
    })), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: regData.password,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          password: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Contrase\xF1a",
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: regData.confirmPassword,
      onChange: function onChange(e) {
        return setRegData(_objectSpread(_objectSpread({}, regData), {}, {
          confirmPassword: e.target.value
        }));
      },
      className: "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:border-cyan-500 focus:bg-white focus:outline-none",
      placeholder: "Confirmar contrase\xF1a",
      required: true
    }), regError && /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-200 p-2.5 rounded-xl"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-red-600"
    }, regError)), regSuccess && /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, regSuccess)), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      disabled: regLoading,
      className: "w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 transition-all shadow-md disabled:opacity-60"
    }, regLoading ? 'Creando cuenta...' : 'Crear cuenta')))));
  } // SPINNER DESPUÉS DEL LOGIN
  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100 flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent"
    }));
  } // Definir usuario fresco para todo el render
  var freshUser = currentUser; // Vista PDF (solo móvil o usuarios no médicos)
  if (selectedExam && freshUser.type !== 'medico' && window.innerWidth < 768) {
    var downloadPdf = function downloadPdf() {
      if (selectedExam.pdfData) {
        var win = window.open();
        win.location.href = selectedExam.pdfData;
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#f3f4f6',
        zIndex: 10000
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800 leading-tight truncate"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-xs"
    }, new Date(selectedExam.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        border: '1px solid #e5e7eb'
      }
    }, selectedExam.pdfData ? /*#__PURE__*/React.createElement("iframe", {
      src: selectedExam.pdfData,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        border: 'none',
        borderRadius: '16px',
        margin: '8px 0'
      },
      title: "PDF"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-5xl mb-3 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "PDF no disponible"))), selectedExam.pdfData && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: selectedExam.pdfData,
      target: "_blank",
      rel: "noopener",
      className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-semibold text-sm shadow-lg"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))));
  } // Visor de Comprobante (solo móvil o usuarios no médicos)
  if (viewingInvoice && freshUser.type !== 'medico' && window.innerWidth < 768) {
    var docType = viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura';
    var downloadInvoice = function downloadInvoice() {
      if (viewingInvoice.invoicePdf) {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(docType, "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#f3f4f6',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-7",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800 leading-tight"
    }, docType), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-xs"
    }, new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        border: '1px solid #e5e7eb'
      }
    }, viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement(PdfViewer, {
      url: viewingInvoice.invoicePdf,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        border: 'none',
        borderRadius: '16px'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-5xl mb-3 text-gray-300")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, docType, " no disponible"))), viewingInvoice.invoicePdf && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: downloadInvoice,
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-amber-500 to-orange-600', " text-white rounded-xl font-semibold text-sm shadow-md")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))));
  } // Vista PDF médico — early return para evitar el transform de mob-content
  if (selectedExam && freshUser.type === 'medico' && window.innerWidth < 768) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#f3f4f6',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800 leading-tight truncate"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-xs"
    }, new Date(selectedExam.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        border: '1px solid #e5e7eb'
      }
    }, selectedExam.pdfData ? /*#__PURE__*/React.createElement(PdfViewer, {
      url: selectedExam.pdfData,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        border: 'none',
        borderRadius: '16px'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-5xl mb-3 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "PDF no disponible"))), selectedExam.pdfData && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = selectedExam.pdfData;
        link.download = "".concat(selectedExam.type.replace(/[^a-zA-Z0-9]/g, '_'), ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-md"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))));
  } // Vista Comprobante médico — early return
  if (viewingInvoice && freshUser.type === 'medico' && window.innerWidth < 768) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#f3f4f6',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-gray-800 leading-tight"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-xs"
    }, new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'hidden',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        border: '1px solid #e5e7eb'
      }
    }, viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement("iframe", {
      src: viewingInvoice.invoicePdf,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        border: 'none',
        borderRadius: '16px'
      },
      title: "Comprobante PDF"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-5xl mb-3 text-gray-300")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', " no disponible"))), viewingInvoice.invoicePdf && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-amber-500 to-orange-600', " text-white rounded-xl font-semibold text-sm shadow-md")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar PDF"))));
  } // Helper functions for dueño shell (header + sidebar)
  var petsOrPatients = freshUser.type === 'medico' ? (database === null || database === void 0 ? void 0 : database.pets) || [] : (database === null || database === void 0 ? void 0 : database.pets) || [];
  var entityName = freshUser.type === 'medico' ? 'paciente' : 'mascota';
  var filteredPets = petSearchTerm.trim() === '' ? (database === null || database === void 0 ? void 0 : database.pets) || [] : ((database === null || database === void 0 ? void 0 : database.pets) || []).filter(function (p) {
    return p.name.toLowerCase().includes(petSearchTerm.toLowerCase());
  });
  var resetDuenoState = function resetDuenoState() {
    setSelectedPet(null);
    setDuenoView('main');
    setShowEditProfile(false);
    setSelectedPaqueteDetail(null);
    setViewingOrderTracking(null);
    setSelectedExam(null);
    setViewingInvoice(null);
    setShowAllPending(false);
    setFacturacionInvoice(null);
    setCurrentExamForPet(null);
    setPendingExams([]);
    setCart([]);
    setShowNewPetForm(false);
    setShowAddressSelection(false);
    setShowNewAddressForm(false);
    setSelectedPetForOrder(null);
    setShowTomaMuestraStep(false);
    setPendingOrderAddress(null);
  };
  var renderDuenoHeader = function renderDuenoHeader() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden mob-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-logo cursor-pointer",
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULAB",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-sm"
    }, "I")), /*#__PURE__*/React.createElement("span", {
      className: "mob-header-title"
    }, freshUser.name), /*#__PURE__*/React.createElement("div", {
      className: "mob-header-actions"
    }, countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
    }, countUnseenExams(petsOrPatients) + countPendingPayments()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return cart.length > 0 && setShowOrderSummary(true);
      },
      className: "relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors ".concat(cart.length > 0 ? 'bg-cyan-100 text-cyan-700' : 'bg-gray-100 text-gray-300 cursor-default')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-base"
    }), cart.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold"
    }, cart.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDuenoMenuOpen(!duenoMenuOpen);
      },
      className: "w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars text-base"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:block bg-white border-b border-gray-200 px-6 py-3 fixed top-0 left-0 right-0 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 cursor-pointer",
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl items-center justify-center text-white font-bold"
    }, "I"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-700 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Cliente")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setDuenoView('config');
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars"
    }))))), duenoMenuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-overlay lg:hidden",
      onClick: function onClick() {
        return setDuenoMenuOpen(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-panel",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between px-5 py-4 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider"
    }, "Men\xFA"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDuenoMenuOpen(false);
      },
      className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-5 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Cliente"), freshUser.email && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, freshUser.email)))), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 space-y-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        resetDuenoState();
        setDuenoView('config');
        setShowEditProfile(true);
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-edit text-cyan-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Editar Perfil"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        resetDuenoState();
        setDuenoView('config');
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog text-gray-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2 space-y-1"
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-green-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-green-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "WhatsApp Soporte"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setDuenoMenuOpen(false);
        handleLogout();
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-50 text-red-500 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt text-red-500"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Cerrar Sesi\xF3n"))))));
  };
  var renderDuenoSidebar = function renderDuenoSidebar() {
    return /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex w-56 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 flex-col z-40"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "flex-1 p-3 space-y-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('pedidos');
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'bg-white/20' : 'bg-cyan-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'text-white' : 'text-cyan-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('resultados');
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-white/20' : 'bg-purple-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'text-white' : 'text-purple-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Resultados"), countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'bg-white/20' : 'bg-red-100 text-red-600')
    }, countUnseenExams(petsOrPatients) + countPendingPayments())), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        resetDuenoState();
        setActiveTab('facturacion');
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(activeTab === 'facturacion' ? 'bg-amber-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(activeTab === 'facturacion' ? 'bg-amber-400' : 'bg-amber-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-sm ".concat(activeTab === 'facturacion' ? 'text-white' : 'text-amber-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Facturaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-4 mb-8"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, "\xBFNecesitas asistencia?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-2"
    }, "Cont\xE1ctanos:"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-xs"
    }), "lab@inulaboratorios.com"), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-2 text-xs text-green-600 hover:text-green-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-xs"
    }), "WhatsApp Inulab")));
  }; // Vista de Tracking de Pedido (para clientes)
  // Vista de Tracking de Pedido (solo mobile - para clientes y médicos)
  if (viewingOrderTracking && window.innerWidth < 768) {
    // Obtener datos frescos del pedido desde la base de datos
    var _order2 = (database.orders || []).find(function (o) {
      return o.id === viewingOrderTracking.id;
    }) || viewingOrderTracking;
    var orderDate = new Date(_order2.createdAt || _order2.date);
    var formatDateTime = function formatDateTime(date) {
      if (!date) return '';
      var d = new Date(date);
      return d.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      }) + ' - ' + d.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }; // Definir los pasos del tracking
    var steps = [{
      id: 'pending',
      label: 'Pedido realizado',
      subtitle: 'Tu pedido ha sido registrado',
      icon: 'fa-clipboard-check',
      date: _order2.createdAt || _order2.date
    }, {
      id: 'confirmed',
      label: 'Pedido confirmado',
      subtitle: 'El laboratorio confirmó tu pedido',
      icon: 'fa-check-circle',
      date: _order2.createdAt || _order2.date
    }, {
      id: 'moto_en_camino',
      label: 'Motorizado en camino',
      subtitle: 'El motorizado va hacia tu ubicación',
      icon: 'fa-motorcycle',
      date: _order2.status === 'moto_en_camino' || ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'moto_arrived',
      label: 'Motorizado llegó',
      subtitle: 'Por favor entrega la muestra',
      icon: 'fa-map-marker-alt',
      date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'sample_received',
      label: 'Muestra recogida',
      subtitle: 'Tu muestra va camino al laboratorio',
      icon: 'fa-vial',
      date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'arrived_at_lab',
      label: 'En laboratorio',
      subtitle: 'La muestra llegó al laboratorio',
      icon: 'fa-flask',
      date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'processing',
      label: 'Procesando muestra',
      subtitle: 'Estamos analizando tu muestra',
      icon: 'fa-cog',
      date: ['processing', 'results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'results_uploaded',
      label: 'Resultados listos',
      subtitle: 'Realiza el pago para ver los resultados',
      icon: 'fa-file-medical',
      date: ['results_uploaded', 'completed'].includes(_order2.status) ? _order2.statusUpdatedAt : null
    }, {
      id: 'completed',
      label: 'Entregado',
      subtitle: '¡Ya puedes ver tus resultados!',
      icon: 'fa-check-double',
      date: _order2.status === 'completed' ? _order2.completedAt : null
    }]; // Determinar qué pasos están completados
    var statusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
    var currentIndex = statusOrder.indexOf(_order2.status === 'pending' ? 'confirmed' : _order2.status); // Solo mostrar esta vista en mobile, en desktop se maneja dentro del layout del médico
    if (userType === 'medico') {// Para médicos, no retornamos aquí - dejamos que el código del médico maneje el tracking
    } else if (freshUser.type === 'dueño') {// Para dueños, no retornamos aquí - dejamos que el código del dueño maneje el tracking
    } else {
      // Para otros clientes, mostramos la vista de tracking
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen bg-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "app-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-4xl mx-auto px-4 py-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "text-gray-600 hover:text-gray-800"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-lg"
      })), /*#__PURE__*/React.createElement("img", {
        src: "assets/logo_inulaboratorios.jpg",
        alt: "Logo",
        className: "h-10",
        onError: function onError(e) {
          e.target.style.display = 'none';
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800"
      }, currentUser.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, "Cliente")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setViewingOrderTracking(null);
          setDuenoView('config');
        },
        className: "w-10 h-10 bg-cyan-50 hover:bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 transition-colors"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-bars text-lg"
      })))))), /*#__PURE__*/React.createElement("div", {
        className: "app-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-6xl mx-auto px-4 py-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col md:flex-row gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "md:w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-0"
      }, steps.map(function (step, index) {
        var isCompleted = index <= currentIndex;
        var isCurrent = index === currentIndex;
        var isLast = index === steps.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 h-10 ".concat(index < currentIndex ? 'bg-cyan-500' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 flex items-start justify-between ".concat(!isLast ? 'pb-3' : '')
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle)), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs whitespace-nowrap ml-2"
        }, formatDateTime(step.date))));
      })))), /*#__PURE__*/React.createElement("div", {
        className: "md:w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (_order2.items || []).map(function (item, idx) {
        var _item$exam, _item$exam2, _item$exam3, _item$exam4, _item$pet;
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat((item === null || item === void 0 || (_item$exam = item.exam) === null || _item$exam === void 0 ? void 0 : _item$exam.bg) || 'bg-cyan-100', " rounded-lg flex items-center justify-center")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat((item === null || item === void 0 || (_item$exam2 = item.exam) === null || _item$exam2 === void 0 ? void 0 : _item$exam2.icon) || 'fa-vial', " ").concat((item === null || item === void 0 || (_item$exam3 = item.exam) === null || _item$exam3 === void 0 ? void 0 : _item$exam3.color) || 'text-cyan-600')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm"
        }, (item === null || item === void 0 || (_item$exam4 = item.exam) === null || _item$exam4 === void 0 ? void 0 : _item$exam4.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, (item === null || item === void 0 || (_item$pet = item.pet) === null || _item$pet === void 0 ? void 0 : _item$pet.name) || '')));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800"
      }, addr ? "".concat(addr.street, ", ").concat(addr.district) : 'Sin dirección')))), _order2.comment && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Comentario"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 text-sm"
      }, _order2.comment))))))))));
    }
  } // ADMIN
  // CLIENTE
  // Perfil mascota
  if (selectedPet && activeTab === 'resultados' && freshUser.type !== 'dueño') {
    var currentPet = (petsOrPatients || []).find(function (p) {
      return p.id === (selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.id);
    }) || selectedPet || {};
    var petProfileContent = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver a mascotas")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-5xl"
    }, currentPet === null || currentPet === void 0 ? void 0 : currentPet.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800"
    }, currentPet === null || currentPet === void 0 ? void 0 : currentPet.name), (currentPet === null || currentPet === void 0 ? void 0 : currentPet.owner) && /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "Due\xF1o: ", currentPet.owner), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 mt-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.breed), /*#__PURE__*/React.createElement("span", {
      className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs"
    }, formatAge(currentPet)), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs"
    }, currentPet.sex))))), /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, "Resultados"), ((currentPet === null || currentPet === void 0 ? void 0 : currentPet.exams) || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados disponibles")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, ((currentPet === null || currentPet === void 0 ? void 0 : currentPet.exams) || []).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, currentPet);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg flex items-center justify-between ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-cyan-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-cyan-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-ES'))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2"
      }, "NUEVO")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      }));
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setSelectedPet(null);
        setDuenoView('config');
      },
      className: "w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 max-w-4xl mx-auto"
    }, petProfileContent));
  } // Selección de mascota y dirección (solo móvil o usuarios no médicos)
  if (currentExamForPet && freshUser.type !== 'medico' && freshUser.type !== 'dueño') {
    var userAddresses = database.addresses || [];
    var backHandler = function backHandler() {
      if (showAddressSelection && !showNewAddressForm) {
        setShowAddressSelection(false);
        setSelectedPetForOrder(null);
      } else if (showNewAddressForm) {
        setShowNewAddressForm(false);
      } else if (showNewPetForm) {
        setShowNewPetForm(false);
      } else {
        setCurrentExamForPet(null);
        removeFromPending(currentExamForPet.id);
      }
    };
    var selectionBody = /*#__PURE__*/React.createElement("div", {
      className: "p-4 max-w-lg mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), pendingExams.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-700"
    }, "Examen ", pendingExams.findIndex(function (e) {
      return e.id === currentExamForPet.id;
    }) + 1, " de ", pendingExams.length)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check')
    }), " Paciente"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 text-xs"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt"
    }), " Direcci\xF3n")), !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: petSearchTerm,
      onChange: function onChange(e) {
        return setPetSearchTerm(e.target.value);
      },
      placeholder: "Buscar ".concat(entityName, "..."),
      className: "w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-64 overflow-y-auto hide-scrollbar"
    }, (filteredPets || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No se encontr\xF3 ning\xFAn ", entityName)) : (filteredPets || []).map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-3xl"
      }, "\uD83D\uDC36"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, pet.breed, " \u2022 ", formatAge(pet)), pet.owner && freshUser.type === 'medico' && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar ", freshUser.type === 'medico' ? 'nuevo paciente' : 'nueva mascota')) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), freshUser.type === 'medico' ? 'Nuevo Paciente' : 'Nueva Mascota'), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del animal"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
      value: "otro"
    }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador, Persa..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, "")
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), freshUser.type === 'medico' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.owner,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          owner: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del propietario"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar")))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    })), !showNewAddressForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-64 overflow-y-auto hide-scrollbar"
    }, (database.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No tienes direcciones guardadas")) : (database.addresses || []).map(function (addr) {
      return /*#__PURE__*/React.createElement("div", {
        key: addr.id,
        onClick: function onClick() {
          return setSelectedAddressId(addr.id);
        },
        className: "p-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600"
      }, addr.street, " \u2022 ", addr.district)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300 mt-3"
      })));
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina, Cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque, edificio azul"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setShowNewAddressForm(false);
        setNewAddress({
          name: '',
          address: '',
          district: '',
          reference: ''
        });
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: addNewAddress,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, "Guardar y usar"))))));
    console.log("RENDER STATE:", database.addresses);
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: backHandler,
      className: "text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        return e.target.style.display = 'none';
      }
    }))), selectionBody);
  } // VISTA PRINCIPAL
  // =====================================================
  // VISTA PARA MÉDICOS/CLÍNICAS - Nueva interfaz con 4 categorías
  // =====================================================
  if (freshUser.type === 'medico') {
    // Filtrar mascotas según búsqueda
    var filteredMascotas = mascotaSearchTerm.trim() === '' ? petsOrPatients : petsOrPatients.filter(function (p) {
      return (p.name || p.Name).toLowerCase().includes(mascotaSearchTerm.toLowerCase()) || p.owner && p.owner.toLowerCase().includes(mascotaSearchTerm.toLowerCase());
    }); // Filtrar exámenes de una mascota según filtros
    var filterExams = function filterExams(exams) {
      var filtered = _toConsumableArray(exams);
      if (examSearchTerm) {
        filtered = filtered.filter(function (e) {
          return e.type.toLowerCase().includes(examSearchTerm.toLowerCase());
        });
      }
      if (examFilterType) {
        filtered = filtered.filter(function (e) {
          return e.type.toLowerCase().includes(examFilterType.toLowerCase());
        });
      }
      if (examFilterDay || examFilterMonth || examFilterYear) {
        filtered = filtered.filter(function (e) {
          var examDate = new Date(e.date);
          var day = String(examDate.getDate()).padStart(2, '0');
          var month = String(examDate.getMonth() + 1).padStart(2, '0');
          var year = String(examDate.getFullYear());
          if (examFilterDay && day !== examFilterDay) return false;
          if (examFilterMonth && month !== examFilterMonth) return false;
          if (examFilterYear && year !== examFilterYear) return false;
          return true;
        });
      }
      return filtered;
    }; // Obtener todos los pedidos completados para historial
    var completedOrders = (database.orders || []).filter(function (o) {
      return (o.status === 9 || o.status === 'completed' || Number(o.status) === 9) && (o.items || []).length > 0;
    }).sort(function (a, b) {
      return new Date(b.completedAt || b.createdAt) - new Date(a.completedAt || a.createdAt);
    }); // Obtener pedidos en curso
    var pendingOrders = (database.orders || []).filter(function (o) {
      return o.status !== 9 && o.status !== 'completed' && Number(o.status) !== 9 && (o.items || []).length > 0;
    }).sort(function (a, b) {
      return new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt);
    });
    (database.orders || []).forEach(function (o) {
      console.log("ORDER:", o);
      console.log("ADDRESS ID:", o === null || o === void 0 ? void 0 : o.addressId);
    }); // Obtener tipos de examen únicos para el filtro
    var allExamTypes = _toConsumableArray(new Set((Array.isArray(petsOrPatients) ? petsOrPatients : []).flatMap(function (p) {
      return Array.isArray(p === null || p === void 0 ? void 0 : p.exams) ? p.exams : [];
    }).map(function (e) {
      return e === null || e === void 0 ? void 0 : e.type;
    }).filter(Boolean)));
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gray-100"
    }, renderTermsModal(), /*#__PURE__*/React.createElement("div", {
      className: "md:hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-header-logo cursor-pointer",
      onClick: function onClick() {
        setMedicoView('inicio');
        setShowAllPending(false);
        setSelectedMascota(null);
        setMenuOpen(false);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "INULAB",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg items-center justify-center text-white font-bold text-sm"
    }, "I")), /*#__PURE__*/React.createElement("span", {
      className: "mob-header-title"
    }, freshUser.name), /*#__PURE__*/React.createElement("div", {
      className: "mob-header-actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return cart.length > 0 && setShowOrderSummary(true);
      },
      className: "relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors ".concat(cart.length > 0 ? 'bg-gray-100 text-gray-700' : 'bg-gray-100 text-gray-300 cursor-default')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-base"
    }), cart.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold"
    }, cart.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMenuOpen(!menuOpen);
      },
      className: "w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars text-base"
    }))))), menuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-overlay",
      onClick: function onClick() {
        return setMenuOpen(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-menu-panel",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between px-5 py-4 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider"
    }, "Men\xFA"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMenuOpen(false);
      },
      className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-5 border-b border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-cyan-600 font-medium"
    }, "Cl\xEDnica / M\xE9dico"), freshUser.email && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, freshUser.email)))), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-3 space-y-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('configuracion');
        setShowEditProfile(true);
        setMenuOpen(false);
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-edit text-cyan-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Editar Perfil"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 ml-auto text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2 space-y-1"
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51954904248",
      target: "_blank",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-green-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-green-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "WhatsApp Soporte")), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-blue-50 text-gray-700 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-blue-600"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-sm"
    }, "lab@inulaboratorios.com"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-100 my-1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "px-4 py-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMenuOpen(false);
        handleLogout();
      },
      className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-50 text-red-500 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt text-red-500"
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Cerrar Sesi\xF3n"))))), /*#__PURE__*/React.createElement("div", {
      className: "mob-content",
      style: medicoView === 'inicio' && !viewingOrderTracking && !selectedExam && !viewingInvoice && !currentExamForPet && !showOrderSummary ? {
        overflow: 'hidden',
        minHeight: 'unset',
        height: 'calc(100vh - 56px - 64px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px))'
      } : {}
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto px-4 py-5"
    }, successMessage && /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-300 text-emerald-700 p-4 rounded-xl mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    }), successMessage), viewingOrderTracking && function (_trackingOrder$items, _trackingOrder$items2, _trackingOrder$items3, _trackingOrder$items4) {
      var trackingOrder = (database.orders || []).find(function (o) {
        return o.id === viewingOrderTracking.id;
      }) || viewingOrderTracking;
      var formatTrackingDateTime = function formatTrackingDateTime(date) {
        if (!date) return '';
        var d = new Date(date);
        return d.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long'
        }) + ' - ' + d.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      };
      var trackingSteps = [{
        id: 'pending',
        label: 'Pedido realizado',
        subtitle: 'Tu pedido ha sido registrado',
        icon: 'fa-clipboard-check',
        date: trackingOrder.createdAt || trackingOrder.date
      }, {
        id: 'confirmed',
        label: 'Pedido confirmado',
        subtitle: 'El laboratorio confirmó tu pedido',
        icon: 'fa-check-circle',
        date: trackingOrder.createdAt || trackingOrder.date
      }, {
        id: 'moto_en_camino',
        label: 'Motorizado en camino',
        subtitle: 'El motorizado va hacia tu ubicación',
        icon: 'fa-motorcycle',
        date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'moto_arrived',
        label: 'Motorizado llegó',
        subtitle: 'Por favor entrega la muestra',
        icon: 'fa-map-marker-alt',
        date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'sample_received',
        label: 'Muestra recogida',
        subtitle: 'Tu muestra va camino al laboratorio',
        icon: 'fa-vial',
        date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'arrived_at_lab',
        label: 'En laboratorio',
        subtitle: 'La muestra llegó al laboratorio',
        icon: 'fa-flask',
        date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'processing',
        label: 'Procesando muestra',
        subtitle: 'Estamos analizando tu muestra',
        icon: 'fa-cog',
        date: ['processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'results_uploaded',
        label: 'Resultados listos',
        subtitle: 'Realiza el pago para ver los resultados',
        icon: 'fa-file-medical',
        date: ['results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'completed',
        label: 'Entregado',
        subtitle: '¡Ya puedes ver tus resultados!',
        icon: 'fa-check-double',
        date: trackingOrder.status === 'completed' ? trackingOrder.completedAt : null
      }];
      var trackingStatusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
      var trackingCurrentIndex = trackingStatusOrder.indexOf(trackingOrder.status === 'pending' ? 'confirmed' : trackingOrder.status);
      return /*#__PURE__*/React.createElement("div", {
        className: "-mx-4 -mt-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 pt-4 pb-6 space-y-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 mb-1"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-sm"
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "text-sm font-bold text-gray-800 leading-tight"
      }, "Tracking del Pedido"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, getPetFullName(trackingOrder === null || trackingOrder === void 0 || (_trackingOrder$items = trackingOrder.items) === null || _trackingOrder$items === void 0 || (_trackingOrder$items = _trackingOrder$items[0]) === null || _trackingOrder$items === void 0 ? void 0 : _trackingOrder$items.pet), " \xB7 ", (trackingOrder === null || trackingOrder === void 0 || (_trackingOrder$items2 = trackingOrder.items) === null || _trackingOrder$items2 === void 0 || (_trackingOrder$items2 = _trackingOrder$items2[0]) === null || _trackingOrder$items2 === void 0 ? void 0 : _trackingOrder$items2.examName) || ''))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-semibold text-xs uppercase tracking-wide text-gray-400 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, ((trackingOrder === null || trackingOrder === void 0 ? void 0 : trackingOrder.items) || []).map(function (step, index, arr) {
        var _step$exam, _step$exam2, _step$exam3, _step$exam4, _step$pet;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id || index,
          className: "flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 ".concat(step === null || step === void 0 || (_step$exam = step.exam) === null || _step$exam === void 0 ? void 0 : _step$exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step === null || step === void 0 || (_step$exam2 = step.exam) === null || _step$exam2 === void 0 ? void 0 : _step$exam2.icon, " ").concat(step === null || step === void 0 || (_step$exam3 = step.exam) === null || _step$exam3 === void 0 ? void 0 : _step$exam3.color, " text-sm")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm leading-tight truncate"
        }, step === null || step === void 0 || (_step$exam4 = step.exam) === null || _step$exam4 === void 0 ? void 0 : _step$exam4.name), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, step === null || step === void 0 || (_step$pet = step.pet) === null || _step$pet === void 0 ? void 0 : _step$pet.photo, " ", getPetFullName(step.pet))));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5 text-xs"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 text-xs leading-snug"
      }, (trackingOrder === null || trackingOrder === void 0 || (_trackingOrder$items3 = trackingOrder.items) === null || _trackingOrder$items3 === void 0 || (_trackingOrder$items3 = _trackingOrder$items3[0]) === null || _trackingOrder$items3 === void 0 || (_trackingOrder$items3 = _trackingOrder$items3.address) === null || _trackingOrder$items3 === void 0 ? void 0 : _trackingOrder$items3.address) || 'Sin dirección', ", ", (trackingOrder === null || trackingOrder === void 0 || (_trackingOrder$items4 = trackingOrder.items) === null || _trackingOrder$items4 === void 0 || (_trackingOrder$items4 = _trackingOrder$items4[0]) === null || _trackingOrder$items4 === void 0 || (_trackingOrder$items4 = _trackingOrder$items4.address) === null || _trackingOrder$items4 === void 0 ? void 0 : _trackingOrder$items4.district) || ''))), (trackingOrder === null || trackingOrder === void 0 ? void 0 : trackingOrder.comment) && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 pt-2 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5 text-xs"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 text-xs leading-snug"
      }, trackingOrder === null || trackingOrder === void 0 ? void 0 : trackingOrder.comment)))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-semibold text-xs uppercase tracking-wide text-gray-400 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-0"
      }, (trackingSteps || []).map(function (step, index, arr) {
        var isCompleted = index <= trackingCurrentIndex;
        var isLast = index === arr.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 h-9 mt-0.5 ".concat(index < trackingCurrentIndex ? 'bg-cyan-400' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0 ".concat(!isLast ? 'pb-2' : '')
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm leading-tight ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs mt-0.5 ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs mt-0.5"
        }, formatTrackingDateTime(step.date))));
      })))));
    }(), currentExamForPet && !viewingOrderTracking && !viewingInvoice && !selectedExam && function () {
      var mobBackHandler = function mobBackHandler() {
        if (showAddressSelection && !showNewAddressForm) {
          setShowAddressSelection(false);
          setSelectedPetForOrder(null);
        } else if (showNewAddressForm) {
          setShowNewAddressForm(false);
        } else if (showNewPetForm) {
          setShowNewPetForm(false);
        } else {
          setCurrentExamForPet(null);
          removeFromPending(currentExamForPet.id);
        }
      };
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'fixed',
          top: 'calc(56px + env(safe-area-inset-top,0px))',
          left: 0,
          right: 0,
          bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
          display: 'flex',
          flexDirection: 'column',
          background: '#f3f4f6',
          zIndex: 50
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'white',
          position: 'relative',
          zIndex: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 pt-3 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
          borderRadius: '14px',
          padding: '12px 14px'
        },
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: mobBackHandler,
        className: "w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left text-sm"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-bold text-white text-sm leading-tight truncate"
      }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
        className: "text-cyan-100 text-xs truncate mt-0.5"
      }, currentExamForPet.subtitle)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-2 pb-2 px-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check', " text-xs")
      }), " Paciente"), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300 text-xs"
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-xs"
      }), " Direcci\xF3n"), pendingExams.length > 1 && /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-blue-500 ml-2"
      }, pendingExams.findIndex(function (e) {
        return e.id === currentExamForPet.id;
      }) + 1, "/", pendingExams.length)), !showAddressSelection && !showNewPetForm && /*#__PURE__*/React.createElement("div", {
        className: "px-4 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: petSearchTerm,
        onChange: function onChange(e) {
          return setPetSearchTerm(e.target.value);
        },
        placeholder: "Buscar paciente...",
        className: "w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-gray-50 text-sm"
      }))), showAddressSelection && !showNewAddressForm && /*#__PURE__*/React.createElement("div", {
        className: "px-4 pb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-lg leading-none"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-emerald-800 text-xs leading-tight"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-emerald-600"
      }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-emerald-500 text-sm"
      }))))), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px'
        }
      }, !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (filteredPets || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center text-gray-400 text-sm shadow-sm border border-gray-100"
      }, "No se encontr\xF3 ning\xFAn paciente") : (filteredPets || []).map(function (pet) {
        return /*#__PURE__*/React.createElement("div", {
          key: pet.id,
          onClick: function onClick() {
            return assignPetToExam(pet);
          },
          className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer active:opacity-75 border-2 border-transparent flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-2xl leading-none"
        }, pet === null || pet === void 0 ? void 0 : pet.photo), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight truncate"
        }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400 truncate"
        }, pet.breed, pet.owner ? " \xB7 ".concat(pet.owner) : '')), /*#__PURE__*/React.createElement("i", {
          className: "fas fa-chevron-right text-gray-300 text-xs flex-shrink-0"
        }));
      })) : /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl shadow-sm p-3 border border-gray-100"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-bold text-gray-700 mb-3"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-plus-circle mr-1.5 text-cyan-500"
      }), "Nuevo Paciente"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.name,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            name: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Nombre"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Especie *"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.animalType,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            animalType: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
        value: "perro"
      }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
        value: "gato"
      }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
        value: "ave"
      }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
        value: "conejo"
      }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
        value: "otro"
      }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Raza"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.breed,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            breed: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Raza"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Sexo"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.sex,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            sex: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Sexo"), /*#__PURE__*/React.createElement("option", {
        value: "Macho"
      }, "Macho"), /*#__PURE__*/React.createElement("option", {
        value: "Hembra"
      }, "Hembra")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Edad"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.ageValue,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            ageValue: e.target.value.replace(/[^0-9]/g, "")
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Ej: 3"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Unidad"), /*#__PURE__*/React.createElement("div", {
        className: "relative"
      }, /*#__PURE__*/React.createElement("select", {
        value: newPet.ageUnit,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            ageUnit: e.target.value
          }));
        },
        className: "w-full h-9 px-3 pr-8 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none bg-white appearance-none text-sm"
      }, /*#__PURE__*/React.createElement("option", {
        value: "a\xF1os"
      }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
        value: "meses"
      }, "Meses")), /*#__PURE__*/React.createElement("div", {
        className: "absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down text-xs"
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newPet.owner,
        onChange: function onChange(e) {
          return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
            owner: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Propietario"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: addNewPet,
        className: "w-full h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check mr-1.5"
      }), "Guardar y Seleccionar"))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewAddressForm ? /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (database.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center text-gray-400 text-sm shadow-sm border border-gray-100"
      }, "No hay direcciones guardadas") : (database.addresses || []).map(function (addr) {
        return /*#__PURE__*/React.createElement("div", {
          key: addr.id,
          onClick: function onClick() {
            return assignAddressAndComplete(addr);
          },
          className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer active:opacity-75 flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-cyan-600 text-xs"
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight"
        }, addr.name), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400 truncate"
        }, addr.street, ", ", addr.district)), /*#__PURE__*/React.createElement("i", {
          className: "fas fa-chevron-right text-gray-300 text-xs"
        }));
      })) : /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl shadow-sm p-3 border border-gray-100"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: getMyLocation,
        disabled: gettingLocation,
        className: "w-full mb-2.5 py-2 rounded-lg border border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium text-sm flex items-center justify-center gap-2"
      }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-spinner fa-spin text-xs"
      }), " Obteniendo...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-location-crosshairs text-xs"
      }), " Usar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-2 mb-2"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Nombre *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.name,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            name: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Casa, Cl\xEDnica..."
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.district,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            district: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Ej: Miraflores"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.address,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            address: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Av. / Calle / Jr. y n\xFAmero"
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        className: "block text-xs text-gray-500 mb-1"
      }, "Referencia"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: newAddress.reference,
        onChange: function onChange(e) {
          return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
            reference: e.target.value
          }));
        },
        className: "w-full h-9 px-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:outline-none text-sm",
        placeholder: "Frente al parque..."
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setShowNewAddressForm(false);
          setNewAddress({
            name: '',
            address: '',
            district: '',
            reference: ''
          });
        },
        className: "flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm"
      }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
        onClick: addNewAddress,
        className: "flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm"
      }, "Guardar"))))), !showNewPetForm && !showNewAddressForm && /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'white',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
          borderTop: '1px solid #e5e7eb',
          position: 'relative',
          zIndex: 2
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "px-4 py-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return !showAddressSelection ? setShowNewPetForm(true) : setShowNewAddressForm(true);
        },
        className: "w-full py-2.5 rounded-xl bg-cyan-500 text-white font-semibold text-sm active:opacity-80 flex items-center justify-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-plus text-sm"
      }), !showAddressSelection ? 'Nuevo paciente' : 'Nueva dirección'))));
    }(), !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'configuracion' && !showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-6"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800"
    }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, freshUser.clinic || 'Clínica Veterinaria'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: openEditProfile,
      className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Editar informaci\xF3n de tu cl\xEDnica")), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-400 ml-auto"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handleLogout,
      className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt"
    }), "Cerrar Sesi\xF3n")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('inicio');
      },
      className: "mt-4 w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left mr-2"
    }), "Volver al Inicio")), !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'configuracion' && showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto",
      style: {
        overflowY: 'auto',
        height: '100vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-gray-600"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold"
    }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la Cl\xEDnica", /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-amber-600 ml-2"
    }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.name,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre de tu cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raz\xF3n Social (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.clinic,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          clinic: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Raz\xF3n social para facturas"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "RUC (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.ruc,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          ruc: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "20123456789",
      maxLength: 11
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Tel\xE9fono de contacto"), /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: editProfile.phone,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          phone: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "999 888 777"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: editProfile.email,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          email: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "contacto@tuclinica.com"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.address,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. Principal 123"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.district,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Miraflores"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveProfile(editProfile.name !== freshUser.name);
      },
      className: "w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-save"
    }), "Guardar Cambios"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, "Cancelar")))), showOrderSummary && !currentExamForPet && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top,0px))',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#f3f4f6',
        zIndex: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg,#06b6d4,#0284c7)',
        flexShrink: 0,
        boxShadow: '0 3px 12px rgba(6,182,212,0.35)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-4 flex items-center gap-3",
      style: {
        minHeight: '56px',
        paddingTop: '12px',
        paddingBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(false);
      },
      className: "w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "text-sm font-bold text-white flex-1"
    }, "Resumen del Pedido"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-cyan-100"
    }, cart.length, " examen", cart.length !== 1 ? 'es' : ''))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 16px'
      }
    }, (cart || []).map(function (item) {
      var _item$exam5, _item$exam6, _item$exam7, _item$exam8, _item$pet2;
      return /*#__PURE__*/React.createElement("div", {
        key: item.exam.id,
        className: "bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-2 flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-9 h-9 ".concat((item === null || item === void 0 || (_item$exam5 = item.exam) === null || _item$exam5 === void 0 ? void 0 : _item$exam5.bg) || 'bg-cyan-100', " rounded-lg flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(item === null || item === void 0 || (_item$exam6 = item.exam) === null || _item$exam6 === void 0 ? void 0 : _item$exam6.icon, " ").concat(item === null || item === void 0 || (_item$exam7 = item.exam) === null || _item$exam7 === void 0 ? void 0 : _item$exam7.color, " text-sm")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm leading-tight truncate"
      }, (item === null || item === void 0 || (_item$exam8 = item.exam) === null || _item$exam8 === void 0 ? void 0 : _item$exam8.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 truncate mt-0.5"
      }, (item === null || item === void 0 || (_item$pet2 = item.pet) === null || _item$pet2 === void 0 ? void 0 : _item$pet2.name) || '')), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2.5 flex-shrink-0"
      }, item.exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm"
      }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return removeFromCart(item.exam.id);
        },
        className: "p-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-trash-alt text-gray-300 text-sm"
      }))));
    }), cart.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-3xl mb-2 block text-gray-300"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, "El carrito est\xE1 vac\xEDo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'white',
        borderTop: '1px solid #e5e7eb',
        padding: '12px 16px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mb-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('boleta');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-600')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt mr-1.5"
    }), "Boleta"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('factura');
      },
      className: "flex-1 py-2 rounded-lg text-sm font-medium ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice mr-1.5"
    }), "Factura")), /*#__PURE__*/React.createElement("textarea", {
      value: orderComment,
      onChange: function onChange(e) {
        return setOrderComment(e.target.value);
      },
      placeholder: "Deja un comentario...",
      className: "w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-xs resize-none mb-2",
      rows: "2",
      maxLength: "500"
    }), cart.some(function (i) {
      return i.exam.price;
    }) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between py-2 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600 font-semibold"
    }, "Total estimado"), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-bold text-cyan-600"
    }, "S/ ", cart.reduce(function (sum, i) {
      return sum + (parseFloat(i.exam.price) || 0);
    }, 0).toFixed(2))), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 pt-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "flex items-start gap-2 cursor-pointer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: termsAccepted,
      onChange: function onChange(e) {
        return setTermsAccepted(e.target.checked);
      },
      className: "w-4 h-4 rounded border-gray-300 text-cyan-500 cursor-pointer flex-shrink-0 mt-0.5"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500 leading-relaxed"
    }, "He le\xEDdo y acepto los ", /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowTermsModal(true);
      },
      className: "text-cyan-600 font-semibold underline"
    }, "t\xE9rminos y condiciones"), " de entrega y procesamiento de muestras."))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        padding: '10px 16px',
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom,0px))',
        background: 'white',
        borderTop: '1px solid #e5e7eb',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return submitOrder(selectedAddressId);
      },
      className: "w-full py-3 rounded-xl font-semibold text-sm ".concat(termsAccepted ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paper-plane mr-2"
    }), "Solicitar Pedido"))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'inicio' && showAllPending && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top,0px))',
        left: 0,
        right: 0,
        bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
        display: 'flex',
        flexDirection: 'column',
        background: '#f3f4f6',
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 px-4 py-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAllPending(false);
      },
      className: "w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-sm"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "font-bold text-gray-800 text-base"
    }, "Pendientes")), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-gray-100 mx-0"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 16px'
      }
    }, function () {
      var pendingInvoiceMap = {};
      (database.orders || []).filter(function (o) {
        return o.invoiceRequested && o.invoiceStatus === 'pending';
      }).forEach(function (o) {
        pendingInvoiceMap[o.id] = o;
      }); // Build interleaved: each pending order → tracking card + its invoice if pending
      var items = [];
      var usedInvoiceIds = new Set();
      pendingOrders.forEach(function (order) {
        items.push({
          type: 'tracking',
          order: order
        });
        if (pendingInvoiceMap[order.id]) {
          items.push({
            type: 'invoice',
            order: pendingInvoiceMap[order.id]
          });
          usedInvoiceIds.add(order.id);
        }
      }); // Invoices from completed orders not linked to a pending tracking order
      Object.values(pendingInvoiceMap).forEach(function (o) {
        if (!usedInvoiceIds.has(o.id)) items.push({
          type: 'invoice',
          order: o
        });
      });
      if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
        className: "text-center py-12 text-gray-400"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-3xl mb-2 block text-gray-300"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-sm"
      }, "No hay pendientes"));
      return /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (items || []).map(function (item, idx) {
        var _order$items, _order$items2, _firstItem$pet, _firstItem$exam;
        var order = item.order;
        if (item.type === 'invoice') return /*#__PURE__*/React.createElement("div", {
          key: "inv-".concat(order.id, "-").concat(idx),
          className: "bg-white rounded-xl p-3 shadow-sm flex items-center justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-sm font-semibold text-gray-800 leading-tight"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, (order === null || order === void 0 || (_order$items = order.items) === null || _order$items === void 0 || (_order$items = _order$items[0]) === null || _order$items === void 0 ? void 0 : _order$items.examName) || 'Pedido'))), /*#__PURE__*/React.createElement("span", {
          className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
        }, "Pendiente"));
        var firstItem = order === null || order === void 0 || (_order$items2 = order.items) === null || _order$items2 === void 0 ? void 0 : _order$items2[0];
        return /*#__PURE__*/React.createElement("div", {
          key: "tr-".concat(order.id),
          onClick: function onClick() {
            setViewingOrderTracking(order);
            setShowAllPending(false);
          },
          className: "bg-white rounded-xl p-3 shadow-sm cursor-pointer active:opacity-75"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 flex items-center justify-center flex-shrink-0 text-2xl leading-none"
        }, typeof (firstItem === null || firstItem === void 0 || (_firstItem$pet = firstItem.pet) === null || _firstItem$pet === void 0 ? void 0 : _firstItem$pet.photo) === "string" ? firstItem.petPhoto : "🐾"), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight truncate"
        }, ((order === null || order === void 0 ? void 0 : order.items) || []).map(function (i) {
          return i !== null && i !== void 0 && i.pet ? getPetFullName(i.pet) : null;
        }).filter(Boolean).join(', ')), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500 truncate"
        }, typeof (firstItem === null || firstItem === void 0 || (_firstItem$exam = firstItem.exam) === null || _firstItem$exam === void 0 ? void 0 : _firstItem$exam.name) === "string" ? firstItem.exam.name : typeof (firstItem === null || firstItem === void 0 ? void 0 : firstItem.examName) === "string" ? firstItem.examName : "Examen")), /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 3 || order.status === 8 ? 'bg-red-500' : 'bg-cyan-500')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route text-white text-sm"
        }))));
      }));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'inicio' && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'calc(100dvh - 56px - 64px - 40px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '8px',
        paddingTop: '8px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-bold text-gray-800"
    }, "\xA1Hola, ", freshUser.name, "! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm mt-0.5"
    }, "Bienvenido a tu portal de laboratorio.")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '8px',
        maxHeight: '16px'
      }
    }), function () {
      var pendingInvoices = [];
      var totalPending = pendingOrders.length + pendingInvoices.length;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 mb-2.5"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock text-amber-500 text-xs"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
      }, "Pendientes"), totalPending > 0 && /*#__PURE__*/React.createElement("span", {
        className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold"
      }, totalPending)), totalPending === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-gray-100 rounded-xl p-3 text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm"
      }, "No existen pendientes")) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, function () {
        var pendingInvoiceMap = {};
        (database.orders || []).filter(function (o) {
          return o.invoiceRequested && o.invoiceStatus === 'pending';
        }).forEach(function (o) {
          pendingInvoiceMap[o.id] = o;
        });
        var items = [];
        var usedIds = new Set();
        pendingOrders.forEach(function (order) {
          items.push({
            type: 'tracking',
            order: order
          });
          if (pendingInvoiceMap[order.id]) {
            items.push({
              type: 'invoice',
              order: pendingInvoiceMap[order.id]
            });
            usedIds.add(order.id);
          }
        });
        Object.values(pendingInvoiceMap).forEach(function (o) {
          if (!usedIds.has(o.id)) items.push({
            type: 'invoice',
            order: o
          });
        });
        return items.slice(0, 2).map(function (item, idx) {
          var _order$items3, _order$items4, _order$items5, _order$items6;
          var order = item.order;
          if (item.type === 'invoice') return /*#__PURE__*/React.createElement("div", {
            key: "inv-".concat(order.id, "-").concat(idx),
            className: "bg-white rounded-xl p-3 shadow-sm flex items-center justify-between"
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex items-center gap-2.5"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600 text-sm")
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
            className: "text-sm font-semibold text-gray-800 leading-tight"
          }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
            className: "text-xs text-gray-500"
          }, (order === null || order === void 0 || (_order$items3 = order.items) === null || _order$items3 === void 0 || (_order$items3 = _order$items3[0]) === null || _order$items3 === void 0 ? void 0 : _order$items3.examName) || 'Pedido'))), /*#__PURE__*/React.createElement("span", {
            className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
          }, "Pendiente"));
          return /*#__PURE__*/React.createElement("div", {
            key: "tr-".concat(order.id),
            onClick: function onClick() {
              return setViewingOrderTracking(order);
            },
            className: "bg-white rounded-xl p-3 shadow-sm cursor-pointer active:opacity-75"
          }, /*#__PURE__*/React.createElement("div", {
            className: "flex items-center gap-2.5"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 flex items-center justify-center flex-shrink-0 text-2xl leading-none"
          }, (order === null || order === void 0 || (_order$items4 = order.items) === null || _order$items4 === void 0 || (_order$items4 = _order$items4[0]) === null || _order$items4 === void 0 || (_order$items4 = _order$items4.pet) === null || _order$items4 === void 0 ? void 0 : _order$items4.photo) || '🐾'), /*#__PURE__*/React.createElement("div", {
            className: "flex-1 min-w-0"
          }, /*#__PURE__*/React.createElement("p", {
            className: "font-semibold text-gray-800 text-sm leading-tight truncate"
          }, (order === null || order === void 0 || (_order$items5 = order.items) === null || _order$items5 === void 0 || (_order$items5 = _order$items5[0]) === null || _order$items5 === void 0 ? void 0 : _order$items5.examName) || 'Pedido'), /*#__PURE__*/React.createElement("p", {
            className: "text-xs text-gray-500 truncate"
          }, (order === null || order === void 0 || (_order$items6 = order.items) === null || _order$items6 === void 0 || (_order$items6 = _order$items6[0]) === null || _order$items6 === void 0 ? void 0 : _order$items6.examName) || '')), /*#__PURE__*/React.createElement("div", {
            className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-route text-white text-sm"
          }))), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
            className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-map-marker-alt text-red-600 text-xs"
          }), /*#__PURE__*/React.createElement("p", {
            className: "text-red-800 font-medium text-xs"
          }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
            className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-credit-card text-red-600 text-xs"
          }), /*#__PURE__*/React.createElement("p", {
            className: "text-red-800 font-medium text-xs"
          }, "\xA1Resultados listos! Pendiente de pago")));
        });
      }(), totalPending > 2 && /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setShowAllPending(true);
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      })))));
    }(), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '16px',
        maxHeight: '32px'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2.5"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-xs"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
    }, "\xDAltimo resultado"), newResultHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), (completedOrders || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "No hay resultados a\xFAn")) : function (_lastOrder$items, _firstItem$pet2, _firstItem$pet3, _firstItem$exam2) {
      var lastOrder = completedOrders === null || completedOrders === void 0 ? void 0 : completedOrders[0];
      var firstItem = lastOrder === null || lastOrder === void 0 || (_lastOrder$items = lastOrder.items) === null || _lastOrder$items === void 0 ? void 0 : _lastOrder$items[0];
      if (!firstItem) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-gray-100 rounded-xl p-4 text-center"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-sm"
        }, "No hay resultados a\xFAn"));
      }
      var petId = (firstItem === null || firstItem === void 0 || (_firstItem$pet2 = firstItem.pet) === null || _firstItem$pet2 === void 0 ? void 0 : _firstItem$pet2.id) || (firstItem === null || firstItem === void 0 ? void 0 : firstItem.petId);
      var pet = (petsOrPatients || []).find(function (p) {
        return p.id === petId;
      });
      var petExams = (database === null || database === void 0 ? void 0 : database.results) || [];
      var relatedExam = petExams.find(function (e) {
        return String(e.orderId) === String(lastOrder.id);
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          if (lastOrder !== null && lastOrder !== void 0 && lastOrder.resultPdfUrl) window.open(lastOrder.resultPdfUrl, '_blank');
        },
        className: "bg-white rounded-xl p-4 shadow-sm cursor-pointer ".concat(newResultHighlight ? 'highlight-green-pulse' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl leading-none"
      }, typeof (firstItem === null || firstItem === void 0 || (_firstItem$pet3 = firstItem.pet) === null || _firstItem$pet3 === void 0 ? void 0 : _firstItem$pet3.photo) === "string" ? firstItem.petPhoto : "🐾"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm"
      }, getPetFullName(firstItem.pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, typeof (firstItem === null || firstItem === void 0 || (_firstItem$exam2 = firstItem.exam) === null || _firstItem$exam2 === void 0 ? void 0 : _firstItem$exam2.name) === "string" ? firstItem.exam.name : (firstItem === null || firstItem === void 0 ? void 0 : firstItem.examName) || "Examen"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastOrder.completedAt || lastOrder.createdAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })))), (relatedExam === null || relatedExam === void 0 ? void 0 : relatedExam.pdfData) && /*#__PURE__*/React.createElement("div", {
        className: "px-3 py-2 rounded-xl ".concat(newResultHighlight ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf text-base"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setMedicoView('resultados');
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 mt-1 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      }))));
    }()), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: '16px',
        maxHeight: '32px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2.5"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500 text-xs"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
    }, "\xDAltimo comprobante"), newInvoiceHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), function () {
      var comprobantesEmitidos = completedOrders.filter(function (o) {
        return o.invoiceStatus === 'uploaded' && o.invoicePdf;
      });
      if (comprobantesEmitidos.length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-gray-100 rounded-xl p-4 text-center"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-sm"
        }, "No hay comprobantes emitidos"));
      }
      var lastComprobante = comprobantesEmitidos === null || comprobantesEmitidos === void 0 ? void 0 : comprobantesEmitidos[0];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return setViewingInvoice(lastComprobante);
        },
        className: "bg-white rounded-xl p-4 shadow-sm cursor-pointer ".concat(newInvoiceHighlight ? 'highlight-green-pulse' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(newInvoiceHighlight ? 'bg-emerald-100' : lastComprobante.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(lastComprobante.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " ").concat(newInvoiceHighlight ? 'text-emerald-600' : lastComprobante.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm"
      }, lastComprobante.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, ((lastComprobante === null || lastComprobante === void 0 ? void 0 : lastComprobante.items) || []).map(function (i) {
        return getPetFullName(i === null || i === void 0 ? void 0 : i.pet);
      }).join(', ')), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastComprobante.completedAt || lastComprobante.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })))), /*#__PURE__*/React.createElement("div", {
        className: "px-3 py-2 rounded-xl ".concat(newInvoiceHighlight ? 'bg-emerald-100 text-emerald-700' : lastComprobante.documentType === 'boleta' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-base"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-end"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setMedicoView('facturacion');
        },
        className: "text-cyan-500 text-base font-semibold pt-1 pb-0.5 mt-1 flex items-center gap-1"
      }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-sm"
      }))));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'pedidos' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: clinPedidosSearchOpen ? '60vh' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: clinPedidosSearchOpen ? '14px' : '0',
        borderBottomRightRadius: clinPedidosSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Pedidos"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setClinPedidosSearchOpen(!clinPedidosSearchOpen);
        if (clinPedidosSearchOpen) setSearchTerm('');
      },
      className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(clinPedidosSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide ".concat(clinPedidosSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: searchTerm,
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen o perfil...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-cyan-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), searchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: clinPedidosSearchOpen ? '110px' : '70px',
        transition: 'height 0.2s ease-out'
      }
    }), clinPedidosSearchOpen && /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-overlay",
      onClick: function onClick() {
        setClinPedidosSearchOpen(false);
        setSearchTerm('');
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }
    }), (cart.length > 0 || pendingExams.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-emerald-500 rounded-full"
    }), " Listo"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-amber-400 rounded-full"
    }), " Pendiente"), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022 Toca para deseleccionar")), !hayResultados ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-16"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-5xl text-gray-300 mb-4"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-lg font-medium"
    }, "No encontramos resultados"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Intenta con otro t\xE9rmino")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, filteredPerfiles.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-boxes-stacked text-blue-500"
    }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, (filteredPerfiles || []).map(function (exam) {
      var isInCart = cart.find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = pendingExams.find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-semibold text-sm leading-tight"
      }, exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price));
    }))), (filteredCategorias || []).map(function (cat) {
      return /*#__PURE__*/React.createElement("div", {
        key: cat.nombre
      }, /*#__PURE__*/React.createElement("h3", {
        className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(cat.icon, " ").concat(cat.color)
      }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
      }, (cat.examenes || []).map(function (exam) {
        var isInCart = cart.find(function (c) {
          return c.exam.id === exam.id;
        });
        var isPending = pendingExams.find(function (e) {
          return e.id === exam.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: exam.id,
          onClick: function onClick() {
            return handleExamClick(exam);
          },
          className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-800 font-medium text-sm leading-tight"
        }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
          className: "text-gray-400 text-xs"
        }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
          className: "text-cyan-600 font-bold text-sm flex-shrink-0"
        }, "S/ ", exam.price));
      })));
    }))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'mascotas' && !selectedMascota && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: clinMascSearchOpen ? '60vh' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: clinMascSearchOpen ? '14px' : '0',
        borderBottomRightRadius: clinMascSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, petsOrPatients.length), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setClinMascSearchOpen(!clinMascSearchOpen);
        if (clinMascSearchOpen) setMascotaSearchTerm('');
      },
      className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(clinMascSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide ".concat(clinMascSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: mascotaSearchTerm,
      onChange: function onChange(e) {
        return setMascotaSearchTerm(e.target.value);
      },
      placeholder: "Buscar mascota o due\xF1o...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-emerald-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), mascotaSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMascotaSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: clinMascSearchOpen ? '110px' : '70px',
        transition: 'height 0.2s ease-out'
      }
    }), clinMascSearchOpen && /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-overlay",
      onClick: function onClick() {
        setClinMascSearchOpen(false);
        setMascotaSearchTerm('');
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }
    }), (filteredMascotas || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron pacientes")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, (filteredMascotas || []).map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          setSelectedMascota(pet);
          setExamSearchTerm('');
          setExamFilterType('');
          setExamFilterDay('');
          setExamFilterMonth('');
          setExamFilterYear('');
        },
        className: "bg-white rounded-xl px-3 py-2.5 shadow-sm cursor-pointer hover:shadow-md border-2 border-transparent hover:border-emerald-400 transition-all flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl leading-none"
      }, pet === null || pet === void 0 ? void 0 : pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-semibold text-gray-800 leading-tight truncate"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 truncate"
      }, pet.breed, pet.owner ? " \xB7 ".concat(pet.owner) : '')), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1.5 flex-shrink-0"
      }, countUnseenExamsForPet(pet) > 0 && /*#__PURE__*/React.createElement("div", {
        className: "w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold"
      }, countUnseenExamsForPet(pet)), /*#__PURE__*/React.createElement("div", {
        className: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold"
      }, (pet.exams || []).length)));
    }))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'mascotas' && selectedMascota && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: clinMascDetailSearchOpen ? '60vh' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: clinMascDetailSearchOpen ? '14px' : '0',
        borderBottomRightRadius: clinMascDetailSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedMascota(null);
      },
      className: "w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-xs"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-xl"
    }, selectedMascota.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, getPetFullName(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "text-white/70 text-xs ml-2"
    }, selectedMascota.breed)), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, selectedMascota.exams.length, " ex\xE1m."), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setClinMascDetailSearchOpen(!clinMascDetailSearchOpen);
        if (clinMascDetailSearchOpen) {
          setExamSearchTerm('');
          setExamFilterDay('');
          setExamFilterMonth('');
          setExamFilterYear('');
        }
      },
      className: "w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white ml-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(clinMascDetailSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide-filters ".concat(clinMascDetailSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-emerald-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), examSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExamSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-emerald-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-emerald-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-emerald-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: clinMascDetailSearchOpen ? '140px' : '70px',
        transition: 'height 0.2s ease-out'
      }
    }), clinMascDetailSearchOpen && /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-overlay",
      onClick: function onClick() {
        setClinMascDetailSearchOpen(false);
        setExamSearchTerm('');
        setExamFilterDay('');
        setExamFilterMonth('');
        setExamFilterYear('');
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-gray-800"
    }, "Historial de Ex\xE1menes"), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, filterExams(selectedMascota.exams).length, " resultados")), filterExams(selectedMascota.exams).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-10 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay ex\xE1menes con estos filtros")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, filterExams(selectedMascota.exams).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          markExamAsSeen(exam, selectedMascota);
          if (exam.pdfData) setSelectedExam(exam);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg flex items-center justify-between ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-emerald-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-emerald-600')
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2"
      }, "NUEVO")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      }));
    }))), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'resultados' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: clinResSearchOpen ? '60vh' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: clinResSearchOpen ? '14px' : '0',
        borderBottomRightRadius: clinResSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Resultados"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, completedOrders.length), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setClinResSearchOpen(!clinResSearchOpen);
        if (clinResSearchOpen) {
          setResultadosSearch('');
          setResultadosFilterDay('');
          setResultadosFilterMonth('');
          setResultadosFilterYear('');
        }
      },
      className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(clinResSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide-filters ".concat(clinResSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: resultadosSearch,
      onChange: function onChange(e) {
        return setResultadosSearch(e.target.value);
      },
      placeholder: "Buscar mascota...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), resultadosSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setResultadosSearch('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterDay,
      onChange: function onChange(e) {
        return setResultadosFilterDay(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-purple-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterMonth,
      onChange: function onChange(e) {
        return setResultadosFilterMonth(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-purple-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterYear,
      onChange: function onChange(e) {
        return setResultadosFilterYear(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-purple-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: clinResSearchOpen ? '140px' : '70px',
        transition: 'height 0.2s ease-out'
      }
    }), clinResSearchOpen && /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-overlay",
      onClick: function onClick() {
        setClinResSearchOpen(false);
        setResultadosSearch('');
        setResultadosFilterDay('');
        setResultadosFilterMonth('');
        setResultadosFilterYear('');
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }
    }), function () {
      var filteredCompletedOrders = completedOrders.filter(function (order) {
        if (resultadosSearch) {
          var matchesPet = order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(resultadosSearch.toLowerCase());
          });
          if (!matchesPet) return false;
        }
        var orderDate = new Date(order.createdAt || order.completedAt || order.date);
        var orderDay = String(orderDate.getDate()).padStart(2, '0');
        var orderMonth = String(orderDate.getMonth() + 1).padStart(2, '0');
        var orderYear = String(orderDate.getFullYear());
        if (resultadosFilterDay && orderDay !== resultadosFilterDay) return false;
        if (resultadosFilterMonth && orderMonth !== resultadosFilterMonth) return false;
        if (resultadosFilterYear && orderYear !== resultadosFilterYear) return false;
        return true;
      });
      var filtered = filteredCompletedOrders || []; // ← agrega aquí
      return /*#__PURE__*/React.createElement("div", null, (filtered || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-8 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-inbox text-4xl text-gray-300 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, Array.isArray(completedOrders) && completedOrders.length === 0 ? 'No hay pedidos completados' : 'No hay resultados con estos filtros')) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, (filtered || []).map(function (order) {
        var _order$items7;
        var firstItem = order === null || order === void 0 || (_order$items7 = order.items) === null || _order$items7 === void 0 ? void 0 : _order$items7[0];
        var pet = (petsOrPatients || []).find(function (p) {
          var _firstItem$pet4;
          return p.id === (firstItem === null || firstItem === void 0 || (_firstItem$pet4 = firstItem.pet) === null || _firstItem$pet4 === void 0 ? void 0 : _firstItem$pet4.id);
        });
        var petExams = (pet === null || pet === void 0 ? void 0 : pet.exams) || [];
        var relatedExam = petExams.find(function (e) {
          return e.orderId === order.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            var _order$items8;
            var pdfUrl = (_order$items8 = order.items) === null || _order$items8 === void 0 || (_order$items8 = _order$items8[0]) === null || _order$items8 === void 0 ? void 0 : _order$items8.pdfData;
            if (pdfUrl) {
              var win = window.open();
              win.location.href = pdfUrl;
            } else {
              alert('El PDF de este resultado aún no está disponible');
            }
          },
          className: "bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg hover:bg-purple-50 transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-500"
        }, new Date(order.createdAt || order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })), /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(relatedExam !== null && relatedExam !== void 0 && relatedExam.pdfData ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-sm"
        }))), /*#__PURE__*/React.createElement("div", {
          className: "space-y-2"
        }, (order.items || []).map(function (item, idx) {
          var _item$pet3, _item$pet4, _item$exam9;
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item === null || item === void 0 || (_item$pet3 = item.pet) === null || _item$pet3 === void 0 ? void 0 : _item$pet3.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, (item === null || item === void 0 || (_item$pet4 = item.pet) === null || _item$pet4 === void 0 ? void 0 : _item$pet4.name) || ''), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, (item === null || item === void 0 || (_item$exam9 = item.exam) === null || _item$exam9 === void 0 ? void 0 : _item$exam9.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'));
        })));
      })));
    }()), !showOrderSummary && !selectedExam && !viewingInvoice && !viewingOrderTracking && medicoView === 'facturacion' && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: clinFacSearchOpen ? '60vh' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: clinFacSearchOpen ? '14px' : '0',
        borderBottomRightRadius: clinFacSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, completedOrders.filter(function (o) {
      return o.invoicePdf;
    }).length), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setClinFacSearchOpen(!clinFacSearchOpen);
        if (clinFacSearchOpen) {
          setFacturacionSearch('');
          setFacturacionFilterDay('');
          setFacturacionFilterMonth('');
          setFacturacionFilterYear('');
        }
      },
      className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(clinFacSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide-filters ".concat(clinFacSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facturacionSearch,
      onChange: function onChange(e) {
        return setFacturacionSearch(e.target.value);
      },
      placeholder: "Buscar comprobante...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-amber-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), facturacionSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacturacionSearch('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterDay,
      onChange: function onChange(e) {
        return setFacturacionFilterDay(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterMonth,
      onChange: function onChange(e) {
        return setFacturacionFilterMonth(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterYear,
      onChange: function onChange(e) {
        return setFacturacionFilterYear(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: clinFacSearchOpen ? '140px' : '70px',
        transition: 'height 0.2s ease-out'
      }
    }), clinFacSearchOpen && /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-overlay",
      onClick: function onClick() {
        setClinFacSearchOpen(false);
        setFacturacionSearch('');
        setFacturacionFilterDay('');
        setFacturacionFilterMonth('');
        setFacturacionFilterYear('');
      },
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 5
      }
    }), function () {
      var pendingInvoices = (completedOrders || []).filter(function (o) {
        return o.invoiceRequested && o.invoiceStatus === 'pending';
      });
      if ((pendingInvoices || []).length === 0) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-red-600 mb-2 flex items-center gap-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock"
      }), " Pendientes (", pendingInvoices.length, ")"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, pendingInvoices.map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: "pending-".concat(order.id),
          className: "bg-white rounded-xl shadow p-4 border-l-4 border-red-400"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-red-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " Solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.createdAt || order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })))), /*#__PURE__*/React.createElement("span", {
          className: "bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
        }, "Pendiente")), /*#__PURE__*/React.createElement("div", {
          className: "border-t pt-3 space-y-2"
        }, (order.items || []).map(function (item, idx) {
          var _item$pet5, _item$pet6, _item$exam0;
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item === null || item === void 0 || (_item$pet5 = item.pet) === null || _item$pet5 === void 0 ? void 0 : _item$pet5.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, (item === null || item === void 0 || (_item$pet6 = item.pet) === null || _item$pet6 === void 0 ? void 0 : _item$pet6.name) || ''), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, (item === null || item === void 0 || (_item$exam0 = item.exam) === null || _item$exam0 === void 0 ? void 0 : _item$exam0.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'));
        })));
      })));
    }(), function () {
      // Filtrar comprobantes (solo los que tienen PDF subido)
      var filteredFacturas = completedOrders.filter(function (order) {
        // Solo mostrar los que tienen comprobante emitido
        if (order.invoiceRequested && order.invoiceStatus === 'pending') return false; // Filtro por nombre de mascota
        if (facturacionSearch) {
          var matchesPet = order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(facturacionSearch.toLowerCase());
          });
          if (!matchesPet) return false;
        } // Filtro por fecha
        var orderDate = new Date(order.createdAt || order.completedAt || order.date);
        var orderDay = String(orderDate.getDate()).padStart(2, '0');
        var orderMonth = String(orderDate.getMonth() + 1).padStart(2, '0');
        var orderYear = String(orderDate.getFullYear());
        if (facturacionFilterDay && orderDay !== facturacionFilterDay) return false;
        if (facturacionFilterMonth && orderMonth !== facturacionFilterMonth) return false;
        if (facturacionFilterYear && orderYear !== facturacionFilterYear) return false;
        return true;
      });
      return /*#__PURE__*/React.createElement("div", null, (filteredFacturas || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-8 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-receipt text-4xl text-gray-300 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, completedOrders.length === 0 ? 'No hay comprobantes emitidos' : 'No hay comprobantes con estos filtros')) : /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, (filteredFacturas || []).map(function (order, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            return order.invoicePdf ? setViewingInvoice(order) : alert('Este comprobante aún no está disponible');
          },
          className: "bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg hover:bg-amber-50 transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(order.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice text-amber-600')
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " #", String(completedOrders.indexOf(order) + 1).padStart(4, '0')), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.createdAt || order.completedAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })))), /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(order.invoicePdf ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-sm"
        })), /*#__PURE__*/React.createElement("span", {
          className: "bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
        }, "Pagado"))), /*#__PURE__*/React.createElement("div", {
          className: "border-t pt-3 space-y-2"
        }, (order.items || []).map(function (item, idx) {
          var _item$pet7, _item$pet8, _item$exam1;
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-2 text-sm"
          }, /*#__PURE__*/React.createElement("span", null, item === null || item === void 0 || (_item$pet7 = item.pet) === null || _item$pet7 === void 0 ? void 0 : _item$pet7.photo), /*#__PURE__*/React.createElement("span", {
            className: "font-medium text-gray-800"
          }, (item === null || item === void 0 || (_item$pet8 = item.pet) === null || _item$pet8 === void 0 ? void 0 : _item$pet8.name) || ''), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-300"
          }, "\u2022"), /*#__PURE__*/React.createElement("span", {
            className: "text-gray-600"
          }, (item === null || item === void 0 || (_item$exam1 = item.exam) === null || _item$exam1 === void 0 ? void 0 : _item$exam1.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'));
        })));
      })));
    }()))), /*#__PURE__*/React.createElement("div", {
      className: "mob-bottom-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mob-bottom-nav-inner"
    }, /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'inicio' && !currentExamForPet && !viewingOrderTracking ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setMenuOpen(false);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home"
    }), /*#__PURE__*/React.createElement("span", null, "Inicio")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'pedidos' && !currentExamForPet && !viewingOrderTracking ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('pedidos');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list"
    }), /*#__PURE__*/React.createElement("span", null, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'mascotas' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('mascotas');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw"
    }), /*#__PURE__*/React.createElement("span", null, "Pacientes")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'resultados' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('resultados');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical"
    }), /*#__PURE__*/React.createElement("span", null, "Resultados")), /*#__PURE__*/React.createElement("button", {
      className: "mob-nav-btn ".concat(medicoView === 'facturacion' && !currentExamForPet ? 'active' : ''),
      onClick: function onClick() {
        setMedicoView('facturacion');
        setMenuOpen(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar"
    }), /*#__PURE__*/React.createElement("span", null, "Facturas"))))), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:block h-screen overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white border-b border-gray-200 px-6 py-3 fixed top-0 left-0 right-0 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 cursor-pointer ml-[-10px]",
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setMedicoFacInvoice(null);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo_inulaboratorios.jpg",
      alt: "Logo",
      className: "h-8",
      onError: function onError(e) {
        e.target.style.display = 'none';
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-base font-light text-gray-700 tracking-wide"
    }, "INULABORATORIOS")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-800"
    }, freshUser.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Cl\xEDnica")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('configuracion');
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bars"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "pt-16 flex h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-56 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 flex flex-col"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "flex-1 p-3 space-y-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('inicio');
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-cyan-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-home ".concat(medicoView === 'inicio' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-cyan-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Inicio")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('pedidos');
        setShowAllPending(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setMedicoFacInvoice(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-blue-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list ".concat(medicoView === 'pedidos' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-blue-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pedidos")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('mascotas');
        setShowAllPending(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setMedicoFacInvoice(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-emerald-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-emerald-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(medicoView === 'mascotas' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600')
    }, (petsOrPatients || []).length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('resultados');
        setShowAllPending(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setMedicoFacInvoice(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-purple-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-purple-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Resultados"), (completedOrders || []).length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs px-2 py-0.5 rounded-full ".concat(medicoView === 'resultados' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-purple-100 text-purple-600')
    }, completedOrders.length)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setMedicoView('facturacion');
        setShowAllPending(false);
        setSelectedMascota(null);
        setSelectedExam(null);
        setViewingInvoice(null);
        setCurrentExamForPet(null);
        setPendingExams([]);
        setCart([]);
        setShowNewPetForm(false);
        setShowAddressSelection(false);
        setShowNewAddressForm(false);
        setSelectedPetForOrder(null);
        setShowEditProfile(false);
        setViewingOrderTracking(null);
        setMedicoFacInvoice(null);
      },
      className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-gray-700')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'bg-white/20' : 'bg-amber-100')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar ".concat(medicoView === 'facturacion' && !selectedExam && !viewingInvoice && !currentExamForPet ? 'text-white' : 'text-amber-600')
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Facturaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-4 border-t border-gray-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-4 mb-8"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-1"
    }, "\xBFNecesitas asistencia?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-2"
    }, "Cont\xE1ctanos:"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:lab@inulaboratorios.com",
      className: "flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-envelope text-xs"
    }), "lab@inulaboratorios.com"), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/51999999999",
      target: "_blank",
      className: "flex items-center gap-2 text-xs text-green-600 hover:text-green-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-whatsapp text-xs"
    }), "WhatsApp Inulab"))), /*#__PURE__*/React.createElement("div", {
      className: "ml-56 flex-1 bg-gray-100 min-h-0 overflow-hidden"
    }, successMessage && /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-300 text-emerald-700 p-4 rounded-xl mb-4 flex items-center gap-3 -mt-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    }), successMessage), viewingOrderTracking && function () {
      var trackingOrder = (database.orders || []).find(function (o) {
        return o.id === viewingOrderTracking.id;
      }) || viewingOrderTracking;
      var formatTrackingDateTime = function formatTrackingDateTime(date) {
        if (!date) return '';
        var d = new Date(date);
        return d.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short'
        }) + ' ' + d.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      };
      var trackingSteps = [{
        id: 'pending',
        label: 'Pedido realizado',
        subtitle: 'Tu pedido ha sido registrado',
        icon: 'fa-clipboard-check',
        date: trackingOrder.createdAt || order.date
      }, {
        id: 'confirmed',
        label: 'Pedido confirmado',
        subtitle: 'El laboratorio confirmó tu pedido',
        icon: 'fa-check-circle',
        date: trackingOrder.createdAt || order.date
      }, {
        id: 'moto_en_camino',
        label: 'Motorizado en camino',
        subtitle: 'El motorizado va hacia tu ubicación',
        icon: 'fa-motorcycle',
        date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'moto_arrived',
        label: 'Motorizado llegó',
        subtitle: 'Por favor entrega la muestra',
        icon: 'fa-map-marker-alt',
        date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'sample_received',
        label: 'Muestra recogida',
        subtitle: 'Tu muestra va camino al laboratorio',
        icon: 'fa-vial',
        date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'arrived_at_lab',
        label: 'En laboratorio',
        subtitle: 'La muestra llegó al laboratorio',
        icon: 'fa-flask',
        date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'processing',
        label: 'Procesando muestra',
        subtitle: 'Estamos analizando tu muestra',
        icon: 'fa-cog',
        date: ['processing', 'results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'results_uploaded',
        label: 'Resultados listos',
        subtitle: 'Realiza el pago para ver los resultados',
        icon: 'fa-file-medical',
        date: ['results_uploaded', 'completed'].includes(trackingOrder.status) ? trackingOrder.statusUpdatedAt : null
      }, {
        id: 'completed',
        label: 'Entregado',
        subtitle: '¡Ya puedes ver tus resultados!',
        icon: 'fa-check-double',
        date: trackingOrder.status === 'completed' ? trackingOrder.completedAt : null
      }];
      var trackingStatusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
      var trackingCurrentIndex = trackingStatusOrder.indexOf(trackingOrder.status === 'pending' ? 'confirmed' : trackingOrder.status);
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col h-full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setViewingOrderTracking(null);
        },
        className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 px-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-route text-cyan-500 text-lg"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-semibold"
      }, "Tracking del Pedido")))), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 p-6 overflow-y-auto"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-1/2 bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-4"
      }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 space-y-0"
      }, trackingSteps.map(function (step, index) {
        var isCompleted = index <= trackingCurrentIndex;
        var isLast = index === trackingSteps.length - 1;
        return /*#__PURE__*/React.createElement("div", {
          key: step.id,
          className: "flex gap-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex flex-col items-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
        }, isCompleted ? /*#__PURE__*/React.createElement("i", {
          className: "fas fa-check text-xs"
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(step.icon, " text-xs")
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          className: "w-0.5 h-10 ".concat(index < trackingCurrentIndex ? 'bg-cyan-500' : 'bg-gray-200')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
        }, step.label), /*#__PURE__*/React.createElement("p", {
          className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
        }, step.subtitle), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
          className: "text-cyan-600 text-xs mt-0.5"
        }, formatTrackingDateTime(step.date))));
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-1/2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800 mb-3"
      }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
        className: "space-y-2"
      }, (trackingOrder.items || []).map(function (item, idx) {
        var _item$exam10, _item$exam11, _item$exam12, _item$exam13, _item$pet9, _item$pet0;
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat((item === null || item === void 0 || (_item$exam10 = item.exam) === null || _item$exam10 === void 0 ? void 0 : _item$exam10.bg) || 'bg-cyan-100', " rounded-lg flex items-center justify-center")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat((item === null || item === void 0 || (_item$exam11 = item.exam) === null || _item$exam11 === void 0 ? void 0 : _item$exam11.icon) || 'fa-vial', " ").concat((item === null || item === void 0 || (_item$exam12 = item.exam) === null || _item$exam12 === void 0 ? void 0 : _item$exam12.color) || 'text-cyan-600')
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800 text-sm"
        }, (item === null || item === void 0 || (_item$exam13 = item.exam) === null || _item$exam13 === void 0 ? void 0 : _item$exam13.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500 text-xs"
        }, item === null || item === void 0 || (_item$pet9 = item.pet) === null || _item$pet9 === void 0 ? void 0 : _item$pet9.photo, " ", (item === null || item === void 0 || (_item$pet0 = item.pet) === null || _item$pet0 === void 0 ? void 0 : _item$pet0.name) || '')));
      })), /*#__PURE__*/React.createElement("div", {
        className: "mt-4 pt-4 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800"
      }, function () {
        var addr = (database.addresses || []).find(function (a) {
          return String(a.id) === String(trackingOrder === null || trackingOrder === void 0 ? void 0 : trackingOrder.addressId);
        });
        return addr ? "".concat(addr.street, ", ").concat(addr.district) : 'Sin dirección';
      }())))), trackingOrder.comment && /*#__PURE__*/React.createElement("div", {
        className: "mt-3 pt-3 border-t border-gray-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-comment-alt text-cyan-500 mt-0.5"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, "Comentario"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 text-sm"
      }, trackingOrder.comment)))))))));
    }(), selectedExam && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedExam(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-purple-600 font-semibold"
    }, "Resultado")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-hidden p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800 mb-1"
    }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(selectedExam.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))), selectedExam.pdfData ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement(PdfViewer, {
      url: selectedExam.pdfData,
      originalUrl: selectedExam.pdfData,
      className: "flex-1 w-full rounded-xl border border-gray-200 min-h-0"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        window.open(selectedExam.pdfData, '_blank');
      },
      className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-semibold transition-colors shadow-lg text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf text-4xl text-gray-400 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "PDF no disponible")))))), !selectedExam && viewingInvoice && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt text-cyan-500' : 'fa-file-invoice text-amber-500', " text-lg")
    }), /*#__PURE__*/React.createElement("span", {
      className: "".concat(viewingInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600', " font-semibold")
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura')))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-hidden p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5 h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800 mb-1"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar mr-1"
    }), new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-sm mt-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user mr-1"
    }), viewingInvoice.userName)), viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement(PdfViewer, {
      url: viewingInvoice.invoicePdf,
      className: "flex-1 w-full rounded-xl border border-gray-200 min-h-0"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var link = document.createElement('a');
        link.href = viewingInvoice.invoicePdf;
        link.download = "".concat(viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700', " text-white rounded-xl font-semibold transition-colors shadow-lg text-sm")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl p-12 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-4xl text-gray-400 mb-2")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura', " no disponible")))))), !selectedExam && !viewingInvoice && currentExamForPet && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (showAddressSelection && !showNewAddressForm) {
          setShowAddressSelection(false);
          setSelectedPetForOrder(null);
        } else if (showNewAddressForm) {
          setShowNewAddressForm(false);
        } else if (showNewPetForm) {
          setShowNewPetForm(false);
        } else {
          setCurrentExamForPet(null);
          removeFromPending(currentExamForPet.id);
        }
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-shopping-cart text-cyan-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-semibold"
    }, "Nuevo Pedido")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto",
      style: {
        padding: '1.75rem 5rem 1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), (pendingExams || []).length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 rounded-xl p-3 mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-700"
    }, "Examen ", pendingExams.findIndex(function (e) {
      return e.id === currentExamForPet.id;
    }) + 1, " de ", (pendingExams || []).length)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(!showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-emerald-100 text-emerald-700')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(!showAddressSelection ? 'fa-paw' : 'fa-check')
    }), " Paciente"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-300 text-xs"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ".concat(showAddressSelection ? 'bg-cyan-500 text-white' : 'bg-gray-100 text-gray-400')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt"
    }), " Direcci\xF3n")), !showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: petSearchTerm,
      onChange: function onChange(e) {
        return setPetSearchTerm(e.target.value);
      },
      placeholder: "Buscar ".concat(entityName, "..."),
      className: "w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none bg-white"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4 relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-72 overflow-y-auto hide-scrollbar"
    }, (filteredPets || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No se encontr\xF3 ning\xFAn ", entityName)) : (filteredPets || []).map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-3xl"
      }, pet === null || pet === void 0 ? void 0 : pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, pet.breed, " \u2022 ", formatAge(pet)), pet.owner && freshUser.type === 'medico' && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    })), /*#__PURE__*/React.createElement("div", {
      className: "pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent rounded-b-2xl"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar ", freshUser.type === 'medico' ? 'nuevo paciente' : 'nueva mascota')) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), freshUser.type === 'medico' ? 'Nuevo Paciente' : 'Nueva Mascota'), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, '')
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), freshUser.type === 'medico' && /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre del Due\xF1o"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.owner,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          owner: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del propietario"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "col-span-2 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar")))), showAddressSelection && /*#__PURE__*/React.createElement(React.Fragment, null, !showNewAddressForm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 rounded-xl p-3 mb-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.photo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.breed))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow overflow-hidden mb-4 relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-h-96 overflow-y-auto hide-scrollbar"
    }, (database.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-8 text-center text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-3xl mb-2 text-gray-300"
    }), /*#__PURE__*/React.createElement("p", null, "No tienes direcciones guardadas")) : (database.addresses || []).map(function (addr) {
      return /*#__PURE__*/React.createElement("div", {
        key: addr.id,
        onClick: function onClick() {
          return assignAddressAndComplete(addr);
        },
        className: "p-4 border-b border-gray-100 last:border-0 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, addr.address), addr.reference && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Ref: ", addr.reference)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      }));
    })), /*#__PURE__*/React.createElement("div", {
      className: "pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent rounded-b-2xl"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-4 rounded-2xl border-2 border-dashed border-cyan-300 text-cyan-600 font-semibold hover:bg-cyan-50"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n")) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre/Etiqueta *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina, Cl\xEDnica..."
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque, port\xF3n verde..."
    })), /*#__PURE__*/React.createElement("button", {
      onClick: addNewAddress,
      className: "w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar y Seleccionar"))))))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'configuracion' && !showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-md mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-6"
    }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
    }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-gray-800"
    }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500"
    }, freshUser.clinic || 'Clínica Veterinaria'))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: openEditProfile,
      className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-gray-800"
    }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Editar informaci\xF3n de tu cl\xEDnica")), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right text-gray-400 ml-auto"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handleLogout,
      className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-sign-out-alt"
    }), "Cerrar Sesi\xF3n"))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'configuracion' && showEditProfile && /*#__PURE__*/React.createElement("div", {
      className: "max-w-lg mx-auto pb-20 overflow-y-auto",
      style: {
        maxHeight: 'calc(100vh - 80px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-gray-600"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
    }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la Cl\xEDnica", /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-amber-600 ml-2"
    }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.name,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre de tu cl\xEDnica"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raz\xF3n Social"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.clinic,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          clinic: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Para facturas"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "RUC"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.ruc,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          ruc: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "20123456789",
      maxLength: 11
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
      type: "tel",
      value: editProfile.phone,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          phone: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "999 888 777"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: editProfile.email,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          email: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "contacto@tuclinica.com"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.address,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. Principal 123"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: editProfile.district,
      onChange: function onChange(e) {
        return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Miraflores"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 flex gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowEditProfile(false);
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return saveProfile(editProfile.name !== freshUser.name);
      },
      className: "flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-save"
    }), "Guardar")))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'inicio' && showAllPending && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-white shadow-md border-b border-gray-200 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowAllPending(false);
      },
      className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "font-bold text-gray-800 text-lg"
    }, "Pendientes"))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, function () {
      var pendingInvoiceOrders = pendingOrders;
      if ((pendingInvoiceOrders || []).length === 0) return /*#__PURE__*/React.createElement("div", {
        className: "text-center py-16 bg-white rounded-xl shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-4xl text-emerald-400 mb-3 block"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, "No hay pendientes"));
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4 mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 px-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-route text-cyan-500 text-sm"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
      }, "Pedidos")), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 px-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-invoice-dollar text-amber-500 text-sm"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-gray-400 uppercase tracking-widest"
      }, "Comprobantes"))), /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, (pendingInvoiceOrders || []).map(function (order, idx) {
        var _order$items9, _order$items0;
        var invoice = pendingInvoiceOrders[idx];
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          className: "grid grid-cols-2 gap-4"
        }, /*#__PURE__*/React.createElement("div", {
          onClick: function onClick() {
            setViewingOrderTracking(order);
            setShowAllPending(false);
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "text-3xl leading-none flex-shrink-0"
        }, "\uD83D\uDC3E"), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 truncate"
        }, (order === null || order === void 0 || (_order$items9 = order.items) === null || _order$items9 === void 0 || (_order$items9 = _order$items9[0]) === null || _order$items9 === void 0 ? void 0 : _order$items9.examName) || 'Pedido'), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500 truncate"
        }, (order === null || order === void 0 || (_order$items0 = order.items) === null || _order$items0 === void 0 || (_order$items0 = _order$items0[0]) === null || _order$items0 === void 0 ? void 0 : _order$items0.examName) || '')), /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route text-white"
        }))), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-2 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-credit-card text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1Resultados listos! Pendiente de pago"))), invoice && /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-4 shadow flex items-center justify-between"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(invoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800"
        }, invoice.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500"
        }, invoice.items.map(function (i) {
          return getPetFullName(i.pet);
        }).join(', ')))), /*#__PURE__*/React.createElement("span", {
          className: "bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium flex-shrink-0"
        }, "Pendiente")));
      })));
    }()))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'inicio' && !showAllPending && /*#__PURE__*/React.createElement("div", {
      className: "h-full overflow-y-auto px-20 pt-10"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-bold text-gray-800 mb-1"
    }, "\xA1Hola, ", freshUser.name, "!"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 mb-6"
    }, "Resumen de tu actividad"), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, function () {
      var pendingInvoiceMap = {};
      (database.orders || []).filter(function (o) {
        return o.invoiceRequested && o.invoiceStatus === 'pending';
      }).forEach(function (o) {
        pendingInvoiceMap[o.id] = o;
      });
      var items = [];
      var usedIds = new Set();
      pendingOrders.forEach(function (order) {
        items.push({
          type: 'tracking',
          order: order
        });
        if (pendingInvoiceMap[order.id]) {
          items.push({
            type: 'invoice',
            order: pendingInvoiceMap[order.id]
          });
          usedIds.add(order.id);
        }
      });
      Object.values(pendingInvoiceMap).forEach(function (o) {
        if (!usedIds.has(o.id)) items.push({
          type: 'invoice',
          order: o
        });
      });
      var totalPending = items.length;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-3"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-lg font-bold text-gray-800 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock text-amber-500"
      }), " Pendientes", totalPending > 0 && /*#__PURE__*/React.createElement("span", {
        className: "bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-sm font-bold"
      }, totalPending)), totalPending > 2 && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setShowAllPending(true);
        },
        className: "text-cyan-600 text-sm font-medium hover:underline"
      }, "Ver todos \u2192")), totalPending === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check-circle text-3xl text-emerald-400 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, "No existen pendientes")) : /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-3"
      }, items.slice(0, 4).map(function (item, idx) {
        var _order$items1, _order$items10, _order$items11;
        var order = item.order;
        if (item.type === 'invoice') return /*#__PURE__*/React.createElement("div", {
          key: "inv-".concat(order.id, "-").concat(idx),
          className: "bg-white rounded-xl p-4 shadow flex flex-col gap-2"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2.5"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice-dollar', " text-amber-600")
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 text-sm leading-tight"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura', " solicitada"), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, (order === null || order === void 0 || (_order$items1 = order.items) === null || _order$items1 === void 0 || (_order$items1 = _order$items1[0]) === null || _order$items1 === void 0 ? void 0 : _order$items1.examName) || 'Pedido'))), /*#__PURE__*/React.createElement("span", {
          className: "self-start bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium"
        }, "Pendiente"));
        return /*#__PURE__*/React.createElement("div", {
          key: "tr-".concat(order.id),
          onClick: function onClick() {
            return setViewingOrderTracking(order);
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all group"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-3xl"
        }, "\uD83D\uDC3E"), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-semibold text-gray-800 truncate"
        }, (order === null || order === void 0 || (_order$items10 = order.items) === null || _order$items10 === void 0 || (_order$items10 = _order$items10[0]) === null || _order$items10 === void 0 ? void 0 : _order$items10.examName) || 'Pedido'), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500 truncate"
        }, (order === null || order === void 0 || (_order$items11 = order.items) === null || _order$items11 === void 0 || (_order$items11 = _order$items11[0]) === null || _order$items11 === void 0 ? void 0 : _order$items11.examName) || '')), /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(order.status === 'moto_arrived' || order.status === 'results_uploaded' ? 'bg-red-500' : 'bg-cyan-500')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route text-white"
        }))), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-1.5 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1El motorizado lleg\xF3! Entrega la muestra")), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
          className: "mt-2 bg-red-50 border border-red-300 rounded-lg p-1.5 flex items-center gap-1.5 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-credit-card text-red-600 text-xs"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-xs"
        }, "\xA1Resultados listos! Pendiente de pago")));
      })));
    }()), /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500"
    }), " \xDAltimo resultado", newResultHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('resultados');
      },
      className: "text-cyan-600 text-sm font-medium hover:underline"
    }, "Ver todos \u2192")), (completedOrders || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-6 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-3xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados a\xFAn")) : function (_lastOrder$items2, _pet$exams, _firstItem$pet6, _lastOrder$items3, _lastOrder$items4) {
      var lastOrder = completedOrders === null || completedOrders === void 0 ? void 0 : completedOrders[0];
      if (!lastOrder) return null;
      var firstItem = lastOrder === null || lastOrder === void 0 || (_lastOrder$items2 = lastOrder.items) === null || _lastOrder$items2 === void 0 ? void 0 : _lastOrder$items2[0];
      if (!firstItem) return null;
      var pet = (petsOrPatients || []).find(function (p) {
        var _firstItem$pet5;
        return p.id === ((_firstItem$pet5 = firstItem.pet) === null || _firstItem$pet5 === void 0 ? void 0 : _firstItem$pet5.id);
      });
      var exam = pet === null || pet === void 0 || (_pet$exams = pet.exams) === null || _pet$exams === void 0 ? void 0 : _pet$exams.find(function (e) {
        return e.orderId === lastOrder.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all cursor-pointer ".concat(newResultHighlight ? 'highlight-green-pulse' : ''),
        onClick: function onClick() {
          return (exam === null || exam === void 0 ? void 0 : exam.pdfData) && setSelectedExam(exam);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl"
      }, (firstItem === null || firstItem === void 0 || (_firstItem$pet6 = firstItem.pet) === null || _firstItem$pet6 === void 0 ? void 0 : _firstItem$pet6.photo) || '🐾'), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, lastOrder !== null && lastOrder !== void 0 && (_lastOrder$items3 = lastOrder.items) !== null && _lastOrder$items3 !== void 0 && (_lastOrder$items3 = _lastOrder$items3[0]) !== null && _lastOrder$items3 !== void 0 && _lastOrder$items3.pet ? getPetFullName(lastOrder.items[0].pet) : "Sin mascota"), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, (lastOrder === null || lastOrder === void 0 || (_lastOrder$items4 = lastOrder.items) === null || _lastOrder$items4 === void 0 || (_lastOrder$items4 = _lastOrder$items4[0]) === null || _lastOrder$items4 === void 0 ? void 0 : _lastOrder$items4.examName) || '' || "Sin examen"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, lastOrder !== null && lastOrder !== void 0 && lastOrder.completedAt ? new Date(lastOrder.completedAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }) : "")), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(newResultHighlight ? 'bg-emerald-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye ".concat(newResultHighlight ? 'text-emerald-600' : 'text-purple-600')
      }))));
    }()), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-bold text-gray-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500"
    }), " \xDAltimo comprobante", newInvoiceHighlight && /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse"
    }, "\xA1NUEVO!")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMedicoView('facturacion');
      },
      className: "text-cyan-600 text-sm font-medium hover:underline"
    }, "Ver todos \u2192")), function (_lastInvoice$items, _lastInvoice$items2) {
      var comprobantesEmitidos = completedOrders.filter(function (o) {
        return o.invoiceStatus === 'uploaded' && o.invoicePdf;
      });
      if ((comprobantesEmitidos || []).length === 0) return /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-6 text-center shadow"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-receipt text-3xl text-gray-300 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, "No hay comprobantes a\xFAn"));
      var lastInvoice = comprobantesEmitidos === null || comprobantesEmitidos === void 0 ? void 0 : comprobantesEmitidos[0];
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all cursor-pointer ".concat(newInvoiceHighlight ? 'highlight-green-pulse' : ''),
        onClick: function onClick() {
          return setViewingInvoice(lastInvoice);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(newInvoiceHighlight ? 'bg-emerald-100' : lastInvoice.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(lastInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-xl ").concat(newInvoiceHighlight ? 'text-emerald-600' : lastInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, lastInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, getPetFullName(lastInvoice === null || lastInvoice === void 0 || (_lastInvoice$items = lastInvoice.items) === null || _lastInvoice$items === void 0 || (_lastInvoice$items = _lastInvoice$items[0]) === null || _lastInvoice$items === void 0 ? void 0 : _lastInvoice$items.pet), " - ", lastInvoice === null || lastInvoice === void 0 || (_lastInvoice$items2 = lastInvoice.items) === null || _lastInvoice$items2 === void 0 || (_lastInvoice$items2 = _lastInvoice$items2[0]) === null || _lastInvoice$items2 === void 0 || (_lastInvoice$items2 = _lastInvoice$items2.exam) === null || _lastInvoice$items2 === void 0 ? void 0 : _lastInvoice$items2.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, new Date(lastInvoice.completedAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center ".concat(newInvoiceHighlight ? 'bg-emerald-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye ".concat(newInvoiceHighlight ? 'text-emerald-600' : 'text-amber-600')
      }))));
    }())), !showOrderSummary && !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'pedidos' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-cyan-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-semibold"
    }, "Pedidos")), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: searchTerm,
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen o perfil...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white text-sm"
    }), searchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, ((cart || []).length > 0 || (pendingExams || []).length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-emerald-500 rounded-full"
    }), " Listo"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 bg-amber-400 rounded-full"
    }), " Pendiente"), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-400"
    }, "\u2022 Clic para deseleccionar")), !hayResultados ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-16 bg-white rounded-xl shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-5xl text-gray-300 mb-4"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-lg font-medium"
    }, "No encontramos resultados"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Intenta con otro t\xE9rmino")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-6 pb-24"
    }, (filteredPerfiles || []).length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-boxes-stacked text-blue-500"
    }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 lg:grid-cols-3 gap-3"
    }, (filteredPerfiles || []).map(function (exam) {
      var isInCart = (cart || []).find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = (pendingExams || []).find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-11 h-11 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-semibold text-sm leading-tight"
      }, exam.name), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs truncate"
      }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
        className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
      })));
    }))), filteredCategorias.map(function (cat) {
      return /*#__PURE__*/React.createElement("div", {
        key: cat.nombre
      }, /*#__PURE__*/React.createElement("h3", {
        className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(cat.icon, " ").concat(cat.color)
      }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 lg:grid-cols-3 gap-3"
      }, cat.examenes.map(function (exam) {
        var isInCart = cart.find(function (c) {
          return c.exam.id === exam.id;
        });
        var isPending = pendingExams.find(function (e) {
          return e.id === exam.id;
        });
        return /*#__PURE__*/React.createElement("div", {
          key: exam.id,
          onClick: function onClick() {
            return handleExamClick(exam);
          },
          className: "bg-white rounded-xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-10 h-10 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-gray-800 font-medium text-sm leading-tight"
        }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
          className: "text-gray-400 text-xs"
        }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
          className: "text-cyan-600 font-bold text-sm flex-shrink-0"
        }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
          className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
        })));
      })));
    }))), (cart || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "fixed bottom-6 right-6 bg-slate-800 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
    }, cart.length), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-sm"
    }, "Pedido listo"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 truncate max-w-[150px]"
    }, (cart || []).map(function (c) {
      return getPetFullName(c.pet);
    }).join(', '))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(true);
      },
      className: "bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap flex-shrink-0 ml-2"
    }, "Solicitar")))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'mascotas' && !selectedMascota && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-emerald-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-semibold"
    }, "Pacientes"), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, (petsOrPatients || []).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: mascotaSearchTerm,
      onChange: function onChange(e) {
        return setMascotaSearchTerm(e.target.value);
      },
      placeholder: "Buscar paciente o due\xF1o...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-emerald-500 focus:outline-none bg-white text-sm"
    }), mascotaSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setMascotaSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, (filteredMascotas || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paw text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron pacientes")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 pb-6"
    }, (filteredMascotas || []).map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          setSelectedMascota(pet);
          setExamSearchTerm('');
          setExamFilterDay('');
          setExamFilterMonth('');
          setExamFilterYear('');
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl"
      }, pet === null || pet === void 0 ? void 0 : pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, pet.breed), pet.owner && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, "Due\xF1o: ", pet.owner)), /*#__PURE__*/React.createElement("span", {
        className: "bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full"
      }, (pet.exams || []).length, " ex\xE1m.")));
    })))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'mascotas' && selectedMascota && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedMascota(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, selectedMascota.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, getPetFullName(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium"
    }, (selectedMascota.exams || []).length, " ex\xE1menes")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-dog text-cyan-500 mr-1"
    }), selectedMascota.breed), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-birthday-cake text-cyan-500 mr-1"
    }), formatAge(selectedMascota)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-venus-mars text-cyan-500 mr-1"
    }), selectedMascota.sex), selectedMascota.owner && /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user text-cyan-500 mr-1"
    }), selectedMascota.owner))))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-emerald-500 focus:outline-none bg-white text-sm"
    }), examSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExamSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "h-10 w-20 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-emerald-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), (examFilterDay || examFilterMonth || examFilterYear) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setExamFilterDay('');
        setExamFilterMonth('');
        setExamFilterYear('');
      },
      className: "h-10 px-3 rounded-full bg-red-100 text-red-600 text-xs hover:bg-red-200"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times mr-1"
    }), "Limpiar")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, (selectedMascota.exams || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "Este paciente no tiene ex\xE1menes")) : filterExams(selectedMascota.exams).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No se encontraron ex\xE1menes con los filtros seleccionados")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pb-6"
    }, filterExams(selectedMascota.exams).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          console.log('EXAM:', exam);
          if (exam.pdfData) setSelectedExam(exam);
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf text-xl ".concat(exam.seen === false ? 'text-red-600' : 'text-purple-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-calendar mr-1"
      }), new Date(exam.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold"
      }, "NUEVO"), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-purple-600"
      }))));
    })))), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'resultados' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-medical text-purple-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-purple-600 font-semibold"
    }, "Resultados"), /*#__PURE__*/React.createElement("span", {
      className: "bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, (completedOrders || []).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: resultadosSearch,
      onChange: function onChange(e) {
        return setResultadosSearch(e.target.value);
      },
      placeholder: "Buscar por paciente o examen...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-purple-500 focus:outline-none bg-white text-sm"
    }), resultadosSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setResultadosSearch('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterDay,
      onChange: function onChange(e) {
        return setResultadosFilterDay(e.target.value);
      },
      className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterMonth,
      onChange: function onChange(e) {
        return setResultadosFilterMonth(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: resultadosFilterYear,
      onChange: function onChange(e) {
        return setResultadosFilterYear(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, function (_database$orders) {
      console.log("ORDERS RAW:", JSON.stringify((_database$orders = database.orders) === null || _database$orders === void 0 ? void 0 : _database$orders[0]));
      var completedOrders = (database.orders || []).filter(function (o) {
        return o.status === 9 || o.status === 'completed' || Number(o.status) === 9;
      }); // Filtrar resultados
      var filtered = completedOrders || [];
      if (resultadosSearch) {
        filtered = filtered.filter(function (order) {
          return order.items.some(function (item) {
            var _item$pet1, _item$pet10, _item$exam14;
            return (((_item$pet1 = item.pet) === null || _item$pet1 === void 0 ? void 0 : _item$pet1.name) || ((_item$pet10 = item.pet2) === null || _item$pet10 === void 0 ? void 0 : _item$pet10.name) || '').toLowerCase().includes(resultadosSearch.toLowerCase()) || (((_item$exam14 = item.exam) === null || _item$exam14 === void 0 ? void 0 : _item$exam14.name) || '').toLowerCase().includes(resultadosSearch.toLowerCase());
          });
        });
      }
      if (resultadosFilterDay || resultadosFilterMonth || resultadosFilterYear) {
        filtered = filtered.filter(function (order) {
          var date = new Date(order.completedAt);
          var day = String(date.getDate()).padStart(2, '0');
          var month = String(date.getMonth() + 1).padStart(2, '0');
          var year = String(date.getFullYear());
          if (resultadosFilterDay && day !== resultadosFilterDay) return false;
          if (resultadosFilterMonth && month !== resultadosFilterMonth) return false;
          if (resultadosFilterYear && year !== resultadosFilterYear) return false;
          return true;
        });
      }
      if ((filtered || []).length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-8 text-center shadow"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-inbox text-4xl text-gray-300 mb-2"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500"
        }, "No hay resultados"));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4 pb-6"
      }, filtered.map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            var _order$items12;
            if (order.resultPdfUrl) {
              var win = window.open();
              win.location.href = "https://inulab-backend-production.up.railway.app".concat(order.resultPdfUrl);
            } else if ((_order$items12 = order.items) !== null && _order$items12 !== void 0 && (_order$items12 = _order$items12[0]) !== null && _order$items12 !== void 0 && _order$items12.pdfData) {
              var _win = window.open();
              _win.location.href = order.items[0].pdfData;
            } else alert('Este resultado aún no está disponible');
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-xs text-gray-500"
        }, new Date(order.completedAt).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long'
        }))), (order.items || []).map(function (item, idx) {
          var _item$pet11, _item$pet12, _item$exam15;
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-3"
          }, /*#__PURE__*/React.createElement("span", {
            className: "text-2xl"
          }, item === null || item === void 0 || (_item$pet11 = item.pet) === null || _item$pet11 === void 0 ? void 0 : _item$pet11.photo), /*#__PURE__*/React.createElement("div", {
            className: "flex-1"
          }, /*#__PURE__*/React.createElement("p", {
            className: "font-medium text-gray-800"
          }, (item === null || item === void 0 || (_item$pet12 = item.pet) === null || _item$pet12 === void 0 ? void 0 : _item$pet12.name) || ''), /*#__PURE__*/React.createElement("p", {
            className: "text-sm text-gray-500"
          }, (item === null || item === void 0 || (_item$exam15 = item.exam) === null || _item$exam15 === void 0 ? void 0 : _item$exam15.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen')), /*#__PURE__*/React.createElement("div", {
            className: "w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-eye text-purple-600 text-sm"
          })));
        }));
      }));
    }())), !selectedExam && !viewingInvoice && !currentExamForPet && !viewingOrderTracking && medicoView === 'facturacion' && /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-600 font-semibold"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, completedOrders.filter(function (o) {
      return o.invoicePdf;
    }).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facturacionSearch,
      onChange: function onChange(e) {
        return setFacturacionSearch(e.target.value);
      },
      placeholder: "Buscar por paciente...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-amber-500 focus:outline-none bg-white text-sm"
    }), facturacionSearch && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacturacionSearch('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterDay,
      onChange: function onChange(e) {
        return setFacturacionFilterDay(e.target.value);
      },
      className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterMonth,
      onChange: function onChange(e) {
        return setFacturacionFilterMonth(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facturacionFilterYear,
      onChange: function onChange(e) {
        return setFacturacionFilterYear(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, function () {
      // Filtrar facturas
      var invoices = completedOrders.filter(function (o) {
        return o.invoicePdf;
      });
      if (facturacionSearch) {
        invoices = invoices.filter(function (order) {
          return order.items.some(function (item) {
            return item.pet.name.toLowerCase().includes(facturacionSearch.toLowerCase());
          });
        });
      }
      if (facturacionFilterDay || facturacionFilterMonth || facturacionFilterYear) {
        invoices = invoices.filter(function (order) {
          var date = new Date(order.completedAt);
          var day = String(date.getDate()).padStart(2, '0');
          var month = String(date.getMonth() + 1).padStart(2, '0');
          var year = String(date.getFullYear());
          if (facturacionFilterDay && day !== facturacionFilterDay) return false;
          if (facturacionFilterMonth && month !== facturacionFilterMonth) return false;
          if (facturacionFilterYear && year !== facturacionFilterYear) return false;
          return true;
        });
      }
      if ((invoices || []).length === 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-white rounded-xl p-8 text-center shadow"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-receipt text-4xl text-gray-300 mb-2"
        }), /*#__PURE__*/React.createElement("p", {
          className: "text-gray-500"
        }, "No hay comprobantes"));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-2 gap-4 pb-6"
      }, invoices.map(function (order) {
        var _order$items13, _order$items14;
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          onClick: function onClick() {
            return setViewingInvoice(order);
          },
          className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-3"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(order.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas ".concat(order.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice text-amber-600', " text-xl")
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-1"
        }, /*#__PURE__*/React.createElement("p", {
          className: "font-medium text-gray-800"
        }, order.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-gray-500"
        }, getPetFullName(order === null || order === void 0 || (_order$items13 = order.items) === null || _order$items13 === void 0 || (_order$items13 = _order$items13[0]) === null || _order$items13 === void 0 ? void 0 : _order$items13.pet), " - ", (order === null || order === void 0 || (_order$items14 = order.items) === null || _order$items14 === void 0 || (_order$items14 = _order$items14[0]) === null || _order$items14 === void 0 ? void 0 : _order$items14.examName) || ''), /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-400"
        }, new Date(order.completedAt).toLocaleDateString('es-ES'))), /*#__PURE__*/React.createElement("div", {
          className: "w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-eye text-amber-600 text-sm"
        }))));
      }));
    }())), showOrderSummary && /*#__PURE__*/React.createElement("div", {
      className: "modal-overlay flex items-center justify-center p-4",
      onClick: function onClick(e) {
        if (e.target === e.currentTarget) setShowOrderSummary(false);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col",
      style: {
        height: '680px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold text-gray-800"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clipboard-list text-cyan-500 mr-2"
    }), "Resumen del Pedido"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowOrderSummary(false);
      },
      className: "w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col lg:flex-row min-h-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2 p-6 lg:border-r overflow-y-auto"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-vials text-cyan-500 mr-2"
    }), "Ex\xE1menes (", cart.length, ")"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, cart.map(function (item) {
      var _item$exam16, _item$exam17, _item$exam18, _item$exam19, _item$exam20, _item$pet13, _item$pet14, _item$address, _item$address2, _item$address3;
      return /*#__PURE__*/React.createElement("div", {
        key: item.exam.id,
        className: "bg-gray-50 rounded-xl p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat((item === null || item === void 0 || (_item$exam16 = item.exam) === null || _item$exam16 === void 0 ? void 0 : _item$exam16.bg) || 'bg-cyan-100', " rounded-lg flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat((item === null || item === void 0 || (_item$exam17 = item.exam) === null || _item$exam17 === void 0 ? void 0 : _item$exam17.icon) || 'fa-vial', " ").concat((item === null || item === void 0 || (_item$exam18 = item.exam) === null || _item$exam18 === void 0 ? void 0 : _item$exam18.color) || 'text-cyan-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "min-w-0"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium text-gray-800 text-sm"
      }, (item === null || item === void 0 || (_item$exam19 = item.exam) === null || _item$exam19 === void 0 ? void 0 : _item$exam19.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), (item === null || item === void 0 || (_item$exam20 = item.exam) === null || _item$exam20 === void 0 ? void 0 : _item$exam20.subtitle) && /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 truncate"
      }, item.exam.subtitle))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 flex-shrink-0 ml-3"
      }, item.exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm whitespace-nowrap"
      }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return removeFromCart(item.exam.id);
        },
        className: "text-red-400 hover:text-red-600"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-trash text-sm"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "border-t pt-2 mt-2 space-y-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-lg"
      }, item === null || item === void 0 || (_item$pet13 = item.pet) === null || _item$pet13 === void 0 ? void 0 : _item$pet13.photo), /*#__PURE__*/React.createElement("span", {
        className: "text-sm text-gray-600"
      }, (item === null || item === void 0 || (_item$pet14 = item.pet) === null || _item$pet14 === void 0 ? void 0 : _item$pet14.name) || '')), /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-2 text-xs text-gray-500"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt mt-0.5 text-cyan-500"
      }), /*#__PURE__*/React.createElement("span", null, (_item$address = item.address) === null || _item$address === void 0 ? void 0 : _item$address.name, ": ", (_item$address2 = item.address) === null || _item$address2 === void 0 ? void 0 : _item$address2.address, ", ", safeText(item === null || item === void 0 || (_item$address3 = item.address) === null || _item$address3 === void 0 ? void 0 : _item$address3.district)))));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2 p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-cog text-gray-400 mr-2"
    }), "Detalles"), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-600 mr-2"
    }), "Tipo de comprobante"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('boleta');
      },
      className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-300')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-receipt mr-1.5"
    }), "Boleta"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setInvoiceType('factura');
      },
      className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300')
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice mr-1.5"
    }), "Factura"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-50 rounded-xl p-4 mb-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-medium text-gray-700 mb-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-comment-alt text-cyan-500 mr-2"
    }), "Comentarios"), /*#__PURE__*/React.createElement("textarea", {
      value: orderComment,
      onChange: function onChange(e) {
        return setOrderComment(e.target.value);
      },
      placeholder: "Ej: Recoger muestra despu\xE9s de las 10am, tocar timbre 2 veces...",
      className: "w-full px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm resize-none",
      rows: "3",
      maxLength: "500"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-1 text-right"
    }, (orderComment || []).length, "/500")), renderTermsCheckbox(), /*#__PURE__*/React.createElement("button", {
      onClick: submitOrder,
      disabled: !termsAccepted,
      className: "w-full py-3.5 rounded-xl font-semibold transition-all ".concat(termsAccepted ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-paper-plane mr-2"
    }), "Solicitar Pedido")))))))));
  } // =====================================================
  // VISTA PARA DUEÑOS - Mantener interfaz actual
  // =====================================================
  if (isLandscapePhone) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-[999999] text-white text-center p-6"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-mobile-alt text-5xl mb-4 animate-pulse"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-semibold mb-2"
    }, "Gira tu dispositivo"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-400"
    }, "Esta app funciona mejor en vertical"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-100"
  }, renderTermsModal(), renderDuenoHeader(), renderDuenoSidebar(), duenoView === 'config' ? /*#__PURE__*/React.createElement("div", {
    className: "app-content-breadcrumb lg:ml-56 lg:pt-16",
    style: {
      overflowY: 'auto',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-md mx-auto px-4 py-5"
  }, !showEditProfile ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-gray-800 mb-6"
  }, "Configuraci\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold"
  }, freshUser.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-gray-800"
  }, freshUser.name, " ", freshUser.lastName || ''), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Cliente"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: openEditProfile,
    className: "w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user text-cyan-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-gray-800"
  }, "Mi Perfil"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Editar informaci\xF3n de contacto")), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right text-gray-400 ml-auto"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    className: "w-full mt-6 py-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-colors flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-out-alt"
  }), " Cerrar Sesi\xF3n")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDuenoView('main');
    },
    className: "lg:hidden mt-4 w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left mr-2"
  }), "Volver")) : /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowEditProfile(false);
    },
    className: "w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left text-gray-600"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-gray-800"
  }, "Mi Perfil")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold"
  }, editProfile.name.charAt(0) || freshUser.name.charAt(0))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nombre", /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-amber-600 ml-2"
  }, getNameChangeText())), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.name,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        name: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "Tu nombre"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Tel\xE9fono de contacto"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: editProfile.phone,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        phone: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "999 888 777"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: editProfile.email,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        email: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "tu@email.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.address,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        address: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "Tu direcci\xF3n"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Distrito"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: editProfile.district,
    onChange: function onChange(e) {
      return setEditProfile(_objectSpread(_objectSpread({}, editProfile), {}, {
        district: e.target.value
      }));
    },
    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
    placeholder: "San Isidro"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return saveProfile(editProfile.name !== freshUser.name);
    },
    className: "w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg mt-4"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save mr-2"
  }), "Guardar Cambios"))))) : /*#__PURE__*/React.createElement("div", {
    className: "app-content-dueno lg:ml-56",
    style: {
      overflowY: selectedExam || viewingInvoice || facturacionInvoice ? 'hidden' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dueno-content-wrapper"
  }, selectedExam && !viewingOrderTracking && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col",
    style: {
      height: 'calc(100vh - 70px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedExam(null);
    },
    className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-medical text-purple-500 text-lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-purple-600 font-semibold"
  }, "Resultado")), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-600 font-medium"
  }, selectedExam.type))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-hidden py-8 px-5 flex flex-col min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto w-full h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-4 flex-1 flex flex-col min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-gray-800 mb-1"
  }, selectedExam.type), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar mr-1"
  }), new Date(selectedExam.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }))), selectedExam.pdfData ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col min-h-0"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: selectedExam.pdfData,
    className: "flex-1 w-full rounded-xl border border-gray-200 min-h-0",
    title: "PDF"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var a = document.createElement('a');
      a.href = selectedExam.pdfData;
      a.download = "".concat(selectedExam.type.replace(/[^a-zA-Z0-9]/g, '_'), "_").concat(selectedExam.date, ".pdf");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    className: "flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-semibold text-sm shadow-lg"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-download"
  }), " Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-gray-100 rounded-xl flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-pdf text-4xl text-gray-400 mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "PDF no disponible")))))), viewingInvoice && !selectedExam && !viewingOrderTracking && function () {
    var docType = viewingInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura';
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col",
      style: {
        height: 'calc(100vh - 70px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingInvoice(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt text-cyan-500' : 'fa-file-invoice text-amber-500', " text-lg")
    }), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold ".concat(viewingInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
    }, docType)), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500 text-sm"
    }, new Date(viewingInvoice.completedAt || viewingInvoice.date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-hidden p-6 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto w-full h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5 flex-1 flex flex-col min-h-0"
    }, viewingInvoice.invoicePdf ? /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col min-h-0"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: viewingInvoice.invoicePdf,
      className: "flex-1 w-full rounded-xl border border-gray-200 min-h-0",
      title: "".concat(docType, " PDF")
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var a = document.createElement('a');
        a.href = viewingInvoice.invoicePdf;
        a.download = "".concat(docType, "_").concat(viewingInvoice.id, ".pdf");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      className: "flex items-center gap-2 px-6 py-2.5 ".concat(viewingInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-amber-500 to-orange-600', " text-white rounded-xl font-semibold text-sm shadow-lg")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download"
    }), " Descargar ", docType))) : /*#__PURE__*/React.createElement("div", {
      className: "flex-1 bg-gray-100 rounded-xl flex flex-col items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(viewingInvoice.documentType === 'boleta' ? 'fa-receipt' : 'fa-file-invoice', " text-4xl text-gray-400 mb-2")
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, docType, " no disponible"))))));
  }(), viewingOrderTracking && function (_order$items15, _order$items16) {
    var order = (database.orders || []).find(function (o) {
      return o.id === viewingOrderTracking.id;
    }) || viewingOrderTracking;
    var orderDate = new Date(order.createdAt || order.date);
    var formatDT = function formatDT(date) {
      if (!date) return '';
      var d = new Date(date);
      return d.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      }) + ' - ' + d.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    var steps = [{
      id: 'pending',
      label: 'Pedido realizado',
      subtitle: 'Tu pedido ha sido registrado',
      icon: 'fa-clipboard-check',
      date: order.createdAt || order.date
    }, {
      id: 'confirmed',
      label: 'Pedido confirmado',
      subtitle: 'El laboratorio confirmó tu pedido',
      icon: 'fa-check-circle',
      date: order.createdAt || order.date
    }, {
      id: 'moto_en_camino',
      label: 'Motorizado en camino',
      subtitle: 'El motorizado va hacia tu ubicación',
      icon: 'fa-motorcycle',
      date: ['moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'moto_arrived',
      label: 'Motorizado llegó',
      subtitle: 'Por favor entrega la muestra',
      icon: 'fa-map-marker-alt',
      date: ['moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'sample_received',
      label: 'Muestra recogida',
      subtitle: 'Tu muestra va camino al laboratorio',
      icon: 'fa-vial',
      date: ['sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'arrived_at_lab',
      label: 'En laboratorio',
      subtitle: 'La muestra llegó al laboratorio',
      icon: 'fa-flask',
      date: ['arrived_at_lab', 'processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'processing',
      label: 'Procesando muestra',
      subtitle: 'Estamos analizando tu muestra',
      icon: 'fa-cog',
      date: ['processing', 'results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'results_uploaded',
      label: 'Resultados listos',
      subtitle: 'Realiza el pago para ver los resultados',
      icon: 'fa-file-medical',
      date: ['results_uploaded', 'completed'].includes(order.status) ? order.statusUpdatedAt : null
    }, {
      id: 'completed',
      label: 'Entregado',
      subtitle: '¡Ya puedes ver tus resultados!',
      icon: 'fa-check-double',
      date: order.status === 'completed' ? order.completedAt : null
    }];
    var statusOrder = ['pending', 'confirmed', 'moto_en_camino', 'moto_arrived', 'sample_received', 'arrived_at_lab', 'processing', 'results_uploaded', 'completed'];
    var currentIndex = statusOrder.indexOf(order.status === 'pending' ? 'confirmed' : order.status);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setViewingOrderTracking(null);
      },
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver a resultados")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col lg:flex-row gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 mb-4"
    }, "Estado del pedido"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-0"
    }, steps.map(function (step, index) {
      var isCompleted = index <= currentIndex;
      var isLast = index === steps.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: step.id,
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ".concat(isCompleted ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, isCompleted ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check text-xs"
      }) : /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(step.icon, " text-xs")
      })), !isLast && /*#__PURE__*/React.createElement("div", {
        className: "w-0.5 h-10 ".concat(index < currentIndex ? 'bg-cyan-500' : 'bg-gray-200')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 flex items-start justify-between ".concat(!isLast ? 'pb-3' : '')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-sm ".concat(isCompleted ? 'text-gray-800' : 'text-gray-400')
      }, step.label), /*#__PURE__*/React.createElement("p", {
        className: "text-xs ".concat(isCompleted ? 'text-gray-500' : 'text-gray-400')
      }, step.subtitle)), isCompleted && step.date && /*#__PURE__*/React.createElement("p", {
        className: "text-cyan-600 text-xs whitespace-nowrap ml-2"
      }, formatDT(step.date))));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow-lg p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-gray-800 mb-3"
    }, "Detalle del pedido"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, (order.items || []).map(function (item, idx) {
      var _item$exam21, _item$exam22, _item$exam23, _item$exam24, _item$pet15, _item$pet16;
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat((item === null || item === void 0 || (_item$exam21 = item.exam) === null || _item$exam21 === void 0 ? void 0 : _item$exam21.bg) || 'bg-cyan-100' || 'bg-gray-200', " rounded-lg flex items-center justify-center")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat((item === null || item === void 0 || (_item$exam22 = item.exam) === null || _item$exam22 === void 0 ? void 0 : _item$exam22.icon) || 'fa-vial', " ").concat((item === null || item === void 0 || (_item$exam23 = item.exam) === null || _item$exam23 === void 0 ? void 0 : _item$exam23.color) || 'text-cyan-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-medium text-gray-800 text-sm"
      }, (item === null || item === void 0 || (_item$exam24 = item.exam) === null || _item$exam24 === void 0 ? void 0 : _item$exam24.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-xs"
      }, item === null || item === void 0 || (_item$pet15 = item.pet) === null || _item$pet15 === void 0 ? void 0 : _item$pet15.photo, " ", (item === null || item === void 0 || (_item$pet16 = item.pet) === null || _item$pet16 === void 0 ? void 0 : _item$pet16.name) || '')));
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-cyan-500 mt-0.5"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, "Direcci\xF3n de recojo"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800"
    }, (order === null || order === void 0 || (_order$items15 = order.items) === null || _order$items15 === void 0 || (_order$items15 = _order$items15[0]) === null || _order$items15 === void 0 || (_order$items15 = _order$items15.address) === null || _order$items15 === void 0 ? void 0 : _order$items15.address) || 'Sin dirección', ", ", (order === null || order === void 0 || (_order$items16 = order.items) === null || _order$items16 === void 0 || (_order$items16 = _order$items16[0]) === null || _order$items16 === void 0 || (_order$items16 = _order$items16.address) === null || _order$items16 === void 0 ? void 0 : _order$items16.district) || '')))), order.comment && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 pt-3 border-t border-gray-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-comment-alt text-cyan-500 mt-0.5"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, "Comentario"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 text-sm"
    }, order.comment))))))));
  }(), facturacionInvoice && !viewingOrderTracking && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col",
    style: {
      height: 'calc(100vh - 70px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 py-3 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFacturacionInvoice(null);
    },
    className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(facturacionInvoice.documentType === 'boleta' ? 'fa-receipt text-cyan-500' : 'fa-file-invoice-dollar text-amber-500', " text-lg")
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold ".concat(facturacionInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
  }, facturacionInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura')), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 text-sm"
  }, new Date(facturacionInvoice.fecha || facturacionInvoice.createdAt || facturacionInvoice.date).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-hidden py-8 px-5 flex flex-col min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto w-full h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-lg p-4 flex-1 flex flex-col min-h-0"
  }, facturacionInvoice.invoicePdf ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center h-full w-full"
  }, facturacionInvoice !== null && facturacionInvoice !== void 0 && facturacionInvoice.invoicePdf ? /*#__PURE__*/React.createElement(PdfViewer, {
    url: facturacionInvoice.invoicePdf,
    style: {
      width: '100%',
      height: '500px'
    },
    className: "rounded-xl border"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center text-gray-400 h-[400px]"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice text-4xl mb-3"
  }), /*#__PURE__*/React.createElement("p", null, "Comprobante no disponible")), (facturacionInvoice === null || facturacionInvoice === void 0 ? void 0 : facturacionInvoice.invoicePdf) && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex justify-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var win = window.open('', '_blank');
      win.location.href = facturacionInvoice.invoicePdf;
    },
    className: "flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-download"
  }), "Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-gray-100 rounded-xl flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice text-4xl text-gray-400 mb-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Comprobante no disponible")))))), !viewingOrderTracking && !selectedExam && !viewingInvoice && selectedPet && activeTab === 'resultados' && function () {
    var currentPet = (database.pets || []).find(function (p) {
      return p.id === selectedPet.id;
    }) || selectedPet;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden",
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-100 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "dueno-circle-btn flex items-center justify-center bg-white/95 text-gray-600 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left text-xs"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, currentPet.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 font-semibold text-sm leading-tight truncate"
    }, currentPet.name), /*#__PURE__*/React.createElement("p", {
      className: "text-cyan-600 truncate",
      style: {
        fontSize: '10px'
      }
    }, currentPet.breed, " \xB7 ", formatAge(currentPet), " \xB7 ", currentPet.sex)), /*#__PURE__*/React.createElement("span", {
      className: "bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0"
    }, (currentPet.exams || []).length), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowMobileSearch(function (prev) {
          return !prev;
        });
      },
      className: "w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-600 flex-shrink-0 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search text-xs"
    })))), showMobileSearch && /*#__PURE__*/React.createElement("div", {
      className: "px-4 pb-3 flex flex-col gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full h-9 pl-9 pr-8 rounded-full border border-gray-300 focus:border-purple-500 focus:outline-none bg-white text-sm"
    }), examSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExamSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-xs"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "flex-1 h-8 rounded-full border border-gray-300 text-xs px-3 focus:outline-none bg-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "flex-1 h-8 rounded-full border border-gray-300 text-xs px-3 focus:outline-none bg-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "flex-1 h-8 rounded-full border border-gray-300 text-xs px-3 focus:outline-none bg-white"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden dueno-normal-content pb-20"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '70px'
      }
    }), showMobileSearch ? null : (currentPet.exams || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-8 text-center shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados disponibles")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, (currentPet.exams || []).filter(function (exam) {
      if (examSearchTerm && !exam.type.toLowerCase().includes(examSearchTerm.toLowerCase())) return false;
      if (examFilterDay || examFilterMonth || examFilterYear) {
        var d = new Date(exam.date);
        if (examFilterDay && String(d.getDate()).padStart(2, '0') !== examFilterDay) return false;
        if (examFilterMonth && String(d.getMonth() + 1).padStart(2, '0') !== examFilterMonth) return false;
        if (examFilterYear && String(d.getFullYear()) !== examFilterYear) return false;
      }
      return true;
    }).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, currentPet);
        },
        className: "bg-white rounded-2xl p-3 shadow-sm cursor-pointer hover:shadow-md ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(exam.seen === false ? 'bg-red-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf ".concat(exam.seen === false ? 'text-red-600' : 'text-purple-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800 text-sm"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, new Date(exam.date).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold"
      }, "NUEVO"), /*#__PURE__*/React.createElement("div", {
        className: "w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-purple-600 text-sm"
      }))));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex flex-col",
      style: {
        height: 'calc(100vh - 70px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 border-b border-gray-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelectedPet(null);
      },
      className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-4xl"
    }, currentPet.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, currentPet.name), /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium"
    }, (currentPet.exams || []).length, " ex\xE1menes")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-dog text-cyan-500 mr-1"
    }), currentPet.breed), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-birthday-cake text-cyan-500 mr-1"
    }), formatAge(currentPet)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-venus-mars text-cyan-500 mr-1"
    }), currentPet.sex))))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: examSearchTerm,
      onChange: function onChange(e) {
        return setExamSearchTerm(e.target.value);
      },
      placeholder: "Buscar examen...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-purple-500 focus:outline-none bg-white text-sm"
    }), examSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExamSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterDay,
      onChange: function onChange(e) {
        return setExamFilterDay(e.target.value);
      },
      className: "h-10 w-20 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterMonth,
      onChange: function onChange(e) {
        return setExamFilterMonth(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: examFilterYear,
      onChange: function onChange(e) {
        return setExamFilterYear(e.target.value);
      },
      className: "h-10 w-24 pl-3 pr-7 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), (examFilterDay || examFilterMonth || examFilterYear) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setExamFilterDay('');
        setExamFilterMonth('');
        setExamFilterYear('');
      },
      className: "h-10 px-3 rounded-full bg-red-100 text-red-600 text-xs hover:bg-red-200"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times mr-1"
    }), "Limpiar")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto p-6"
    }, (currentPet.exams || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl p-8 text-center shadow"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-folder-open text-4xl text-gray-300 mb-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500"
    }, "No hay resultados disponibles")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 pb-6"
    }, (currentPet.exams || []).filter(function (exam) {
      if (examSearchTerm && !exam.type.toLowerCase().includes(examSearchTerm.toLowerCase())) return false;
      if (examFilterDay || examFilterMonth || examFilterYear) {
        var d = new Date(exam.date);
        if (examFilterDay && String(d.getDate()).padStart(2, '0') !== examFilterDay) return false;
        if (examFilterMonth && String(d.getMonth() + 1).padStart(2, '0') !== examFilterMonth) return false;
        if (examFilterYear && String(d.getFullYear()) !== examFilterYear) return false;
      }
      return true;
    }).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).map(function (exam) {
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return markExamAsSeen(exam, currentPet);
        },
        className: "bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition-all ".concat(exam.seen === false ? 'border-l-4 border-red-500' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center ".concat(exam.seen === false ? 'bg-red-100' : 'bg-purple-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-pdf text-xl ".concat(exam.seen === false ? 'text-red-600' : 'text-purple-600')
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, exam.type), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-calendar mr-1"
      }), new Date(exam.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), exam.seen === false && /*#__PURE__*/React.createElement("span", {
        className: "bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold"
      }, "NUEVO"), /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-eye text-purple-600"
      }))));
    })))));
  }(), !viewingOrderTracking && !selectedPet && currentExamForPet && function () {
    var userAddresses = database.addresses || [];
    var backHandler = function backHandler() {
      if (showTomaMuestraStep) {
        setShowTomaMuestraStep(false);
        setPendingOrderAddress(null);
      } else if (showAddressSelection && !showNewAddressForm) {
        setShowAddressSelection(false);
        setSelectedPetForOrder(null);
      } else if (showNewAddressForm) {
        setShowNewAddressForm(false);
      } else if (showNewPetForm) {
        setShowNewPetForm(false);
      } else {
        setCurrentExamForPet(null);
        removeFromPending(currentExamForPet.id);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "dueno-normal-content"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: backHandler,
      className: "flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Volver")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-4 mb-4 flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 ".concat(currentExamForPet.bg, " rounded-xl flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(currentExamForPet.icon, " ").concat(currentExamForPet.color, " text-xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800"
    }, currentExamForPet.name), currentExamForPet.subtitle && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, currentExamForPet.subtitle), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-cyan-600 mt-1"
    }, showAddressSelection ? "".concat(selectedPetForOrder === null || selectedPetForOrder === void 0 ? void 0 : selectedPetForOrder.name, " - Selecciona direcci\xF3n") : "Selecciona ".concat(entityName)))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, [{
      n: 1,
      l: 'Mascota',
      done: showAddressSelection
    }, {
      n: 2,
      l: 'Dirección',
      done: false
    }].map(function (s, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, i > 0 && /*#__PURE__*/React.createElement("div", {
        className: "flex-1 h-0.5 ".concat(s.done || showAddressSelection ? 'bg-cyan-500' : 'bg-gray-200')
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ".concat(i === 0 && !showAddressSelection || i === 1 && showAddressSelection ? 'bg-cyan-500 text-white' : s.done ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-400')
      }, s.done ? '✓' : s.n), /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-medium ".concat(i === 0 && !showAddressSelection || i === 1 && showAddressSelection ? 'text-cyan-600' : 'text-gray-400')
      }, s.l)));
    })), !showAddressSelection ? /*#__PURE__*/React.createElement(React.Fragment, null, !showNewPetForm ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, petsOrPatients.map(function (pet) {
      return /*#__PURE__*/React.createElement("div", {
        key: pet.id,
        onClick: function onClick() {
          return assignPetToExam(pet);
        },
        className: "bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg hover:border-cyan-500 border-2 border-transparent transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-4xl"
      }, pet === null || pet === void 0 ? void 0 : pet.photo), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "font-bold text-gray-800"
      }, getPetFullName(pet)), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500 text-sm"
      }, pet.breed, " \u2022 ", formatAge(pet), " \u2022 ", pet.sex)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400"
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
        left: 0,
        right: 0,
        padding: '12px 16px',
        background: 'white',
        borderTop: '1px solid #e5e7eb',
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(true);
      },
      className: "w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva mascota"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus-circle mr-2 text-cyan-500"
    }), "Nueva Mascota"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.name,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          name: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Nombre del animal"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Especie"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.animalType,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          animalType: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "perro"
    }, "\uD83D\uDC15 Perro"), /*#__PURE__*/React.createElement("option", {
      value: "gato"
    }, "\uD83D\uDC08 Gato"), /*#__PURE__*/React.createElement("option", {
      value: "ave"
    }, "\uD83E\uDD9C Ave"), /*#__PURE__*/React.createElement("option", {
      value: "conejo"
    }, "\uD83D\uDC30 Conejo"), /*#__PURE__*/React.createElement("option", {
      value: "otro"
    }, "\uD83D\uDC3E Otro")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Raza"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.breed,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          breed: e.target.value
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Labrador, Persa..."
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Edad"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newPet.ageValue,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageValue: e.target.value.replace(/[^0-9]/g, "")
        }));
      },
      className: "w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: 3"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Unidad"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.ageUnit,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          ageUnit: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "a\xF1os"
    }, "A\xF1os"), /*#__PURE__*/React.createElement("option", {
      value: "meses"
    }, "Meses")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Sexo"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: newPet.sex,
      onChange: function onChange(e) {
        return setNewPet(_objectSpread(_objectSpread({}, newPet), {}, {
          sex: e.target.value
        }));
      },
      className: "w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccionar"), /*#__PURE__*/React.createElement("option", {
      value: "Macho"
    }, "Macho"), /*#__PURE__*/React.createElement("option", {
      value: "Hembra"
    }, "Hembra")), /*#__PURE__*/React.createElement("div", {
      className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down text-xs"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewPetForm(false);
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: addNewPet,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check mr-2"
    }), "Guardar"))))) : /*#__PURE__*/React.createElement(React.Fragment, null, showTomaMuestraStep && pendingOrderAddress ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt text-emerald-600"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-emerald-800"
    }, pendingOrderAddress.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600"
    }, pendingOrderAddress.address, ", ", pendingOrderAddress.district)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check-circle text-emerald-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-gray-800 mb-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-cyan-500 mr-2"
    }), "\xBFNecesitas toma de muestra a domicilio?"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-4"
    }, "Un profesional ir\xE1 a tu domicilio a tomar la muestra de sangre de tu mascota."), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return completeTomaMuestraStep(false);
      },
      className: "py-3.5 px-4 rounded-xl border-2 border-transparent bg-white shadow hover:shadow-lg hover:border-cyan-400 text-gray-700 font-medium transition-all flex items-center gap-3 cursor-pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-box text-gray-500"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-left flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-sm"
    }, "No, ya tengo la muestra"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Solo necesito que la recojan"))), function () {
      var tmPrice = getTomaMuestraPrice(pendingOrderAddress.district, examTotal + ((currentExamForPet === null || currentExamForPet === void 0 ? void 0 : currentExamForPet.price) || 0));
      return /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return completeTomaMuestraStep(true);
        },
        className: "py-3.5 px-4 rounded-xl border-2 border-transparent bg-white shadow hover:shadow-lg hover:border-cyan-400 text-gray-700 font-medium transition-all flex items-center gap-3 cursor-pointer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-syringe text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "text-left flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-sm"
      }, "S\xED, necesito toma de muestra"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400"
      }, tmPrice !== null ? "+S/ ".concat(tmPrice, " por el servicio a domicilio") : 'Consultar precio para tu distrito')));
    }()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowTermsModal(true);
      },
      className: "w-full mt-3 py-2.5 bg-amber-50 border border-amber-300 rounded-xl text-amber-700 text-xs font-bold hover:bg-amber-100 flex items-center justify-center gap-1.5 transition-colors"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-triangle"
    }), " Leer T\xE9rminos y Condiciones de toma de muestra"))) : !showNewAddressForm ? /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600 mb-2"
    }, "Selecciona d\xF3nde recogeremos la muestra:"), (database.addresses || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "p-6 text-center text-gray-400 text-sm"
    }, "No tienes direcciones guardadas") : (database.addresses || []).map(function (addr) {
      return /*#__PURE__*/React.createElement("div", {
        key: addr.id,
        onClick: function onClick() {
          return handleDuenoAddressSelect(addr);
        },
        className: "bg-white rounded-xl p-4 shadow cursor-pointer hover:shadow-lg hover:border-cyan-500 border-2 border-transparent transition-all"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-map-marker-alt text-cyan-600"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, addr.name), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500"
      }, addr.street, " \u2022 ", addr.district)), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-300"
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 'calc(64px + env(safe-area-inset-bottom,0px))',
        left: 0,
        right: 0,
        padding: '12px 16px',
        background: 'white',
        borderTop: '1px solid #e5e7eb',
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowNewAddressForm(true);
      },
      className: "w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-plus mr-2"
    }), "Agregar nueva direcci\xF3n"))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl shadow p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800 mb-4"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mr-2 text-cyan-500"
    }), "Nueva Direcci\xF3n"), /*#__PURE__*/React.createElement("button", {
      onClick: getMyLocation,
      disabled: gettingLocation,
      className: "w-full mb-4 py-3 rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2"
    }, gettingLocation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-spinner fa-spin"
    }), "Obteniendo ubicaci\xF3n...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-crosshairs"
    }), "Utilizar mi ubicaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Nombre de la direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.name,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          name: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Casa, Oficina"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Direcci\xF3n *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.address,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          address: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Av. / Calle / Jr. y n\xFAmero"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Distrito *"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.district,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          district: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: San Isidro"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium text-gray-700 mb-1"
    }, "Referencia (opcional)"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAddress.reference,
      onChange: function onChange(e) {
        return setNewAddress(_objectSpread(_objectSpread({}, newAddress), {}, {
          reference: e.target.value
        }));
      },
      className: "w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none",
      placeholder: "Ej: Frente al parque"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 pt-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setShowNewAddressForm(false);
        setNewAddress({
          name: '',
          address: '',
          district: '',
          reference: ''
        });
      },
      className: "flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: addNewAddress,
      className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
    }, "Guardar y usar"))))));
  }(), selectedPaqueteDetail && !viewingOrderTracking && !selectedExam && !viewingInvoice && !currentExamForPet && !facturacionInvoice && !(selectedPet && activeTab === 'resultados') && /*#__PURE__*/React.createElement("div", {
    className: "dueno-normal-content pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectedPaqueteDetail.bg, " rounded-2xl p-5 mb-4 mt-2 relative")
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelectedPaqueteDetail(null);
    },
    className: "absolute top-3 right-3 w-8 h-8 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center text-gray-700 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 pr-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-white/40 rounded-2xl flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(selectedPaqueteDetail.icon, " ").concat(selectedPaqueteDetail.color, " text-2xl")
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-gray-800"
  }, selectedPaqueteDetail.name), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-1 flex-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 text-xs flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clock"
  }), " Resultados en ", selectedPaqueteDetail.tiempo), selectedPaqueteDetail.price && /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-700 font-bold text-sm"
  }, "S/ ", selectedPaqueteDetail.price))))), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm mb-5 px-1"
  }, selectedPaqueteDetail.description), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm p-4 mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-list-check text-cyan-500"
  }), " Incluye"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2"
  }, selectedPaqueteDetail.incluye.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx,
      className: "text-gray-600 text-sm flex items-start gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check text-emerald-500 mt-0.5 flex-shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, item));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm p-4 mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-gray-800 text-sm mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-microscope text-purple-500"
  }), " \xBFQu\xE9 eval\xFAa?"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, selectedPaqueteDetail.evalua.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "border-l-4 border-purple-200 pl-4 py-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 font-medium text-sm"
    }, item.nombre), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs"
    }, item.desc));
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      handleExamClick(selectedPaqueteDetail);
      setSelectedPaqueteDetail(null);
    },
    className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus-circle"
  }), " Agregar al pedido")), !viewingOrderTracking && !selectedExam && !viewingInvoice && !(selectedPet && activeTab === 'resultados') && !currentExamForPet && !facturacionInvoice && !selectedPaqueteDetail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dueno-normal-content h-full flex flex-col",
    style: {
      padding: 0,
      maxWidth: 'none'
    }
  }, activeTab === 'pedidos' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: '100%',
      marginLeft: '-24px',
      marginRight: '-24px',
      marginTop: '-20px',
      background: '#f3f4f6',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden",
    style: {
      position: 'fixed',
      top: 'calc(56px + env(safe-area-inset-top, 0px))',
      left: 0,
      right: 0,
      zIndex: 500,
      background: '#ffffff',
      boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
      borderBottomLeftRadius: pedidosSearchOpen ? '14px' : '0',
      borderBottomRightRadius: pedidosSearchOpen ? '14px' : '0',
      transition: 'border-radius 0.2s ease-out',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list text-white text-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-white font-semibold text-sm"
  }, "Pedidos"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPedidosSearchOpen(!pedidosSearchOpen);
      if (pedidosSearchOpen) setPedidosSearchTerm('');
    },
    className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(pedidosSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dueno-search-slide ".concat(pedidosSearchOpen ? 'open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: pedidosSearchTerm,
    onChange: function onChange(e) {
      return setPedidosSearchTerm(e.target.value);
    },
    placeholder: "Buscar examen o servicio...",
    className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-cyan-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
  }), pedidosSearchTerm && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPedidosSearchTerm('');
    },
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times text-sm"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4",
    style: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list text-cyan-500 text-lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-cyan-600 font-semibold"
  }, "Pedidos")), /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1",
    style: {
      maxWidth: "600px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: pedidosSearchTerm,
    onChange: function onChange(e) {
      return setPedidosSearchTerm(e.target.value);
    },
    placeholder: "Buscar examen o servicio...",
    className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-cyan-500 focus:outline-none bg-white text-sm"
  }), pedidosSearchTerm && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPedidosSearchTerm('');
    },
    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '20px 10% 24px 10%',
      background: '#f9fafb',
      height: '0',
      position: 'relative',
      minHeight: pedidosSearchOpen ? '60vh' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden",
    style: {
      height: pedidosSearchOpen ? '100px' : '56px',
      transition: 'height 0.2s ease-out'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800 mb-1"
  }, "\xBFQu\xE9 necesita tu mascota?"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, "Selecciona el servicio que mejor se adapte a tu situaci\xF3n")), (cart.length > 0 || pendingExams.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4 text-xs text-gray-500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-3 h-3 bg-emerald-500 rounded-full"
  }), " Seleccionado"), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "\u2022 Toca para deseleccionar")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, paquetesFiltrados.map(function (paquete) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === paquete.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === paquete.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: paquete.id,
      onClick: function onClick() {
        return handleExamClick(paquete);
      },
      className: "bg-white rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all shadow border-2 relative ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300')
    }, paquete.recomendado && /*#__PURE__*/React.createElement("span", {
      className: "absolute -top-2 right-3 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-medium"
    }, "\u2B50 Popular"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-14 ".concat(paquete.bg, " rounded-2xl flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(paquete.icon, " ").concat(paquete.color, " text-2xl")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-gray-800 font-bold text-base mb-1"
    }, paquete.name), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs leading-snug mb-1"
    }, paquete.description), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400 flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clock"
    }), " ", paquete.tiempo), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        var _document$querySelect;
        e.stopPropagation();
        setSelectedPaqueteDetail(paquete);
        (_document$querySelect = document.querySelector('.app-content-dueno')) === null || _document$querySelect === void 0 || _document$querySelect.scrollTo(0, 0);
      },
      className: "text-xs text-cyan-600 font-medium flex items-center gap-1 hover:text-cyan-700"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-info-circle"
    }), " Ver m\xE1s"))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-end gap-2 flex-shrink-0"
    }, paquete.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-base whitespace-nowrap"
    }, "S/ ", paquete.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
      className: "w-7 h-7 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-sm")
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowTechnicalExams(!showTechnicalExams);
    },
    className: "w-full flex items-center justify-between py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 bg-gray-200 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-flask-vial text-gray-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-700 text-sm"
  }, "Ex\xE1menes Espec\xEDficos"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Perfiles y ex\xE1menes individuales detallados"))), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-".concat(showTechnicalExams ? 'up' : 'down', " text-gray-400 transition-transform")
  })), showTechnicalExams && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-boxes-stacked text-blue-500"
  }), " Perfiles (Paquetes)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
  }, perfilesDuenos.map(function (exam) {
    var isInCart = cart.find(function (c) {
      return c.exam.id === exam.id;
    });
    var isPending = pendingExams.find(function (e) {
      return e.id === exam.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: exam.id,
      onClick: function onClick() {
        return handleExamClick(exam);
      },
      className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-lg")
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800 font-semibold text-sm leading-tight"
    }, exam.name), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-xs truncate"
    }, exam.subtitle)), exam.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-sm flex-shrink-0"
    }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
      className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
    })));
  }))), categoriasDuenos.map(function (cat) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.nombre
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(cat.icon, " ").concat(cat.color)
    }), " ", cat.nombre), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
    }, cat.examenes.map(function (exam) {
      var isInCart = cart.find(function (c) {
        return c.exam.id === exam.id;
      });
      var isPending = pendingExams.find(function (e) {
        return e.id === exam.id;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: exam.id,
        onClick: function onClick() {
          return handleExamClick(exam);
        },
        className: "bg-white rounded-2xl p-3 cursor-pointer hover:shadow-lg transition-all shadow border-2 ".concat(isInCart ? 'border-emerald-500 bg-emerald-50' : isPending ? 'border-amber-400 bg-amber-50' : 'border-transparent hover:border-cyan-300', " flex items-center gap-3")
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-10 h-10 ".concat(exam === null || exam === void 0 ? void 0 : exam.bg, " rounded-xl flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(exam.icon, " ").concat(exam.color, " text-base")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 font-medium text-sm leading-tight"
      }, exam.name), exam.subtitle && /*#__PURE__*/React.createElement("p", {
        className: "text-gray-400 text-xs"
      }, exam.subtitle, exam.turnaround ? " \xB7 ".concat(exam.turnaround) : "")), exam.price && /*#__PURE__*/React.createElement("span", {
        className: "text-cyan-600 font-bold text-sm flex-shrink-0"
      }, "S/ ", exam.price), (isInCart || isPending) && /*#__PURE__*/React.createElement("div", {
        className: "w-6 h-6 ".concat(isInCart ? 'bg-emerald-500' : 'bg-amber-400', " rounded-full flex items-center justify-center flex-shrink-0")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(isInCart ? 'fa-check' : 'fa-clock', " text-white text-xs")
      })));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden mt-6 p-4 bg-cyan-50 rounded-2xl border border-cyan-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-cyan-800 text-sm mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-question-circle mr-2"
  }), /*#__PURE__*/React.createElement("strong", null, "\xBFNo sabes cu\xE1l elegir?")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/51954904248?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20examen%20para%20mi%20mascota",
    target: "_blank",
    className: "w-full bg-white hover:bg-gray-50 border-2 border-emerald-500 text-emerald-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-whatsapp text-xl"
  }), " Dale aqu\xED para que un asesor te contacte")), (cart || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex fixed bottom-5 right-4 bg-slate-800 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
  }, cart.length), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-sm"
  }, "Pedido listo"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 truncate max-w-[100px]"
  }, cart.map(function (c) {
    return getPetFullName(c.pet);
  }).join(', '))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowOrderSummary(true);
    },
    className: "bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap flex-shrink-0 ml-2"
  }, "Solicitar")))), showOrderSummary && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay flex items-center justify-center p-4",
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) setShowOrderSummary(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col",
    style: {
      maxHeight: '88vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list text-cyan-500 mr-2"
  }), "Resumen del Pedido"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowOrderSummary(false);
    },
    className: "w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col lg:flex-row min-h-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 p-6 lg:border-r overflow-y-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-vials text-cyan-500 mr-2"
  }), "Ex\xE1menes (", cart.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, cart.map(function (item) {
    var _item$exam25, _item$exam26, _item$exam27, _item$exam28, _item$exam29, _item$pet17, _item$pet18, _item$address4, _item$address5, _item$address6;
    return /*#__PURE__*/React.createElement("div", {
      key: item.exam.id,
      className: "bg-gray-50 rounded-xl p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between mb-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 ".concat((item === null || item === void 0 || (_item$exam25 = item.exam) === null || _item$exam25 === void 0 ? void 0 : _item$exam25.bg) || 'bg-cyan-100', " rounded-lg flex items-center justify-center flex-shrink-0")
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat((item === null || item === void 0 || (_item$exam26 = item.exam) === null || _item$exam26 === void 0 ? void 0 : _item$exam26.icon) || 'fa-vial', " ").concat((item === null || item === void 0 || (_item$exam27 = item.exam) === null || _item$exam27 === void 0 ? void 0 : _item$exam27.color) || 'text-cyan-600')
    })), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-gray-800 text-sm"
    }, (item === null || item === void 0 || (_item$exam28 = item.exam) === null || _item$exam28 === void 0 ? void 0 : _item$exam28.name) || (item === null || item === void 0 ? void 0 : item.examName) || 'Examen'), (item === null || item === void 0 || (_item$exam29 = item.exam) === null || _item$exam29 === void 0 ? void 0 : _item$exam29.subtitle) && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 truncate"
    }, item.exam.subtitle))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 flex-shrink-0 ml-3"
    }, item.exam.price && /*#__PURE__*/React.createElement("span", {
      className: "text-cyan-600 font-bold text-sm whitespace-nowrap"
    }, "S/ ", item.exam.price), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeFromCart(item.exam.id);
      },
      className: "text-red-400 hover:text-red-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-trash text-sm"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "border-t pt-2 mt-2 space-y-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, item === null || item === void 0 || (_item$pet17 = item.pet) === null || _item$pet17 === void 0 ? void 0 : _item$pet17.photo), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600"
    }, (item === null || item === void 0 || (_item$pet18 = item.pet) === null || _item$pet18 === void 0 ? void 0 : _item$pet18.name) || '')), /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-2 text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-map-marker-alt mt-0.5 text-cyan-500"
    }), /*#__PURE__*/React.createElement("span", null, (_item$address4 = item.address) === null || _item$address4 === void 0 ? void 0 : _item$address4.name, ": ", (_item$address5 = item.address) === null || _item$address5 === void 0 ? void 0 : _item$address5.address, ", ", safeText(item === null || item === void 0 || (_item$address6 = item.address) === null || _item$address6 === void 0 ? void 0 : _item$address6.district))), item.tomaMuestra && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 text-xs"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-syringe text-emerald-500"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-medium"
    }, "Toma de muestra a domicilio ", function (_item$address7) {
      var p = getTomaMuestraPrice((_item$address7 = item.address) === null || _item$address7 === void 0 ? void 0 : _item$address7.district, examTotal);
      return p !== null ? "(+S/ ".concat(p, ")") : '';
    }()))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 flex flex-col",
    style: {
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-cog text-gray-400 mr-2"
  }), "Detalles"), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-700 mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar text-amber-600 mr-2"
  }), "Tipo de comprobante"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvoiceType('boleta');
    },
    className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'boleta' ? 'bg-cyan-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-cyan-300')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-receipt mr-1.5"
  }), "Boleta"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setInvoiceType('factura');
    },
    className: "py-2.5 px-3 rounded-xl text-sm font-medium transition-all ".concat(invoiceType === 'factura' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice mr-1.5"
  }), "Factura"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-4 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-gray-700 mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-comment-alt text-cyan-500 mr-2"
  }), "Comentarios"), /*#__PURE__*/React.createElement("textarea", {
    value: orderComment,
    onChange: function onChange(e) {
      return setOrderComment(e.target.value);
    },
    placeholder: "Ej: Recoger muestra despu\xE9s de las 10am, tocar timbre 2 veces...",
    className: "w-full px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-sm resize-none",
    rows: "3",
    maxLength: "500"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1 text-right"
  }, orderComment.length, "/500")), renderTermsCheckbox()), /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 px-6 py-4 border-t bg-white"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: submitOrder,
    disabled: !termsAccepted,
    className: "w-full py-3.5 rounded-xl font-semibold transition-all ".concat(termsAccepted ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paper-plane mr-2"
  }), "Solicitar Pedido"))))))), activeTab === 'resultados' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 10%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden",
    style: {
      position: 'fixed',
      top: 'calc(56px + env(safe-area-inset-top, 0px))',
      left: 0,
      right: 0,
      zIndex: 500,
      background: '#ffffff',
      boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-medical text-white text-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-white font-semibold text-sm"
  }, "Resultados"), /*#__PURE__*/React.createElement("span", {
    className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
  }, (database.pets || []).length), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto w-7 h-7"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4 mb-4",
    style: {
      marginLeft: '-14%',
      marginRight: '-14%',
      paddingLeft: '32px',
      paddingRight: '32px',
      marginTop: '-5px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-medical text-purple-500 text-lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-purple-600 font-semibold"
  }, "Resultados"), /*#__PURE__*/React.createElement("span", {
    className: "bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full"
  }, (database.pets || []).reduce(function (sum, p) {
    var _p$exams;
    return sum + (((_p$exams = p.exams) === null || _p$exams === void 0 ? void 0 : _p$exams.length) || 0);
  }, 0))), /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: resSearchTerm,
    onChange: function onChange(e) {
      return setResSearchTerm(e.target.value);
    },
    placeholder: "Buscar mascota...",
    className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-purple-500 focus:outline-none bg-white text-sm"
  }), resSearchTerm && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setResSearchTerm('');
    },
    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: resFilterDay,
    onChange: function onChange(e) {
      return setResFilterDay(e.target.value);
    },
    className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i + 1,
      value: String(i + 1).padStart(2, '0')
    }, i + 1);
  })), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: resFilterMonth,
    onChange: function onChange(e) {
      return setResFilterMonth(e.target.value);
    },
    className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: String(i + 1).padStart(2, '0')
    }, m);
  })), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: resFilterYear,
    onChange: function onChange(e) {
      return setResFilterYear(e.target.value);
    },
    className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-purple-500 appearance-none cursor-pointer focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
    return /*#__PURE__*/React.createElement("option", {
      key: y,
      value: y
    }, y);
  })), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden",
    style: {
      height: '56px'
    }
  }), function () {
    var userOrders = (database.orders || []).filter(function (o) {
      return o.status !== 'completed' && o.status !== 9 && Number(o.status) !== 9;
    }).filter(function (o) {
      return !resSearchTerm || (o.items || []).some(function (i) {
        var _i$pet;
        return (i.examName || '').toLowerCase().includes(resSearchTerm.toLowerCase()) || (((_i$pet = i.pet) === null || _i$pet === void 0 ? void 0 : _i$pet.name) || '').toLowerCase().includes(resSearchTerm.toLowerCase());
      });
    });
    if ((userOrders || []).length > 0) {
      return /*#__PURE__*/React.createElement("div", {
        className: "mb-6"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-lg font-bold text-gray-800 mb-3 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-clock text-amber-500"
      }), "Pendientes"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
      }, (userOrders || []).map(function (order) {
        return /*#__PURE__*/React.createElement("div", {
          key: order.id,
          className: "bg-white rounded-2xl shadow p-4"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center justify-between mb-3"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-xs text-gray-500"
        }, new Date(order.createdAt || order.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short'
        })), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setViewingOrderTracking(order);
          },
          className: "bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-route"
        }), " Ver estado")), /*#__PURE__*/React.createElement("div", {
          className: "space-y-2"
        }, (order.items || []).map(function (item, idx) {
          var _item$exam30, _item$pet19;
          return /*#__PURE__*/React.createElement("div", {
            key: idx,
            className: "flex items-center gap-3 p-2 bg-gray-50 rounded-xl"
          }, /*#__PURE__*/React.createElement("div", {
            className: "w-9 h-9 bg-cyan-100 rounded-lg flex items-center justify-center"
          }, /*#__PURE__*/React.createElement("i", {
            className: "fas fa-vial text-cyan-600 text-sm"
          })), /*#__PURE__*/React.createElement("div", {
            className: "flex-1 min-w-0"
          }, /*#__PURE__*/React.createElement("p", {
            className: "text-gray-800 font-medium text-sm truncate"
          }, (item === null || item === void 0 ? void 0 : item.examName) || (item === null || item === void 0 || (_item$exam30 = item.exam) === null || _item$exam30 === void 0 ? void 0 : _item$exam30.name) || 'Examen'), /*#__PURE__*/React.createElement("p", {
            className: "text-gray-500 text-xs"
          }, (item === null || item === void 0 || (_item$pet19 = item.pet) === null || _item$pet19 === void 0 ? void 0 : _item$pet19.name) || (item === null || item === void 0 ? void 0 : item.petName) || '')));
        })), order.status === 'moto_arrived' && /*#__PURE__*/React.createElement("div", {
          className: "mt-3 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-map-marker-alt text-red-600"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-sm"
        }, "\uD83D\uDCCD \xA1El motorizado lleg\xF3!"), /*#__PURE__*/React.createElement("p", {
          className: "text-red-600 text-xs"
        }, "Por favor entrega la muestra"))), order.status === 'results_uploaded' && /*#__PURE__*/React.createElement("div", {
          className: "mt-3 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3 animate-pulse"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fas fa-file-medical text-red-600"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: "text-red-800 font-medium text-sm"
        }, "\uD83D\uDCB3 \xA1Resultados listos!"), /*#__PURE__*/React.createElement("p", {
          className: "text-red-600 text-xs"
        }, "Realiza el pago para recibirlos"))));
      })));
    }
    return null;
  }(), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-gray-800 mb-4"
  }, "Selecciona tu mascota"), (database.pets || []).filter(function (p) {
    return !resSearchTerm || (p.name || '').toLowerCase().includes(resSearchTerm.toLowerCase());
  }).length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-10 text-center shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paw text-4xl text-gray-300 mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "No tienes mascotas registradas")) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, (database.pets || []).filter(function (p) {
    return !resSearchTerm || (p.name || '').toLowerCase().includes(resSearchTerm.toLowerCase());
  }).map(function (pet) {
    return /*#__PURE__*/React.createElement("div", {
      key: pet.id,
      onClick: function onClick() {
        return setSelectedPet(pet);
      },
      className: "bg-white rounded-2xl p-5 shadow cursor-pointer hover:shadow-lg hover:border-purple-400 border-2 border-transparent transition-all"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-4xl"
    }, pet.photo), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-gray-800"
    }, pet.name), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, pet.breed)), /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
    }, (pet.exams || []).length)));
  }))), medicoView === 'facturacion' && function () {
    var userInvoices = (database.orders || []).filter(function (o) {
      return o.userId === freshUser.id && o.invoicePdf && !o.resultPdf;
    });
    var facInvoice = medicoFacInvoice;
    var setFacInvoice = setMedicoFacInvoice;
    if (facInvoice) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col",
        style: {
          height: 'calc(100vh - 70px)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setFacInvoice(null);
        },
        className: "w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 px-2"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(facInvoice.documentType === 'boleta' ? 'fa-receipt text-cyan-500' : 'fa-file-invoice-dollar text-amber-500', " text-lg")
      }), /*#__PURE__*/React.createElement("span", {
        className: "font-semibold ".concat(facInvoice.documentType === 'boleta' ? 'text-cyan-600' : 'text-amber-600')
      }, facInvoice.documentType === 'boleta' ? 'Boleta' : 'Factura')), /*#__PURE__*/React.createElement("span", {
        className: "text-gray-500 text-sm"
      }, new Date(facInvoice.createdAt || facInvoice.date).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })))), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 overflow-hidden p-6 flex flex-col min-h-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "max-w-4xl mx-auto w-full h-full flex flex-col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-2xl shadow-lg p-5 flex-1 flex flex-col min-h-0"
      }, facInvoice.invoicePdf ? /*#__PURE__*/React.createElement("div", {
        className: "flex-1 flex flex-col min-h-0"
      }, /*#__PURE__*/React.createElement(PdfViewer, {
        url: facInvoice.invoicePdf,
        className: "flex-1 w-full rounded-xl border border-gray-200 min-h-0",
        style: {
          minHeight: '400px'
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 flex justify-center flex-shrink-0"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          var a = document.createElement('a');
          a.href = facInvoice.invoicePdf;
          a.download = "comprobante-".concat(facInvoice.id, ".pdf");
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
        className: "flex items-center gap-2 px-6 py-2.5 ".concat(facInvoice.documentType === 'boleta' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-amber-500 to-orange-600', " text-white rounded-xl font-semibold transition-colors shadow-lg text-sm")
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-download"
      }), " Descargar PDF"))) : /*#__PURE__*/React.createElement("div", {
        className: "flex-1 bg-gray-100 rounded-xl flex flex-col items-center justify-center"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-file-invoice text-4xl text-gray-400 mb-3"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-500"
      }, "Comprobante no disponible"))))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "pt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-gray-800"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 text-sm"
    }, "Tus boletas y facturas"))), !(facDuenoSearchOpen && !facDuenoSearchTerm && !facDuenoFilterDay && !facDuenoFilterMonth && !facDuenoFilterYear) && (userInvoices || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-12 text-center shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice text-5xl text-gray-300 mb-4 block"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 font-medium"
    }, "No tienes comprobantes a\xFAn"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Tus boletas y facturas aparecer\xE1n aqu\xED")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
    }, (userInvoices || []).map(function (inv) {
      var _inv$items;
      return /*#__PURE__*/React.createElement("div", {
        key: inv.id,
        onClick: function onClick() {
          return setFacInvoice(inv);
        },
        className: "bg-white rounded-2xl p-5 shadow-sm hover:shadow-md cursor-pointer transition-all border border-transparent hover:border-amber-200"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(inv.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(inv.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice-dollar text-amber-600', " text-xl")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, inv.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, (_inv$items = inv.items) === null || _inv$items === void 0 ? void 0 : _inv$items.map(function (it) {
        var _it$pet;
        return (_it$pet = it.pet) === null || _it$pet === void 0 ? void 0 : _it$pet.name;
      }).filter(Boolean).join(', ')), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-1"
      }, new Date(inv.createdAt || inv.date).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs px-2 py-1 rounded-full font-medium ".concat(inv.documentType === 'boleta' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700')
      }, inv.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400 text-sm"
      }))));
    })));
  }()), activeTab === 'facturacion' && !facturacionInvoice && function () {
    var userInvoices = facturas;
    return /*#__PURE__*/React.createElement("div", {
      className: "dueno-normal-content pb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden",
      style: {
        position: 'fixed',
        top: 'calc(56px + env(safe-area-inset-top, 0px))',
        left: 0,
        right: 0,
        zIndex: 500,
        background: '#ffffff',
        boxShadow: '0 4px 14px -2px rgba(0,0,0,0.1)',
        borderBottomLeftRadius: facDuenoSearchOpen ? '14px' : '0',
        borderBottomRightRadius: facDuenoSearchOpen ? '14px' : '0',
        transition: 'border-radius 0.2s ease-out',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl px-3 py-1.5 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-white text-sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white font-semibold text-sm"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
    }, (facturas || []).length), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setFacDuenoSearchOpen(!facDuenoSearchOpen);
        if (facDuenoSearchOpen) {
          setFacDuenoSearchTerm('');
          setFacDuenoFilterDay('');
          setFacDuenoFilterMonth('');
          setFacDuenoFilterYear('');
        }
      },
      className: "ml-auto w-7 h-7 rounded-full flex items-center justify-center bg-white/20 active:bg-white/30"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(facDuenoSearchOpen ? 'fa-times' : 'fa-search', " text-white text-xs")
    })))), /*#__PURE__*/React.createElement("div", {
      className: "dueno-search-slide-filters ".concat(facDuenoSearchOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative mb-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facDuenoSearchTerm,
      onChange: function onChange(e) {
        return setFacDuenoSearchTerm(e.target.value);
      },
      placeholder: "Buscar comprobante...",
      className: "w-full h-9 pl-9 pr-8 border border-gray-200 focus:border-amber-500 focus:outline-none bg-gray-50 text-xs dueno-search-pill"
    }), facDuenoSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacDuenoSearchTerm('');
      },
      className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times text-sm"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterDay,
      onChange: function onChange(e) {
        return setFacDuenoFilterDay(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterMonth,
      onChange: function onChange(e) {
        return setFacDuenoFilterMonth(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterYear,
      onChange: function onChange(e) {
        return setFacDuenoFilterYear(e.target.value);
      },
      className: "flex-1 h-8 px-2 rounded-lg border border-gray-200 text-xs bg-gray-50 focus:border-amber-500 focus:outline-none appearance-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "lg:hidden",
      style: {
        height: facDuenoSearchOpen ? '120px' : '56px',
        transition: 'height 0.2s ease-out'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:block flex-shrink-0 bg-gray-100 shadow-md border-b border-gray-300 p-4 mb-6",
      style: {
        marginLeft: '-5rem',
        marginRight: '-5rem',
        marginTop: '-1.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 px-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice-dollar text-amber-500 text-lg"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-600 font-semibold"
    }, "Facturaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full"
    }, (facturas || []).length)), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: facDuenoSearchTerm,
      onChange: function onChange(e) {
        return setFacDuenoSearchTerm(e.target.value);
      },
      placeholder: "Buscar comprobante...",
      className: "w-full h-10 pl-11 pr-10 rounded-full border border-gray-300 focus:border-amber-500 focus:outline-none bg-white text-sm"
    }), facDuenoSearchTerm && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFacDuenoSearchTerm('');
      },
      className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, "Filtrar por:"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterDay,
      onChange: function onChange(e) {
        return setFacDuenoFilterDay(e.target.value);
      },
      className: "h-10 w-24 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "D\xEDa"), _toConsumableArray(Array(31)).map(function (_, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i + 1,
        value: String(i + 1).padStart(2, '0')
      }, i + 1);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterMonth,
      onChange: function onChange(e) {
        return setFacDuenoFilterMonth(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Mes"), ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: String(i + 1).padStart(2, '0')
      }, m);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("select", {
      value: facDuenoFilterYear,
      onChange: function onChange(e) {
        return setFacDuenoFilterYear(e.target.value);
      },
      className: "h-10 w-28 pl-4 pr-8 rounded-full bg-white border border-gray-300 text-sm focus:border-amber-500 appearance-none cursor-pointer focus:outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "A\xF1o"), ['2026', '2025', '2024', '2023'].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    })), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
    }))))), (userInvoices || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl p-12 text-center shadow-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-invoice text-5xl text-gray-300 mb-4 block"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 font-medium"
    }, "No tienes comprobantes a\xFAn"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 text-sm mt-1"
    }, "Tus boletas y facturas aparecer\xE1n aqu\xED")) : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
    }, !(facDuenoSearchOpen && !facDuenoSearchTerm && !facDuenoFilterDay && !facDuenoFilterMonth && !facDuenoFilterYear) && (userInvoices || []).filter(function (inv) {
      if (facDuenoSearchTerm) {
        var dateStr = new Date(inv.fecha || inv.createdAt || inv.date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).toLowerCase();
        var typeStr = (inv.documentType || '').toLowerCase();
        if (!dateStr.includes(facDuenoSearchTerm.toLowerCase()) && !typeStr.includes(facDuenoSearchTerm.toLowerCase())) return false;
      }
      var d = new Date(inv.fecha || inv.createdAt || inv.date);
      if (facDuenoFilterDay && String(d.getDate()).padStart(2, '0') !== facDuenoFilterDay) return false;
      if (facDuenoFilterMonth && String(d.getMonth() + 1).padStart(2, '0') !== facDuenoFilterMonth) return false;
      if (facDuenoFilterYear && String(d.getFullYear()) !== facDuenoFilterYear) return false;
      return true;
    }).map(function (inv) {
      var _inv$items2;
      return /*#__PURE__*/React.createElement("div", {
        key: inv.id,
        onClick: function onClick() {
          return setFacturacionInvoice(inv);
        },
        className: "bg-white rounded-2xl p-5 shadow-sm hover:shadow-md cursor-pointer transition-all border border-transparent hover:border-amber-200"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ".concat(inv.documentType === 'boleta' ? 'bg-cyan-100' : 'bg-amber-100')
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas ".concat(inv.documentType === 'boleta' ? 'fa-receipt text-cyan-600' : 'fa-file-invoice-dollar text-amber-600', " text-xl")
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-800"
      }, inv.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-500"
      }, (_inv$items2 = inv.items) === null || _inv$items2 === void 0 ? void 0 : _inv$items2.map(function (it) {
        var _it$pet2;
        return (_it$pet2 = it.pet) === null || _it$pet2 === void 0 ? void 0 : _it$pet2.name;
      }).filter(Boolean).join(', ')), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-400 mt-1"
      }, new Date(inv.fecha || inv.createdAt || inv.date).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 flex-shrink-0"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs px-2 py-1 rounded-full font-medium ".concat(inv.documentType === 'boleta' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700')
      }, inv.documentType === 'boleta' ? 'Boleta' : 'Factura'), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-right text-gray-400 text-sm"
      }))));
    })));
  }()))), /*#__PURE__*/React.createElement("div", {
    className: "mob-bottom-nav lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mob-bottom-nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mob-nav-btn ".concat(activeTab === 'pedidos' && duenoView !== 'config' ? 'active' : ''),
    onClick: function onClick() {
      resetDuenoState();
      setActiveTab('pedidos');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list"
  }), /*#__PURE__*/React.createElement("span", null, "Pedidos")), /*#__PURE__*/React.createElement("button", {
    className: "mob-nav-btn ".concat(activeTab === 'resultados' && duenoView !== 'config' ? 'active' : ''),
    onClick: function onClick() {
      resetDuenoState();
      setActiveTab('resultados');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-medical"
  }), /*#__PURE__*/React.createElement("span", null, "Resultados")), /*#__PURE__*/React.createElement("button", {
    className: "mob-nav-btn ".concat(activeTab === 'facturacion' && duenoView !== 'config' ? 'active' : ''),
    onClick: function onClick() {
      resetDuenoState();
      setActiveTab('facturacion');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), /*#__PURE__*/React.createElement("span", null, "Facturas"), countUnseenExams(petsOrPatients) + countPendingPayments() > 0 && /*#__PURE__*/React.createElement("span", {
    className: "mob-nav-badge"
  }, countUnseenExams(petsOrPatients) + countPendingPayments())))));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
