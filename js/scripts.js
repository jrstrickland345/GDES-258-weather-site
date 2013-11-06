$(document).ready(function() {
    
    $('#go').on('click', function(e){
       
       console.log(e.type);
       
        
        getWeather();
        
	
	});
	
	$('#zip').on('keypress', function(e){
       
       
        if(e.which == 13) {
           
           e.preventDefault();
           
           getWeather();
           
        }
       
        
	
	
	});
	
	function getWeather(){
		
        var zip = $('#zip').val();
       
	    $.simpleWeather({
	            zipcode: zip,
	            success: function(weather){
	                html = '<h1>Forecast for: ' + weather.city + ', ' + weather.region +'</h1>';
	                html += '<h3>Currently: <span class="high">' + weather.temp + '<span></h3>';
	                html += '<img src="' + weather.image + '"/>';
	                html += '<h3>' + weather.currently + '</h3>';
	                html += '<h3><span class="high">' + weather.high + '</span>/<span class="low">' + weather.low + '<span></h3>';
	                
	               
	                
	                console.log(weather.city);
	                
	                // Output on Page
	                $('#weather').html(html);
	            },
	            error: function(error) {
	                $("#weather").html('<p>'+error+'</p>');
	                console.log('error');
	            }
	     });// end weather
	
	}
	
    
   
});
