<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://kit.fontawesome.com/c18972abce.js" crossorigin="anonymous"></script>
        <title>Record</title>
    </head>
    <body>
        <div class="body-image">
            <nav class="navbar">
                <label class="logo">Online Fast Food</label>
                <ul class="navbar-list navbar-right">
                    <li class="navbar-item"><a href="./home.jsp" class="navbar-link">Home</a></li>
                    <li class="navbar-item"><a href="./Pizza.jsp" class="navbar-link">Pizza</a></li>
                    <li class="navbar-item"><a href="./Deals.jsp" class="navbar-link">Deal</a></li>
                    <li class="active navbar-item"><a href="./Record.jsp" class="navbar-link">Order</a></li>
                </ul>
            </nav>
            <div class="search-bar">
                <a href="#" id="load-record">All Record</a>
                <input type="text" id="fetch-data" placeholder="Search (yyyy-mm-dd)"><i class="fa-solid fa-magnifying-glass" id="search"></i>
            </div>
            <div class="table-body all-recod">
                <table class="order-data" id="tabal-all-record"></table>
            </div>
            <div class="table-body all-recod">
                <table class="order-data" id="tabal-search-record"></table>
            </div>
        </div>
        
        <script src="../js/jquery.js"></script>
    </body>
</html>
