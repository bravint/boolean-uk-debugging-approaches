const encode = (string, key) => {
  return string.split('').map(char => {
    let number = (parseInt(charSet[char]) + key) % 99
    return number
  }).join('')
}

console.log(encode('Hi, Booleaners!', 4))

// Expected console output => '391482053320201710061910232458'
