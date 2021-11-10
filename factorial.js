function factorial(n) {
  let product = 1
  while (n > 0) {
    n -= 1
    product *= n
  }
  return product
}

// Expected output:
//
// > factorial(5)
// => 120
