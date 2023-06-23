<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://kit.fontawesome.com/c18972abce.js" crossorigin="anonymous"></script>
        <title>Pizza</title>
    </head>
    <body>
        <div class="body-image">
            <nav class="navbar">
                <label class="logo">Online Fast Food</label>
                <ul class="navbar-list navbar-right">
                    <li class="navbar-item"><a href="./home.jsp" class="navbar-link">Home</a></li>
                    <li class="active navbar-item"><a href="./Pizza.jsp" class="navbar-link">Pizza</a></li>
                    <li class="navbar-item"><a href="./Deals.jsp" class="navbar-link">Deal</a></li>
                    <li class="navbar-item"><a href="./Record.jsp" class="navbar-link">Order</a></li>
                </ul>
            </nav>
            <div class="user-data">
                <label>Name:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="pizza-name" placeholder="Enter Pizza Name"><br>
                <label>Price:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="pizza-price" placeholder="Enter price of Pizza"><br>
                <button id="save-pizza">Add Pizza</button>
            </div>
            <button id="load1">See Available Stock</button>
            <div class="table-body">
                <table class="order-data" id="tabal-piza"></table>
            </div>
            <div class="Pizza-Update" id="data-form">
                <h2>Update Pizza</h2>
                <input type="text" placeholder="Enter Pizza Name" required name="firstName" id="update-Name">
                <input type="text" placeholder="Enter price of Pizza" required name="lastName" id="update-Price">
                <button class="btn5" id="UpdatePizza">Update</button>
            </div>
        </div>

        <script src="../js/jquery.js"></script>
    </body>
</html>
