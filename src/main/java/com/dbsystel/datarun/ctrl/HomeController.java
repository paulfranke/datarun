package com.dbsystel.datarun.ctrl;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.dbsystel.datarun.service.csvTojsonConverter;


@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		logger.info("data run");

		return "nodeCreate";
	}

	
	@RequestMapping(value = "/map", method = RequestMethod.GET)
	public String test(Locale locale, Model model) {
		
		logger.info("data run");

		return "map";
	}
	
	@RequestMapping(value = "/csvTojson", method = RequestMethod.GET)
	public String convert(Locale locale, Model model, @RequestParam(value = "path", required = true) String _path) {
		
		csvTojsonConverter x = new csvTojsonConverter();
//		x.createBikejson(_path);
		logger.info("data run");
		
		return "nodeCreate";
	}
	
}
