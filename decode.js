const decode = (string, key) => {
  let invertedCharSet = invert(charSet)
  console.log(invertedCharSet)

  return chunk(string.split(''), 2).map(pair => {
    let cipherPair = parseInt(pair.join(''))
    let number = (99 + (cipherPair - key)) % 99
    return invertedCharSet[number.toString()]
  }).join('')
}

const chunk = (array, chunk_size) => {
  let chunks = [];

  while (array.length) {
      chunks.push(array.splice(0, chunk_size));
  }

  return chunks
}

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => newObj[obj[key]] = key)
  return newObj;
}

console.log(decode('391482053320201710061910232458', 4))

// Expected console output => 'Hi, Booleaners!'
