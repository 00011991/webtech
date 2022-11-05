const cartBox = document.querySelector(".cart-box");
let cartTotal = document.querySelector(".cart-total");
const isFreeDelivery = document.querySelector(".cart-free");
const deleteBtn = document.querySelectorAll(".cart-item-delete");
const deleteCart = document.querySelector(".delete-cart");

const cart = [
  {
    id: 1,
    name: "Ceaser Salad",
    price: 20000,
    quantity: 1,
    url: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80",
  },
  {
    id: 2,
    name: "Burrato Salad",
    price: 40000,
    quantity: 2,
    url: "https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

let total = cart[0].price * cart[0].quantity + cart[1].price * cart[1].quantity;
cartTotal.textContent = `Total: ${total}`;

if (total >= 100000) {
  isFreeDelivery.textContent = "Free Delivery";
} else {
  isFreeDelivery.textContent = "Delivery Fee - 25 000";
}

window.addEventListener("load", () => {
  renderCart();
});

const renderCart = () => {
  cartBox.innerHTML = "";
  cart.forEach((item) => {
    cartBox.innerHTML += `
        <div class="cart-item">
            <img src="${item.url}" alt="${item.name}" />
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">Price: ${String(item.price)}</p>
            </div>
            <div class="cart-item-action">
                <button class="cart-item-action-btn">-</button>
                <span class="cart-item-action-count">${item.quantity}</span>
                <button class="cart-item-action-btn">+</button>
            </div>
            <button type="button" class="cart-item-delete">Delete</button>
        </div>
        `;
  });
};

if (deleteCart) {
  deleteCart.addEventListener("click", () => {
    cartBox.innerHTML = " ";
    cartBox.innerHTML = `<h2 class="cart-empty">Your cart is empty</h2>`;
    cartTotal.textContent = `Total: ${0}`;
    isFreeDelivery.textContent = "";
  });
}
