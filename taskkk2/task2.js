const shoes = [
  {
    name: "Nike Air Max",
    price: 2299.99,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a9e02dd4-062b-4625-8166-bb066f68bc14/NIKE+AIR+MAX+1+%2786+OG+G.png"
  },
  {
    name: "Adidas Ultraboost",
    price: 2499.99,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/dfeaac2e2d8f46558e76af7f010bafe5_9366/Ultraboost_Light_Shoes_Black_HQ6339_01_standard.jpg"
  },
  {
    name: "Puma RS-X",
    price: 2599.99,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393819/01/sv01/fnd/IND/fmt/png/RS-X-Forward-History-Sneakers"
  },
  {
    name: "Converse Classic",
    price: 2999.99,
    image: "https://cdn11.bigcommerce.com/s-ppsyskcavg/images/stencil/1280x1280/products/74399/283558/3J231_D_08X1__14129.1728494340.jpg?c=2"
  },
  {
    name: "adidas predator",
    price: 4599.99,
    image: "https://scssports.in/cdn/shop/files/1_69bc4039-fac0-4d12-8211-f307b4f95ed1_535x.png?v=1746601627 "  
  },
  {
    name: "nike mercurial",
    price: 4199.99,
    image: "https://www.tradeinn.com/f/13706/137069155/nike-mercurial-superfly-vi-academy-cr7-ic-indoor-football-shoes.webp"  
  },
  {
    name: "air flight",
    price: 3599.99,
    image: "https://i.redd.it/bs0ic5yqa7bb1.jpg "  
  },
  {
    name: "air jordans",
    price: 4999.99,
    image: "https://m.media-amazon.com/images/I/713YrGizBYL._UY1000_.jpg"  
  },
  {
    name: "adidas samba",
    price: 4599.99,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a16aacd2a80b4897bda6ad67f987b8dd_9366/Samba_XLG_Shoes_White_IE1377_01_standard.jpg "  
  },
  {
    name: "nike dunks",
    price: 4999.99,
    image: "https://thebaeclub.in/cdn/shop/files/nike-panda-dunk-high2.png?v=1686135483"  
  }  
];

let cartCount = 0;

const container = document.getElementById('product-container');

shoes.forEach((shoe, index) => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <div class="product-image">
      <img src="${shoe.image}" alt="${shoe.name}" />
    </div>
    <div class="product-info">
      <h3>${shoe.name}</h3>
      <p>₹${shoe.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
  container.appendChild(card);
});

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}