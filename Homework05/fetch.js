function randoDoggo(url) {
    let results = fetch(url)
    .then(response => response.json()
    .then(data => {
        document.getElementById("doggo").src = data.message;   
    })
    ).catch(error => 
        console.log(response => console.log(response.status)));

        console.log("AFTER THE FETCH");
    }
function genderize() {
    var name = document.getElementById("fname").value;
    var api = "https://api.genderize.io?name="
    console.log(api+name);
    fetch(api+name)
    .then(response => response.json())
    .then(data => {
        document.getElementById("fname").value= name;
        document.getElementById("result").value= data.gender;
    
    })
}