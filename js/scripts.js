$(document).ready(function() {
    
    $('#go').click(function(){
       
        console.log('clicked');
        var zip = $('#zip').val();
        console.log(zip);
       
    $.simpleWeather({
            zipcode: zip,
            success: function(weather){
                html = '<h1>' + weather.city + '</h1>';
                html += '<h3>' + weather.temp + '</h3>';
                html += '<p>Tomorrow\'s Forecast High: ' + weather.tomorrow.high + '</p>';
                html += ' <img src="img/' + weather.code + '.svg" />';
                html += $('body').addClass('bg' + weather.code);
                
                console.log(weather.city);
                
                // Output on Page
                $('#weather').html(html);
            },
            error: function(error) {
                $("#weather").html('<p>'+error+'</p>');
                console.log('error');
            }
        });// end weather
  });
    
   
});
