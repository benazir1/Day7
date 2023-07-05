<html>
  <head>
    <title>XMLHttpRequest Example</title>
  </head>
  <body>
    <h1>welcome zen portal</h1>
    <script>
    //your JS code goes here
    var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}
  
    </script>
  </body>
</html>
