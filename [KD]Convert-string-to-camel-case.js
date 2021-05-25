function toCamelCase(str){
  return str.replace(/([-_])+\w/ig, function(match) { 
    return match.charAt(match.length - 1).toUpperCase(); 
  });
}

console.log(toCamelCase('camel--case--Me'))
console.log(toCamelCase('Camel__case__me'))
