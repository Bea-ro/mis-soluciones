const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (i=0; i<products.length; i++) {
    const product = products[i]
    if (product.sellCount>20) {
        goodProducts.push(product.name)
    } else {badProducts.push(product.name)}
}

console.log(goodProducts);
console.log(badProducts)