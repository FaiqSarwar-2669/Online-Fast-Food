<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../style.css">
    <title>Login</title>
</head>
<body>
    <div class="body-image">
        <nav class="navbar">
            <label class="logo">Online Fast Food</label>
            <ul class="navbar-list navbar-right">
                <li class="navbar-item"><a href="../index.jsp" class="navbar-link">Home</a></li>
                <li class="navbar-item"><a href="./pizza.jsp" class="navbar-link">Pizza</a></li>
                <li class="navbar-item"><a href="./deal.jsp" class="navbar-link">Deal</a></li>
                <li class="navbar-item"><a href="./order.html" class="navbar-link">Order</a></li>
                <li class="active navbar-item"><a href="./login.jsp" class="navbar-link">Login</a></li>
            </ul>
        </nav>
        <label class="login-data">User Name: FaiqSarwar</label><br>
        <label class="login-data">Password: 123</label>
        <div class="form" id="data-form">
                <h2>Login Hare</h2>
                <input type="text" placeholder="Enter User Name" required id="username">
                <input type="password" placeholder="Enter Password Name" required id="password">
                <button class="btn3">Login</button>
        </div>
    </div>
    
    <script src="../js/jquery.js"></script>
</body>
</html>