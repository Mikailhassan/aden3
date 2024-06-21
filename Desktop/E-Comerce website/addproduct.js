document.addEventListener('DOMContentLoaded', () => {

    let products = []; // Initialize empty array for products

    const productsContainer = document.getElementById('products-container');
    const productList = document.getElementById('product-list');

    // Function to render products to the UI
    function renderProducts() {
        // Clear existing product lists
        productsContainer.innerHTML = '';
        productList.innerHTML = '';

        // Render products in products container
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card', 'h-100');
            productCard.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Price: $${parseFloat(product.price).toFixed(2)}</small>
                    <button class="btn btn-primary buy-btn" data-id="${product.id}">Buy Now</button>
                    <button class="btn btn-danger delete-btn" data-id="${product.id}">Delete</button>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        // Render products in product list (for admin)
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${parseFloat(product.price).toFixed(2)}</p>
                <p>Type: ${product.type}</p>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
                <button class="btn btn-secondary" onclick="editProduct('${product.id}')">Edit</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Fetch products from db.json
    fetch('db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            products = data.products; // Set initial products from db.json
            renderProducts(); // Render the initial product list
        })
        .catch(error => console.error('Error fetching products:', error));

    // Event listener for the form submission to create a new product
    document.getElementById('create-product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const newName = document.getElementById('new-name').value;
        const newDescription = document.getElementById('new-description').value;
        const newPrice = parseFloat(document.getElementById('new-price').value);
        const newImage = document.getElementById('new-image').value;
        const newType = document.getElementById('new-type').value;
        const newProduct = {
            id: (products.length + 1).toString(), // Generate new ID (not recommended for production)
            name: newName,
            description: newDescription,
            price: newPrice,
            image: newImage,
            type: newType
        };
        products.push(newProduct); // Add new product to local array

        // Persist changes to db.json
        persistProducts(products);

        renderProducts(); // Render updated product list
        this.reset(); // Reset form after submission
    });

    // Function to delete a product
    window.deleteProduct = function(id) {
        products = products.filter(product => product.id !== id); // Filter out the product to delete

        // Persist changes to db.json
        persistProducts(products);

        renderProducts(); // Render updated product list
    };

    // Function to edit a product
    window.editProduct = function(id) {
        const product = products.find(product => product.id === id);
        if (product) {
            const newName = prompt("Enter new name:", product.name);
            const newDescription = prompt("Enter new description:", product.description);
            const newPrice = prompt("Enter new price:", product.price);
            const newImage = prompt("Enter new image URL:", product.image);
            const newType = prompt("Enter new type:", product.type);
            if (newName && newDescription && newPrice && newImage && newType) {
                product.name = newName;
                product.description = newDescription;
                product.price = parseFloat(newPrice);
                product.image = newImage;
                product.type = newType;

                // Persist changes to db.json
                persistProducts(products);

                renderProducts(); // Render updated product list
            }
        }
    };

    // Function to persist products to db.json
    function persistProducts(products) {
        fetch('db.json', {
            method: 'PUT', // Use PUT method to update the entire file
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ products }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Products updated successfully');
        })
        .catch(error => console.error('Error updating products:', error));
    }

});
