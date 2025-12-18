let products = [];
// O carrinho agora armazena objetos agrupados: { product: {...}, quantity: 1 }
let cart = []; 
const CART_STORAGE_KEY = 'shoppingCart'; 

// Formatador de Moeda para Real Brasileiro
const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


// --- Funções de Persistência ---
function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
}

// Carrega produtos
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
    loadCart(); 
  });

  // Renderiza produtos
function renderProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${item.image}" width="150">
      <h3>${item.name}</h3>
      <p>${currencyFormatter.format(item.price)}</p>
      <button onclick="addToCart(${item.id})">Adicionar</button>
    `;

    container.appendChild(div);
  });
}

// 📌 REFATORADA: Adiciona ou Incrementa a quantidade no carrinho
function addToCart(id) {
  // 1. Encontra se o item já está no carrinho
  const existingItem = cart.find(item => item.product.id === id);
  const productToAdd = products.find(p => p.id === id);

  if (existingItem) {
    // 2. Se já existe, apenas incrementa a quantidade
    existingItem.quantity += 1;
  } else {
    // 3. Se não existe, adiciona o item com quantidade 1
    cart.push({ product: productToAdd, quantity: 1 });
  }
  
  renderCart();
  saveCart(); 
}

// 📌 REFATORADA: Renderiza o carrinho com quantidades
function renderCart() {
  const ul = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");

  ul.innerHTML = "";

  let totalSum = 0;

  cart.forEach((cartItem, index) => {
    const { product, quantity } = cartItem;
    const itemTotal = product.price * quantity;
    totalSum += itemTotal; // Soma o total do item ao total geral

    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} (x${quantity}) - ${currencyFormatter.format(itemTotal)}
      <div>
        <button onclick="changeQuantity(${index}, -1)">-</button>
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </div>
    `; 
    ul.appendChild(li);
  });

  totalDisplay.innerHTML = `Total: ${currencyFormatter.format(totalSum)}`;
}

// 📌 NOVO: Função para Aumentar/Diminuir a quantidade
function changeQuantity(index, delta) {
    const cartItem = cart[index];
    
    // Incrementa ou decrementa
    cartItem.quantity += delta;
    
    // Se a quantidade chegar a 0 ou menos, remove o item
    if (cartItem.quantity <= 0) {
        removeItem(index);
    } else {
        // Se ainda for positivo, apenas renderiza e salva
        renderCart();
        saveCart();
    }
}


// Remove item (agora usada para remover o grupo completo, ou quando a quantidade chega a zero)
function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
  saveCart(); 
}

// Filtro por categoria (mantido)
document.getElementById("categoryFilter").addEventListener("change", e => {
  const category = e.target.value;
  if (category === "all") {
    renderProducts(products);
  } else {
    renderProducts(products.filter(p => p.category === category));
  }
});

// Abrir/fechar carrinho (mantido)
document.getElementById("btn-cart").addEventListener("click", () => {
  document.getElementById("cart").classList.add("open");
});
document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart").classList.remove("open");
});