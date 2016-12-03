<div id="controlPanel">
	
	<div id="jsSettingsWrp">
		<label class="checkbox-inline">
  			<input type="text" name="adress" />
		</label>
		
		<label class="checkbox-inline">
			<button type="button" class="btn btn-primary" id="jsBtnSearch">Finden</button>
		</label>
		
		<hr />
		Demographie:
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_10_15" /> 10-15
		</label>

		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_15_20" /> 15-20
		</label>

		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_20_25" /> 20-25
		</label>
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_25_30" /> 25-30
		</label>
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_30_35" /> 30-35
		</label>				

		<br />

		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_35_40" /> 35-40
		</label>				
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_40_45" /> 40-45
		</label>				
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_45_50" /> 45-50
		</label>								
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_50_55" /> 50-55
		</label>						
		
		<label class="checkbox-inline">
			  	<input type="checkbox" class="jsUserAge" value="_55_60" /> 55-60
		</label>						
		
		<hr />
		
		<label class="checkbox-inline">
			<p>Startdatum: <input type="text" id="datepicker"></p>
		</label>
		
		<label class="checkbox-inline">
			<button type="button" class="btn btn-success" id="jsBtnStart">Start</button>
		</label>
		
	</div>
	
</div>

<div id="map"></div>


<div id="timeLine">

</div>

<script>
$( document ).ready(function() {
	initmap();	
});
</script>