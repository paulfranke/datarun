package com.dbsystel.datarun.ctrl;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.dbsystel.datarun.app.DataRunConfig;

@ControllerAdvice
public class GlobalControllerAdvice {

  @ModelAttribute
  public void loadPromotedItems(Model model, 
		  						HttpServletRequest request,
		  						HttpServletResponse response) {
     
     model.addAttribute("agoraVersion", DataRunConfig.VERSION);
     
     
  }

}