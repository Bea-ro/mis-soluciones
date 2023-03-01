const body = document.querySelector('body')

const getData = () => {
   fetch('http://localhost:3000/orders')
    .then((res) => res.json())
    .then((orders) => {
        orders.sort((a,b) => b.date.replaceAll('-','') - a.date.replaceAll('-',''));
        })

    fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((products) => products)

    printOrders()
}

const printOrders = (orders, products) => {

    orders.map((order) => {

    const productsOrdered = order.products;

    const orderTemplate = `
    <div>
<p>Fecha pedido: ${order.date}</p>

${productsOrdered.forEach((product) => {
    const productData = products.find((p) => {
    return p.id === product.productId;
});
      return `
          <p>ID: ${productData.id}</p>
          <p>Nombre: ${productData.name}</p>
          <p>Cantidad: ${product.quantity}</p>
      `;
      })
      .join('')}
      </div>`
})

body.innerHTML += orderTemplate;
}

getData()