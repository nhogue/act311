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