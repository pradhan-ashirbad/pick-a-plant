document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Basic login validation
            // In a real application, this would be a server-side authentication
            const validUsername = 'admin';
            const validPassword = 'password';
            
            if (username === validUsername && password === validPassword) {
                alert('Login Successful!');
                window.location.href = 'index.html'; // Redirect to home page
            } else {
                alert('Invalid username or password. Try again.');
                // Clear password field
                document.getElementById('password').value = '';
            }
        });
    }
});