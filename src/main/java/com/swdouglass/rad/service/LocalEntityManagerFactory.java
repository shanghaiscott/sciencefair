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
package com.swdouglass.rad.service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 *
 * @author Scott Douglass
 */
@WebListener
public class LocalEntityManagerFactory implements ServletContextListener {

  private static EntityManagerFactory emf;

  @Override
  public void contextInitialized(ServletContextEvent event) {
    emf = Persistence.createEntityManagerFactory("radPU");
  }

  @Override
  public void contextDestroyed(ServletContextEvent event) {
    emf.close();
  }

  public static EntityManager createEntityManager() {
    if (emf == null) {
      throw new IllegalStateException("Context is not initialized yet.");
    }
    return emf.createEntityManager();
  }

}
