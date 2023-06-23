<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Dashboard</title>
</head>

<body>
    <div class="body-image">
        <nav class="navbar">
            <label class="logo">Online Fast Food</label>
            <ul class="navbar-list navbar-right">
                <li class="active navbar-item"><a href="./index.jsp" class="navbar-link">Home</a></li>
                <li class="navbar-item"><a href="./pages/pizza.jsp" class="navbar-link">Pizza</a></li>
                <li class="navbar-item"><a href="./pages/deal.jsp" class="navbar-link">Deal</a></li>
                <li class="navbar-item"><a href="./pages/order.html" class="navbar-link">Order</a></li>
                <li class="navbar-item"><a href="./pages/login.jsp" class="navbar-link">Login</a></li>
            </ul>
        </nav>
        <div class="home-panels">
            <div class="burger-panel">
                <label for=""><span class="border">BURGER</span></label>
                <%
                    try {
                    Connection con = null;
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", ""); 
                        } catch (Exception e) {
                            System.out.println(e);
                        }

                        String sql = "SELECT * FROM burgers";
                        PreparedStatement statement = con.prepareStatement(sql);
                        ResultSet resultSet = statement.executeQuery();

                        while (resultSet.next()) {
                            String name = resultSet.getString("Name");
                            String price = resultSet.getString("Price");
                %>
                <p><span class="burger-name Name"><%= name%></span><span class="burger-price right Price">&#x20B9;<%= price%></span><span><a href="#" class="btn2">ADD</a></span></p><br>
                <%
                        }
                        resultSet.close();
                        statement.close();
                        con.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                %>
            </div>
            <div class="paratha-panel">
                <label for=""><span class="border">PARATHA ROLL</span></label>
                <%
                    try {
                    Connection con = null;
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", ""); 
                        } catch (Exception e) {
                            System.out.println(e);
                        }

                        String sql = "SELECT * FROM roll_prathas";
                        PreparedStatement statement = con.prepareStatement(sql);
                        ResultSet resultSet = statement.executeQuery();

                        while (resultSet.next()) {
                            String name = resultSet.getString("Name");
                            String price = resultSet.getString("Price");
                %>
                <p><span class="paratha-name Name"><%= name%></span><span class="paratha-price right Price">&#x20B9;<%= price%></span><span><a href="#" class="btn2">ADD</a></span></p><br>
                <%
                        }
                        resultSet.close();
                        statement.close();
                        con.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                %>
            </div>
            <div class="suwarma-panel">
                <label for=""><span class="border">SHUWARMA</span></label>
                <%
                    try {
                    Connection con = null;
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", ""); 
                        } catch (Exception e) {
                            System.out.println(e);
                        }

                        String sql = "SELECT * FROM shuwarmas";
                        PreparedStatement statement = con.prepareStatement(sql);
                        ResultSet resultSet = statement.executeQuery();

                        while (resultSet.next()) {
                            String name = resultSet.getString("Name");
                            String price = resultSet.getString("Price");
                %>
                <p><span class="suwarma-name Name"><%= name%></span><span class="suwarma-price right1 Price">&#x20B9;<%= price%></span><span><a href="#" class="btn2">ADD</a></span></p><br>
                <%
                        }
                        resultSet.close();
                        statement.close();
                        con.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                %>
            </div>
        </div>
    </div>
    <script src="./js/jquery.js"></script>
</body>

</html>