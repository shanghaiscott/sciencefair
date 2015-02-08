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

import com.swdouglass.rad.Radiation;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author scott
 */
//@javax.ejb.Stateless
@Path("radiation")
public class RadiationFacadeREST extends AbstractFacade<Radiation> {

  public RadiationFacadeREST() {
    super(Radiation.class);
  }

  @POST
  @Override
  @Consumes({MediaType.APPLICATION_JSON})
  public void create(Radiation entity) {
    super.create(entity);
  }

  @PUT
  @Path("{id}")
  @Consumes({MediaType.APPLICATION_JSON})
  public void edit(@PathParam("id") Long id, Radiation entity) {
    super.edit(entity);
  }

  @DELETE
  @Path("{id}")
  public void remove(@PathParam("id") Long id) {
    super.remove(super.find(id));
  }

  @GET
  @Path("{id}")
  @Produces({MediaType.APPLICATION_JSON})
  public Radiation find(@PathParam("id") Long id) {
    return super.find(id);
  }

  @GET
  @Override
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findAll() {
    return super.findAll();
  }

  @GET
  @Path("{from}/{to}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
    return super.findRange(new int[]{from, to});
  }

  @GET
  @Path("count")
  @Produces("text/plain")
  public String countREST() {
    return String.valueOf(super.count());
  }
  /* */
  @GET
  @Path("detector/{detector}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findByDetector(@PathParam("detector") String detector) {
    Query query = getEntityManager().createNamedQuery("Radiation.findByDetector");
    query.setParameter("detector", detector);
    List<Radiation> results = query.getResultList();
    getEntityManager().close();
    return results;
  }
  
  @GET
  @Path("container/{container}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findByContainer(@PathParam("container") String container) {
    Query query = getEntityManager().createNamedQuery("Radiation.findByContainer");
    query.setParameter("container", container);
    List<Radiation> results = query.getResultList();
    getEntityManager().close();
    return results;
  }
  
  @GET
  @Path("container/{container}/{date}/{startTime}/{endTime}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findByContainer(@PathParam("container") String container,
    @PathParam("date") String date, @PathParam("startTime") String startTime, 
    @PathParam("endTime") String endTime) throws ParseException {
    Query query = getEntityManager().createNamedQuery("Radiation.findByContainerDateAndTimesRange");
    query.setParameter("container", container);
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
    query.setParameter("dateDetected", dateFormat.parse(date));
    query.setParameter("timeStart", timeFormat.parse(startTime));
    query.setParameter("timeEnd", timeFormat.parse(endTime));
    List<Radiation> results = query.getResultList();
    getEntityManager().close();
    return results;
  }
  
  @GET
  @Path("detector/{detector}/latest")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findLatestByDetector(@PathParam("detector") String detector) {
    Query query = getEntityManager().createNamedQuery("Radiation.findLatestByDetector");
    query.setParameter("detector", detector);
    List<Radiation> results = query.getResultList();
    getEntityManager().close();
    return results;
  }
  
  @GET
  @Path("detector/{detector}/{date}/{startTime}/{endTime}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Radiation> findRangeByDetectorAndTime(@PathParam("detector") String detector,
    @PathParam("date") String date, @PathParam("startTime") String startTime, 
    @PathParam("endTime") String endTime) throws ParseException {
    Query query = getEntityManager().createNamedQuery("Radiation.findByDetectorDateAndTimeRange");
    query.setParameter("detector", detector);
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
    query.setParameter("dateDetected", dateFormat.parse(date));
    query.setParameter("timeStart", timeFormat.parse(startTime));
    query.setParameter("timeEnd", timeFormat.parse(endTime));
    List<Radiation> results = query.getResultList();
    getEntityManager().close();
    return results;
  }
  
  //Radiation.findTotalAndAverage
  @GET
  @Path("container/{container}/stats/{date}/{startTime}/{endTime}")
  @Produces({MediaType.APPLICATION_JSON})
  public List<Object> findStatsByContainer(@PathParam("container") String container,
    @PathParam("date") String date, @PathParam("startTime") String startTime,
    @PathParam("endTime") String endTime) throws ParseException {
    Query query = getEntityManager().createNamedQuery("Radiation.findTotalAndAverageByContainerDateAndTime");
    query.setParameter("container", container);
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
    query.setParameter("dateDetected", dateFormat.parse(date));
    query.setParameter("timeStart", timeFormat.parse(startTime));
    query.setParameter("timeEnd", timeFormat.parse(endTime));
    List<Object> results = query.getResultList();
    getEntityManager().close();
    return results;
  }

}
