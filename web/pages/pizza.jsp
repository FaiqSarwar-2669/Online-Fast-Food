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
    <link rel="stylesheet" href="../style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Pizza</title>
</head>

<body>
    <div class="body-image">
        <nav class="navbar">
            <label class="logo">Online Fast Food</label>
            <ul class="navbar-list navbar-right">
                <li class="navbar-item"><a href="../index.jsp" class="navbar-link">Home</a></li>
                <li class="active navbar-item"><a href="./pizza.jsp" class="navbar-link">Pizza</a></li>
                <li class="navbar-item"><a href="./deal.jsp" class="navbar-link">Deal</a></li>
                <li class="navbar-item"><a href="./order.html" class="navbar-link">Order</a></li>
            </ul>
        </nav>
        <div class="pizza-series">
            <%
                    try {
                    Connection con = null;
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", ""); 
                        } catch (Exception e) {
                            System.out.println(e);
                        }

                        String sql = "SELECT * FROM pizzas";
                        PreparedStatement statement = con.prepareStatement(sql);
                        ResultSet resultSet = statement.executeQuery();

                        while (resultSet.next()) {
                            String name = resultSet.getString("Name");
                            String price = resultSet.getString("Price");
                %>
            <div class="example1">
                <div class="data">
                    <h1><%= name%></h1>
                    <h2>Price:<span class="price"> &#x20B9;<%= price%></span><span><a href="#" class="btn1">ADD</a></span></h2>
                </div>
            </div>
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

    <script src="../js/jquery.js"></script>
</body>

</html>