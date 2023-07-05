//a)
<html>
//a)Get all the countries from Asia continent /region using Filter function
  
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
    var result = JSON.parse(request.response);
    console.log(result);
    
    var res = result.filter((ele)=>ele.region=="Asia");
    //var result1=res.map((ele)=>ele.region);
    console.log(res);
}
    
    </script>
  </body>
</html>
