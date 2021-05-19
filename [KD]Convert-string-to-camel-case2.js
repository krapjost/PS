function toCamelCase(str){
  if (!str) {
    return ""
  }
  let result
  if (/[a-z]/.test(str[0])){
    str.includes('-')
    ? (()=>{
      result = str.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
      result = result.replace(result[0], result[0].toLowerCase())
    })()
    : (()=>{
      result = str.split('_').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
      result = result.replace(result[0], result[0].toLowerCase())
    })()
  } else {
    str.includes('-') 
    ? result = str.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
    : result = str.split('_').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
  }
    return result;
}

console.log(toCamelCase("to_camel_case"))
console.log(toCamelCase("To-camel-case"))
