<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="_csrf" content="${_csrf.token}"/>
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
    <meta name="_locale" content="${pageContext.response.locale}" />

    <title>Data Run 2016</title>

	<!--  CSS -->
	<link href="<c:url value="/resources/css/datarun.css" />" rel="stylesheet" type="text/css" />
	<link href="<c:url value="/resources/bootstrap-3.3.7/css/bootstrap.min.css" />" rel="stylesheet" type="text/css" />
	
	<link rel="stylesheet" href="<c:url value="/resources/leaflet/leaflet.css"/>" />

	<!-- JS -->
	<script src="<c:url value="/resources/js/jquery-3.1.0.min.js" />"></script>
	<script src="<c:url value="/resources/bootstrap-3.3.7/js/bootstrap.min.js" />"></script>	
	<script src="<c:url value="/resources/leaflet/leaflet.js" />"></script>	
	<script src="<c:url value="/resources/js/datarun.js" />"></script>	
		
</head>
	
	<body>

		<tiles:insertAttribute name="content" />
	
	</body>

</html>