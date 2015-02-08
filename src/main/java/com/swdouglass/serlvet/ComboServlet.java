package com.swdouglass.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import static javax.xml.bind.DatatypeConverter.printBase64Binary;
import org.apache.commons.io.Charsets;

/**
 *
 * @author Scott Douglass
 */
public class ComboServlet extends HttpServlet {
  private static final long serialVersionUID = 7293719518889956252L;

  private String basePath;
  private String mimeType = "application/javascript";
  private static final String P_BASE = "base";
  private static final String P_TYPE = "mimetype";
  private static final String A_CACHE = "comboCache";

  private static final Map<String, String> cacheMap = new HashMap();

  /**
   *
   * @throws ServletException
   */
  @Override
  public void init() throws ServletException {
    this.basePath = this.getInitParameter(P_BASE);
    if (this.getInitParameter(P_TYPE) != null) {
      this.mimeType = this.getInitParameter(P_TYPE);
    }
  }

  /**
   * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
   * methods.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    String key = null;
    try {
      MessageDigest md5 = MessageDigest.getInstance("MD5");
      key = printBase64Binary(md5.digest(request.getQueryString().getBytes(Charsets.UTF_8)));
    } catch (NoSuchAlgorithmException e) {
      throw new ServletException(e.getMessage(), e);
    }

    response.setContentType(this.mimeType + ";charset=UTF-8");
    PrintWriter out = response.getWriter();
    // The GZIPOutputStream totally fails to work here... 
    //response.addHeader("Content-Encoding", "gzip");
    //PrintWriter out = new PrintWriter(new GZIPOutputStream(response.getOutputStream()), true);
    if (cacheMap.containsKey(key)) {
      out.write(cacheMap.get(key));
    } else {

      String realPath = null;
      if (this.basePath == null || this.basePath.isEmpty()) {
        realPath = request.getServletContext().getRealPath("/");
      } else {
        realPath = request.getServletContext().getRealPath(this.basePath);
      }

      Enumeration<String> pnames = request.getParameterNames();
      StringBuilder combo = new StringBuilder();
      while (pnames.hasMoreElements()) {
        String fileName = pnames.nextElement();
        Path path = FileSystems.getDefault().getPath(realPath, fileName);
        if (Files.exists(path)) {
          BufferedReader reader
            = Files.newBufferedReader(path, StandardCharsets.UTF_8);
          String content = null;
          combo.append("\n/*** INFO: ").append(path.toString()).append(" */\n");
          out.println("/*** INFO: " + path.toString() + " */");
          while ((content = reader.readLine()) != null) {
            combo.append(content).append("\n");
            out.println(content);
          }
        } else {
          combo.append("\n/*** WARNING: ").append(path.toString()).append(" not found */\n");
          out.println("/*** WARNING: " + path.toString() + " not found */");
        }
      }
      synchronized(cacheMap) {
        cacheMap.put(key, combo.toString());
      }
    }

  }

  // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
  /**
   * Handles the HTTP <code>GET</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    processRequest(request, response);
  }

  /**
   * Handles the HTTP <code>POST</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    processRequest(request, response);
  }

  /**
   * Returns a short description of the servlet.
   *
   * @return a String containing servlet description
   */
  @Override
  public String getServletInfo() {
    return "Short description";
  }// </editor-fold>

}
