package com.dbsystel.datarun.service;

public class TestConverter {

	public static void main(String[] args) {
		
		String path = "C:\\Spring\\Projects\\datarun\\src\\main\\webapp\\resources\\data\\in_out.csv";
		csvTojsonConverter x = new csvTojsonConverter();
		x.createInOutJson(path);
	}

}
