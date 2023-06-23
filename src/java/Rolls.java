/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

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

/**
 *
 * @author Faiq Sarwar
 */
public class Rolls extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String ID = request.getParameter("Id");
        String type = request.getParameter("Purpose");
        String name = request.getParameter("Name");
        String price = request.getParameter("Price");
        switch (type) {
            case "add":
                AddRolls(request, response, name, price);
                break;
            case "fetch":
                FetchRoll(request, response);
                break;
            case "delete":
                DeleteRoll(request, response, ID);
                break;
            case "update":
                UpdateRolls(request, response, ID);
                break;
            case "UpdateRoll":
                Update(request, response, name, price, ID);
                break;
            default:
                break;
        }

    }

    protected void FetchRoll(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        JSONArray jsonArray = new JSONArray();

        try ( Connection connection = database.getConnection()) {
            String sql = "SELECT * FROM `roll_prathas`";
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject RollObject = new JSONObject();
                String name = resultSet.getString("Name");
                String price = resultSet.getString("Price");
                int id = resultSet.getInt("id");

                try {
                    RollObject.put("Name", name);
                    RollObject.put("Price", price);
                    RollObject.put("Id", id);
                    jsonArray.put(RollObject);
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

    protected void AddRolls(HttpServletRequest request, HttpServletResponse response, String name, String price) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        if (name.equals("")) {
            response.getWriter().write("Enter the name of Roll");
        } else if (!price.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter Price in integer.");
        } else if (price.equals("")) {
            response.getWriter().write("Enter the price of Roll");
        } else if (!price.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter price in integer.");
        } else {
            try ( Connection connection = database.getConnection()) {
                String sql = "INSERT INTO `roll_prathas` (`Name`, `Price`) VALUES ('" + name + "', '" + price + "')";
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

    protected void DeleteRoll(HttpServletRequest request, HttpServletResponse response, String Id) throws IOException {
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
            String sql = "DELETE FROM `roll_prathas` WHERE `id` =" + id;
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.executeUpdate();
            response.getWriter().write("Successfully Deleted!!");
        } catch (SQLException e) {
            e.printStackTrace();
            out.print(e);
            response.getWriter().write("Unsuccessfully Deleted!!");
        }
    }

    protected void UpdateRolls(HttpServletRequest request, HttpServletResponse response, String ID) throws IOException {

        JSONArray jsonArray = new JSONArray();
        String idString = ID;
        int id = 0;

        if (idString != null && !idString.isEmpty()) {
            id = Integer.parseInt(idString);

        } else {
            response.getWriter().write("ID Not Matched!!");
        }
        try ( Connection connection = database.getConnection()) {
            String sql = "SELECT * FROM `roll_prathas` WHERE `id` =" + id;
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject Object = new JSONObject();
                String Name = resultSet.getString("Name");
                String Price = resultSet.getString("Price");
                try {
                    Object.put("Name", Name);
                    Object.put("Price", Price);
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

    protected void Update(HttpServletRequest request, HttpServletResponse response, String name, String price, String ID) throws IOException {
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
            response.getWriter().write("Enter the name of Roll");
        } else if (!price.matches("\\d+")) {
            response.getWriter().write("Invalid price format. Enter Price in integer.");
        } else if (price.equals("")) {
            response.getWriter().write("Enter the price of Roll");
        } else {
            try ( Connection connection = database.getConnection()) {
                String sql = "UPDATE `roll_prathas` SET Name=?, Price=? WHERE id=?";
                PreparedStatement statement = connection.prepareStatement(sql);
                statement.setString(1, name);
                statement.setString(2, price);
                statement.setInt(3, id);

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
}
