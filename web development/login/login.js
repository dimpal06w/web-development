document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example hardcoded credentials for demonstration
    var validUsername = 'user';
    var validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        // Redirect to success page or perform other actions
        window.location.href = 'success.html';
    } else {
        // Display error message
        var messageElement = document.getElementById('message');
        messageElement.textContent = 'Invalid username or password. Please try again.';
    }
});
