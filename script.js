const products = [
    { name: "Product 1", category: "Electronics", price: 100 },
    { name: "Product 2", category: "Clothing", price: 50 },
    { name: "Product 3", category: "Electronics", price: 200 },
    { name: "Product 4", category: "Clothing", price: 30 },
];

function createProductHTML(product) {
    return `
        <div class="product-item">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        </div>
    `;
}

function displayProducts(products) {
    const productDisplayArea = document.querySelector(".product-display-area");
    productDisplayArea.innerHTML = "";
    products.forEach((product) => {
        productDisplayArea.innerHTML += createProductHTML(product);
    });
}

function createFilterButtons() {
    const filterSection = document.querySelector(".filter-section");
    const categories = [...new Set(products.map((product) => product.category))];
    categories.forEach((category) => {
        const button = document.createElement("button");
        button.className = "filter-button";
        button.dataset.category = category;
        button.textContent = category;
        filterSection.appendChild(button);
    });
    const allButton = document.createElement("button");
    allButton.className = "filter-button";
    allButton.dataset.category = "All";
    allButton.textContent = "All";
    filterSection.appendChild(allButton);
}

function filterProducts(category) {
    let filteredProducts = products;
    if (category !== "All") {
        filteredProducts = products.filter((product) => product.category === category);
    }
    displayProducts(filteredProducts);
}

createFilterButtons();
displayProducts(products);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-button")) {
        const category = event.target.dataset.category;
        filterProducts(category);
    }
});