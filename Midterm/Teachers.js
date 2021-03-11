let url = 'https://raw.githubusercontent.com/nhogue/act311/main/CSMP.json';
function instructors() {
    

    setStatus("Start Fetch", "text-white bg-danger");

fetch(url)
    .then(getResponse)
    .then(getData)
    .catch("Error...")
    ;
}
function getResponse(response) {
    //console.log(response);
    return response.json();
}
function getData(data) {
    //console.log("We're in getData");
    //console.log(data);
    setStatus("Data Received", "text-primary bg-white");
    let lines = "<ul>";
    var instructorArray = [];
    for(courses of data){
        //console.log(instructorArray[courses["instructor"]]);
        if(!instructorArray.includes(courses["instructor"])){
            instructorArray.push(courses["instructor"]);
        }
        //lines += "<li>"+instructor +"</li>";
    }

    var select = document.getElementById("InstructorSelect")
    for(x of instructorArray){
        var option = document.createElement("option")
        option.text = x
        option.id = x
        select.add(option)
    }

    //console.log(instructorArray);
    lines+="</ul>"
    //console.log(lines);
}


function setStatus(newText, newColors) {
    let status = document.getElementById("status");
    status.innerHTML = newText;
    status.className = newColors;
}

function TeacherSelection(button) {
    //console.log(button);
    var selected = button.options[button.selectedIndex].id
    //console.log(selected)
    fetch(url)
    .then(getResponse)
    .then(data =>{
        getClasses(selected, data)
    })
    .catch("Error...")
    ;
}

function getClasses(selected, data) {
   //console.log(selected)
   //console.log(data)
   var courseArray = []
   for(z of data){
       //console.log(z)
       if(selected==z["instructor"]){
        courseArray.push(z);
    }
   }
   console.log(courseArray)
   courseArray = classSort(courseArray)
   PrintHTML(courseArray, selected)
}
function PrintHTML(arr, instructor) {
    var ul = document.getElementById("theList")
    ul.innerHTML = ""
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(instructor))
    ul.appendChild(li)

    for (y of arr){
        li = document.createElement("li")
        var string = y.course+"   "+y.days+"   "+y.times
        li.appendChild(document.createTextNode(string))
        ul.appendChild(li)
    }
}
function classSort(arr) {
    arr.sort(function (a,b) {
        console.log(a,b)
        return 0
    })
    return arr
}