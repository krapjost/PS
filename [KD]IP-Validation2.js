function isValidIP(str) {
  const rgx = /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/
  return rgx.test(str)
}

console.log(isValidIP("asd.asd.asd.asd"))
console.log(isValidIP("192.123.33.22"))
console.log(isValidIP("010.101.888.300"))
