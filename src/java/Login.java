import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Login extends HttpServlet {

   
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/plain");
    response.setCharacterEncoding("UTF-8");

    String username = request.getParameter("username");
    String password = request.getParameter("password");

        if (username.equals("")) {
            response.getWriter().write("Enter The UserName!!");
        } else if (password.equals("")) {
            response.getWriter().write("Enter The Password!!");
        } else {
            if (username.equals("FaiqSarwar") && password.equals("123")) {
                response.getWriter().write("1");
            } else {
                response.getWriter().write("Check Your UserName And Password");
            }
        }
        
    }
    

}
