const body = document.querySelector('body')

const getOrderTemplate = (order, products) =>
    `
    <div>
    <p>Fecha pedido: ${order.date}</p>

    ${order.products
        .map((product) => {
    const productData = products.find((p) => {
    return p.id === product.productId;
    });
      return `
          <p>ID: ${productData.id}</p>
          <p>Nombre: ${productData.name}</p>
          <p>Cantidad: ${product.quantity}</p>
      `
      })
      .join('')
    }
      </div>`

      fetch('http://localhost:3000/orders')
      .then((res) => res.json())
      .then((orders) => {
          orders.sort((a,b) => b.date.replaceAll('-','') - a.date.replaceAll('-',''));
          console.log(orders)
          
      
       fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((products) => { console.log(products);
  
orders.forEach((order) => {
body.innerHTML += getOrderTemplate(order, products);
})
})
})
