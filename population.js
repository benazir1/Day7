<html>
  
//b)Get all the countries with a population of less than 2 lakhs using Filter function

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
    //population is less than 1 lakhs
    var res = result.filter((ele)=>ele.population<200000);
    //var result1=res.map((ele)=>ele.cou);
    console.log(res);
}
    
    </script>
  </body>
</html>
