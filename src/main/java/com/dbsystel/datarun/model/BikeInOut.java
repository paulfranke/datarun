package com.dbsystel.datarun.model;

public class BikeInOut {
	
	private String date = "";
	private String RENTAL_ZONE = "";
	private String year = "";
	private String dayofyear = "";
	private String count_arrivals = "";
	private String count_departures = "";
	private String diff = "";
	private String LAT = "";
	private String LON= "";
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getRENTAL_ZONE() {
		return RENTAL_ZONE;
	}
	public void setRENTAL_ZONE(String rENTAL_ZONE) {
		RENTAL_ZONE = rENTAL_ZONE;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getDayofyear() {
		return dayofyear;
	}
	public void setDayofyear(String dayofyear) {
		this.dayofyear = dayofyear;
	}
	public String getCount_arrivals() {
		return count_arrivals;
	}
	public void setCount_arrivals(String count_arrivals) {
		this.count_arrivals = count_arrivals;
	}
	public String getCount_departures() {
		return count_departures;
	}
	public void setCount_departures(String count_departures) {
		this.count_departures = count_departures;
	}
	public String getDiff() {
		return diff;
	}
	public void setDiff(String diff) {
		this.diff = diff;
	}
	public String getLAT() {
		return LAT;
	}
	public void setLAT(String lAT) {
		LAT = lAT;
	}
	public String getLON() {
		return LON;
	}
	public void setLON(String lON) {
		LON = lON;
	}


}
