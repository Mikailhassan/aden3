// // document.getElementById('login-form').addEventListener('submit', function(event) {
// //     event.preventDefault();

// //     const email = document.getElementById('email').value;
// //     const password = document.getElementById('password').value;

// //     fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
// //         .then(response => response.json())
// //         .then(data => {
// //             if (data.length > 0) {
// //                 console.log('Login successful:', data[0]);
// //                 alert('Login successful!');
// //                 window.location.href = 'index.html'; // Redirect to a welcome page after successful login
// //             } else {
// //                 console.log('Login failed');
// //                 alert('Invalid email or password');
// //             }
// //         })
// //         .catch((error) => {
// //             console.error('Error:', error);
// //             alert('Login failed!');
// //         });
// // });


// // login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                console.log('Login successful:', data[0]);
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to home page after successful login
            } else {
                console.log('Login failed');
                alert('Invalid email or password');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login failed!');
        });
});
