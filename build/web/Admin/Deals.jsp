<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://kit.fontawesome.com/c18972abce.js" crossorigin="anonymous"></script>
        <title>Deals</title>
    </head>
    <body>
        <div class="body-image">
            <nav class="navbar">
                <label class="logo">Online Fast Food</label>
                <ul class="navbar-list navbar-right">
                    <li class="navbar-item"><a href="./home.jsp" class="navbar-link">Home</a></li>
                    <li class="navbar-item"><a href="./Pizza.jsp" class="navbar-link">Pizza</a></li>
                    <li class="active navbar-item"><a href="./Deals.jsp" class="navbar-link">Deal</a></li>
                    <li class="navbar-item"><a href="./Record.jsp" class="navbar-link">Order</a></li>
                </ul>
            </nav>
            <div class="user-data">
                <label>Name:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-name" placeholder="Enter the name of Deal"><br>
                <label>Product 1:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-p1" placeholder="Enter name of Product 1"><br>
                <label>Quantity 1:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-q1" placeholder="Enter Quantity of Product 1"><br>
                <label>Product 2:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-p2" placeholder="Enter name of Product 2"><br>
                <label>Quantity 2:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-q2" placeholder="Enter Quantity of Product 2"><br>
                <label>Product 3:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-p3" placeholder="Enter name of Product 3"><br>
                <label>Quantity 3:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-q3" placeholder="Enter Quantity of Product 3"><br>
                <label>Price:<span class="required">*</span></label><br>
                <input type="text" class="input-fields" id="deal-price" placeholder="Enter price of Deal"><br>
                <button id="save-deal">Add Deal</button>
            </div>
            <button id="load2">See Available Stock</button>
            <div class="table-body1">
                <table class="order-data" id="tabal-Deal"></table>
            </div>
            <div class="deal-Update" id="data-form">
                <h2>Update Deal</h2>
                <input type="text" placeholder="Enter the name of Deal" required id="update-deal-name">
                <input type="text" placeholder="Enter name of Product 1" required id="update-deal-p1">
                <input type="text" placeholder="Enter Quantity of Product 1" required id="update-deal-q1">
                <input type="text" placeholder="Enter name of Product 2" required id="update-deal-p2">
                <input type="text" placeholder="Enter Quantity of Product 2" required id="update-deal-q2">
                <input type="text" placeholder="Enter name of Product 3" required id="update-deal-p3">
                <input type="text" placeholder="Enter Quantity of Product 3" required id="update-deal-q3">
                <input type="text" placeholder="Enter price of Deal" required id="update-deal-price">
                <button class="btn5" id="UpdateDeal">Update</button>
            </div>
        </div>

        <script src="../js/jquery.js"></script>
    </body>
</html>
