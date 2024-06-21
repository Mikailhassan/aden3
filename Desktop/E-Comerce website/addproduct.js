// document.addEventListener('DOMContentLoaded', () => {
//     let products = [
//         {
//             "id": "1",
//             "type": "perfume",
//             "name": "Luxury Perfume Gift Set",
//             "description": "A set of premium perfumes in a variety of scents.",
//             "image": "img/perfumes.jfif",
//             "price": 50.00
//         },
//         {
//             "id": "2",
//             "name": "Perfumes 1",
//             "description": "A wonderful fragrance 1.",
//             "price": 71.00,
//             "image": "data:image/webp;base64,UklGRhQJAABXRUJQVlA4IDQIAAAQAwCdASp8AIEAUk8mk0mk0U8gGRp8fRRKRp8fEwUgGycmFjkA",
//             "type": "perfume"
//         },
//         {
//             "id": "3",
//             "name": "Perfumes 2",
//             "description": "A wonderful fragrance 2.",
//             "price": 72.00,
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhLsKNSaidYUxi3ozjtsCr_r4AOdeONtPUA&s",
//             "type": "perfume"
//         }
//     ];

   

    
//     function renderProducts() {
//         const productList = document.getElementById('product-list');
//         productList.innerHTML = '';
//         products.forEach(product => {
//             const productDiv = document.createElement('div');
//             productDiv.classList.add('product');
//             productDiv.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <p>${product.description}</p>
//                 <p>$${product.price.toFixed(2)}</p>
//                 <p>Type: ${product.type}</p>
//                 <button onclick="deleteProduct('${product.id}')">Delete</button>
//                 <button onclick="editProduct('${product.id}')">Edit</button>
//             `;
//             productList.appendChild(productDiv);
//         });
//     }

//     document.getElementById('create-product-form').addEventListener('submit', function(e) {
//         e.preventDefault();
//         const newName = document.getElementById('new-name').value;
//         const newDescription = document.getElementById('new-description').value;
//         const newPrice = parseFloat(document.getElementById('new-price').value);
//         const newImage = document.getElementById('new-image').value;
//         const newType = document.getElementById('new-type').value;
//         const newProduct = {
//             id: (products.length + 1).toString(),
//             name: newName,
//             description: newDescription,
//             price: newPrice,
//             image: newImage,
//             type: newType
//         };
//         products.push(newProduct);
//         renderProducts();
//         this.reset();
//     });

//     window.deleteProduct = function(id) {
//         products = products.filter(product => product.id !== id);
//         renderProducts();
//     };

//     window.editProduct = function(id) {
//         const product = products.find(product => product.id === id);
//         if (product) {
//             const newName = prompt("Enter new name:", product.name);
//             const newDescription = prompt("Enter new description:", product.description);
//             const newPrice = prompt("Enter new price:", product.price);
//             const newImage = prompt("Enter new image URL:", product.image);
//             const newType = prompt("Enter new type:", product.type);
//             if (newName && newDescription && newPrice && newImage && newType) {
//                 product.name = newName;
//                 product.description = newDescription;
//                 product.price = parseFloat(newPrice);
//                 product.image = newImage;
//                 product.type = newType;
//                 renderProducts();
//             }
//         }
//     };

//     renderProducts();

//     });














    document.addEventListener('DOMContentLoaded', () => {


        const productsContainer = document.getElementById('products-container');
        const pageType = productsContainer.getAttribute('data-type');
      
        fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => 
            const filteredProducts = data.filter(product => product.type === pageType);
            filteredProducts.forEach(product => {
              const productCard = document.createElement('div');
              productCard.classList.add('card', 'h-100');
              productCard.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">Price: $${product.price}</small>
                  <button class="btn btn-primary buy-btn" data-id="${product.id}">Buy Now</button>
                </div>
              `;
              productsContainer.appendChild(productCard)
            });
        )




        let products = []; // Initialize empty array for products
    
        // Function to render products to the UI
        function renderProducts() {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>Type: ${product.type}</p>
                    <button onclick="deleteProduct('${product.id}')">Delete</button>
                    <button onclick="editProduct('${product.id}')">Edit</button>
                `;
                productList.appendChild(productDiv);
            });
        }
    
        // Event listener for the form submission to create a new product
        document.getElementById('create-product-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const newName = document.getElementById('new-name').value;
            const newDescription = document.getElementById('new-description').value;
            const newPrice = parseFloat(document.getElementById('new-price').value);
            const newImage = document.getElementById('new-image').value;
            const newType = document.getElementById('new-type').value;
            const newProduct = {
                id: (products.length + 1).toString(),
                name: newName,
                description: newDescription,
                price: newPrice,
                image: newImage,
                type: newType
            };
            products.push(newProduct); // Add new product to local array
            renderProducts(); // Render updated product list
            this.reset(); // Reset form after submission
        });
    
        // Function to delete a product
        window.deleteProduct = function(id) {
            products = products.filter(product => product.id !== id); // Filter out the product to delete
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
                    renderProducts(); // Render updated product list
                }
            }
        };
    
        // Fetch products from db.json
        fetch('db.json')
            .then(response => response.json())
            .then(data => {
                products = [...products, ...data]; // Merge existing products with fetched data
                renderProducts(); // Render the combined product list
            })
            .catch(error => console.error('Error fetching products:', error));
    
        // Initial render of products (will be updated after fetching from db.json)
        renderProducts();
    });
    
