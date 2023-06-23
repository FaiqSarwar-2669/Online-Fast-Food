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
import java.time.LocalDate;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Faiq Sarwar
 */
public class Customers extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String date = request.getParameter("Date");
        String type = request.getParameter("Purpose");
        String name = request.getParameter("Name");
        String Phone = request.getParameter("Phone");
        String address = request.getParameter("Address");
        String total = request.getParameter("Total");
        switch (type) {
            case "add":
                AddCustomer(request, response, name, Phone, address, total);
                break;
            case "search":
                Search(request, response, date);
                break;
            case "fetch":
                FetchData(request, response);
                break;
            default:
                break;
        }

    }

    protected void AddCustomer(HttpServletRequest request, HttpServletResponse response, String name, String Phone,
            String address, String total) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        LocalDate date = java.time.LocalDate.now();
        if (name.equals("")) {
            response.getWriter().write("Enter the name of Customer");
        } else if (Phone.equals("")) {
            response.getWriter().write("Enter the Contact Number");
        } else if (!Phone.matches("\\d{4}-\\d{7}")) {
            response.getWriter().write("Contact Number formate 03xx-xxxxxxx");
        } else if (address.equals("")) {
            response.getWriter().write("Enter the Address of Customer");
        } else if (total.equals("")) {
            response.getWriter().write("Check the order first then save it");
        } else if (total.equals("")) {
            response.getWriter().write("Enter the Total Bill in integer");
        } else if (total.equals("0")) {
            response.getWriter().write("Buy at least one product");
        } else {
            try ( Connection connection = database.getConnection()) {
                String sql = "INSERT INTO `customers` (`Name`, `Phone`, `Address`, `Total`, `Date`) VALUES "
                        + "('" + name + "', '" + Phone + "', '" + address + "', '" + total + "', '" + date + "')";
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

    protected void FetchData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        JSONArray jsonArray = new JSONArray();

        // Perform the fetch logic here
        try ( Connection connection = database.getConnection()) {
            String sql = "SELECT * FROM `customers`";
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject customersObject = new JSONObject();
                String name = resultSet.getString("Name");
                String phone = resultSet.getString("Phone");
                String address = resultSet.getString("Address");
                String total = resultSet.getString("Total");
                String date = resultSet.getString("Date");

                try {
                    customersObject.put("Name", name);
                    customersObject.put("Phone", phone);
                    customersObject.put("Address", address);
                    customersObject.put("Total", total);
                    customersObject.put("Date", date);
                    jsonArray.put(customersObject);
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

    protected void Search(HttpServletRequest request, HttpServletResponse response, String Date) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        JSONArray jsonArray = new JSONArray();

        // Perform the fetch logic here
        try ( Connection connection = database.getConnection()) {
            int row = 0;
            String sql = "SELECT * FROM `customers` WHERE `Date`='" + Date + "'";
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                JSONObject customersObject = new JSONObject();
                String name = resultSet.getString("Name");
                String phone = resultSet.getString("Phone");
                String address = resultSet.getString("Address");
                String total = resultSet.getString("Total");
                String date = resultSet.getString("Date");

                try {
                    customersObject.put("Name", name);
                    customersObject.put("Phone", phone);
                    customersObject.put("Address", address);
                    customersObject.put("Total", total);
                    customersObject.put("Date", date);
                    jsonArray.put(customersObject);
                } catch (JSONException ex) {
                    ex.printStackTrace();
                }
                row = row + 1;
            }
            if (row > 0) {
                response.getWriter().write(jsonArray.toString());
            } else {
                response.getWriter().write("no");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write(e.toString());
        }
    }
}
