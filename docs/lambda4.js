// define
var zero = function(f){
             return function(x){
               return x}};
var succ = function(n){
             return function(f){
               return function(x){
                 return f(n(f)(x))}}};
var add = function(m){
             return function(n){
               return function(f){
                 return function(x){
                   return m(f)(n(f)(x))}}}};
var mul = function(m){
            return function(n){
              return function(f){
                return m(n(f))}}};
var pow = function(m){
            return function(n){
              return n(m)}};
// execute
function $(id){ return document.getElementById(id) };
var one     = succ(zero);
var two     = succ(one);
var four    = add(two)(two);
var eight   = mul(two)(four);
var sixteen = pow(two)(four);
var numbers = [one, two, four, eight, sixteen];
$('result').innerHTML = '';
for (var i = 0; i < numbers.length; i++){
  var n = numbers[i];
  $('result').innerHTML += numbers[i](function(n){return 1+n})(0);
  $('result').innerHTML += ' = ';
  $('result').innerHTML += numbers[i](function(n){return '(1+' + n + ')'})(0);
  $('result').innerHTML += '<br />';
}
