// ===============================
// STYLEHUB - LAB SHEET 2
// ===============================

// 1. Product Catalog
const products = [
    { id: 1, name: "Classic Black T-Shirt", price: 499, image: "assets.png/Classic Black T-Shirt.webp" },
    { id: 2, name: "White Cotton T-Shirt", price: 549, image: "assets.png/white tshirt.jpg" },
    { id: 3, name: "Oversized T-Shirt", price: 699, image: "assets.png/oversized.webp" },
    { id: 4, name: "Graphic T-Shirt", price: 599, image: "assets.png/graphic.webp" },
    { id: 5, name: "Blue Casual T-Shirt", price: 579, image: "assets.png/blue tshirt.jpg" },
    { id: 6, name: "Red Premium T-Shirt", price: 649, image: "assets.png/red tshirt.jpg" },
    { id: 7, name: "Green Streetwear T-Shirt", price: 729, image: "assets.png/green tshirt.jpg" },
    { id: 8, name: "Grey Comfort T-Shirt", price: 529, image: "assets.png/grey tshirt.jpg" }
];

// Get cart
let cart = JSON.parse(localStorage.getItem("styleHubCart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("styleHubCart", JSON.stringify(cart));
}

// 2. Cart Badge
function updateCartCount() {
    const badge = document.querySelector("#cart-count");
    if (badge) {
        badge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// 3. Display Products
function renderProducts() {
    const grid = document.querySelector("#product-grid");
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `).join("");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            addToCart(Number(button.dataset.id));
        });
    });
}

// 4. Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
}

// 5. Display Cart
function renderCart() {
    const container = document.querySelector("#cart-items");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<h2>Your cart is empty.</h2>";
        calculateTotal();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <input type="number" min="1"
                value="${item.quantity}"
                class="quantity"
                data-id="${item.id}">

            <button class="remove" data-id="${item.id}">
                Remove
            </button>
        </div>
    `).join("");

    document.querySelectorAll(".quantity").forEach(input => {
        input.addEventListener("change", () => {
            const item = cart.find(p => p.id == input.dataset.id);
            item.quantity = Math.max(1, Number(input.value));
            saveCart();
            calculateTotal();
            updateCartCount();
        });
    });

    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", () => {
            cart = cart.filter(p => p.id != button.dataset.id);
            saveCart();
            renderCart();
            updateCartCount();
        });
    });

    calculateTotal();
}

// 6. Calculate Total
function calculateTotal() {
    const total = document.querySelector("#cart-total");
    if (total) {
        total.textContent =
            "₹" + cart.reduce((sum, item) =>
                sum + item.price * item.quantity, 0);
    }
}

// 7. Checkout Validation
function checkout() {
    const form = document.querySelector("#checkout-form");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        let valid = true;

        const name = document.querySelector("#name");
        const address = document.querySelector("#address");
        const pincode = document.querySelector("#pincode");
        const phone = document.querySelector("#phone");

        document.querySelector("#name-error").textContent = "";
        document.querySelector("#address-error").textContent = "";
        document.querySelector("#pincode-error").textContent = "";
        document.querySelector("#phone-error").textContent = "";

        if (!name.value.trim()) {
            document.querySelector("#name-error").textContent = "Name is required";
            valid = false;
        }

        if (!address.value.trim()) {
            document.querySelector("#address-error").textContent = "Address is required";
            valid = false;
        }

        if (!/^\d{6}$/.test(pincode.value)) {
            document.querySelector("#pincode-error").textContent = "Enter 6 digit pincode";
            valid = false;
        }

        if (!/^\d{10}$/.test(phone.value)) {
            document.querySelector("#phone-error").textContent = "Enter 10 digit phone";
            valid = false;
        }

        if (valid) {
            document.querySelector("#confirmation").textContent =
                "Order placed successfully! 🎉";

            localStorage.removeItem("styleHubCart");
            cart = [];
            updateCartCount();
            form.reset();
        }
    });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
    checkout();
    updateCartCount();
});