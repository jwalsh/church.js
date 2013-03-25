(function() {
  var 
  root = this,
  that;

  that = {

    // Combinators
    // | Name | Definition                 |       |
    // | S    | λx[λy[λz[xz(yz)]]]         | Notes |
    S:function() {},
    
    // | K    | λx[λy[x]]                  |       |
    K: function() {},
    
    // | I    | λx[x]                      |       |
    I: function() {},
    
    // | B    | λx[λy[λz[x(yz)]]]          |       |
    B: function() {},
    
    // | C    | λx[λy[λz[xzy]]]            |       |
    C: function() {},
    
    // | T    | λx[λy[x]]                  |       |
    T: function() {},
    
    // | F    | λx[λy[y]]                  |       |
    F: function() {},
    
    // | ω    | λx[xx]                     |       |
    ω: function() {},
    
    // | Ω    | ωω                         |       |
    Ω: function() {},
    
    // | Y    | λf[(λx[f(xx)])(λx[f(xx)])] |       |
    Y: function() {}
  };

  root.church = that; 

}());
