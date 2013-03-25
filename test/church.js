test( "Combinator API", function() {
  'SKIBCTFωΩY'
    .split('')
    .forEach(
      function(e, i, c) {
        ok(typeof church[e] === 'function', e + ' available' );
      });
});
