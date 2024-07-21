document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        console.log('Login Form Submitted');
        console.log('Username:', username);
        console.log('Password:', password);
        
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        console.log('Signup Form Submitted');
        console.log('Username:', username);
        console.log('Password:', password);
        
    });
});
