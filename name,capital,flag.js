
c)Print the following details name, capital, flag using forEach function

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
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flags);
    })}

    
    
    </script>
  </body>
</html>
