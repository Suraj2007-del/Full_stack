# Full Stack Development (BTCS303P) — Mini E-Commerce Project

**Department of Computer Science & Engineering — COER University**
**Project Title:** STYLEHUB — T-Shirt Collection & Online Store
**Repository:** *Add your GitHub repository link here*

---

## 📅 Implementation Timeline & Lab Sheet Log

### 🔹 Lab Sheet 1: Building the Storefront (HTML5 & CSS3)

**Completion Date:** *Add your completion date*
**Covers:** Project Phase 1 & Phase 2 Specifications

* **HTML5 Page Structure:** Created structured web pages for the T-shirt shopping website:

  * `index.html` — Store homepage with website introduction and featured T-shirts.
  * `products.html` — Product catalog displaying the available T-shirt collection.
  * `product-detail.html` — Detailed information about selected T-shirts.
  * `cart.html` — Shopping cart displaying selected products and order summary.
  * `checkout.html` — Checkout page containing customer details and payment method selection.

* **CSS3 Styling & Layout (`style.css`):**

  * Designed a clean and modern fashion-store interface.
  * Styled the header and navigation menu.
  * Used **Flexbox** for arranging navigation and page elements.
  * Used **CSS Grid** for displaying T-shirt product cards.
  * Added responsive styling using **media queries** for different screen sizes.
  * Styled forms, buttons, product cards, cart sections, and checkout components.

---

### 🔹 Lab Sheet 2: Making It Interactive (Vanilla JavaScript)

**Completion Date:** *Add your completion date*
**Covers:** Project Phase 3 Specifications
**Main Script File:** `script.js`

* **Task 1 — Product Catalog Data:**
  Created a JavaScript product array containing T-shirt information such as product ID, name, price, image, and category.

* **Task 2 — Dynamic Product Rendering:**
  Implemented JavaScript functionality to dynamically display T-shirt products on the products page using DOM manipulation and template literals.

* **Task 3 — Add to Cart Handler:**
  Implemented an `addToCart()` function that allows users to add T-shirts to their shopping cart.

* **Task 4 — Cart Management:**
  Implemented cart functionality to display selected T-shirts, their quantities, prices, and remove buttons.

* **Task 5 — Total Price Calculation:**
  Implemented a `calculateTotal()` function to calculate the total cost of products in the shopping cart.

* **Task 6 — Checkout Form:**
  Created a checkout form that collects:

  * Customer Name
  * Delivery Address
  * City
  * Pincode
  * Phone Number
  * Payment Method

* **Task 7 — Form Validation:**
  Added validation to ensure that required customer information is entered correctly before placing an order.

  * **Name:** Must not be empty.
  * **Address:** Must not be empty.
  * **City:** Must not be empty.
  * **Pincode:** Must contain exactly 6 digits.
  * **Phone Number:** Must contain exactly 10 digits.
  * **Payment Method:** One payment option must be selected.

* **Task 8 — Order Placement:**
  After successful checkout validation, the user can place the order and receive an order confirmation.

---

## 📂 Project Directory Structure

```text
StyleHub/
├── README.md                 <-- Project Documentation
├── index.html                <-- Homepage
├── products.html             <-- T-Shirt Product Catalog
├── product-detail.html       <-- Product Details
├── cart.html                 <-- Shopping Cart
├── checkout.html             <-- Checkout & Payment
├── style.css                 <-- Website Styling
└── script.js                 <-- JavaScript Functionality
```

---

## 🛍️ Project Features

* Modern T-shirt collection storefront
* Homepage with featured products
* Dynamic product catalog
* Product details section
* Add-to-cart functionality
* Shopping cart management
* Quantity and price calculation
* Checkout form
* Customer information validation
* Multiple payment method options
* Responsive website design
* JavaScript-based interactivity
* Clean and user-friendly interface

---

## 🧑‍💻 Technologies Used

| Technology           | Purpose                                  |
| -------------------- | ---------------------------------------- |
| **HTML5**            | Website structure and pages              |
| **CSS3**             | Styling and responsive layout            |
| **JavaScript**       | Interactivity and shopping functionality |
| **DOM Manipulation** | Dynamic product and cart rendering       |
| **Local Storage**    | Storing cart information in the browser  |

---

## 🚀 How to Run Locally

1. Clone this repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

2. Open the project folder in **Visual Studio Code**.

3. Open `index.html` in a modern web browser.

4. Navigate through the website using the navigation menu.

5. Select T-shirts, add them to the cart, and proceed to checkout.

---

## 📋 Project Workflow

```text
Homepage
    ↓
Product Catalog
    ↓
Select T-Shirt
    ↓
Product Details
    ↓
Add to Cart
    ↓
Shopping Cart
    ↓
Checkout
    ↓
Customer Information
    ↓
Payment Method
    ↓
Form Validation
    ↓
Place Order
```

---

## 🎯 Project Objective

The main objective of **STYLEHUB** is to develop a simple and interactive online T-shirt shopping website using HTML5, CSS3, and JavaScript. The project demonstrates the implementation of fundamental front-end web development concepts including webpage structuring, responsive styling, DOM manipulation, form validation, and shopping cart functionality.

---

## 📌 Conclusion

STYLEHUB demonstrates the basic working of a mini e-commerce website for a T-shirt collection. The project combines HTML, CSS, and JavaScript to provide users with a simple shopping experience, from browsing products to adding items to the cart and completing the checkout process.
