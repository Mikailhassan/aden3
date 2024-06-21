// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const user = { username, email, password };
//     // let newUser = {
//     //     id: jsonData.users.length + 1, // Assign a unique ID (you might handle this differently in a real app)
//     //     username: username,
//     //     email: email,
//     //     fullName: fullName,
//     //     address: address
//     //   };

//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         alert('Signup successful!');
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Signup failed!');
//     });
// });


// signup.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sign-up successful:', data);
        alert('Sign-up successful!');
        window.location.href = 'login.html'; // Redirect to login page after successful sign-up
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Sign-up failed!');
    });
});
