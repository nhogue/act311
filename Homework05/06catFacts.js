function getFact(url){
    console.log("The url is " + url);
    console.log("BEFORE THE FETCH");
    let results = fetch(url)
 .then(response => response.json() //returns promise that resolves with complete contents of fetched resource
 .then(data => {
   console.log(data);
   document.getElementById("length").innerHTML=data.length;
   document.getElementById("fact").innerHTML=data.fact;
 })
 ).catch(error =>
   console.log(response => console.log(response.status)));
  
    console.log("AFTER THE FETCH");
 }
 