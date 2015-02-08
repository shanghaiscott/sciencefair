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

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author scott
 */
@Entity
@Table(name = "radiation")
@XmlRootElement
@NamedQueries({
  @NamedQuery(name = "Radiation.findAll", query = "SELECT r FROM Radiation r"),
  @NamedQuery(name = "Radiation.findById", query = "SELECT r FROM Radiation r WHERE r.id = :id"),
  @NamedQuery(name = "Radiation.findByDateDetected", query = "SELECT r FROM Radiation r WHERE r.dateDetected = :dateDetected"),
  @NamedQuery(name = "Radiation.findByTimeDetected", query = "SELECT r FROM Radiation r WHERE r.timeDetected = :timeDetected"),
  @NamedQuery(name = "Radiation.findByCpm", query = "SELECT r FROM Radiation r WHERE r.cpm = :cpm"),
  @NamedQuery(name = "Radiation.findByDetector", query = "SELECT r FROM Radiation r WHERE r.detector = :detector"),
  @NamedQuery(name = "Radiation.findByDetectorAndTimestampRange", query = "SELECT r FROM Radiation r WHERE r.detector = :detector AND r.timeDetected BETWEEN :timestampStart "
    + "AND :timestampEnd ORDER BY r.timeDetected ASC"),
  @NamedQuery(name = "Radiation.findByContainer", query = "SELECT r FROM Radiation r WHERE r.container = :container"),
  @NamedQuery(name = "Radiation.findByContainerAndTimestampRange", query = "SELECT r FROM Radiation r WHERE r.container = :container AND r.timeDetected BETWEEN :timestampStart and :timestampEnd ORDER BY r.timeDetected ASC"),
  @NamedQuery(name = "Radiation.findLatestByDetector", query = "SELECT MAX(r.timeDetected) FROM Radiation r WHERE r.detector = :detector"),
  @NamedQuery(name = "Radiation.findByContainerDateAndTimesRange", query = "SELECT r FROM Radiation r WHERE r.container = :container AND r.dateDetected = :dateDetected AND r.timeDetected BETWEEN :timeStart and :timeEnd ORDER BY r.timeDetected ASC"),
  @NamedQuery(name = "Radiation.findTotalAndAverageByContainerDateAndTime", query = "SELECT r.container, SUM(r.cpm), AVG(r.cpm) FROM Radiation r WHERE r.container = :container AND r.dateDetected = :dateDetected AND r.timeDetected BETWEEN :timeStart and :timeEnd ORDER BY r.timeDetected ASC ")
})
public class Radiation implements Serializable {

  private static final long serialVersionUID = 1L;
  @Id
  @Basic(optional = false)
  @NotNull
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Basic(optional = false)
  @NotNull
  @Column(name = "date_detected")
  @Temporal(TemporalType.DATE)
  private Date dateDetected;
  @Basic(optional = false)
  @NotNull
  @Column(name = "time_detected")
  @Temporal(TemporalType.TIME)
  private Date timeDetected;
  @Basic(optional = false)
  @NotNull
  @Column(name = "cpm")
  private int cpm;
  @Size(max = 128)
  @Column(name = "detector")
  private String detector;
  @Size(max = 128)
  @Column(name = "container")
  private String container;
  @Size(max = 32)
  @Column(name = "cpm_unit")
  private String cpmUnit;
  
  @Temporal(TemporalType.TIMESTAMP)
  @Transient
  private Long timestamp;

  public Radiation() {
  }

  public Radiation(Long id) {
    this.id = id;
  }

  public Radiation(Long id, Date dateDetected, Date timeDetected, int cpm) {
    this.id = id;
    this.dateDetected = dateDetected;
    this.timeDetected = timeDetected;
    this.cpm = cpm;
  }

  public Radiation(Date dateDetected, Date timeDetected, int cpm, String cpmUnit,
    String detector, String container) {
    this.dateDetected = dateDetected;
    this.timeDetected = timeDetected;
    this.cpm = cpm;
    this.cpmUnit = cpmUnit;
    this.detector = detector;
    this.container = container;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Date getDateDetected() {
    return dateDetected;
  }

  public void setDateDetected(Date dateDetected) {
    this.dateDetected = dateDetected;
  }

  public Date getTimeDetected() {
    return timeDetected;
  }

  public void setTimeDetected(Date timeDetected) {
    this.timeDetected = timeDetected;
  }

  public int getCpm() {
    return cpm;
  }

  public void setCpm(int cpm) {
    this.cpm = cpm;
  }

  public String getDetector() {
    return detector;
  }

  public void setDetector(String detector) {
    this.detector = detector;
  }

  public String getContainer() {
    return container;
  }

  public void setContainer(String container) {
    this.container = container;
  }

  @Override
  public int hashCode() {
    int hash = 0;
    hash += (id != null ? id.hashCode() : 0);
    return hash;
  }

  @Override
  public boolean equals(Object object) {
    // TODO: Warning - this method won't work in the case the id fields are not set
    if (!(object instanceof Radiation)) {
      return false;
    }
    Radiation other = (Radiation) object;
    return (this.id.equals(other.id));
  }

  @Override
  public String toString() {
    return "com.swdouglass.rad.Radiation[ id=" + id + " ]";
  }

  /**
   * @return the cpmUnit
   */
  public String getCpmUnit() {
    return cpmUnit;
  }

  /**
   * @param cpmUnit the cpmUnit to set
   */
  public void setCpmUnit(String cpmUnit) {
    this.cpmUnit = cpmUnit;
  }

  /**
   * This silly thing returns a make believe time stamp composed of the 
   * current date and the detection time from the Radiation record.
   * @return
   * @throws ParseException 
   */
  public Long getTimestamp() throws ParseException {

    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
    SimpleDateFormat timestampFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    Long ts = timestampFormat.parse(
      dateFormat.format(new Date()) + " " +
      timeFormat.format(this.getTimeDetected())).getTime();

    return ts;
  }

}
