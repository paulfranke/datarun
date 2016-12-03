<div id="controlPanel">
	
	<div id="jsProgressBarWrp" class="progress">
  		<div id="jsProgressBar" class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%"></div>
	</div>
	
	<div id="jsSettingsWrp">
		
		<label class="checkbox-inline">
		  <input type="checkbox" class="jsSettingsViewCheckbox" value="2"> 2
		</label>

		<label class="checkbox-inline">
		  <input type="checkbox" class="jsSettingsViewCheckbox" value="3"> 3
		</label>

		<label class="checkbox-inline">
		  <input type="checkbox" class="jsSettingsViewCheckbox" value="4" checked> 4
		</label>				
		
		<label class="checkbox-inline">
		  <input type="checkbox" class="jsSettingsViewCheckbox" value="0"> Alle
		</label>						
		
		<label class="checkbox-inline">
			<button type="button" class="btn btn-primary">Start</button>
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