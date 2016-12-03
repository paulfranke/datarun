package com.dbsystel.datarun.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import com.dbsystel.datarun.model.BikeInOut;
import com.dbsystel.datarun.model.BikeStation;
import com.dbsystel.datarun.model.Station;
import com.google.gson.Gson;

public class csvTojsonConverter {
	char inDelimiter = ',';
//	String[] dataHeader = {"BST8", "BST_NAME", "LAND", "LAT", "LON"};
	String[] dataBikeHeader = {"RENTAL_ZONE_HAL_ID", 
						   "RENTAL_ZONE_HAL_SRC",
						   "NAME",
						   "TYPE",
						   "CITY",
						   "COUNTRY",
						   "POI_AIRPORT_X",
						   "POI_LONG_DISTANCE_TRAINS_X",
						   "POI_SUBURBAN_TRAINS_X",	
						   "POI_UNDERGROUND_X",
						   "CLASSIFICATION",
						   "RENTAL_ZONE_GROUP",
						   "CODE",
						   "COMPANY",
						   "COMPANY_GROUP",
						   "FRANCHISE",
						   "ACTIVE_X",
						   "RENTAL_ZONE_GROUP_X",
						   "RENTAL_ZONE_X_COORDINATE",
						   "RENTAL_ZONE_Y_COORDINATE"};
	
	String[] dataInOutHeader = {"",
								"date",
							    "RENTAL_ZONE",
							    "year",
							    "dayofyear",
							    "count_arrivals",
							    "count_departures",
							    "diff",
							    "RENTAL_ZONE_X_COORDINATE",
							    "RENTAL_ZONE_Y_COORDINATE"};
	

	public final static Charset ENCODING = StandardCharsets.UTF_8;
	
	public void createStationjson(String filePath){
		List<CSVRecord> inList = importFile(filePath);
		Path path = Paths.get(filePath);
		
		List<Station> outList = new ArrayList<Station>();
		System.out.println("XOXO test");
		for (int i = 0; i < inList.size(); i++){
			CSVRecord record = inList.get(i);
			
			Station x = new Station();
			x.setRecordId(record.get(dataBikeHeader[0]));
			x.setRecordLand(record.get(dataBikeHeader[1]));
			x.setRecordName(record.get(dataBikeHeader[2]));
			x.setRecordLat(record.get(dataBikeHeader[3]));
			x.setRecordLon(record.get(dataBikeHeader[4]));
			outList.add(x);

			System.out.println("RecordNumber " + i + " extracted.");
			
		}
		
		Gson y = new Gson();
		String outjson = y.toJson(outList);
		System.out.println(y.toString());
		try {
			createFile(new File(path.getParent() + "\\GEO_Bahnstellen.json"));
			FileWriter fileWriter
					= new FileWriter(path.getParent() + "\\GEO_Bahnstellen.json");
			fileWriter.write(outjson);
			fileWriter.flush();
			fileWriter.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}


	public void createInOutJson(String filePath){
		List<CSVRecord> inList = importFile(filePath);
		Path path = Paths.get(filePath);
		
		List<BikeInOut> outList = new ArrayList<BikeInOut>();
		System.out.println("XOXO InOut");
		for (int i = 1; i < inList.size(); i++){
			CSVRecord record = inList.get(i);
//			
//			"date",
//		    "RENTAL_ZONE",
//		    "year",
//		    "dayofyear",
//		    "count_arrivals",
//		    "count_departures",
//		    "diff,RENTAL_ZONE_X_COORDINATE",
//		    "RENTAL_ZONE_Y_COORDINATE"};
			
			BikeInOut x = new BikeInOut();
			x.setDate(record.get(dataInOutHeader[1]));
			x.setRENTAL_ZONE(record.get(dataInOutHeader[2]));
			x.setYear(record.get(dataInOutHeader[3]));
			x.setDayofyear(record.get(dataInOutHeader[4]));
			x.setCount_arrivals(record.get(dataInOutHeader[5]));
			x.setCount_departures(record.get(dataInOutHeader[6]));
			x.setDiff(record.get(dataInOutHeader[7]));
			x.setLAT(record.get(dataInOutHeader[8]));
			x.setLON(record.get(dataInOutHeader[9]));
			outList.add(x);
			
			System.out.println("RecordNumber " + i + " extracted.");
			
		}
		
		Gson y = new Gson();
		String outjson = y.toJson(outList);
		System.out.println(y.toString());
		try {
			createFile(new File(path.getParent() + "\\BikeInOut.json"));
			FileWriter fileWriter
			= new FileWriter(path.getParent() + "\\BikeInOut.json");
			fileWriter.write(outjson);
			fileWriter.flush();
			fileWriter.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	private List<CSVRecord> importFile(String filePath){
		
		File inFile = new File(filePath);
		List<CSVRecord> inList = null;
		try{
			CSVFormat inFormat = CSVFormat.DEFAULT
								.withDelimiter(inDelimiter)
								.withHeader(dataInOutHeader);
			
			CSVParser parse = CSVParser.parse(inFile, ENCODING, inFormat);
			inList = parse.getRecords();
		}
		catch (IOException e){
			e.printStackTrace();
		}
		System.out.println(inFile.getName() + " imported");
		return inList;
	}
	
	 /**Returns the substring between the first occurence of delimiter1 
	  * and the first occurence of delimiter2.
	  * Returns the string between the delimiters, 
	  * from the beginning if delimiter1 can't be found and
	  * from delimiter 1 until the end if delimiter2 can't be found after delimiter1.
	  * The delimiters will not be returned 
	  * 
	  * @param string			
	  * @param delimiter1		Start delimiter; If empty the return is a substring before delimiter2
	  * @param delimiter2		End delimiter; If empty the return is a substring after delimiter1
	  * @param fist				If set to true, the last index of both delimiters will be used.
	  * @return					String between the two delimiters, delimiters will not be returned
	  */
	public String substringBetween( String string, String delimiter1, String delimiter2, boolean first){
//		System.out.println("delimiter1: " + delimiter1);
//		System.out.println("delimiter1 length: " + delimiter1.length());
//		System.out.println("delimiter2: " + delimiter2);
//		System.out.println("delimiter2 length: " + delimiter2.length());
		
		int pos1 = delimiter1 != "" 
				 ? first == false 
				     ? string.indexOf(delimiter1) + delimiter1.length()
				     : string.lastIndexOf(delimiter1) + delimiter1.length()
				 : -1 ;
//		System.out.println("pos1: " + pos1);
		int pos2 = delimiter2 != "" 
				 ? first == false 
				     ? string.indexOf(delimiter2) -1 
				     : string.lastIndexOf(delimiter2) -1
				 : -1;
//		System.out.println("pos2: " + pos2);
		String out = "";
		if (pos2 < pos1 && pos1 >= 0){
//			System.out.println("pos2 < pos1");
			out = string.substring(pos1);
		} else if (pos1 > -1){
//			System.out.println("pos1 != -1");
			//pos2 + 1 to compensate the endIndex - 1 from substring
			out = string.substring(pos1, pos2 + 1);
		} else if (pos2 > -1){
//			System.out.println("pos2 != -1");
			//pos2 + 1 to compensate the endIndex - 1 from substring
			out = string.substring(0, pos2 + 1);
		} else {
//			System.out.println("else");
			out = string;
		}
		return out;
	}
	public String substringBetween( String string, String delimiter1, String delimiter2){
		return substringBetween( string, delimiter1, delimiter2, false);
	}
	
	public boolean createFile(File file){
		if(file != null){
			try{
				file.createNewFile();
			} 
			catch(IOException e){
				file.delete();
				System.err.println("Error creating "+ file.toString());
			}
			if(file.isFile() && file.canWrite() && file.canRead()){
				return true;
			}
		}
		return false;
	}

}
