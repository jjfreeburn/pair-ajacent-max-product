const largestPair = function(array)  {
  let maxProduct = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    product = array[i] * array[i + 1];

    if (product > maxProduct) maxProduct = product;
  }

  return maxProduct;
}
