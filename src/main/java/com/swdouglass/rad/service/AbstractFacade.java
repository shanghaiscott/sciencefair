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

import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author Scott Douglass
 * @param <T>
 */
public abstract class AbstractFacade<T> {
  private final Class<T> entityClass;
  
  protected EntityManager entityManager;

  public AbstractFacade(Class<T> entityClass) {
    this.entityClass = entityClass;
  }

  protected EntityManager getEntityManager() {
    if (entityManager == null || ! entityManager.isOpen()) {
      entityManager = LocalEntityManagerFactory.createEntityManager();
    } 
    return entityManager;
  }

  public void create(T entity) {
    getEntityManager().persist(entity);
    getEntityManager().close();
  }

  public void edit(T entity) {
    getEntityManager().merge(entity);
    getEntityManager().close();
  }

  public void remove(T entity) {
    getEntityManager().remove(getEntityManager().merge(entity));
    getEntityManager().close();
  }

  public T find(Object id) {
    T result = getEntityManager().find(entityClass, id);
    getEntityManager().close();
    return result;
  }

  public List<T> findAll() {
    javax.persistence.criteria.CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
    cq.select(cq.from(entityClass));
    List<T> result = getEntityManager().createQuery(cq).getResultList();
    getEntityManager().close();
    return result;
  }

  public List<T> findRange(int[] range) {
    javax.persistence.criteria.CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
    cq.select(cq.from(entityClass));
    javax.persistence.Query q = getEntityManager().createQuery(cq);
    q.setMaxResults(range[1] - range[0] + 1);
    q.setFirstResult(range[0]);
    List<T> result = q.getResultList();
    getEntityManager().close();
    return result;
  }

  public int count() {
    javax.persistence.criteria.CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
    javax.persistence.criteria.Root<T> rt = cq.from(entityClass);
    cq.select(getEntityManager().getCriteriaBuilder().count(rt));
    javax.persistence.Query q = getEntityManager().createQuery(cq);
    int result = ((Long) q.getSingleResult()).intValue();
    getEntityManager().close();
    return result;
  }
  
}
