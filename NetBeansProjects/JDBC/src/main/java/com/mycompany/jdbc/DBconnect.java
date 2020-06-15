/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.jdbc;
import java.sql.*;
/**
 *
 * @author logida
 */
public class DBconnect {
     private Connection con;
       private Statement st;
       private ResultSet rs;
       public DBconnect(){
           
        try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        con=DriverManager.getConnection("jdbc:mysql://localhost:3306/practice","root","");
        st=con.createStatement();
        }catch(Exception e){
            System.out.println("Error: "+e);
        }
       } 
       
        
    
    public void getdata(){
    try{
        String query = "select * from student";
        rs= st.executeQuery(query);
        System.out.println("Records from database");
        while(rs.next()){
            String name=rs.getString("Name");
            String age=rs.getString("age");
            String city=rs.getString("city");
            System.out.println("Name:"+name+" "+"Age:"+age+" "+"City:"+city);
        }
        
    }catch(Exception ex){
        System.out.println("Error: "+ex);
    }
}
}
