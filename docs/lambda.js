var Y = function(f){ return (function(x){ return f((x)(x)) })(function(x){ return f((x)(x)) }) };

var _0 = function(s,z){ return z };
var _1 = function(s,z){ return s(z) };
var _2 = function(s,z){ return s(s(z)) };
var _3 = function(s,z){ return s(s(s(z))) };

var t = function(x,y){ return x }; // true
var f = function(x,y){ return y }; // false
var if0 = function(n){ return n(function(x){ return f })(t) }; // if n equals to _0

var mul = function(m,n,s,z){ return n(m(s))(z) };
var pred = function(n,s,z){ return n(function(f,g){ return g(f(s)) })(function(x){ return z })(function(x){ return x }) };

var fact = function(r,n){ return if0(n)(_1)(mul(n)(r(pred(n)))) };
Y(fact)(_3)
