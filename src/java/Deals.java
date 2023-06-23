
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Deals extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String ID = request.getParameter("Id");
        String type = request.getParameter("Purpose");
        String name = request.getParameter("Name");
        String p1 = request.getParameter("P1");
        String q1 = request.getParameter("Q1");
        String p2 = request.getParameter("P2");
        String q2 = request.getParameter("Q2");
        String p3 = request.getParameter("P3");
        String q3 = request.getParameter("Q3");
        String price = request.getParameter("Price");
        switch (type) {
            case "add":
                AddDeal(request, response, name, p1, q1, p2, q2, p3, q3, price);
                break;
            case "fetch":
                FetchDeals(request, response);
                break;
            case "delete":
                DeleteDeal(request, response, ID);
                break;
            case "update":
                UpdateDeal(request, response, ID);
                break;
            case "UpdateDeal":
                Update(request, response,name, p1, q1, p2, q2, p3, q3, price,ID);
                break;
            default:
                break;
        }

    }

    protected void AddDeal(HttpServletRequest request, HttpServletResponse response, String name, String p1,
            String q1, String p2, String q2, String p3, String q3, String price) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        if (name.equals("")) {
            response.getWriter().write("Enter the name of Deal");
        } else if (p1.equals("")) {
            response.getWriter().write("Enter the name of Product 1");
        } else if (q1.equals("")) {
            response.getWriter().write("Enter the quantity of Product 1");
        } else if (!q1.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter the quantity of Product 1 in integer.");
        } else if (p2.equals("")) {
            response.getWriter().write("Enter the name of Product 2");
        } else if (q2.equals("")) {
            response.getWriter().write("Enter the quantity of Product 2");
        } else if (!q2.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter the quantity of Product 2 in integer.");
        } else if (p3.equals("")) {
            response.getWriter().write("Enter the name of Product 3");
        } else if (q3.equals("")) {
            response.getWriter().write("Enter the quantity of Product 3");
        } else if (!q3.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter the quantity of Product 3 in integer.");
        } else if (price.equals("")) {
            response.getWriter().write("Enter the price of Deal");
        } else if (!price.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter price in integer.");
        } else {
            try ( Connection connection = database.getConnection()) {
                String sql = "INSERT INTO `deals` (`Name`, `product1`, `quantity1`, `product2`, `quantity2`, `product3`, `quantity3`, `Price`)"
                        + " VALUES ('" + name + "', '" + p1 + "', '" + q1 + "', '" + p2 + "', '" + q2 + "', '" + p3 + "', '" + q3 + "', '" + price + "')";
                PreparedStatement statement = connection.prepareStatement(sql);
                statement.executeUpdate();
                response.getWriter().write("Successfully Added!!");
            } catch (SQLException e) {
                e.printStackTrace();
                out.print(e);
                response.getWriter().write("Unsuccessfully Added!!");
            }
        }

    }

    protected void FetchDeals(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        JSONArray jsonArray = new JSONArray();

        try ( Connection connection = database.getConnection()) {
            String sql = "SELECT * FROM `deals`";
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject DealObject = new JSONObject();
                String name = resultSet.getString("Name");
                String p1 = resultSet.getString("product1");
                String q1 = resultSet.getString("quantity1");
                String p2 = resultSet.getString("product2");
                String q2 = resultSet.getString("quantity2");
                String p3 = resultSet.getString("product3");
                String q3 = resultSet.getString("quantity3");
                String price = resultSet.getString("Price");
                int id = resultSet.getInt("id");

                try {
                    DealObject.put("Name", name);
                    DealObject.put("P1", p1);
                    DealObject.put("Q1", q1);
                    DealObject.put("p2", p2);
                    DealObject.put("Q2", q2);
                    DealObject.put("P3", p3);
                    DealObject.put("Q3", q3);
                    DealObject.put("Price", price);
                    DealObject.put("Id", id);
                    jsonArray.put(DealObject);
                } catch (JSONException ex) {
                    ex.printStackTrace();
                }
            }
            response.getWriter().write(jsonArray.toString());
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write(e.toString());
        }
    }
    
    protected void UpdateDeal(HttpServletRequest request, HttpServletResponse response, String ID) throws IOException {

        JSONArray jsonArray = new JSONArray();
        String idString = ID;
        int id = 0;

        if (idString != null && !idString.isEmpty()) {
            id = Integer.parseInt(idString);

        } else {
            response.getWriter().write("ID Not Matched!!");
        }
        try ( Connection connection = database.getConnection()) {
            String sql = "SELECT * FROM `deals` WHERE `id` =" + id;
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject Object = new JSONObject();
                String name = resultSet.getString("Name");
                String p1 = resultSet.getString("product1");
                String q1 = resultSet.getString("quantity1");
                String p2 = resultSet.getString("product2");
                String q2 = resultSet.getString("quantity2");
                String p3 = resultSet.getString("product3");
                String q3 = resultSet.getString("quantity3");
                String price = resultSet.getString("Price");
                try {
                    Object.put("Name", name);
                    Object.put("P1", p1);
                    Object.put("Q1", q1);
                    Object.put("p2", p2);
                    Object.put("Q2", q2);
                    Object.put("P3", p3);
                    Object.put("Q3", q3);
                    Object.put("Price", price);
                    jsonArray.put(Object);
                } catch (JSONException ex) {
                    ex.printStackTrace();
                }
            }

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonArray.toString());
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write(e.toString());
        }
    }
    protected void Update(HttpServletRequest request, HttpServletResponse response, String name, String p1,
            String q1, String p2, String q2, String p3, String q3, String price, String ID) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        String idString = ID;
        int id = 0;

        if (idString != null && !idString.isEmpty()) {
            id = Integer.parseInt(idString);

        } else {
            response.getWriter().write("ID Not Matched!!");
        }

        if (name.equals("")) {
            response.getWriter().write("Enter the name of pizza");
        } else if (price.equals("")) {
            response.getWriter().write("Enter the price of pizza");
        } else {
            try ( Connection connection = database.getConnection()) {
                String sql = "UPDATE `deals` SET Name=?, product1=?, quantity1=?, product2=?, quantity2=?, product3=?, quantity3=?, Price=? WHERE id=?";
                PreparedStatement statement = connection.prepareStatement(sql);
                statement.setString(1, name);
                statement.setString(2, p1);
                statement.setString(3, q1);
                statement.setString(4, p2);
                statement.setString(5, q2);
                statement.setString(6, p3);
                statement.setString(7, q3);
                statement.setString(8, price);
                statement.setInt(9, id);

                int rowsAffected = statement.executeUpdate();
                if (rowsAffected > 0) {
                    response.getWriter().write("Successfully updated!");
                } else {
                    response.getWriter().write("Update failed!");
                }

            } catch (SQLException e) {
                e.printStackTrace();
                response.getWriter().write("Error occurred while updating: " + e.getMessage());
            }
        }
    }
    
    
    protected void DeleteDeal(HttpServletRequest request, HttpServletResponse response, String Id) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        String idString = Id;
        int id = 0;

        if (idString != null && !idString.isEmpty()) {
            id = Integer.parseInt(idString);
        } else {
            response.getWriter().write("ID Not Matched!!");
        }
        try ( Connection connection = database.getConnection()) {
            String sql = "DELETE FROM `deals` WHERE `id` =" + id;
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.executeUpdate();
            response.getWriter().write("Successfully Deleted!!");
        } catch (SQLException e) {
            e.printStackTrace();
            out.print(e);
            response.getWriter().write("Unsuccessfully Deleted!!");
        }
    }

}
