<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://kit.fontawesome.com/c18972abce.js" crossorigin="anonymous"></script>
        <title>Dashboard</title>
    </head>
    <body>
        <div class="body-image">
            <nav class="navbar">
                <label class="logo">Online Fast Food</label>
                <ul class="navbar-list navbar-right">
                    <li class="active navbar-item"><a href="./home.jsp" class="navbar-link">Home</a></li>
                    <li class="navbar-item"><a href="./Pizza.jsp" class="navbar-link">Pizza</a></li>
                    <li class="navbar-item"><a href="./Deals.jsp" class="navbar-link">Deal</a></li>
                    <li class="navbar-item"><a href="./Record.jsp" class="navbar-link">Order</a></li>
                    <li class="navbar-item"><a href="../index.jsp" class="navbar-link">Logout</a></li>
                </ul>
            </nav>
            <div class="drop-down">
                <div>
                    <label class="drop-down-name">Add Fast Food</label>
                    <select id="AddFoodDropdown">
                        <option value="">--Select--</option>
                        <option value="burger">Burger</option>
                        <option value="shuwarma">Shuwarma</option>
                        <option value="roll">Roll</option>
                    </select>
                </div>
                <div class="second-drop-down">
                    <label class="drop-down-name">Available Stock</label>
                    <select id="DisplayFoodDropdown">
                        <option value="">--Select--</option>
                        <option value="burger">Burger</option>
                        <option value="shuwarma">Shuwarma</option>
                        <option value="roll">Roll</option>
                    </select>
                </div>
            </div>
            <div class="Roll-Update" id="data-form">
                <h2>Update Roll</h2>
                <input type="text" placeholder="Enter name of roll" required name="firstName" id="update-Roll-Name">
                <input type="text" placeholder="Enter price of roll" required name="lastName" id="update-Roll-Price">
                <button class="btn5" id="UpdateRoll">Update</button>
            </div>
            <div class="Burger-Update" id="data-form">
                <h2>Update Burger</h2>
                <input type="text" placeholder="Enter name of burger" required name="firstName" id="update-Burger-Name">
                <input type="text" placeholder="Enter price of burger" required name="lastName" id="update-Burger-Price">
                <button class="btn5" id="UpdateBurger">Update</button>
            </div>
            <div class="Shuwarma-Update" id="data-form">
                <h2>Update Shuwarma</h2>
                <input type="text" placeholder="Enter name of shuwarma" required name="firstName" id="update-Shuwarma-Name">
                <input type="text" placeholder="Enter price of shuwarma" required name="lastName" id="update-Shuwarma-Price">
                <button class="btn5" id="UpdateShuwarma">Update</button>
            </div>
            <div class="user-data add-burger">
                <label>Name:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-name" id="burger-name" placeholder="Enter name of burger"><br>
                <label>Price:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-price" id="burger-price" placeholder="Enter price of burger"><br>
                <button class="home-button save-pizza" id="AddBurger">Add Burger</button>
            </div>
            <div class="user-data add-Shuwarma">
                <label>Name:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-name" id="Shuwarma-name" placeholder="Enter name of shuwarma"><br>
                <label>Price:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-price" id="Shuwarma-price" placeholder="Enter price of shuwarma"><br>
                <button class="home-button save-pizza" id="AddShuwarma">Add Shuwarma</button>
            </div>
            <div class="user-data add-roll">
                <label>Name:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-name" id="roll-name" placeholder="Enter name of roll"><br>
                <label>Price:<span class="required">*</span></label><br>
                <input type="text" class="input-fields pizza-price" id="roll-price" placeholder="Enter price of roll"><br>
                <button class="home-button save-pizza update-roll" id="AddRoll">Add Roll</button>
            </div>
            
            <div class="table-body burger-table">
                <table class="order-data" id="tabal-burger"></table>
            </div>
            <div class="table-body shuwarma-table">
                <table class="order-data" id="tabal-shuwarma"></table>
            </div>
            <div class="table-body roll-table">
                <table class="order-data" id="tabal-roll"></table>
            </div>
        </div>
        
        <script src="../js/jquery.js"></script>
    </body>
</html>
