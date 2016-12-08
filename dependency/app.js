NEJ.define([
    'pro/lib/a',
    '{pro}/lib/b.js'
],function(a,b){

  var s = a.api() + '_' + b.api();
  document.getElementById('example').innerHTML = s;

});
