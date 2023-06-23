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
    <title>Deals</title>
</head>
<body>
    <div class="body-image">
        <nav class="navbar">
            <label class="logo">Online Fast Food</label>
            <ul class="navbar-list navbar-right">
                <li class="navbar-item"><a href="../index.jsp" class="navbar-link">Home</a></li>
                <li class="navbar-item"><a href="./pizza.jsp" class="navbar-link">Pizza</a></li>
                <li class="active navbar-item"><a href="./deal.jsp" class="navbar-link">Deal</a></li>
                <li class="navbar-item"><a href="./order.html" class="navbar-link">Order</a></li>
            </ul>
        </nav>
        <div class="card-main">
            <%
                    try {
                    Connection con = null;
                        try {
                            Class.forName("com.mysql.jdbc.Driver");
                            con = DriverManager.getConnection("jdbc:mysql://localhost/users", "root", ""); 
                        } catch (Exception e) {
                            System.out.println(e);
                        }

                        String sql = "SELECT * FROM deals";
                        PreparedStatement statement = con.prepareStatement(sql);
                        ResultSet resultSet = statement.executeQuery();

                        while (resultSet.next()) {
                            String name = resultSet.getString("Name");
                            String p1 = resultSet.getString("product1");
                            String q1 = resultSet.getString("quantity1");
                            String p2 = resultSet.getString("product2");
                            String q2 = resultSet.getString("quantity2");
                            String p3 = resultSet.getString("product3");
                            String q3 = resultSet.getString("quantity3");
                            String price = resultSet.getString("Price");
                %>
            <div class="card">
                <div class="title"><%= name%></div>
                <div class="features">
                    <ul>
                        <li><span class="span"><%= q1%></span> <%= p1%></li>
                        <li><span class="span"><%= q2%></span> <%= p2%></li>
                        <li><span class="span"><%= q3%></span> <%= p3%></li>
                        <li><span class="span price">Price:</span> &#x20A8;<span class="price-value">/-<%= price%></span></li>
                    </ul>
                </div>
                <a href="#" class="btn">Add</a>
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