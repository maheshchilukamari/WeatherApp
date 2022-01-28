
        

        window.onload = function() {
            fetch();
         };
       // create a request
 
       // response
 
       // parse the response
 
       // manage error
 
       // send the request
       function fetch() {
         var cityName;
             document.getElementById("city1").onchange = function() {
                 cityName = document.getElementById("city1").value;
             
 
       var req = new XMLHttpRequest();
       req.open(
         "GET",
         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=93f26e3c57081a6210de53b8dcfdfea4`,
         true
       );
       req.onload = function () {
         if (req.status >= 200 && req.status < 400) {
           var data = JSON.parse(req.responseText);
           if(cityName == 'Hyderabad'){
                 document.getElementById('test').src = 'Hyderabad.jpg';
           } else if(cityName == 'Mumbai'){
                 document.getElementById('test').src = 'gateway.jpg';
           } else if(cityName == 'Delhi'){
                 document.getElementById('test').src = 'India gate.jpg';
           } 
           document.getElementById("city").textContent = data.name;
           document.getElementById("temp").textContent = data.main.temp;
           document.getElementById("weather").textContent = data.weather[0].main;
           document.getElementById("wind_deg").textContent = data.wind.deg;
           document.getElementById("wind_speed").textContent = data.wind.speed;
         } else {
           document.getElementById('test').src = ' ';
           document.getElementById("city").textContent = " ";
           document.getElementById("temp").textContent = " ";
           document.getElementById("weather").textContent = " ";
           document.getElementById("wind_deg").textContent = " ";
           document.getElementById("wind_speed").textContent = " ";
           console.log(req.status);
         }
       };
 
       req.onerror = function () {
         console.log("Couldn't connect");
       };
 
       req.send();
     };
     }