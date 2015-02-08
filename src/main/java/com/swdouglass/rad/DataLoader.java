/*
 * Copyright (C) 2015 Scott Douglass
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package com.swdouglass.rad;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author scott
 */
public class DataLoader {

  public static void main(String[] args) {
    // arg[0] data file, in 3 column CSV
    // arg[1] detector name
    // arg[2] container (air, water, plastic, wood, metal)
    // for each row of the file, add the detector name and container, then persist it

    if (args.length != 3) {
      System.out.println("Usage: DataLoader file.csv detector container");
      System.exit(-1);
    }

    BufferedReader reader = null;
    String line = "";
    String sep = ",";
    int dataCount = 0;
    SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yy");
    SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm:ss");

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("radPU");
    System.out.println("Data file: " + args[0]);
    File dataFile = new File(args[0]);
    if (dataFile.exists()) {
      try {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        reader = new BufferedReader(new FileReader(dataFile));
        while ((line = reader.readLine()) != null) {
          //System.out.println(line);
          String[] data = line.split(sep);
          if (data.length == 4) {

            Date detectedDate = dateFormat.parse(data[0]);
            Date detectedTime = timeFormat.parse(data[1]);
            Integer cpm = Integer.parseInt(data[2]);
            Radiation rad = new Radiation(detectedDate, detectedTime, cpm, data[3], args[1], args[2]);
            
            em.persist(rad);
            
            //System.out.println(line);
            dataCount++;
            if (dataCount % 20 == 0) {
              em.flush();
              em.clear();
            }
          }
          
        }
        em.getTransaction().commit();
        em.close();
        System.out.println("Data count: " + dataCount);
      } catch (IOException | ParseException | NumberFormatException e) {
        System.out.println("Doh: " + e.getMessage());
      }
    } else {
      System.out.println("No file: " + args[0]);
    }

  }
}
