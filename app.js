const containerProductos = document.querySelector(".container-productos")

const datos = fetch("/data.json")
  .then(res => res.json())
  .then(data => data)

datos.then(products => {
  const productosLista = products.slice(0, 6)
  productosLista.forEach(product => {
    const producto = document.createElement("div")
    producto.className = "container-producto";
    producto.innerHTML = `
          <div class="container-imagen">
            <img src="${product.image.mobile}" alt="" />
            <button class="btn-add-to-cart"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
          </div>
          <div class="container-texto-producto">
            <span id="producto-name">${product.category}</span>
            <h4 class="producto-title">${product.name}</h4>
            <span id="producto-precio">$${product.price}</span>
          </div>
    `
    containerProductos.appendChild(producto)
  });
})