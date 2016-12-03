package com.dbsystel.datarun.service;

public class TestConverter {

	public static void main(String[] args) {
		
		String path = "C:\\Spring\\Projects\\datarun\\src\\main\\webapp\\resources\\data\\HACKATHON_RENTAL_ZONE_CALL_A_BIKE.csv";
		csvTojsonConverter x = new csvTojsonConverter();
		x.createBikejson(path);
	}

}
