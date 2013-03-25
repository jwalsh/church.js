/* Currying multi-argument functions. */

function curry(f) {
  return function (x) function (y) f(x,y) ;
}


function uncurry(f) {
  return function (x,y) f(x)(y) ;
}


/* Void value. */

var VOID = function (x) x ;



/* Conditionals and Booleans. */

var TRUE = function (onTrue) 
            function (onFalse)
             onTrue(VOID) ;

var FALSE = function (onTrue) 
             function (onFalse)
              onFalse(VOID) ;

var IF = function (test)
          function (onTrue)
           function (onFalse)
            test (onTrue) (onFalse) ;

function boolify (churchBoolean) {
  return churchBoolean (function (_) true) (function (_) false) ;
}




/* Church numerals. */

// Convert a JavaScript number to a Church numeral:
function numeral(n) {
  return function (f) function (z) {
    var m = n;
    while (m > 0) {
      z = f(z) ;
      m-- ;
    }
    return z ;
  } ;
} ;

// Convert a Church numeral back to a JavaScript number:
function numerify (n) {
  return n (function (x) x+1) (0) ;
}



var ZERO = function (f) function (z) z ; 

// Add 1:
var SUCC = function (n) 
            function (f) 
             function (z) 
              f (n (f) (z)) ;

var ONE = SUCC (ZERO) ;

var PLUS = function (n)
            function (m)
             function (f) 
              function (z) 
               (n (f) (m (f) (z))) ;

var MULT = function (n) 
            function (m) 
             function (f) 
              function (z) 
               (n (m(f)) (z)) ;

// Substract 1:
var PRED = function (n) 
            function (f) 
             function (z)
              ((n (function (g) (function (h) h(g(f)))))
               (function (u) z))(function (u) u) ;

var SUB = function (n) 
           function (m) 
            (m (PRED)) (n) ;

// Test for 0:
var ZEROP = function (n) 
             n (function (_) FALSE) (TRUE);




/* Lists. */

// The empty list:
var NIL = function (onEmpty) 
           function (onPair)
            onEmpty(VOID) ;

// Construct a new list:
var CONS = function (hd) 
            function (tl)
             function (onEmpty) 
              function (onPair)
               onPair(hd)(tl) ;

// Get the head of a list:
var HEAD = function (list)
            list (VOID) (function (hd) function (tl) hd) ;

// Get the tail of a list:
var TAIL = function (list) 
            list (VOID) (function (hd) function (tl) tl) ;

// A predicate to test for the empty list:
var NILP = function (list) 
            list (function (_) TRUE) (function (_) function (_) FALSE);



/* U combinator. */

var U = function (f) f(f) ;


var ufact = U(function (h) function (n) (n <= 1) ? 1 : n*(h(h))(n-1)) ;



/* Y combinator. */


// Implicit:
function Y(F) { return F(Y(F)) ; }

// Explicit:
var Y = function (F) F(Y(F)) ;

// Eta-expanded:
var Y = function (F) F(function (x) Y(F)(x)) ;

// With the U-combinator:
var Y = U(function (f) function (F) F(function (x) f(f)(F)(x))) ;

// With the U combinator expanded:
var Y = (function (f) function (F) F(function (x) f(f)(F)(x))) (function (f) function (F) F(function (x) f(f)(F)(x)))   ;


var yfact = Y(function (f) function (n) (n <= 1) ? 1 : n*f(n-1)) ;



/* Pure factorial */

var CFACT = Y(function (fact) function (n) (IF (ZEROP (n)) (function (_) ONE) (function (_) MULT (n) (fact(PRED(n)))))) ;


