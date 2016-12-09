NEJ.define([
    'pro/lib/a',
    '{pro}/lib/b.js'
],function(a,b){
  console.log(a.api() + '+' + b.api());
});
