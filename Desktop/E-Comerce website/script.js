
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById('products-container');
  const pageType = productsContainer.getAttribute('data-type');

  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
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


// Add event listeners for Buy Now buttons
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const productId = event.target.getAttribute('data-id');
    
    // Prompt user to select payment method
    const paymentMethod = prompt(`Please select your payment method for Product ID ${productId}:\n1. Credit Card\n2. Empesa\n3. Bank Account`);

    if (paymentMethod === '1' || paymentMethod.toLowerCase() === 'credit card') {
      // Handle credit card payment
      const creditCardNumber = prompt('Enter your credit card number:');
      const pin = prompt('Enter your PIN for verification:');
      
      // Simulate processing (replace with actual logic)
      setTimeout(() => {
        alert(`Payment successful for Product ID ${productId} with Credit Card!`);
      }, 2000); // Simulating delay for processing

    } else if (paymentMethod === '2' || paymentMethod.toLowerCase() === 'empesa') {
      // Handle empesa payment
      const empesaPin = prompt('Enter your ID nymber:');
      const empesaDetails = prompt('Enter your Empesa pin:');
      
      // Simulate processing (replace with actual logic)
      setTimeout(() => {
        alert(`Payment successful for Product ID ${productId} with Empesa!`);
      }, 2000); // Simulating delay for processing

    } else if (paymentMethod === '3' || paymentMethod.toLowerCase() === 'bank account') {
      // Handle bank account payment
      const bankName = prompt('Enter your bank name:');
      const accountNumber = prompt('Enter your account number:');
      
      // Simulate processing (replace with actual logic)
      setTimeout(() => {
        alert(`Payment successful for Product ID ${productId} with Bank Account!\nBank: ${bankName}\nAccount Number: ${accountNumber}`);
      }, 2000); // Simulating delay for processing

    } else {
      // Handle invalid input
      alert('Invalid payment method selection.');
    }
  });
});




      // the end of the buynow button

document.querySelectorAll('.perfume-card .btn-danger').forEach(button => {
button.addEventListener('click', (event) => {
    const productName = event.target.parentNode.querySelector('p').textContent;
    alert(`You clicked Buy Now for ${productName}`);
});
});


});


const buyNow1 = document.querySelectorAll("buyNow1")
buyNow1.addEventListener("click", function(){
alert("am clicked")
})


    });

    